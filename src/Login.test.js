import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import Login from './Login';
import checkPassword from './utils/checkPassword';

function fetchMock(input, init) {
  if (input === 'https://api.tokopedia.example.com/login') {
    const requestBody = JSON.parse(init.body);
    const result = checkPassword(requestBody.email, requestBody.password);
    const errorMessage = result ? '' : 'Email and password do not match';
    const responseData = {
      success: result,
      errorMessage,
    };

    const jsonFn = () => {
      return new Promise((resolve) => {
        resolve(responseData);
      });
    };

    return new Promise((resolve) => {
      resolve({ json: jsonFn });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(new Error(`"${input}" is not mocked in this test`));
    });
  }
}

describe('Login', () => {
  // describe() bawaan dari javascript buat test
  test(`works fine if email and password match`, async () => {
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(fetchMock);
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
