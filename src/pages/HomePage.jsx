import { useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';
import BookCard from '../components/BookCard';

const HomePage = () => {
  const popularBooks = useSelector(state => state.books.books.slice(0, 3));
  
  return (
    <div className="home-page">
      <h1>Welcome to Our Online Library</h1>
      <p>Discover your next favorite book from our extensive collection.</p>
      
      <h2>Categories</h2>
      <CategoryList />
      
      <h2>Popular Books</h2>
      <div className="book-list">
        {popularBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;