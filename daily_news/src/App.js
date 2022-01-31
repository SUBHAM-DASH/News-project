import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import News setprogress={this.setProgress} from './components/News setprogress={this.setProgress}';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

state={
  progress:0
}
setProgress=(progress)=>{
    this.setState({progress:progress})
}

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height='3px'
        color='#f11946'
        progress={this.state.progress}
        /> 
        <Switch>
          <Route exact path="/"><News setprogress={this.setProgress} key="general" pagesize={6} country='in' category="general"/></Route>
          <Route exact path="/business"><News setprogress={this.setProgress} key="business" pagesize={6} country='in' category="business"/></Route>
          <Route exact path="/entertainment"><News setprogress={this.setProgress} key="entertainment" pagesize={6} country='in' category="entertainment"/></Route>
          <Route exact path="/health"><News setprogress={this.setProgress} key="health" pagesize={6} country='in' category="health"/></Route>
          <Route exact path="/science"><News setprogress={this.setProgress} key="science" pagesize={6} country='in' category="science"/></Route>
          <Route exact path="/sports"><News setprogress={this.setProgress} key="sports" pagesize={6} country='in' category="sports"/></Route>
          <Route exact path="/technology"><News setprogress={this.setProgress} key="technology" pagesize={6} country='in' category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}



