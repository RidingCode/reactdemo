import React from 'react'
import { Button,List,WhiteSpace} from 'antd-mobile'
import MyHeader from '../../components/MyHeader'
export default class My extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show:true,
      tagName:'关闭',
      myList:[1,2,3,4,5,6]

    }
    this.printState = () => {
      console.log(this)
    }
    this.logout = function(){
      this.props.history.push('/')
    }
  }
  closeTime = ()=>{
    this.setState(state=>({show:!state.show,tagName:state.tagName==="关闭"?"打开":"关闭"}))
    
  }
  render(){
    const btnSty = {textAlign:'left',padding:'0 20%'}
    return (
      <div>
        <MyHeader {...this.props} show={this.state.show} myList={this.state.myList}/>
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