import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
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
