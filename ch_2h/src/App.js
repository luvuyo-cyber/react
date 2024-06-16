import React from 'react';
import Products from './Products';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App() {

  const user = {
    firstName: 'Luvuyo',
    lastName: 'Mazibuko',
    imageUrl: 'https://picsum.photos/200/300'

  };

  return (
    <div>
      <h1>
        {/* Learn React Hooks
        <Products /> */}
        Hello, {formatName(user)}
        <br />
        <img src={user.imageUrl}></img>
      </h1>
    </div>
  );
}

export default App;