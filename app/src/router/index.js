import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

export default class routes extends ReactDOM.Component{
  constructor(props){
    super(props)
  }

  render(){
    const routes = [{
      path: '/',
      component: App,
      indexRoute: { component: DefaultComponent },
      childRoutes: [
        { path: 'about', component: About },
        { path: 'inbox', component: Inbox },
      ]
    }]
    return <Router routes={routes} />
  }
}