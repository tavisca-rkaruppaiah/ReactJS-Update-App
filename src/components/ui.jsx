import React, { Component } from 'react';
import UniqueId from 'react-html-id';
import User from './user'

class UserDesign extends Component {
    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this);
        this.state = { 
            names : [
                { id : this.nextUniqueId(), name : "Ragu"  },
                { id : this.nextUniqueId(), name : "Balagi" },
                { id : this.nextUniqueId(), name : "Karuppaiah" }
            ],
            currentName : '',
            currentIndex : -1
         }
         console.log(this.state);
    }
    render() { 
        return ( 
            <div>
                <ul>
                    {this.state.names.map((item, index) => {
                        return (
                            <User 
                                key = {item.id} 
                                name = {item.name}
                                getValue = {this.getItemName.bind(this, index)} 
                            />
                        );
                    })}
                </ul>
                
                <input type = "text" onChange = {this.handleChange}  value = {this.state.currentName} /> 
                <button onClick = {this.updateUserName}>Update</button>
                
            </div>
         );
    }

    getItemName = (index, e) => {
        console.log("getvalue method called");
        const name = this.state.names[index].name;
        const id = this.state.names[index].id;
        this.setState({currentName : name, currentIndex : id});
        console.log(this.state.currentName);
        console.log(e);
        //console.log(name, id);
    }

    handleChange = (e) => {
        const newValue = e.target.value;
        this.setState({currentName : newValue});
        console.log(this.state.currentName);
    }

    updateUserName = (e) => {
        e.preventDefault();
        //e.target.value = ' ';
        //console.log(e.target.value);
        if(!this.state.currentName.length){
            return;
        }

        const index = this.state.names.findIndex((user) => {
            return user.id === this.state.currentIndex
        });

        const user = Object.assign({},this.state.names[index]);
        user.name = this.state.currentName;

        const users = Object.assign([], this.state.names);
        users[index] = user;
        this.setState({names:users});
        this.setState({currentName : '', currentIndex : -1});
        console.log(this.state);

        //this.getItemName;
    }

}
 
export default UserDesign;