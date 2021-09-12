// write your custom hook here to control your checkout form
import { useState } from "react"

export default function useForm(key, initialValue) {
    const [Value, setValue] = useState(() => {

        const storedItem = key;

        return storedItem;
    });

    const setTheValue = value => {
        // doesn't really do much without the local storage
        setValue(value);
        console.log(setValue, "setValue");

    };

    return [Value, setTheValue];
}
