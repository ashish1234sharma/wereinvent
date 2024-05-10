import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignIn from './layouts/signin';
import { login } from './services';

// Mocking the login function
jest.mock('../services', () => ({
  login: jest.fn(),
}));

describe('SignIn component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SignIn />);
  });

  test('renders email and password fields', () => {
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders sign-in button', () => {
    const signInButton = screen.getByText('Sign in');
    expect(signInButton).toBeInTheDocument();
  });

  test('calls login API when sign-in button is clicked', async () => {
   
    login.mockResolvedValueOnce({ success: true });

    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const signInButton = screen.getByText('Sign in');

  
    fireEvent.change(emailInput, { target: { value: 'ashish@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Ashish@123' } });


    fireEvent.click(signInButton);


    await waitFor(() => expect(login).toHaveBeenCalled());
  });

});
