import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    render() { 
        return (  
            <div>
                <Link to="/">Home</Link>
                &nbsp;
                <Link to="/service">Service</Link>
                &nbsp;
                <Link to="/about">About</Link>
                &nbsp;
                <Link to="/friendList">Friend's List</Link>
            </div>

        );
    }
}
 
export default Menu;