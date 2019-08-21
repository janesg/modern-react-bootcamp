import React, { Component } from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {

    state = {
        task: ''
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        });
    }

    render() {
        return (
            <form className='NewTodoForm' onSubmit={ this.handleSubmit }>
                <label htmlFor="taskId">What to do ?</label>
                <input id="taskId" name="task" type="text" 
                    value={ this.state.task }
                    onChange={ this.handleChange } />
                <button>Add</button>
            </form>
        )
    }
}

export default NewTodoForm;