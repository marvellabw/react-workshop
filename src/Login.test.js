import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import Login from './Login';

describe('Login', () => {
  // describe() bawaan dari javascript buat test
  test(`works fine if email and password match`, async () => {
    render(<Login />);

    const emailField = await screen.findByLabelText('Email');
    await userEvent.type(emailField, 'vellabw@abc123.com');

    const passwordField = await screen.findByLabelText('Password');
    await userEvent.type(emailField, 'passwordIsASecret');

    const submitButton = await screen.findByText('Log In');
    await userEvent.click(submitButton);

    await screen.findByText('Welcome, vellabw@abc123.com');
  });
  test.todo(`fails if password is empty`);
  test.todo(`fails if email is empty`);
});
