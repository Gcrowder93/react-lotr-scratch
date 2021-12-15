import React, { useEffect, useState } from 'react';
import BooksList from '../../components/Books/BooksList';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const bookData = await fetchBooks();
      setBooks(bookData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <BooksList books={books} />
    </div>
  );
}

// export default function Books() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getBooks();
//   }, []);
//   const getBooks = async () => {
//     const resp = await fetch('https://the-one-api.dev/v2/book/', {
//       headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
//       },
//     });
//     const data = await resp.json();
//     setData(data.docs);
//   };
//   return (
//     <div>
//       <h1>Books</h1>
//       <BooksList books={data} />
//     </div>
//   );
// }
