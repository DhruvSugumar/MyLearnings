import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about';
import FriendList from './friendlist';
import Home from './home';
import Service from './service';

class Content extends React.Component {
    render() { 
        return (  
            <div>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/service" component={Service}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/friendlist" component={FriendList}></Route>
                </Switch>
            </div>
        );
    }
}
 
export default Content;