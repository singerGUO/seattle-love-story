import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ' '};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })

    }

    handleSubmit() {
        this.props.addTodo(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} maxlength="50" placeholder="Maximum length 50 words"
                       onChange={this.handleChange}/>
                <div className="bottom">

                    <button onClick={this.handleSubmit} type="submit">
                        <span>share</span>
                    </button>
                </div>
            </div>
        )

    }
}

export default TodoForm;

