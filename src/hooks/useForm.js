// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = () => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(true);
	return [showSuccessMessage, setShowSuccessMessage];
};
export default useForm;
