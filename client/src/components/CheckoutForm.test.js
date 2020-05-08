import React from "react";
import { render,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import ReactDOM from 'react-dom';
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
const {getByText} = render (<CheckoutForm/>);
const header = getByText(/checkout form/i);
expect (header).toBeInTheDocument();

test("form shows success message on submit with form details", () => {
    // const {getLabelByText} = render(<CheckoutForm/>);
    // fireEvent.change(getLabelByText(/first name/i), {
    // target: {value: "Andrew"} 
    // });
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
