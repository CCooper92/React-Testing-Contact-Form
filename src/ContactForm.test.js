import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm';
import { act } from 'react-dom/test-utils';

test('renders without errors', () => {
    render (<ContactForm />);
});

test("form is filled out and submit adds users information", () => {

    //render
    render (<ContactForm />)

    //query for all inputs
    //const emailInput = screen.getByLabelText(/email/i);
    const firstNameInput = screen.findByLabelText(/first name/i);
    const lastNameInput = screen.queryByLabelText(/last name/i);
    const emailInput = screen.queryByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);


    //type into inputs
    // userEvent.type(firstNameInput, "Edd");
    // userEvent.type(firstNameInput, "Edd");
    userEvent.type(lastNameInput, "Cooper");
    userEvent.type(messageInput, "testing");
    
    //negative assertion


    //query for the button
    const button = screen.getByRole("button", { name: /submit/i });

    //click the button
    userEvent.click(button);
    
 
  

    //query for the text "Courtney"
    

    //assert

})



