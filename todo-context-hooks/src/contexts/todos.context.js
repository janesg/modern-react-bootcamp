import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [];
 
export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
    return (
        <TodosContext.Provider value={useTodoState(defaultTodos)}>
            { children }
        </TodosContext.Provider>
    );        
}