import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
    </div>
  );
};

export default NotFound;