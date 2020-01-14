import React from 'react'
import { HashRouter as Router,Route } from 'react-router-dom'
import Login from './master/Login'
import FooterMaster from './master/FooterMaster'
// import DetailMaster from './master/DetailMaster'
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      TeacherId:''
    }
  }

  render(){
    return (
      <Router>
          <Route exact path='/' component={Login} />
          <Route path='/index/:uid' component={FooterMaster} />
      </Router>
    )
  }
}