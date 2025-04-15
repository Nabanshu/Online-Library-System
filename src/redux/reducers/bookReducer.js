const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A story of wealth, love, and the American Dream in the 1920s.',
      rating: 4.5
    },
    {
      id: 2,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A brief history of humankind.',
      rating: 4.7
    },
    {
      id: 3,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      description: 'A science fiction novel about a desert planet and its valuable resource.',
      rating: 4.8
    }
  ]
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    default:
      return state;
  }
}