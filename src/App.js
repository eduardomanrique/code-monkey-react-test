import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaPlus, FaEdit, FaBook /* or other icons you need */ } from 'react-icons/fa';
import BooksList from './BooksList';
import AddBookForm from './AddBookForm';
import UpdateBookForm from './UpdateBookForm';
import DeleteBook from './DeleteBook';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='sideMenu'>
          <ul>
            <li><Link to='/'><FaHome /> Home</Link></li>
            <li><Link to='/books'><FaBook /> List Books</Link></li>
            <li><Link to='/add-book'><FaPlus /> Add Book</Link></li>
          </ul>
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<BooksList />} />
            <Route path='/add-book' element={<AddBookForm />} />
            <Route path='/update-book/:bookId' element={<UpdateBookForm />} />
            <Route path='/delete-book/:bookId' element={<DeleteBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
