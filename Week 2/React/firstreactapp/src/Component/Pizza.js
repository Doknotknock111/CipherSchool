
import React from 'react';
import './pizza.css';
// Functional Coomponent
// Function name begins with a Capital letters

let Pizza = (props) => {
  console.log("I am coming from App.js", props);


  // conditional rendering
  // condition ? true : false - ternary operator

  let pizzaPlaceList =props.pizzaPlaces.length ? (props.pizzaPlaces.map( (pizzaPlaces) =>{ 
    console.log(pizzaPlaces);
    return(
      <div className='pizza' key={pizzaPlaces.id}>
        <h1>{pizzaPlaces.name.toUpperCase()}</h1>
        <p>{pizzaPlaces.description}</p>
      <button onClick={ () => props.deleteCard(pizzaPlaces.id)} > Delete Card</button>
      </div>
    );
  })) : (<p>No data avaliable.....</p>);

  return(
    <div>
        {pizzaPlaceList}
    </div>
  

    // return(
    //   //JSX
    //   <div class="pizza">
    //     <h1>{props.brand.toUpperCase()}</h1>
    //     <p>{props.description}</p>
    //   </div>
    // ) 
    );

  }

export default Pizza;
