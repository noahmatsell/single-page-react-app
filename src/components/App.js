import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Switch from 'react-router-dom/Switch';
import Feature from './Featured'
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/single-page-react-app" component={Home} />
        <Route path="/single-page-react-app/about" render={ () => <About title='About' /> } />
        <Route exact path="/single-page-react-app/teachers" component={Teachers} />
        <Route path="/single-page-react-app/teachers/:topic/:name" component={Featured} />
        <Route path="/single-page-react-app/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;