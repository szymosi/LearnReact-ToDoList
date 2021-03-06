import React, { Component } from 'react'
import ListHeader from './ListHeader'
import ListItem from './ListItem'
import todosData from '../todosData';
import './ToDoList.css'

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = {todos: todosData};
    }

    handleChange = (id) => {
        const newTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.done = !todo.done;
            }
            return todo;
        });
        this.setState({todos: newTodos});
    }
    
    render() {
        const todosHtml = this.state.todos.map(item => <ListItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="ToDoList"> 
                <div style={{height: '70px'}}>
                    <ListHeader/>
                </div>
                <ul>
                    {todosHtml}
                </ul>
            </div>
        )
    }
}
