import React, {Component} from 'react';
import Todoitem from "./Todoitem";

import TodoForm from './TodoForm';

import * as apiCalls from './api';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }

    componentWillMount() {
        this.loadTodos();
    }


    async loadTodos() {
        //wait until it is done or not
        let todos = await apiCalls.getTodos();

        //setState means we should change the todos in state

        this.setState({todos});

    }

    //take second argument
    async addTodo(val) {
        let newTodo = await apiCalls.createTodo(val)

        //concatanation array
        this.setState({todos: [ newTodo,...this.state.todos]});
    }

    async deleteTodo(id) {
        await apiCalls.removeTodo(id);
        //concatanation array
        const todos = this.state.todos.filter(whatever => whatever._id !== id);
        this.setState({todos: todos});
    }

    async toggleTodo(todo) {
        let updatedTodo = await apiCalls.updateTodo(todo);

        //concatanation array
        const todos = this.state.todos.map(t => (t._id === updatedTodo._id) ? {...t, completed: !t.completed}
            : t)
        this.setState({todos: todos});

    }

    render() {
        //there are for objects here id.. name.. completed..
        const todos = this.state.todos.map((t) => (
            <Todoitem key={t._id} {...t} onDelete={this.deleteTodo.bind(this, t._id)}
                      onToggle={this.toggleTodo.bind(this, t)}/>));
        return (


            <div id="mark">
                <h1>Seattle <h2>Love story</h2></h1>
                
                
                {/**pass in todo function as props and call it from the todo form*/}
                <TodoForm addTodo={this.addTodo}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }

}

//ES6 features (default is only for one class)
export default TodoList;