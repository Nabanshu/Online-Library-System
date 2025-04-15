import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Online Library</Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/browse" className="nav-link">Browse Books</Link>
        <Link to="/add-book" className="nav-link">Add Book</Link>
      </div>
    </nav>
  );
};

export default Header;