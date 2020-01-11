import React from 'react'
import { Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
export default class My extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div>My

        <Link to='/' >
          <Button>退出</Button>  
        </Link>

      </div>
    )
  }
}