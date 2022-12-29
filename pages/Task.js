import { useState } from "react";
import Link from "next/link";

const Task = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todos.length < 5) {
      setTodos((prevState) => [...prevState, input]);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo:</label>
        <input type="text" name="todo" value={input} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
