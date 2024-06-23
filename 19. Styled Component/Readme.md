# Styled Components in React JS for Clean and Dynamic UI

There are two ways to do styled component.

1. Using Template Literals
2. Using Style Objects

1. Using Template Literals :

```javascript
const Button = styled.button
`
color: grey;
`
;
```

- This is a styled component, which is a React component created using styled-components. 
- It is both a React component and a styled component.
- As a React component, it can be used in JSX.
- As a styled component, it has styled directly attached to it.

- In styled-components, you can pass a function within the template literal to dynamically set CSS properties based on props or state.

2. Using Style Objects :

```javascript
const Button = styled.button({
    color: grey,
})
```

- `styled` is an object provided by the library, and button is a method on that

