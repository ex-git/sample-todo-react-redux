import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addNewItem} from '../action'

export class addItem extends Component {
  state = {
    title : '',
    number: 1,
    complete: false,
    id: Math.floor(Math.random()*1000)
  }
  onChange =(e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
    
  
  onSubmit=(e)=>{
    e.preventDefault()
    this.props.dispatch(addNewItem(this.state))
    this.setState({
      title: '',
      id: Math.floor(Math.random()*1000),
      number: 1
    })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input type='text' name='title' value={this.state.title} onChange={this.onChange} style={{flex: '10'}}></input>
            <input type='text' name='number' value={this.state.number} onChange={this.onChange} style={{flex: '1'}}></input>
            <button type='submit' style={{flex: 1}} disabled={this.state.title.trim()===''}>Add Item</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  shoppingList : state.shoppingList
})

export default connect(mapStateToProps)(addItem)
