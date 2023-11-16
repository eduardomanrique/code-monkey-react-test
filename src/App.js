import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
            <li><Link to='/update-book'>Update Book</Link></li>
            <li><Link to='/delete-book'>Delete Book</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path='/books'>
            <BooksList />
          </Route>
          <Route path='/add-book'>
            <AddBookForm />
          </Route>
          <Route path='/update-book'>
            <UpdateBookForm />
          </Route>
          <Route path='/delete-book'>
            <DeleteBook />
          </Route>
          <Route path='/'>
            <div>Welcome to Code Monkey's Book Management</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
