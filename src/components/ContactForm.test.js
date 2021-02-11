import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders without errors', () => {
    render(<ContactForm />)
});

test('form is filled out and submit creates an object with all information inputed', () => {
    //render
    render(<ContactForm />);

    //query for all inputs
    const firstName = screen.findByLabelText(/first name/i);
    const lastName = screen.queryByLabelText(/last name/i);
    const email = screen.queryByLabelText(/email/i);
    const message = screen.queryByLabelText(/message/i)

    //type into all inputs
    // userEvent.change(firstName, 'Emm');
    userEvent.type(lastName, 'Cooper');
    // userEvent.type(email, 'cooperemmey@yahoo.com');
    userEvent.type(message, 'testing');

    //query for button
    const button = screen.getByRole('button', { name: /submit/i })

    //click button

    userEvent.click(button);

    //query for the next input
    // const textInputs = screen.getAllByText({lastName: /cooper/i , message: /testing/i});

    //assert
    // expect(textInputs).toBeInTheDocument();
})