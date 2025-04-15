import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector(state => 
    state.books.books.find(book => book.id === parseInt(id))
  );

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}/5</p>
      <p><strong>Description:</strong> {book.description}</p>
      <Link to="/browse" className="back-button">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;