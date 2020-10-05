import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo, updateTodo }) => {
    const todoItems = todos.map((t, idx, tds) => {
        return (
            // Can't use key on the fragment shortcut <>
            <Fragment key={t.id}>
                <TodoItem 
                    {...t}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo} />
                { idx !== tds.length - 1 && 
                    <Divider />
                }
            </Fragment>
        )
    });

    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todoItems}
                </List>
            </Paper>
        )    
    } else {
        return null
    }
}

export default TodoList;