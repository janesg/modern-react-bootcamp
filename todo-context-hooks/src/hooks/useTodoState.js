import uuid from "uuid/v4";

import useLocalStorageState from "./useLocalStorageState";

const useTodoState = defaultState => {
    const {state: todos, setState: setTodos} = useLocalStorageState("todos", defaultState);

    return {
        todos, 
        addTodo: newTodoTask => setTodos([...todos, { id: uuid(), task: newTodoTask, completed: false }]), 
        removeTodo: taskId => setTodos(todos.filter(t => t.id !== taskId)), 
        toggleTodo: taskId => setTodos(todos.map(t => t.id === taskId ? {...t, completed: !t.completed} : t)), 
        updateTodo: (taskId, updatedTask) => setTodos(todos.map(t => t.id === taskId ? {...t, task: updatedTask} : t))
    };
}

export default useTodoState;