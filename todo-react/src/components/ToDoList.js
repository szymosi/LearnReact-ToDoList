import React, { Component } from 'react'
import ListHeader from './ListHeader'
import ListItem from './ListItem'
import './ToDoList.css'

export default class ToDoList extends Component {
    render() {
        return (
            <div className="ToDoList"> 
                <ListHeader/>
                <hr></hr>
                <ul>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </ul>
            </div>
        )
    }
}
