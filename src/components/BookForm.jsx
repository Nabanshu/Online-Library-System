import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/actions/bookActions';

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: 'Fiction',
    description: '',
    rating: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Romance', 'Biography'];
  
  const validateForm = () => {
    const newErrors = {};
    if (!book.title.trim()) newErrors.title = 'Title is required';
    if (!book.author.trim()) newErrors.author = 'Author is required';
    if (!book.description.trim()) newErrors.description = 'Description is required';
    if (!book.rating || book.rating < 1 || book.rating > 5) newErrors.rating = 'Rating must be between 1 and 5';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBook = {
        ...book,
        id: Date.now(),
        rating: parseFloat(book.rating)
      };
      dispatch(addBook(newBook));
      navigate('/browse');
    }
  };
  
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label>Title:</label>
        <input 
          type="text" 
          name="title" 
          value={book.title} 
          onChange={handleChange} 
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      
      <div className="form-group">
        <label>Author:</label>
        <input 
          type="text" 
          name="author" 
          value={book.author} 
          onChange={handleChange} 
        />
        {errors.author && <span className="error">{errors.author}</span>}
      </div>
      
      <div className="form-group">
        <label>Category:</label>
        <select name="category" value={book.category} onChange={handleChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label>Description:</label>
        <textarea 
          name="description" 
          value={book.description} 
          onChange={handleChange} 
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      
      <div className="form-group">
        <label>Rating (1-5):</label>
        <input 
          type="number" 
          name="rating" 
          min="1" 
          max="5" 
          step="0.1" 
          value={book.rating} 
          onChange={handleChange} 
        />
        {errors.rating && <span className="error">{errors.rating}</span>}
      </div>
      
      <button type="submit" className="submit-button">Add Book</button>
    </form>
  );
};

export default BookForm;