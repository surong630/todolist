import React, { Component } from 'react'
import Item from '../Item'
import './list.css'
export default class index extends Component {
  render() {
    const { list,checkChange,deleteData } = this.props
    return (
      <ul className="list">
          {
              list.map((item,index) => {
                  return (
                    <Item key={index} checkChange={checkChange} deleteData={deleteData} list={item}/>
                  )
              })
          }
      </ul>
    )
  }
}
