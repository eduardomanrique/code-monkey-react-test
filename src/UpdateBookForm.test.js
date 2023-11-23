import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UpdateBookForm from './UpdateBookForm';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({
    bookId: '1'
  })
}));

describe('UpdateBookForm', () => {
  test('renders UpdateBookForm component', () => {
    render(
      <BrowserRouter>
        <UpdateBookForm />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/isbn/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/update book/i);
  });

  test('updates form fields and submits form', () => {
    render(
      <BrowserRouter>
        <UpdateBookForm />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Updated Title' } });
    fireEvent.change(screen.getByLabelText(/author/i), { target: { value: 'Updated Author' } });
    fireEvent.change(screen.getByLabelText(/isbn/i), { target: { value: '0987654321' } });
    fireEvent.click(screen.getByRole('button'));
    // Add more assertions as needed based on your form handling
  });
});
