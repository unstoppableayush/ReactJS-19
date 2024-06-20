## Add CSS Styling in React: Class vs ClassName

- Inline styles are applied directly to the HTML Elmenets via the style attribute. 
- This approach uses Javascript objects to define the CSS properties and values.

### 1. JavaScript Object Syntax

- Inline styles in React are specified using `Javascript objects`. 
- `Property names` are written in `camelCase` instead of the traditional CSS `kebabar-case`.
- `<p style = {{ margin:0px }}>`

const style={
    backgroundColor: 'blue',
    fontSize: '16px',
};

### 2. Units

For most numeric values, you need to specify units as a `string` (e.g., '16px').

```javascript
const style = {
    padding : '10px',
    zIndex : 1,
}
```

- `style = {{ margin:'1rem 0' }}>`

### 3. Performance Considerations

- Defining inline styles directly within the JSX can lead to `performance issues` because a new `object is created` on `every render`.
-  To avoid this, define styles outside of the render method or `as constants`.

```javascript
const buttonStyle = {
    backgorundColor: 'blue',
    color: 'white'
};

function MyButton(){
    return <button style={buttonStyle}>Click Me</button>;
}
```
