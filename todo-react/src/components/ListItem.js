import React, { Component } from 'react'
import './ListItem.css'

export default class ListItem extends Component {
    render() {
        return (
            <li className="ListItem">
                <input type="checkbox" checked={this.props.checked}/>
                <p>{this.props.text}</p>
            </li>
        )
    }
}
