import React from "react";
import { render, fireEvent, getByLabelText} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
//arrange
let {getByText}=render(<CheckoutForm/>);
//act
let header=getByText(/Checkout form/i);
//assert
expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {


//arrange
let {getByLabelText,getByTestId,getByRole}=render(<CheckoutForm/>);
//act
fireEvent.change(getByLabelText(/first name/i),{
    target:{value:'terry'}
})
fireEvent.change(getByLabelText(/last name/i),{
    target:{value:'edwards'}
})
fireEvent.change(getByLabelText(/address/i),{
    target:{value:'8336'}
})
fireEvent.change(getByLabelText(/city/i),{
    target:{value:'tally'}
})
fireEvent.change(getByLabelText(/state/i),{
    target:{value:'fl'}
})
fireEvent.change(getByLabelText(/zip/i),{
    target:{value:'55555'}
})
fireEvent.click(getByRole('button')
)

alert=await getByTestId('successMessage')
//assert
expect(alert).toHaveTextContent(/You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:terry edwards8336tally, fl 55555/i)

});
