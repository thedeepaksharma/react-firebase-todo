import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      //console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })

    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>ToDo-App</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button disabled={!input} type="submit" onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
