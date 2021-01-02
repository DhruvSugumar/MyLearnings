import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class Friend extends React.Component {

    deleteFriend=()=>{
        this.props.deleteFriend(this.props.id)
    }

    render() { 
        return (  
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.experience}</td>
                <td><button><Link to={{
                                    pathname:"/addeditfriend",
                                    data:this.props.id
                            }}>Edit</Link></button></td>
                <td><button onClick={this.deleteFriend}><Link>Delete</Link></button></td>
            </tr>
        );
    }
}
 
export default Friend;