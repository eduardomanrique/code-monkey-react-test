import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './BooksList.css';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const handleDelete = (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      axios.delete(`http://localhost:3001/books/${bookId}`)
        .then(() => {
          setBooks(books.filter(book => book.id !== bookId));
          console.log('Book deleted');
        })
        .catch(error => console.error('Error deleting book:', error));
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <Link to={`/update-book/${book.id}`} className='link-style'><FaEdit /></Link>
                <Link to='#' onClick={() => handleDelete(book.id)} className='link-style'><FaTrash /></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
