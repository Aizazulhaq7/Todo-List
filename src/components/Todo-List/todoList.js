



import { useState } from "react";
import { v4 as uuid } from 'uuid';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");


  const onSubmitClick = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos([...todos, { id: uuid(), value: inputValue, isCompleted: false}]);
    setInputValue("")
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const onDeleteClick = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  console.log(todos);
  return (
    <>
    <h1 className="display" style={{color:'beige'}}>Todo List</h1>
      <form className="form">
        <label>
          <input className="color" type="text" placeholder="Enter todo" value={inputValue} onChange={onInputChange}/>
        </label>
         <button className="submit-button" type="submit" onClick={onSubmitClick}>Submit</button> 
      </form>
      <ul className="list">
        {
           todos.map((todo) => (
            <div key={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            <input type="checkbox" onChange={() => toggleCompletion(todo.id)}/>
            {todo.value}
            <button className="delete-button" onClick={() => onDeleteClick(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </> 
  );
};

export { TodoList };

