import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../contexts/todos.context";

const TodoForm = () => {
    const [task, taskOnChange, taskReset] = useInputState("");
    const dispatch = useContext(DispatchContext);

    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({ type: "ADD", task });
                taskReset();
            }}>
                <TextField 
                    value={task} 
                    onChange={taskOnChange} 
                    margin="normal" 
                    label="Add new Todo"
                    fullWidth
                    autoFocus />
            </form>
        </Paper>
    )
}

export default TodoForm;