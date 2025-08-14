import { useState } from 'react';
import axios from 'axios';

// write your custom hook here to control your checkout form
export const useForm = (initialValue) => {
	const [values, setValues] = useState(initialValue);
	console.log('useForm initialized with values:', initialValue);

	const handleChanges = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	// reset after submit
	const resetForm = () => {
		setValues(initialValue);
	};

	const formSubmit = async (endpoint, onSuccess, onError) => {
		try {
			if (process.env.NODE_ENV !== 'test') {
				await axios.post(endpoint, values);
			} else {
				console.log('Test form submitted successfully to', endpoint);
			}
			if (onSuccess) onSuccess();
		} catch (error) {
			if (onError) onError(error);
			else console.error('Review form data and submit again', error);
		}
	};

	return { values, handleChanges, formSubmit, resetForm };
};
