# React-Learning

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.

The render method returns a description of what you want to see on the screen. React takes the description and displays the result. In particular, render returns a React element, which is a lightweight description of what to render.

Passing props is how information flows in React apps, from parents to children.

To “remember” things, components use state. When you call setState in a component, React automatically updates the child components inside of it too.
