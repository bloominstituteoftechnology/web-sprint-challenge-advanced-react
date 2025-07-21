import { useState } from 'react';
// write your custom hook here to control your checkout form
export const useForm = (initialVals) => {
	const [values, setValues] = useState(initialVals);
	console.log('useForm initialized with values:', initialVals);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const resetForm = () => {
		setValues(initialVals);
	};

	return { values, handleChange, resetForm };
};
