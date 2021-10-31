import React from "react";

import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [values, handleChanges, handleSubmit, showSuccessMessage] = useForm(initialValue);
  
  // this component is being completely handled by useForm
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            placeholder={`please enter your first name`}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            placeholder={`please enter your last name`}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            placeholder={`please enter your street address`}
          />
        </label>
        <label>
          City:
          <input 
            name="city" 
            value={values.city} 
            onChange={handleChanges}
            placeholder={'please enter the city you live in'}
            />
        </label>
        <label>
          State:
          <input 
            name="state" 
            value={values.state} 
            onChange={handleChanges} 
            placeholder={`please enter state you are located`}
            />
        </label>
        <label>
          Zip:
          <input 
            name="zip" 
            value={values.zip} 
            onChange={handleChanges} 
            placeholder={'please enter your ZIP code'}
            />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            <span data-testid="firstnameDisplay">{values.firstName}</span> <span data-testid="lastnameDisplay">{values.lastName}</span>
          </p>
          <p data-testid="addressDisplay">{values.address}</p>
          <p>
          <span data-testid="cityDisplay">{values.city}</span>, <span data-testid='stateDisplay'>{values.state}</span> <span data-testid="zipDisplay">{values.zip}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
