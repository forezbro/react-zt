import React, { Component } from 'react';
import { Home , List} from './routes'
import { Route, Switch, withRouter } from 'react-router-dom'
import Navbar from './components/Navbar/index.js'
import Topbar from './components/Topbar/index.js'
class App extends Component {
  constructor (props) {
    super(props);
    this.state={
      name1: 'sdsssd',
      collapsed:false
    };
  }
  rendeNavbar() {
     return <Navbar/>
  }
  rendeTopbar() {
    return <Topbar />
  }
  render() {

    let { routes } = this.props
    return (
      <div className="App">
        <div className="box fx">
        {/* <Navbar collapsed={this.state.collapsed}></Navbar> */}
          {this.rendeNavbar()}
          <div className="section">
            {this.rendeTopbar()}
            {/* <Topbar name1={this.state.name1} ></Topbar> */}
            <Switch>
              {
                routes.map(item => {
                  return <Route path={item.path} component={item.component} exact={item.exact} key={item.id} />
                })
              }
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
App.defaultProps = {
  routes: [
    { id: 1, path: '/home', component: Home },
    { id: 2, path: '/list', component: List }
  ]
}

export default withRouter(App);
