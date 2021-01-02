import React from 'react';
import axios from 'axios';
import Friend from './friend';
import { Link } from 'react-router-dom';

class FriendList extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            friends:[]
        }
    }

    componentWillMount(){
        this.readFriendsFromAPI()
    }

    readFriendsFromAPI = () =>{
        axios.get("http://localhost:3434/friendsapp")
        .then(response=>{
            this.setState({
                friends: response.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    deleteFriend=(id)=>{
        axios.delete("http://localhost:3434/friendsapp/" + id)
            .then(respose=>{
                this.readFriendsFromAPI()
            })
            .catch(error=>{
                console.log(error);
            })
    }

    displayAllFriends=()=>{
        return(
            this.state.friends.map(friend=>{
                return(
                    <Friend key={friend.id}
                            id={friend.id}
                            name={friend.name}
                            userName={friend.username}
                            experience={friend.totalexperience}
                            deleteFriend={this.deleteFriend}
                    ></Friend>
                )
            })
        )
    }

    render() { 
        return (  
            <div>
                <div>
                    <button><Link to={{pathname: "/addeditfriend"}} >Add Friend</Link></button>
                </div>
                <br></br>
                <table border="1">
                    <thead>
                        <td>Id</td>
                        <td>Name</td>
                        <td>User Name</td>
                        <td>Year's of Experience</td>
                        <td colSpan="2">Actions</td>
                    </thead>
                   <tbody>
                      {this.displayAllFriends()}
                   </tbody>
                </table>
            </div>
        );
    }
}
 
export default FriendList;