## Components in React 

- In React, a component is essentially a `JavaScript function or class` that return JSX(JavaScript XML), a syntax extension that allows you to write HTML-like code inside JavaScript.

- Components are the building blocks of any React application, allowing for the creation of complex and interactive user interfaces through the assembly of isolated, resusable pieces.

- You can also use `.js` extension with React.js components but it's recommended to use `.jsx` to differentiate between regular JavaScript Files and React.js components.

- There are two ways to create components in React.js:
    - `Class Based Components`
        - This is how components were created functional components.
        - ```javascript
            import React, {Component} from 'react';
            export class Welcome extends Component{
                render(){
                    return <h1>Hello, {this.props.name}</h1>;
                }
            }
          ```
    - `Functional Components`
        - This is modern and recommended way of writing React.js components.
        - We will follow through functional components in this course as that's what is used.
        - You can also find class-based components in legecy codebases.
        - ```javascript
            export function Welcome({name}){
                return <h1>Hello, {name}</h1>
            }
          ```
          
###  Why can't we return multiple elements at the same time?

- As after JSX is compiled it is converted to normal JavaScript object, you can't return multiple JavaScript object at the same time.

- `return ( jsx(...), jsx(...))`
