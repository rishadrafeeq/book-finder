const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org/search.json';

/**
 * Search for books using the Open Library API
 * @param {string} query - The search query
 * @param {string} searchType - The type of search (title, author, subject)
 * @returns {Promise<Array>} Array of book objects
 */
export const searchBooks = async (query, searchType = 'title') => {
  try {
    // Map search types to Open Library API parameters
    const searchParams = {
      title: { title: query },
      author: { author: query },
      subject: { subject: query }
    };

    const params = searchParams[searchType] || searchParams.title;
    
    // Build URL with query parameters
    const url = new URL(OPEN_LIBRARY_BASE_URL);
    Object.keys(params).forEach(key => {
      url.searchParams.append(key, params[key]);
    });

    // Add additional parameters for better results
    url.searchParams.append('limit', '20');
    url.searchParams.append('fields', 'key,title,author_name,first_publish_year,edition_count,language,subject,ebook_access,has_fulltext,public_scan_b,cover_i');

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.docs || !Array.isArray(data.docs)) {
      throw new Error('Invalid response format from API');
    }

    // Filter out books without titles and enhance the data
    const books = data.docs
      .filter(book => book.title && book.title.trim() !== '')
      .map(book => ({
        ...book,
        // Ensure author_name is always an array
        author_name: Array.isArray(book.author_name) ? book.author_name : [book.author_name].filter(Boolean),
        // Ensure language is always an array
        language: Array.isArray(book.language) ? book.language : [book.language].filter(Boolean),
        // Ensure subject is always an array
        subject: Array.isArray(book.subject) ? book.subject : [book.subject].filter(Boolean)
      }));

    return books;
  } catch (error) {
    console.error('Error searching books:', error);
    
    // Provide more specific error messages
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    
    if (error.message.includes('HTTP error')) {
      throw new Error('Server error. Please try again later.');
    }
    
    throw error;
  }
};

/**
 * Get book details by Open Library work key
 * @param {string} workKey - The Open Library work key
 * @returns {Promise<Object>} Book details object
 */
export const getBookDetails = async (workKey) => {
  try {
    const url = `https://openlibrary.org${workKey}.json`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error;
  }
};

/**
 * Get author details by Open Library author key
 * @param {string} authorKey - The Open Library author key
 * @returns {Promise<Object>} Author details object
 */
export const getAuthorDetails = async (authorKey) => {
  try {
    const url = `https://openlibrary.org/authors/${authorKey}.json`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching author details:', error);
    throw error;
  }
};

