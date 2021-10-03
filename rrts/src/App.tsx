import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, fetchTodos } from './actions';
import { StoreState } from './reducers';


function App():JSX.Element {
  let dispatch = useDispatch();
  const count = useSelector((state: StoreState) => state.todos)
  const renderList=():JSX.Element[]=> {
      return count?.map((item,id)=>(
        <ul key={id}>
          <li >{item.id}</li>
          <li >{item.title}</li>
          <li >{item.completed}</li>
        </ul>
      ))
  }
  console.log(count)
  return (
    <div className="App">
      <button onClick={()=>dispatch(fetchTodos())}>Fetch</button>
      <button onClick={()=>dispatch(deleteTodo(2))}>Delete</button>
      {renderList()}
    </div>
  );
}

export default App;