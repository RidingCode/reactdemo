import React from 'react'
import { Button } from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div>
        LGOIN
        <hr />
        <Link to='/index'>
          <Button>登录</Button>
        </Link>
      </div>
    )
  }
}