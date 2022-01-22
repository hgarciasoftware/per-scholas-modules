# redux

https://codepen.io/hgarciasoftware/full/NWaQqjG

This is a very basic example of an application that uses Redux.

Some things this example DOES NOT include:

- combining multiple reducers
- a separate store.js file
- constants for each action type
- action creators
- Redux Thunk

Steps to navigate, understand, and/or recreate this Redux example:

1. You'll need to install Redux through npm:

# npm install redux react-redux

"redux" is the main library and "react-redux" is what makes it compatible with React

Remember that Redux can be used with multiple frameworks, not just React

2. Setup the Redux store and wrap your top-level component with a Provider

Inside of index.js...

# Line 5
Import a function called createStore from the 'redux' library

# Line 6
Import a special Provider component from the 'react-redux' library

# Line 8
Import a file called reducer.js, which we haven't created yet. We will do that in the next step.

# Line 10
Create a variable (doesn't have to be called store) and assign it the return value of calling the createStore function and passing it our reducer function as an argument.

# Line 13 & 15
Wrap the Provider component (imported on line 6) around our App component in the ReactDOM.render method.

Give it a store prop (has to be called store) and assign it the value of the variable on line 10

Notes:
- We don't have to put Provider here. We could just as easily import it and wrap it around another top-level component (maybe one rendered BY App)
- You can think of store as our global redux state handled by Redux
- You can think of Provider as Redux providing us with a top-level component. We pass it a prop and this prop gives it a global state we can work with in child components.

3. Create the reducer function that will handle how actions are handled and how our state changes

# Line 1
Create an initialState (doesn't have to be called initialState) and assign it some type of value. It will usually be an object or an array.

In this case, it's an object with an array inside. You can format it however you'd like.

# Line 27
Create the reducer function and export it (we use export default, but that's also a preference).

The reducer function will take two arguments: state and action.

We set the default value of the state parameter to be the initialState.



