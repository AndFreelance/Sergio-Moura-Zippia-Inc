import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';

import { Jobs } from './components/jobs/jobs.component';

import './app.styles.scss';

export function App() {
  const history = createBrowserHistory();

  return (
    <Router history={ history }>
      <Route path="/test/jobs">
        <div className="app-container shadow-sm p-3 mb-5 bg-body rounded">
          <Jobs />
        </div>
      </Route>
    </Router>
  )
};
