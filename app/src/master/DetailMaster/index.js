import React from 'react'
import Header from '../../components/Header'
import Detail from '../../pages/List'
import './index.scss'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div>
        <Header />
        <Detail />
      </div>
    )
  }
}
