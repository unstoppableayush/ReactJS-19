## Dynamic Values in JSX: Injecting JavaScript into HTML

You can add any variables of your component in JSX using {} syntax.
```javascript
function MyComponent(){
    const value = "Hey";
    return <p>{value}</p>;
}
```
JSX allows you to write JavaScript expression inside curly braces includes operations, function calls, and other JavaScript expression which produce a value.
```javascript
return <div>The result is: {1 + 2 + 3}</div>;
```

