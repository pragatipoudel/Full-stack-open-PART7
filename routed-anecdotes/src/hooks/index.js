import { useState } from "react";

export const useField = (name) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const Reset = (e) => {
        setValue('')
    }

    return {
        name,
        value,
        onChange,
        Reset
    }
}