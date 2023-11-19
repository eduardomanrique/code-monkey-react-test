import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateBookForm() {
  const { bookId } = useParams();
  const [book, setBook] = useState({ title: '', author: '', isbn: '' });

  useEffect(() => {
    axios.get(`http://localhost:3001/books/${bookId}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => console.error('Error fetching book:', error));
  }, [bookId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/books/${bookId}`, book)
      .then(response => {
        console.log('Book updated:', response.data);
      })
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
      </label>
      <label>Author:
        <input type="text" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} />
      </label>
      <label>ISBN:
        <input type="text" value={book.isbn} onChange={(e) => setBook({ ...book, isbn: e.target.value })} />
      </label>
      <button type="submit">Update Book</button>
    </form>
  );
}

export default UpdateBookForm;
