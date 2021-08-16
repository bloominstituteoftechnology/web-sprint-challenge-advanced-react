// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {
	const [value, setValue] = useState(initialValue)

	const handleChange = (event) => {
		setValue({
			...value,
			[event.target.name] : event.target.value
		})
	}
	return [value, handleChange]
}

export default useForm;

