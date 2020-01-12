import React from 'react'
import { Button,List, InputItem, WhiteSpace ,Toast} from 'antd-mobile'
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:''
    }
  }
  LoginIn(){
    const {username,password} = this.state
    console.log(username)
    console.log(password)
    if(!username||!password){
      Toast.fail('用户名或密码不能为空！')
      return
    }
    Toast.loading('登录中。。。',3,()=>{
      console.log(this)
      this.props.history.push('/index')
    })
  }
  render(){
    return (
      <div>
        <Header />
        <List>
          <InputItem
            clear
            placeholder="用户名"
            onChange={e=>this.setState({username:e})}
            ref={el => this.autoFocusInst = el}
          >用户名</InputItem>
          <InputItem
            clear
            placeholder="密码"
            type="password"
            onChange={e=>this.setState({password:e})}
            ref={el => this.inputRef = el}
          >密码</InputItem>
        </List>
        <WhiteSpace />
        {/* <Link to='/index'> */}
          <Button onClick={e=>this.LoginIn()}>登录</Button>
        {/* </Link> */}
      </div>
    )
  }
}