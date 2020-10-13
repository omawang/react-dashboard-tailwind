import React from 'react'
import history from './history'
import { Router, Route, Switch } from 'react-router-dom'

import DashboardPage from 'src/views/pages/Dashboard'
import NotFoundPage from 'src/views/pages/NotFound'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App
