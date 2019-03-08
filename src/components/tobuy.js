import React, { Component } from 'react'
import Item from './item'
import {connect} from 'react-redux'
export class todos extends Component {

  render() {
    return (
      <ul>
        {this.props.shoppingList.map(item => <Item key={item.id} item={item} style={item.complete ? { textDecoration: 'line-through', color: 'green' } : { textDecroration: 'none' }}/>)}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  shoppingList : state.shoppingList
})

export default connect(mapStateToProps)(todos)
