import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import useToggleState from "../hooks/useToggleState";
import TodoEdit from "./TodoEdit";

const TodoItem = ({ id, task, completed, deleteTodo, toggleTodo, updateTodo }) => {
    const [editMode, toggleEditMode] = useToggleState();

    return (
        <ListItem style={{height: "64px"}}>
            { editMode ? 
                <TodoEdit id={id} taskToEdit={task} toggleEditMode={toggleEditMode} updateTodo={updateTodo} />
                :
                <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={() => toggleEditMode()}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={() => deleteTodo(id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default TodoItem;