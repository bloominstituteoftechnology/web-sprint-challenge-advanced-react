import { useState } from 'react';
// write your custom hook here to control your checkout form
export const useForm = (initialValue) => {
	const [values, setValues] = useState(initialValue);
	console.log('useForm initialized with values:', initialValue);

	const handleChanges = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const resetForm = () => {
		setValues(initialValue);
	};

	return { values, handleChanges, resetForm };
};
