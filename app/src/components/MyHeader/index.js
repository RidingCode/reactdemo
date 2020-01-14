import React from 'react'

export default class MyHeader extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      
    }
  }
  componentDidMount(){
    setInterval(()=>this.setTime(),1000)
  }
  setTime(){
    this.setState({
      time:new Date().toLocaleTimeString()
    })
  }
  render(){
    return (
      <div>
        时间：{this.state.time}
        <br />
      </div>
    )
  }
}