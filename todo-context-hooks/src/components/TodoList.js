import React, { Fragment, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";
import { TodosContext } from "../contexts/todos.context";

const TodoList = () => {
    const { todos } = useContext(TodosContext);

    const todoItems = todos.map((t, idx, tds) => {
        return (
            // Can't use key on the fragment shortcut <>
            <Fragment key={idx}>
                <TodoItem {...t} />
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