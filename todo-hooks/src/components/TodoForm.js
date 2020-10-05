import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

const TodoForm = ({ createTodo }) => {
    const [task, taskOnChange, taskReset] = useInputState("");

    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                createTodo(task);
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