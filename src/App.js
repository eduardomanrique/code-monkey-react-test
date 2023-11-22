import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BooksList from './BooksList';
import AddBookForm from './AddBookForm';
import UpdateBookForm from './UpdateBookForm';
import DeleteBook from './DeleteBook';
import Home from './Home';

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
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<BooksList />} />
          <Route path='/add-book' element={<AddBookForm />} />
          <Route path='/update-book/:bookId' element={<UpdateBookForm />} />
          <Route path='/delete-book/:bookId' element={<DeleteBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
