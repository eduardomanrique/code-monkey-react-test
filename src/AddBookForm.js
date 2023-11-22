import React, { useState } from 'react';
import axios from 'axios';
import './AddBookForm.css';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/books', { title, author, isbn })
      .then(response => {
        console.log('Book added:', response.data);
      })
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <form className='addBookForm' onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" placeholder="Enter book title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>Author:
        <input type="text" placeholder="Enter author's name" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>ISBN:
        <input type="text" placeholder="Enter ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
