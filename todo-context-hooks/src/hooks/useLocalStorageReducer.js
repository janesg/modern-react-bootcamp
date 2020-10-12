import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (key, defaultValue, reducer) => {

    const [state, dispatch] = useReducer(reducer, defaultValue,
        () => {
            const currentState = window.localStorage.getItem(key);
            return currentState ? JSON.parse(currentState) : defaultValue;
        }
    );

    // Have to add 'key' as dependency otherwise get a eslint warning
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state)); 
    }, [key, state]);

    return { state, dispatch };
}

export default useLocalStorageReducer;