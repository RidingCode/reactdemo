import React from 'react'
import { Button,List,WhiteSpace} from 'antd-mobile'
import MyHeader from '../../components/MyHeader'
export default class My extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.printState = () => {
      console.log(this)
    }
    this.logout = function(){
      this.props.history.push('/')
    }
  }
  render(){
    const btnSty = {textAlign:'left',padding:'0 20%'}
    return (
      <div>
        <MyHeader />
        <List>
          <Button style={btnSty}>我的学员</Button>
          <Button style={btnSty}>课堂反馈</Button>
        </List>
        <WhiteSpace size='lg'/>
        <List>
          <Button style={btnSty}>编辑资料</Button>
          <Button style={btnSty}>修改密码</Button>
          <Button  onClick={e=>this.logout()}>退出</Button>  
        </List>
        

      </div>
    )
  }
}