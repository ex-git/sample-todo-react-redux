import React, { Component } from 'react'
import {deleteItem, toggleComplete} from '../action'
import {connect} from 'react-redux'

export class item extends Component {
  deleteItem = (id) => {
    this.props.dispatch(deleteItem(id))
  }
  toggleComplete = (id) => {
    this.props.dispatch(toggleComplete(id))
  }
	render() {
		const { title, number, id } = this.props.item
		return (
			<li style={this.props.style}>
				{title}, qty# {number}
				<input type="checkbox" onChange={()=>this.toggleComplete(id)}></input>
        <button onClick={()=>this.deleteItem(id)}>X</button>
			</li>
		)
	}
}

export default connect()(item)
