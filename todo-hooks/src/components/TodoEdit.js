import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

const TodoEdit = ({id, taskToEdit, toggleEditMode, updateTodo}) => {
    const [task, taskOnChange, taskReset] = useInputState(taskToEdit);

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