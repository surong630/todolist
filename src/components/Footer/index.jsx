import React, { Component } from 'react'
import './footer.css'
export default class index extends Component {
//   点击全选回调父组件changeAll
  changeAll = () =>  {
    this.props.changeAll(this.checkAll.checked);
  }
//   点击删除回调父组件deleteAchieve
  deleteAchieve = () => {
    this.props.deleteAchieve()
  }
  render() {
    const {list} = this.props
    const doneCount = list.reduce((pre,todo)=> pre + (todo.check ? 1 : 0),0)
    console.log(doneCount);
    return (
      <div className="footer">
        <div>
            <input ref={i => this.checkAll = i} onChange={this.changeAll} type="checkbox" checked={doneCount === list.length && list.length !== 0} value="全选/全不选"/>全选/全不选
        </div>
        <button onClick={this.deleteAchieve}>删除完成的</button>
      </div>
    )
  }
}
