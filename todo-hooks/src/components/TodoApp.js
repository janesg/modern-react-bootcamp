import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";

const TodoApp = () => {
    const initialState = JSON.parse(window.localStorage.getItem("todos")) || [];
    const {todos, addTodo, removeTodo, toggleTodo, updateTodo} = useTodoState(initialState);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "cornflowerblue"
        }}
        elevation={0}>
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">To Dos with Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm createTodo={addTodo} />
                    <TodoList 
                        todos={todos} 
                        deleteTodo={removeTodo} 
                        toggleTodo={toggleTodo} 
                        updateTodo={updateTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;