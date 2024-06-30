# React States: What is useState Hook & Why we need it in React

- In React, `state refres to an object that holds data or information about the component`.
- State is managed within the component(just like variable declared in a function).
- However, unlike regular variables, when state changes, React re-renders the component to reflect these changes, keeping the user interface in sync with the data.

- State is dynamic and mutable, meaning it can change over time in response to user actions, server responses, or other event 

```javascript
import { useState } from "react"

export const State = () => {
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value)
    // }
    // let array = useState()
    // console.log(array)
    let [count, setCount] = useState(0)
    const handleButtonClick = () => {
        setCount( () => count + 1)
    }
    console.log(count)

    return (
        <>
        <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </section>
        </>
    )
}

/**
 * It's beacuse those are normal variables and React.js doesn't know that it's going to be changed.
 * And that react should respond or update DOM based on that.
 * Those values are already rendered on DOM, there is no way they will be re-rendered.
 * For that React.js provides a function called "useState".
 * This type of function which starts with "use" is called hook.
 * This is a special function which has some features provided by react.js
 * We will learn about other hooks in future.
 * Syntaxt - const [count, setCount] = useState(0)
 * count - State Variable(The current state value)
 * setCount - A function that updates the state variable.
 * useState() - a hook, eturns an array containing two    elements(current value , function)
 * 
 */

```


** What do we need state in React?

1. Dynamic UI Updates
2. Interactivity
3. Data Management
4. Componenet Communication