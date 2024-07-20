// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>My first React App</h1>
//     </div>
//   );
// }


import React, { Component } from 'react';

// alias 
import Pizza from './Component/Pizza'
import Addpizza from './Component/Addpizza';

class App extends Component {
  state ={

    dynammicName: "Pizza Hunter",
    // brand: "Pizza Hut",
    // description: "Best in town!!!"

    // ** will create an array to store multiple values 

    pizzaPlaces: [
       {name: "Pizza Hut", description: "Best in town", id:1},
       {name: "Dominoes", description: "Best in town", id:2},
       {name: "Papa Jones", description: "Best in town", id:3}, 
       {name: "Dom Pizza", description: "Best in town", id:4},
       {name: "Papa Jones", description: "Best in town", id:5}, 
       {name: "Dom Pizza", description: "Best in town", id:6}
      ] 
    

  }
  deleteCard = (id) =>{
    console.log(id);
    let pizzaPlaces = this.state.pizzaPlaces.filter( (pizzaPlaces) => {
      return pizzaPlaces.id !== id
    })
    this.setState({
        // dynammicName : "New Name" , changes name 
        pizzaPlaces: pizzaPlaces
      
      })
    
  }  
  addCard = (details) => {
    console.log(details);
    details.id = Math.floor(7 + Math.random()*10);
    // this.state.pizzaPlaces.push(details);
    // ES6 featurespread operator: copy the elements from the source[array, object]
    this.setState({
      pizzaPlaces: [...this.state.pizzaPlaces , details]
    })
  } 

  render() {
      // let dynammicName = 'React is mind blowing';
      // let brand = "PizzaHut";
      // let description = "Best Pizza in town";
      // let brand2 = "Dominoes";
      // let description2 = "Better than the best Pizza";

      //Will use state to pass data now
    return (
      <div>
        {/* <h1>This is a class Component</h1> */}
        <h1>
          {this.state.dynammicName}
        </h1>
         {/* <Pizza brand={this.state.pizzaplace[0].name} description={this.state.pizzaplace[0].description}></Pizza>
          */}
          {/* for multiple data in array to display */}
          <Pizza pizzaPlaces = {this.state.pizzaPlaces} deleteCard = {this.deleteCard}></Pizza>
          {/* <Pizza></Pizza> */}
          <Addpizza addCard = {this.addCard}></Addpizza>
      </div>
      
    );
  }
}

export default App;

