## JSX (JavaScript XML) The Essential Building Block of React

### What is JSX?

- JSX stands for Javascript XML.
- It allows you to write HTML elments in Javscript and place them in the DOM without any createElement() and appendChild() methods.

```javascript
    const App = () => {
        return /*_PURE_*/ React.createElement("h1", {
            name: "vinod"
        }, "Hello World");
    }
```
### How React works?
- Component -> Instances -> React Elements(Reconcilation) -> Dom elements -> Final UI

