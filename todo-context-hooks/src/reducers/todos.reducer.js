import uuid from "uuid/v4";

// Note: state is our list of todos
export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter(t => t.id !== action.id);
        case "UPDATE":
            return state.map(t => t.id === action.id ? {...t, task: action.task} : t);
        case "TOGGLE":
            return state.map(t => t.id === action.id ? {...t, completed: !t.completed} : t);
        default:
            return state;
    }
}
