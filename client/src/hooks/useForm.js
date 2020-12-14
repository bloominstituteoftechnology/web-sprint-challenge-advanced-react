// write your custom hook here to control your checkout form
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useForm = initialValue => {
	const [noteValue, setNote] = useLocalStorage('noteValues', initialValue);
	const [values, setValues] = useLocalStorage('formValues', initialValue);
	const [showSuccess, setShowSuccess] = useState(false);

	//event handlers
	const handleChanges = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setShowSuccess(true);
		setValues(initialValue);
		setNote(values);
	};

	return [values, handleChanges, handleSubmit, showSuccess, noteValue];
};

export default useForm;
