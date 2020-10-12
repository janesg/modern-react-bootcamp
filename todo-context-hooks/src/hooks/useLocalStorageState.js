import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue) => {

    const [state, setState] = useState(() => {
        const currentState = window.localStorage.getItem(key);
        return currentState ? JSON.parse(currentState) : defaultValue;
    });

    // Have to add 'key' as dependency otherwise get a eslint warning
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state)); 
    }, [key, state]);

    return { state, setState };
}

export default useLocalStorageState;