import React from 'react'
import logo from '../../static/images/logo.png'
import { Button, List, InputItem, WhiteSpace, Toast, } from 'antd-mobile'
import './index.scss'
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.username,
      password: '',
      openId: ''
    }
  }
  componentDidMount(){
    console.log(this.state)
  }
  LoginIn() {
    const { username, password, openId } = this.state
    if (!username || !password) {
      Toast.fail('用户名或密码不能为空！')
      return
    }
    const param = {
      userName: username,
      passWord: password,
      OpenId: openId
    }
    const api = this.Api.LOGIN_API
    const req = this.common.requestData(api, param)
    Toast.loading('登录中。。。', 1, () => {
      this.$axios.post(this.Api.COMMON_API, req)
        .then(res => {
          if (res.state === 1) {
            this.store.username = res.data.userName
            Toast.success(res.message)
            this.common.setCookie('isAlive', true)
            this.props.history.push(`/index/${res.data.userId}`)
          }
          else {
            Toast.fail(res.message)
          }
        })
        .catch(err => console.log(err))
    })
  }
  render() {
    return (
      <div>

        <img src={logo} alt="" id="login-logo" />
        <div className="r-container">
          <List>
            <InputItem
              clear
              maxLength="11"
              placeholder="用户名"
              onChange={e => this.setState({ username: e })}
              ref={el => this.autoFocusInst = el}
              >用户名</InputItem>
            <InputItem
              clear
              placeholder="密码"
              type="password"
              onChange={e => this.setState({ password: e })}
              ref={el => this.inputRef = el}
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={e => this.LoginIn()}>登录</Button>
        </div>
      </div>
    )
  }
}