import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddBookForm from './AddBookForm';

describe('AddBookForm', () => {
  test('renders AddBookForm component', () => {
    render(<AddBookForm />);
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/isbn/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/add book/i);
  });

  test('submits form with title, author, and isbn', () => {
    render(<AddBookForm />);
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText(/author/i), { target: { value: 'Test Author' } });
    fireEvent.change(screen.getByLabelText(/isbn/i), { target: { value: '1234567890' } });
    fireEvent.click(screen.getByRole('button'));
    // Add more assertions as needed based on your implementation
  });
});
