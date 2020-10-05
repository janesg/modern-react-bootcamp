import { useState } from "react";
import uuid from "uuid/v4";

const useTodoState = initialState => {
    const [todos, setTodos] = useState(initialState);

    return {
        todos, 
        addTodo: newTodoTask => setTodos([...todos, { id: uuid(), task: newTodoTask, completed: false }]), 
        removeTodo: taskId => setTodos(todos.filter(t => t.id !== taskId)), 
        toggleTodo: taskId => setTodos(todos.map(t => t.id === taskId ? {...t, completed: !t.completed} : t)), 
        updateTodo: (taskId, updatedTask) => setTodos(todos.map(t => t.id === taskId ? {...t, task: updatedTask} : t))
    };
}

export default useTodoState;