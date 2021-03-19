import React, { Component } from 'react'

import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class index extends Component {
//   定义初始值
  state = {
    list: [
      {
        id: 1,
        content: '吃感冒药',
        check: true
      },
      {
        id: 2,
        content: '去健身',
        check: false
      },
      {
        id: 3,
        content: '学习一小时',
        check: false
      }
    ]
  }
//   找到对应的节点 改变状态
  checkChange = (e,id) => {
    let result = this.state.list.map((item) => {
      if(item.id === id) {
        item.check = e
      }
      return item
    })
    this.setState({list: result})
  }
//   添加待办项 
  addList = (addData) => {
    this.setState({list: [addData, ...this.state.list]})
  }
//   找到对应id数据 删除
  deleteData = (id) => {
    this.state.list.forEach((item,index) => {
        if(item.id === id) {
            this.state.list.splice(index,1)
        }
    })
    this.setState({list: this.state.list})
  }
//   遍历改变所有check
  changeAll = (check) => {
    this.state.list.forEach((item) => {
        item.check = check
    }
    )
    this.setState({list: this.state.list})
  }
//   用filter过滤出已完成
  deleteAchieve = () => {
    let result = this.state.list.filter((item) => {
      return item.check === false
    })
    this.setState({list: result})
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <div className="content">
        <Input list={this.state.list} addList={this.addList}/>
        <List checkChange={this.checkChange} deleteData={this.deleteData} list={this.state.list}/>
      </div>
      <hr></hr>
      <Footer list={this.state.list} deleteAchieve={this.deleteAchieve} changeAll={this.changeAll}/>
    </div>
    )
  }
}
