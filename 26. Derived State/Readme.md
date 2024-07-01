# Derived State in React.js: Improving State Management and Remove Redundancy & Dependency

- *Derived state* is any state that can be computed based on other state or props.
- It is not stored directly in the component's state but is calculated when needed.
- This approch helps avoid duplication and keeps the state simpler and more manageable.

- `Ex: const userCount = user.length;`

- **Benefits of Derived State**
    - **Avoid Redundancy:** By deriving values from existing state, you avoid storing redundant data.

    - **Consistency:** Ensures that derived values are always in sync with the underlying state props.

    - **Simplicity:** Reduces the complexity of state management by minimizing the number state variables.


