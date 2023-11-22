import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBookForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [message, setMessage] = useState('');

  const validateISBN = (isbn) => {
    return /^(97(8|9))?\d{9}(\d|X)$/.test(isbn);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !author || !isbn || !validateISBN(isbn)) {
      setMessage('All fields are mandatory and ISBN must be valid.');
      return;
    }
    axios.post('http://localhost:3001/books', { title, author, isbn })
      .then(response => {
        setMessage('Book added successfully!');
        setTimeout(() => navigate('/books'), 2000);
      })
      .catch(error => {
        console.error('Error adding book:', error);
        setMessage('Error adding book.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>ISBN:
          <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        </label>
        <button type="submit">Add Book</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default AddBookForm;
