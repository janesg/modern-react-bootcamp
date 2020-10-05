import { useState } from "react";

const useInputState = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    return [
        value,
        e => setValue(e.target.value),
        () => setValue("")
    ]
}

export default useInputState;