import React from 'react'
import {Toast} from 'antd-mobile'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.scss'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const isAlive = this.common.getCookie('isAlive')
    const showed = this.common.getCookie('showed')
    console.log(this)

    if (isAlive && !showed) {
      Toast.success('登录成功！')
      this.common.setCookie('showed', true)
    }
    else if (!isAlive) {
      Toast.fail('请重新登录！', 1, () => {
        this.props.history.push('/')
      })
    }
  }
  render(){
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
