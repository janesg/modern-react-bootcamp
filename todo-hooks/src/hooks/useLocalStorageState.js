import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const currentState = window.localStorage.getItem(key);
        return currentState ? JSON.parse(currentState) : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return {
        state,
        setState
    }
}

export default useLocalStorageState;