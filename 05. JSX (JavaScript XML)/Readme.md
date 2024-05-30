## JSX (JavaScript XML) The Essential Building Block of React

### What is JSX?

- JSX stands for Javascript XML.
- It allows you to write HTML elments in Javscript and place them in the DOM without any createElement() and appendChild() methods.

```javascript
    const App = () => {
        return /*_PURE_*/ React.createElement(
            "h1",
            {
              name: "vinod"
            }
            , "Hello World"
        );
    }

    // JSX

    import {jsx as _jsx} from "react/jsx-runtime";
    /*#_PURE_*/ 
    _jsx(
        "h1",
        {
            children: "Hello World"
        }
    );
```
- It is an syntatical sugar introduced by Facebook for writing React.js components easily.
- Beacuse of JSX is a synatx extension for JavaScript that lets you write HTML like markup inside a JavaScript File.
- At the end, this code is compiled to the equivalent JavaScript code.

- `React.createElement` is converted into `object(also known as react.element)` and this is what converted into actual dom elements and render the data in UI.

- While a `React.element` is a building block and a part of the `Virtual DOM`, It is not the Virtual DOM itself . Rather, it is an `object within the Virtual DOM tree` that describes what should be rendered on the screen,

- Self closing tags are called `Void Elements` in React.

### How React works?
- Component -> Instances -> React Elements(Reconcilation) -> Dom elements -> Final UI

