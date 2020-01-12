import React from 'react'
import { Button,List, InputItem, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
export default class My extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.printState =function(){
      console.log(this)
    }
  }
  
  render(){
    return (
      <div>My
        <WhiteSpace />
        <List>
          <InputItem
            clear
            placeholder="auto focus"
            onChange={e=>this.printState()}
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            clear
            placeholder="click the button below to focus"
            ref={el => this.inputRef = el}
          >标题</InputItem>
        </List>
        <Link to='/' >
          <Button>退出</Button>  
        </Link>

      </div>
    )
  }
}