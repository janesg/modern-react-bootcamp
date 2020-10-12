import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

import { DispatchContext } from "../contexts/todos.context";

const TodoEdit = ({id, taskToEdit, toggleEditMode}) => {
    const [task, taskOnChange, taskReset] = useInputState(taskToEdit);
    const dispatch = useContext(DispatchContext);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({ type: "UPDATE", id, task });
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