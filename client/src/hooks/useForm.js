// write your custom hook here to control your checkout form
import { useEffect } from 'react';
import { useLocalStorage} from '../hooks/useLocalStorage';


export const useForm = (key, initialValue, callback) => {
	const [values, setValues] = useLocalStorage(key, {
		...initialValue,
	});

	const handleChanges = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	// const clearForm = (e) => {
	// 	e.preventDefault();
	// 	setValues({
	// 		...initialValue,
	// 	});
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		callback();
	};

	return [values, handleChanges, handleSubmit];
};