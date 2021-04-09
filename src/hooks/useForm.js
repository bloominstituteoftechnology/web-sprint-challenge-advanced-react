import { useState } from "react";

const useForm = (initialValue) => {
	const [formValues, setFormValues, handleFormChanges] = useInput(
		"form",
		initialValue
	);

	const handleInput = (e) => {
		const { name, value } = e.target;
		handleFormChanges({
			...formValues,
			[name]: value,
		});
	};

	return [formValues, setFormValues, handleInput];
};

const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = (value) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [storedValue, setValue];
};

export const useInput = (key, initialValue) => {
	const [value, setValue] = useLocalStorage(key, initialValue);
	const handleChanges = (updatedValue) => {
		setValue(updatedValue);
	};
	return [value, setValue, handleChanges];
};

export default useForm;
