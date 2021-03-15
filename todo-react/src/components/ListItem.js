import React, { Component } from 'react'
import './ListItem.css'

export default class ListItem extends Component {
    render() {
        return (
            <li className="ListItem">
                <input type="checkbox" checked={this.props.item.done} onChange={() => this.props.handleChange(this.props.item.id)}/>
                <p>{this.props.item.text}</p>
            </li>
        )
    }
}
