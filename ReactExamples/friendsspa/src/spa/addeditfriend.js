import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddEditFriend extends React.Component {

    constructor(props){
        super(props)
        console.log(this.props.location.data)
        this.state={
            id:this.props.location.data,
            name: "",
            userName: "",
            exp: 0,
            message:""
        }
    }

    componentWillMount(){
        this.fetchFriend()
    }

    fetchFriend=()=>{
        axios.get("http://localhost:3434/friendsapp/" + this.state.id)
            .then(response=>{
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    userName: response.data.username,
                    exp: response.data.totalexperience
                })
            })
            .catch(error=>{
                console.log(error)
            });
    }

    readName=(e)=>{
        this.setState({
            name: e.target.value,
            message:""
        })
    }

    readUsername=(e)=>{
        this.setState({
            userName: e.target.value
        })
    }

    readExperience=(e)=>{
        this.setState({
            exp: e.target.value
        })
    }

    saveFriend=()=>{
        
        if (parseInt(this.state.id) > 0)
            this.updateFriend()
        else 
            this.addFriend()
    }

    addFriend=()=>{
        var addfriend={
            "name": this.state.name,
            "username": this.state.userName,
            "totalexperience": this.state.exp
        }

        axios.post("http://localhost:3434/friendsapp", addfriend)
            .then(response=>{
                this.setState({
                    id:"",
                    name: "",
                    userName: "",
                    exp:"",
                    message: "Saved Successfully!"
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    updateFriend=()=>{
        var editfriend={
            "id":this.state.id,
            "name": this.state.name,
            "username": this.state.userName,
            "totalexperience": this.state.exp
        }

        axios.put("http://localhost:3434/friendsapp/" + this.state.id, editfriend)
            .then(response=>{
                this.setState({
                    id:"",
                    name: "",
                    userName: "",
                    exp:"",
                    message: "Updated Successfully!"
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    clearForm=()=>{
        this.setState({
            id:"",
            name: "",
            userName: "",
            exp:"",
            message:""
        })
    }

    render() { 
        return (  
            <div>
                <form>
                    <label>{this.state.message}</label>
                    <br></br>
                    <br></br>
                    <input type="text"
                            placeholder="ID"
                            value={this.state.id}
                            readOnly
                    ></input>
                    <br></br>
                    <input type="text"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.readName}
                    ></input>
                    <br></br>
                    <input type="text"
                            placeholder="User Name"
                            value={this.state.userName}
                            onChange={this.readUsername}
                    ></input>
                    <br></br>
                    <input type="number"
                            placeholder="Experience"
                            value={this.state.exp}
                            onChange={this.readExperience}
                    ></input>
                    <br></br>
                    <br></br>
                    <button onClick={this.saveFriend}><Link>Save</Link></button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={this.clearForm}><Link>Clear</Link></button>
                    &nbsp;&nbsp;
                    <button><Link to="/friendlist">Back</Link></button>
                </form>
            </div>
        );
    }
}
 
export default AddEditFriend;