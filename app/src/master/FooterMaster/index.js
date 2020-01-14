import React from 'react'
// import {useParams} from 'react-router-dom'
import {Toast} from 'antd-mobile'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './index.scss'
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username:''
    }
  }
  componentDidMount() {
    const isAlive = this.common.getCookie('isAlive')
    const showed = this.common.getCookie('showed')
    const uid = this.props.match.params.uid
    this.setState({uid:uid})
    if (isAlive && !showed) {
      Toast.success('登录成功！')
      this.common.setCookie('showed', true)
    }
    else if (!isAlive) {
      Toast.fail('请重新登录！', 1, () => {
        this.props.history.push('/')
      })
    }
    const param = { TeacherId: uid };
    const api = this.Api.GETINFO_API
    const req = this.common.requestData(api, param)
    this.$axios.post(this.Api.COMMON_API,req)
      .then(res=>{
        this.setState({username:res.data.RealName})
        console.log(this.state)
      })
      .catch(err=>console.log(err))
  }

  render(){
    return (
      <div>
        <Header {...this.props} username={this.state.username}/>
        <Footer {...this.props}/>
      </div>
    )
  }
}
