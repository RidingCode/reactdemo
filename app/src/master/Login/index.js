import React from 'react'

import { Button,List, InputItem, WhiteSpace ,Toast} from 'antd-mobile'
// import {Link} from 'react-router-dom'
// import axios from 'axios'
import Header from '../../components/Header'
export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
      openId:''
    }
  }
  LoginIn(){
    const {username,password,openId} = this.state
    if(!username||!password){
      Toast.fail('用户名或密码不能为空！')
      return
    }
    const param = { 
      userName: username,
      passWord: password, 
      OpenId: openId
    }
    const api = 'TecLogin/Login'
    const req = this.common.requestData(api,param)
    Toast.loading('登录中。。。',1,()=>{
      this.$axios.post(this.common.URL,req)
      .then(res=>{
        if(res.state===1){
          Toast.success(res.message)
          this.common.setCookie('isAlive',true)
          this.props.history.push('/index')
        }
        else{
          Toast.fail(res.message)
        }
      })
      .catch(err=>console.log(err))
    })
  }
  render(){
    return (
      <div>
        <Header />
        <List>
          <InputItem
            clear
            maxLength="11"
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