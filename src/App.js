import React from 'react';
import {BrowserRouter as Router,useRouteMatch, Switch, Route, Link} from 'react-router-dom';

import Home from './component/home/home';
import Repos from './component/repos/repos';
import About from './component/about/about';
function App() {
  return (
    <Router>
    <div>
        <nav>
            <ul>
                <li>
                <Link to ='/'>home</Link>
                </li>
                <li>
                <Link to ='/about'>about</Link>
                </li>
                <li>
                <Link to ='/repos'>repos</Link>
                </li>
            </ul>
        </nav>

   <Switch>
   <Route exact path="/">
       <Home /> 
       </Route>
    <Route path="/about">
      <About />
      </Route>
    <Route path="/repos">
      <Repos /> 
      </Route>
   
     </Switch> 
     </div>

</Router>
  );
}

export default App;
