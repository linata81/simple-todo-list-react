import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const addTask = () => {
    const newTask = {
      id: 1 + Math.max(0, ...tasks.map((task) => task.id)),
      content: value,
      done: false
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setValue("");
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done
          };
        }
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={addTask}>add task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className={task.done ? "done" : ""}>{task.content}</span>
            <button onClick={() => toggleTask(task.id)}>done</button>
            <button onClick={() => removeTask(task.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}