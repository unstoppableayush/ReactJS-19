## Dynamic Values in JSX: Injecting JavaScript into HTML

You can add any variables of your component in JSX using {} syntax.
```javascript
function MyComponent(){
    const value = "Hey";
    return <p>{value}</p>;
}
```
JSX allows you to write JavaScript expression inside curly braces includes operations, function calls, and other JavaScript expression which produce a value.

1. Variable 
You can embed any JavaScript variable within JSX by enclosing it in curly braces. 
The value of the variable will be inserted into the DOM at the respective location.

2. Expression
JSX allows you to write JavaScript expression inside curly braces.
This includes operations, function calls, and other Javascript expressions that produce a value.

3. Function Calls
Function, especially those that return JSX, can be invoked directly within your JSX.

```javascript
return <div>The result is: {1 + 2 + 3}</div>;
```

