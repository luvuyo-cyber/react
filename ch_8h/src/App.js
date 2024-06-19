import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';
import { Button } from 'react-bootstrap';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

// const initialState = {
//   count: 0
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 }
//     case "decrement":
//       return { count: state.count - 1 }
//     case "reset":
//       return initialState
//     default:
//       return initialState
//   }
// }

const todosInitialState = {
  todos: [{ id: 1, text: "finishing writing hooks chapter" },
  { id: 2, text: "play with kids" },
  { id: 3, text: "read bible" }
  ]
};

function todosReducer(state, action) {
  switch (action.type) {

    case 'add':
      const newToDo = { id: uuidv4(), text: action.payload }
      // add new todo onto array
      const addedToDos = [...state.todos, newToDo]
      // spread our state and assign todos
      return { ...state, todos: addedToDos }

    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !==
        action.payload.id)
      return { ...state, todos: filteredTodoState }

    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id ===
        action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos }

    default:
      return todosInitialState
  }
}

export const TodosContext = React.createContext()

function App() {
  //   return <div>
  //     <UserContext.Consumer>
  //       {value => <div>Received, {value}</div>}
  //     </UserContext.Consumer>
  //   </div>
  // }

  // const value = useContext(UserContext)
  // return <div>
  //   Received, {value}
  // </div>

  // const [state, dispatch] = useReducer(reducer, initialState)
  // return (
  //   <div>
  //     Count: {state.count}
  //     <br />
  //     <Button onClick={() => dispatch({ type: 'increment' })}>
  //       Increment
  //     </Button>
  //     <Button variant="secondary" onClick={() => dispatch({
  //       type:
  //         'decrement'
  //     })}>
  //       Decrement
  //     </Button>
  //     <Button variant="success" onClick={() => dispatch({
  //       type:
  //         'reset'
  //     })}>
  //       Reset
  //     </Button>
  //   </div>
  // )

  const [state, dispatch] = useReducer(todosReducer, todosInitialState)
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  )
}

export default App;