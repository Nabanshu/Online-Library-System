import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';
  
  const books = useSelector(state => {
    let filteredBooks = state.books.books;
    
    if (category) {
      filteredBooks = filteredBooks.filter(book => 
        book.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredBooks = filteredBooks.filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term)
      );
    }
    
    return filteredBooks;
  });
  
  return (
    <div className="browse-page">
      <h1>{category ? `${category} Books` : 'All Books'}</h1>
      
      <SearchBar />
      
      <div className="book-list">
        {books.length > 0 ? (
          books.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooksPage;