# 📚 Book Finder

A modern React application that helps users discover books using the Open Library API. Built for Alex, a college student who wants to search for books in multiple ways.

## ✨ Features

- **Multiple Search Types**: Search by title, author, or subject
- **Beautiful UI**: Clean, modern design with Tailwind CSS
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Book Details**: Expandable book cards with comprehensive information
- **Error Handling**: Graceful error handling with user-friendly messages
- **Loading States**: Smooth loading indicators for better UX
- **Quick Search**: Pre-defined search suggestions for popular queries
- **Book Covers**: Displays book covers when available
- **External Links**: Direct links to Open Library for more details

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **API**: Open Library API
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Create React App

## 📱 Usage

1. **Search by Title**: Enter a book title to find specific books
2. **Search by Author**: Search for books by a specific author
3. **Search by Subject**: Find books on particular topics or genres
4. **Quick Search**: Use the suggested quick search buttons
5. **View Details**: Click "Show Details" on any book card for more information
6. **External Links**: Click "View on Open Library" to see the full book page

## 🎨 Design Features

- **Gradient Background**: Beautiful gradient from primary to blue tones
- **Card-based Layout**: Clean card design for book listings
- **Responsive Grid**: Adapts to different screen sizes
- **Hover Effects**: Smooth transitions and hover states
- **Loading Animations**: Spinning loader for search operations
- **Error States**: Clear error messages with helpful icons

## 🔧 API Integration

The app uses the Open Library API with the following endpoints:
- Search: `https://openlibrary.org/search.json`
- Book Details: `https://openlibrary.org/{work_key}.json`
- Author Details: `https://openlibrary.org/authors/{author_key}.json`

## 📦 Project Structure

```
src/
├── components/
│   ├── BookCard.js          # Individual book display component
│   ├── BookList.js          # Grid of book cards
│   ├── ErrorMessage.js      # Error display component
│   ├── LoadingSpinner.js    # Loading indicator
│   └── SearchBar.js         # Search input and controls
├── services/
│   └── bookService.js       # API service functions
├── App.js                   # Main application component
├── index.js                 # Application entry point
└── index.css                # Global styles and Tailwind imports
```

## 🎯 User Persona: Alex

This application is designed specifically for Alex, a college student who needs to:
- Find books for research and coursework
- Discover new authors and genres
- Search efficiently with multiple criteria
- Access book information quickly
- Use the app on both desktop and mobile devices

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.
