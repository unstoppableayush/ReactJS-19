# Why You Need to Lifting State Up in React: A Complete Guide with Animation

**Lifting State Up** is pattern in React where you move the state from child components can share and synchronize this state. This ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow down as props and actions (such as events) to flow up.

**Use Case:**

When you have two or more components that need to share the same state, you should lift the state up to their nearest common ancestor.

This allows these components to stay and ensures that the state is managed in a single place.

`we can pass the parent data to child component through the props`

`Lifting up data says passing the value from child component to the parent component `, after then can pass that value to other child component


For updating state of children from parent, you can use concept called `Lifting the state up`.

Here, you will lift the state from child to parent then pass that state down using props.

For updating state of parent from children, you can pass a function updates the state from parent to children as props, then children update it.

`Parent Component:` Holds the state *inputValue* and the state hanlder *setInputValue*.

`Input Component`: Receives *inputValue and setInputValue* as props. It updates the state via setINputValue when the input changes.

`DisplayComponent:` Receives *inputValue as a props* and dispaly the current input value.

