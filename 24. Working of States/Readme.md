# How React State Works: In-depth Guide with Theory, Animation, and Practical Examples

- State is a way to store and manage data that can change over the lifetime of a component. 
- When *state changes*, `React re-renders the component` to reflect the new state.
- This ensures that the user interface `stays in sync` with the underlying data.

- `React Reconciliation` is the process through which React updates the Browser DOM.
- `The Diffing Algorithm` - Diffing short Differences Algorithm is used to differentiate the DOM Three for efficient updates.

- **How the re-rendering works:**
    - *Initial Render:*
    - *State Change in ParentComponent*
    - *Components Outside*
    
- **Note** - When React.js creates a new tree, `it will re-run or re-render the affected component adn all it's children`. So in this case It will re-run our <Counter/> component, it won't re-render other components outside. 

**Using useState in Function Components** 

- `Intialization:` You can useState with the intial state value. It returns an array with two elements: `the current state value` and a `function to update that state`.

- `Updating State:`When you call the updater funtion, React schedules a re-render of these component with the new state value.

- `Preservation of State:` React maintains state between renders. When a component render doesn't reintialize the state. Insted, it uses the peserved state from the previous render.

