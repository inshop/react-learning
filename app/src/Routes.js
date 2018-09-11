import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'
import { Component } from 'react'
import React from 'react'

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </main>
    );
  }
}

export default Routes;


// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={Homepage}/>
//       <Route path='/profile' component={Profile}/>
//     </Switch>
//   </main>
// )
