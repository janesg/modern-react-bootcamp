import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

import { TodosContext } from "../contexts/todos.context";

const TodoEdit = ({id, taskToEdit, toggleEditMode}) => {
    const [task, taskOnChange, taskReset] = useInputState(taskToEdit);
    const { updateTodo } = useContext(TodosContext);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            updateTodo(id, task);
            taskReset();
            toggleEditMode()
        }}
        style={{margin: "1rem", width: "50%"}}>
            <TextField 
                value={task} 
                onChange={taskOnChange} 
                margin="normal" 
                fullWidth
                autoFocus />
        </form>
    )
}

export default TodoEdit;