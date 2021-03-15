import React, { Component } from 'react'
import ListHeader from './ListHeader'
import ListItem from './ListItem'
import todosData from '../todosData';
import './ToDoList.css'

export default class ToDoList extends Component {
    render() {
        const todosHtml = todosData.map(item => <ListItem key={item.id} checked={item.done} text={item.text}/>)
        console.log(todosData);
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
