import React, { Component } from 'react'
import './item.css'
export default class index extends Component {
  state = {
      flag: false
  }
//   传递 id check状态
  checkChange = (id) => {
    return (e) => {
      this.props.checkChange(e.target.checked,id)
    }
  }
  enterList = () => {
    this.setState({flag: true})
  }
  leaveList = () => {
      this.setState({flag: false})
  }
//   删除数据
  deleteData = (id) => {
    return () => {
        if(window.confirm('确定要删除吗')) {
            this.props.deleteData(id)
        }
    }
  }
  render() {
    const { list } = this.props
    return (
            <li className="item" onMouseEnter={this.enterList} onMouseLeave={this.leaveList} key={list.id}>
              <input onChange={this.checkChange(list.id)} type="checkbox" value={list.content} checked={list.check}/> {list.content}
              <button style={{visibility: this.state.flag ? 'visible': 'hidden'}} onClick={this.deleteData(list.id)}>删除</button>
            </li>
          )
  }
}
