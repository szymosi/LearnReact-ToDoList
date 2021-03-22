import React, { Component } from 'react'
import './ListItem.css'

export default class ListItem extends Component {
    render() {
        const liClass = `ListItem ${this.props.item.done ? "ItemDone" : ""}`;
        return (
            <li className={liClass}>
                <input type="checkbox" checked={this.props.item.done} onChange={() => this.props.handleChange(this.props.item.id)}/>
                <p>{this.props.item.text}</p>
            </li>
        )
    }
}
