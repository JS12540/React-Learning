// Import the React library, which allows us to define React components
import React from 'react';

// Import the TodoApp component from the './TodoApp' file
import TodoApp from './TodoApp';

// Define a functional component called App
function App() {
  // Return JSX (JavaScript XML) representing the component's UI
  return (
    // JSX must have a single root element, so wrap everything in a <div>
    <div>
      {/* Render the TodoApp component */}
      <TodoApp />
    </div>
  );
}

// Export the App component as the default export of this module
export default App;