import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import "./Todo.css";

class Todo extends Component {

    state = {
        isEditing: false,
        theTask: this.props.task
    }

    handleClickTask = () => {
        this.props.toggleTask(this.props.id);
    }

    handleClickEdit = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleClickDelete = () => {
        this.props.deleteTask(this.props.id);
    }

    handleChange = evt => {
        this.setState({ 
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.updateTask(this.props.id, this.state.theTask);
        this.setState({ isEditing: !this.state.isEditing });
    }

    render() {
        const content = this.state.isEditing ? ( 
            <CSSTransition key='editing' timeout={500} classNames='form'>
                <form className='Todo-edit-form' onSubmit={ this.handleSubmit }>
                    <input type="text"
                        name="theTask" 
                        value={ this.state.theTask }
                        onChange={ this.handleChange } />
                    <button>Save</button>
                </form>
            </CSSTransition>
        ) : (
            <CSSTransition key='normal' timeout={500} classNames='task-text'>
                <span className={ this.props.completed ? 'Todo-task complete' : 'Todo-task' }
                      onClick={ this.handleClickTask }>
                    { this.props.task }
                </span>
            </CSSTransition>
        );

        return (
            <TransitionGroup className="Todo">
              { content }
              <div className='Todo-buttons'>
                <button onClick={ this.handleClickEdit }>
                    <FontAwesomeIcon icon={ faPen } />
                </button>
                <button onClick={ this.handleClickDelete }>
                    <FontAwesomeIcon icon={ faTrash } />
                </button>
              </div>
            </TransitionGroup>
        );
    }
}

export default Todo;