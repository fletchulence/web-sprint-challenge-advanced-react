import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
   render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () =>  {
   //todo: ARRANGE
   render(<CheckoutForm/>);
   //todo: ACT
   const firstNameInput = screen.getByLabelText(/first name:/i);
   const lastNameInput = screen.getByLabelText(/last name:/i);
   const addressInput = screen.getByLabelText(/address:/i);
   const cityInput = screen.getByLabelText(/city:/i);
   const stateInput = screen.getByLabelText(/state:/i);
   const zipInput = screen.getByLabelText(/zip:/i);

   userEvent.type(firstNameInput, 'DAVID');
   userEvent.type(lastNameInput, 'FLETCHER');
   userEvent.type(addressInput, '555 RICKTOR STREET');
   userEvent.type(cityInput, 'NOWHERE');
   userEvent.type(stateInput, 'PA');
   userEvent.type(zipInput, '00000');

   const button = screen.getByRole('button');
   userEvent.click(button);

   //todo: ASSERT
      //making sure the successMessage prints
      const successMessageOutput = await screen.findByTestId(/successMessage/i);
      // making sure that all outputs are in the DOM
      const firstNameOutput = screen.getByText(/david/i);
      const lastNameOutput = screen.getByText(/fletcher/i);
      const addressOutput = screen.getByText(/555 ricktor street/i);
      const cityOutput = screen.getByText(/nowhere/i);
      const stateOutput = screen.getByText(/pa/i);
      const zipOutput = screen.getByText(/00000/i);
      // tried to do this with getAllBy___ but nothing was working quite how i wanted it to
      //even put all the texts to be the same value, but that was not working either
      
      expect(successMessageOutput).toBeInTheDocument();
      expect(firstNameOutput).toBeInTheDocument();
      expect(lastNameOutput).toBeInTheDocument();
      expect(addressOutput).toBeInTheDocument();
      expect(cityOutput).toBeInTheDocument();
      expect(stateOutput).toBeInTheDocument();
      expect(zipOutput).toBeInTheDocument();
   
});
