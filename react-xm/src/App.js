import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Navbar from './components/Navbar/index.js'
class App extends Component {
  rendeFooter () {
    return <Navbar/>
   }
  render() {
    
    let {routes} = this.props
    return (
      <div className="App">
       <Switch>
            {
              routes.map(item => {
                return <Route path={item.path} component={item.component} exact={item.exact} key={item.id}/>
              })
            }
      </Switch>
      {this.rendeFooter()}
      </div>
    );
  }
}
App.defaultProps={
  routes:[
  ]
}

export default withRouter(App);
