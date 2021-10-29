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
   // const textInput = screen.getall

   const firstNameInput = screen.getByLabelText(/first name:/i);
   const lastNameInput = screen.getByLabelText(/last name:/i);
   const addressInput = screen.getByLabelText(/address:/i);
   const cityInput = screen.getByLabelText(/city:/i);
   const stateInput = screen.getByLabelText(/state:/i);
   const zipInput = screen.getByLabelText(/zip:/i);

   userEvent.type(firstNameInput, 'fletcher');
   userEvent.type(lastNameInput, 'FLETCHER');
   userEvent.type(addressInput, 'fletcher');
   userEvent.type(cityInput, 'fletcher');
   userEvent.type(stateInput, 'fletcher');
   userEvent.type(zipInput, 'fletcher');

   const button = screen.getByRole('button');
   userEvent.click(button);

   //todo: ASSERT
   await waitFor(() =>{
      const successMessageDisplay = screen.queryByTestId("successMessage");
      const successMessageOutput = screen.queryAllByText(/fletcher/i)

      expect(successMessageDisplay).toBeInTheDocument();
      expect(successMessageOutput).toBeCalledTimes(6);
   })
});
