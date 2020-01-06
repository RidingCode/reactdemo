import React from 'react'
import { Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'


export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {}

  }

  render(){
    return (
      <Button>Start</Button>
    )
  }
}