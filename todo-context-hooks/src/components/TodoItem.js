import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import useToggleState from "../hooks/useToggleState";
import TodoEdit from "./TodoEdit";
import { DispatchContext } from "../contexts/todos.context";

const TodoItem = ({ id, task, completed }) => {
    const [editMode, toggleEditMode] = useToggleState();
    const dispatch = useContext(DispatchContext);

    return (
        <ListItem style={{height: "64px"}}>
            { editMode ? 
                <TodoEdit id={id} taskToEdit={task} toggleEditMode={toggleEditMode} />
                :
                <>
                    <Checkbox tabIndex={-1} checked={completed} 
                              onClick={() => dispatch({ type: "TOGGLE", id })} />
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" 
                                    onClick={() => toggleEditMode()}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Delete" 
                                    onClick={() => dispatch({ type: "REMOVE", id })}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

// Use HO-component, memo, to prevent item's rerendering 
// when passed exact same props as previously (memoization)
export default memo(TodoItem);