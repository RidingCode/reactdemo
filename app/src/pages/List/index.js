import React from 'react'
// import {Link,Route,HashRouter as Router } from 'react-router-dom'
import { Pagination, Icon } from 'antd-mobile'
export default class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div>
        List
        <Icon />
        <Pagination
          mode="button"
          current={1}
          total={10}
          />
      </div>
    )
  }
}