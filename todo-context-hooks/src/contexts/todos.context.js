import React, { createContext } from "react";
import { reducer as todosReducer } from "../reducers/todos.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [];
 
// To avoid unnecessary rerendering of components that don't directly
// access the todos from the context, split the dispatch functions
// off into a separate context
export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = ({ children }) => {
    const {state: todos, dispatch} = useLocalStorageReducer("todos", defaultTodos, todosReducer);

    // To prevent unnecessary rerendering, don't pass a newly constructed 
    // 'value' object each time
    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                { children }
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );        
}
