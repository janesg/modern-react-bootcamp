import React, { Component } from 'react';
import uuid from 'uuid/v4';

import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: uuid(), task: 'Snog my dog', completed: false },
                { id: uuid(), task: 'Bat the rat', completed: false }
            ]
        }
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
    }

    addTask(newTask) {
        this.setState({ 
            todos: [...this.state.todos, { id: uuid(), task: newTask, completed: false }] 
        });
    }

    deleteTask(id) {
        this.setState({ 
            todos: this.state.todos.filter(t => t.id !== id) 
        });
    }

    updateTask(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            return todo.id === id ? {...todo, task: updatedTask} : todo;
        });
        this.setState({ todos: updatedTodos });
    }

    toggleTask(id) {
        const updatedTodos = this.state.todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} : todo;
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <li key={ todo.id }>
                    <Todo id={ todo.id } task={ todo.task } 
                        completed={ todo.completed }
                        toggleTask={ this.toggleTask } 
                        deleteTask={ this.deleteTask }
                        updateTask={ this.updateTask } />
                </li>
            )
        });

        return (
            <div className='TodoList'>
                <h1>
                    To Do List <span>- a simple React app</span>
                </h1>
                <ul>{ todos }</ul>
                <NewTodoForm addTask={ this.addTask } />
            </div>
        )
    }
}

export default TodoList;