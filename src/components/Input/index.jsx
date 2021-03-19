import React, { Component } from 'react'
import './input.css'
export default class index extends Component {
  // 回调父组件函数,给父组件传递一个对象 
  add = () => {
    const {addList, list} = this.props
    if(this.inputValue.value === '') {
        return 
    }
    addList({id: list.length + 1, content: this.inputValue.value, check: false})
    this.inputValue.value  = ''
  }
  render() {
    return (
      <div className='inputWrapper'>
        <input ref={i => this.inputValue = i} className="input" type="text"/>
        <button onClick={this.add} className="inputBtn">添加</button>
      </div>
    )
  }
}
