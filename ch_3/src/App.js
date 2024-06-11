import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Products from './Products';
import Rating from './Rating';
// import { Button } from 'react-bootstrap';



class App extends Component {
  
  //   render() {
  //     const isValid = true;
  //     return (
  //       <div>
  //         <Products />
  //         <Button variant="danger" disabled={!isValid}>Default</Button> 
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    );
  }
}
export default App;