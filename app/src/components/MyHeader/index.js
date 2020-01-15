import React from 'react'

export default class MyHeader extends React.Component{
  constructor(props){
    super(props)
    this.state= {}
  }
  componentDidMount(){
    // const uid = this.props.match.params.uid
    // const api = this.Api.GETINFO_API
    // const param = {TeacherId: uid}
    // const req = this.common.requestData(api, param)
    // this.$axios.post(this.Api.COMMON_API, req)
    //   .then(res=>console.log(res))
    //   .catch(err=>console.log(err))
    console.log(this)
  }
  InfoDiv = ()=>{
    const {BirthdayStr,GenderStr,OrganizeIdName,WeChat,MobilePhone,Email} = this.props.userData
    // const infoArr = [BirthdayStr,GenderStr,OrganizeIdName,WeChat,MobilePhone,Email]
    // const all = infoArr.map(item=><div key={item}>{item}</div>)
    // return all
    return (
      <div>
        <div>{MobilePhone}</div>
        <div>{WeChat}</div>
        <div>{OrganizeIdName}</div>
        <div>{GenderStr}</div>
        <div>{BirthdayStr}</div>
        <div>{Email}</div>
      </div>
    )
  }
  render(){
    return (
      <div>
        {this.InfoDiv()}
      </div>
    )
  }
}