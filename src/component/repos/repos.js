import React from 'react';
import { Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import Topic from '../topic'
/**
 * 不一定非要使用class这种形式
 */
function Repos() {

    let match = useRouteMatch();
        return (
            <div>
           <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}> Props v. State</Link>
            </li>
           </ul>

           <Switch>
               <Route path={`${match.path}/:topicId`}>
                 <Topic />
               </Route>

               <Route path={matchMedia.path}>
                   <h3>Please select a topic.</h3>
               </Route>
           </Switch>
           </div>
        );
    }

  
export default Repos;
