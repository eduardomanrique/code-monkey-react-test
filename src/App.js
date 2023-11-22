import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BooksList from './BooksList';
import AddBookForm from './AddBookForm';
import UpdateBookForm from './UpdateBookForm';
import DeleteBook from './DeleteBook';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Code Monkey</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/books'>List Books</Link></li>
            <li><Link to='/add-book'>Add Book</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/books' element={<BooksList />} />
          <Route path='/add-book' element={<AddBookForm />} />
          <Route path='/update-book/:bookId' element={<UpdateBookForm />} />
          <Route path='/delete-book/:bookId' element={<DeleteBook />} />
          <Route path='/' element={<div>Welcome to Code Monkey's Book Management</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
