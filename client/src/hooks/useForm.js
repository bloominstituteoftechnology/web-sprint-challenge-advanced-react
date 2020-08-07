// write your custom hook here to control your checkout form
import { useState } from 'react'

export function useForm(initialForm) {
    const [form, setForm] = useState(initialForm);

    const handleChanges = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return [form, handleChanges]
}