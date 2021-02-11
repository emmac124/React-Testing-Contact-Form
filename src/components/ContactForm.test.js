import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders without errors', () => {
    render(<ContactForm />)
});

test('form is filled out and submit creates an object with all information inputed', () => {
    //render
    act(() => {
        render(<ContactForm />)
    });

    //query for all inputs
    const firstName = screen.getByPlaceholderText(/edd/i);
    const lastName = screen.getByPlaceholderText(/burke/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const message = screen.queryByLabelText(/message/i);

    //type into all inputs
    userEvent.type(firstName, 'edd');
    userEvent.type(lastName, 'burke');
    userEvent.type(email, 'bluebill1049@hotmail.com');
    userEvent.type(message, 'testing');

    //query for button
    const button = screen.getByRole('button', { name: /submit/i })

    //click button

    userEvent.click(button);

    //query for the next input
    // const textInputs = screen.getByText({firstName: /edd/i, lastName: /burke/i, email: /bluebill1049@hotmail.com/i, message: /testing/i});

    //assert
    expect.objectContaining({firstName: /edd/i, lastName: /burke/i, email: /bluebill1049@hotmail.com/i, message: /testing/i});
})