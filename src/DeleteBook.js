import React from 'react';
import axios from 'axios';

function DeleteBook({ bookId, onDelete }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:3001/books/${bookId}`)
      .then(() => {
        console.log('Book deleted');
        onDelete();
      })
      .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <button onClick={handleDelete}>Delete Book</button>
  );
}

export default DeleteBook;
