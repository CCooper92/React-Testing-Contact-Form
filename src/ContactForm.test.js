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
    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.queryByLabelText(/message/i);

    
    
   


    //type into inputs
    userEvent.type(firstNameInput, "edd");
    userEvent.type(lastNameInput, "burke");
    userEvent.type(emailInput, "bluebill1049@hotmail.com");
    userEvent.type(messageInput, "testing");

    expect(firstNameInput).toHaveValue('edd')
    
    //negative assertion
    

    //query for the button
    const button = screen.getByRole("button", { name: /submit/i });

    //click the button
    userEvent.click(button);
    
 
  

    //query for the text "Courtney"
    const eddText = screen.queryByText(/edd/i)

    //assert
    expect.objectContaining({firstName: /edd/i, lastName: /burke/i, email: /bluebill1049@hotmail.com/i, message: /testing/i});
    
});



