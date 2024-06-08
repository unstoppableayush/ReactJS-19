# Introduction to React.js & Why should you learn React in 2024

- Introduction to React.js
-  History of React.js
- IS React JS Library or Framework ?
- Why React.js ?
- How React Works?
- Why React.js over Vanilla Javscript ?

# Installation & Creating Our First Website with React.js

- Install - VS Code , Node.js
- Installed Vite React app - `bun install vite`
- Installed React 19 - `bun install react@rc`
- Installed React Dom 19 - `bun install react-dom@rc`
- Ways to create React.js App
    - Custom 
    - create-react-app
    - Vite
    - Meta Frameworks(Next.js , Remix, Gatsby, e.t.c)
    
# What to Learn Before React & 5 Tips to Maximize Your React Course

- Prerequisite - `HTML, CSS, JAVASCRIPT`
- **5 Tips**
    - Practice Regularly (No matter what, You have to do this)
    - Explore Additional Resources 
    - Apply Real-World Scenarios
    - Review and Revise

# React Project Structure and Naming Conventions
- Learned about Files and Folders Structure
- Naming Conventions

# JSX (JavaScript XML) The Essential Building Block of React

- What is JSX?
- How JSX works?
- React.createElement , React.element, Void Elements
- How React works?

# Components in React 

- A component is essentially a `JavaScript function or class` that return JSX(JavaScript XML

- There are two ways to create components in React.js:
    - `Class Based Components`
    - `Functional Components`

# React Fragments: Remove unwanted Nodes & Speed Up Rendering

- `return [<p>Ram</p>, <strong>20</strong>]; `

- ```javascript
    import {Fragment} from "react";
    return <Fragment> //code </Fragment>
  ```
- Alternatively, you can also use its shorthand syntax:
    - `<> //code </>`

> Why can't we return multiple elements at the same time?

- As after JSX is compiled it is converted to normal JavaScript object, you can't return multiple JavaScript object at the same time.

- `return ( jsx(...), jsx(...))`

# Dynamic Values in JSX: Injecting JavaScript into HTML

You can add any variables of your component in JSX using {} syntax.
- ```javascript
    function MyComponent(){
        const value = "Hey";
        return <p>{value}</p>;
    }
    ```

-  ```javascript
    return <div>The result is: {1 + 2 + 3}</div>;
    ```

# React Conditional rendering in JSX 
### Conditionals in JSX
You can either return a JSX early or You can use ternary operatos for conditionals in JSX.

- `return <p>{ age >= 18 ? "Adult " : "Minor"}</p>`

- `return <p>{ age >= 18 && "You can vote"}</p>`

- `return <p>{ username || "Guest"}</p>`

# React Import and Export 

1. Default Export and Import 
2. Named Export and Import
3. Mixed Export and Import

# Looping in JSX: Netflix Series Card Creation
- `.map()` function used to map the elements.
