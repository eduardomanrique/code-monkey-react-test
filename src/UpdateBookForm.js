import React, { useState } from 'react';
import axios from 'axios';

function UpdateBookForm({ bookId, onUpdate }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/books/${bookId}`, { title, author, isbn })
      .then(response => {
        console.log('Book updated:', response.data);
        onUpdate();
      })
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>ISBN:
        <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      </label>
      <button type="submit">Update Book</button>
    </form>
  );
}

export default UpdateBookForm;
