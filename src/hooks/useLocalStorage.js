import { useState } from "react";

export const useLocalStorage = (key, initialValues) =>
{
    // set and update localStorage - also retrieve that value if the user refreshes or closes the window
    const [values, setValues] = useState(() =>
    {
        // get from localStorage by key
        const item = window.localStorage.getItem(key);

        // parse and return stored json or, if undefined, put initialValues into localStorage
        return item ? JSON.parse(item) : localStorage.setItem(key, JSON.stringify(initialValues));
    });

    const setStoredValues = (values) =>
    {
        localStorage.setItem(key, JSON.stringify(values));
        setValues(values);
    };

    return [values, setStoredValues];
};