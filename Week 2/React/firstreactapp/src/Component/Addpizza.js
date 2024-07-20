import React, { Component } from 'react';

class Addpizza extends Component{
    state={
        name:"",
        description:""

    }
    handleChange = (e) =>{
        console.log(e.target.value);
        this.setState({
            // name: e.target.value,
            // description: e.target.value
            [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventdefault()
        console.log(this.state, this.props);
        this.props.addCard(this.state);
    }

    render(){
        return(            
            <div id='add-pizza'>
                <h2>Please fill the details</h2>
                <form onSubmit={this.handleSubmit}>
                <input type='text' name="name" id="name" placeholder="Enter name.." onChange={this.handleChange}></input><br></br>
                <label forHtml="forhtml">Enter Description: </label><br></br>
                <textarea rows="10" cols="20" id="description" placeholder="Enter description.." onChange={this.handleChange}></textarea><br></br>
                <input type='Submit' value="Add Card"></input>             


                </form>
                    
            </div>
        );
    }
}

export default Addpizza;