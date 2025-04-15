import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Romance', 'Biography'];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map(category => (
        <Link 
          key={category} 
          to={`/browse/${category.toLowerCase()}`} 
          className="category-link"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;