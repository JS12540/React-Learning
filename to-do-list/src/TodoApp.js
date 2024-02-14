import React, { useState } from 'react';
import './TodoApp.css';

/**
 * TodoApp function to manage a todo list.
 *
 * @return {JSX.Element} The JSX for the todo list component.
 */
function TodoApp() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  // State to store the new task input value
  const [newTask, setNewTask] = useState('');

  // Function to handle input change in the new task input field
  const handleInputChange = (e) => {
    setNewTask(e.target.value); // Update newTask state with input value
  };

  // Function to add a new task
  const addTask = () => {
    // Check if the new task input is not empty
    if (newTask.trim() !== '') {
      // Add the new task to the tasks array with a unique id and mark it as not completed
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      // Clear the new task input field
      setNewTask('');
    }
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    // Filter out the task with the given taskId and update tasks state
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    // Map through tasks array and toggle completed status of the task with the given taskId
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Input field for adding new tasks */}
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleInputChange} // Call handleInputChange when input value changes
      />
      {/* Button to add new task */}
      <button onClick={addTask}>Add Task</button>
      {/* List of tasks */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {/* Checkbox to mark task as completed */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)} // Call toggleTaskCompletion when checkbox state changes
            />
            {/* Task text */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            {/* Button to delete task */}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
