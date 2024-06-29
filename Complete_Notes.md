 # Introduction to React.js & Why should you learn React in 2024

 ## Introduction to React.js

 - `JavaScript Library` used for building user interfaces and `single-page applications.`
 - Created by `Jordan Walke` at `Facebook.`
 
## History of React.js

- began as an internal tool for dyncamic facebook components.
- created in 2011 but remained private.
- React.js was open-sourced by `Jordan Walke` and `Tom Occhino` at JSConfUS 2013.
- Initailly faced ciriticism for combining JS and HTML in a single file.

## IS React JS Library or Framework ?

- React is `not framework`. 
- React is a JavaScript library.
- Also known as `ReactJS` and `React.js` 
- known for creating awesome UI.
- React is all about components.

## Why React.js ?

- React is declarative because it describes what the UI should look like rather than how to achieve it.
- This makes the code easier to read and maintain as it is more focused on the end result rather than the steps involved getting there.

- Declarative:
    ```javascript
        function MyComponent({name}){
            return <div>Hello, {name}! </div>
        }
    ```
- Imperative: 
    ```javascript
    function MyComponent(name) {
        const element - document.createElement('div)
        element.textContent = `Hello, ${name}! `;
        return element; 
    }
    ```
    - manually creating elements , setting thier properties and appending them to the DOM.

## How React Works?

- `Component -> Instances -> React Elements (Reconcilation) -> DOM Elements -> Final UI`

## Why React.js over Vanilla Javscript ?

- React.js manages updating the DOM with the components written by us.


## Why React.js?

- Most Popular `Javascript library`
- Component-Based Architecture.
- Declarative UI
- Rich Ecosystem - npm packages
- Strong Community Support - Online / Github


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
    

## What to Learn Before React & 5 Tips to Maximize Your React Course

- Prerequisite - `HTML, CSS, JAVASCRIPT`
- **5 Tips**
    - Practice Regularly (No matter what, You have to do this)
    - Explore Additional Resources 
    - Apply Real-World Scenarios
    - Review and Revise

## React Project Structure and Naming Conventions

- `node_modules` 
    - folder which contains all necessary libraries and dependencies by React.js
    - You can ignore this folder completely.

- `public `
    - Folder contains all static files like images, videos, fonts, e.t.c

- `src`
    - folder contains all source files

    - `App.jsx`
    - `main.jsx` - entry point of our React.js project

- `.eslintrc.cjs`
    - includes configuration for ESLint
    - ESlint is static code analysis tool for identifying problematic patterns forund in javascript code.
    
- `.gitignore`
    - This file includes all the files and folders to hidden in git

- `index.html` 
    - The main HTML file where your React application is loaded, serving as the entry point for the webbrowser.

- `package.json`
    - This file contains all the details or configuration regarding this project.
    - It includes name, version, description, scrept , dependencies.
    - In dependencies you will see `react` and `react-dom` 
        - React.js is just a library for creating dynamic user interfaces.
        - React DOM is used to render those components on our web page.
        - you might have heard about react Native for creating mobile application which is also based on React.s

- vite.config.js
    - This file contains config related to vite.


- **Naming Conventions**
    - camelCase
        - It is used for variables, functions/methods, properties, inside objects, file names, etc
    - PascalCase
        - It is used for each component names, class names, types, etc
        - Capitalization of each word is done.
    - snake_case
        - It is not common in javascript but is used heavily in python.
        - Each word is separated by `-` and is in small letters.
    - kebab-case
        - It is common for dile names, css classes , ids, etc
        - Each word is separeated by hyphen(-).


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

## React Project Structure and Naming Conventions

- `node_modules` 
    - folder which contains all necessary libraries and dependencies by React.js
    - You can ignore this folder completely.

- `public `
    - Folder contains all static files like images, videos, fonts, e.t.c

- `src`
    - folder contains all source files

    - `App.jsx`
    - `main.jsx` - entry point of our React.js project

- `.eslintrc.cjs`
    - includes configuration for ESLint
    - ESlint is static code analysis tool for identifying problematic patterns forund in javascript code.
    
- `.gitignore`
    - This file includes all the files and folders to hidden in git

- `index.html` 
    - The main HTML file where your React application is loaded, serving as the entry point for the webbrowser.

- `package.json`
    - This file contains all the details or configuration regarding this project.
    - It includes name, version, description, scrept , dependencies.
    - In dependencies you will see `react` and `react-dom` 
        - React.js is just a library for creating dynamic user interfaces.
        - React DOM is used to render those components on our web page.
        - you might have heard about react Native for creating mobile application which is also based on React.s

- vite.config.js
    - This file contains config related to vite.


- **Naming Conventions**
    - camelCase
        - It is used for variables, functions/methods, properties, inside objects, file names, etc
    - PascalCase
        - It is used for each component names, class names, types, etc
        - Capitalization of each word is done.
    - snake_case
        - It is not common in javascript but is used heavily in python.
        - Each word is separated by `-` and is in small letters.
    - kebab-case
        - It is common for dile names, css classes , ids, etc
        - Each word is separeated by hyphen(-).


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


## React Fragments: Remove unwanted Nodes & Speed Up Rendering

- In React.js, a component can't return elements without a wrapper div.
- You can do this to imitate it: Using an Array of Elements with Keys.

- `return [<p>Ram</p>, <strong>20</strong>]; `

- But it's tedious, to fix this React 16 introduced Fragments, which allow components to return multiple elements without adding extra nodes to the DOM.

- ```javascript
    import {Fragment} from "react";
    return <Fragment> //code </Fragment>
  ```
- Alternatively, you can also use its shorthand syntax:
    - `<> //code </>`

### Why can't we return multiple elements at the same time?

- As after JSX is compiled it is converted to normal JavaScript object, you can't return multiple JavaScript object at the same time.

- `return ( jsx(...), jsx(...))`




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


## React Conditional rendering in JSX 
### Conditionals in JSX
You can either return a JSX early or You can use ternary operatos for conditionals in JSX.

- `return <p>{ age >= 18 ? "Adult " : "Minor"}</p>`

- `return <p>{ age >= 18 && "You can vote"}</p>`

- `return <p>{ username || "Guest"}</p>`


## React interview Question with Solutions

React does not render `false`, `null`, `undefined`, or `NaN` in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, `0` and empty strings (`""`) are exceptions:

- **`0`** is rendered in the DOM because it is considered a valid React node. This menas that if `0` is the result of an expression, it will appear in your UI.

- **Empty String** (`""`) are also considered valid outputs and are rendered as well.

**Example :**
```javascript
{/* 1st solution  */}
<p>{students.length === 0 && "No StudentFound"}</p>
{/* 2nd solution */}
<p>{!students.length  && "No Students Found</p>
{/* 3rd solution */}
<p>{!Boolean(students.length)  && "NStudents Found"}</p>
<p>Number of Students: {students.length}</p>
```

## React Import and Export 

1. Default Export and Import 
2. Named Export and Import
3. Mixed Export and Import

## Default Export and Import 
**Default Export:**
- A file can have only one defult export.
- Ex: `export default NetflixSeries;`

**Default Import:**
- When import a default export, you can name the import whatever you like.
- Ex: `import NetflixSeries from "./components/NetflixSeries"`

## Named Export and Import
**Named Export:**
- A file can have multiple named exports.
- Each named export must be explicitly exported.
- Ex: `export const NetflixSeries = ()=> { }`

**Named Import:**
- When importing named exports, the import `names must match` the export name exactly.
- Named imports must be `enclosed in curly braces`.
- Name can't be changed.
- Ex: `import {NetflixSeries} from "./components/NetflixSeries"`

## Combined Export & Import 

**Combined Import**
- Ex- `import NetflixSeries, {Footer, Header} from "./components/NetflixSeries"`

**Combined Export:**
- Ex: 
    ```javascript
            export default NetflixSeries;
            export const Footer = () => {
                //code
            }
     ```


## Looping in JSX: Netflix Series Card Creation

We don't have for loop i JSX,so we have to use `.map()` method of arrays.

```javascript
return (
    {students.map((student) => (
        <li key={student}>{student}</li>
    ))}
)
```
React.js will complain if you don't pass key prop to `<li>`.

React.js uses keys to differentiate each elements.

Using `.map()` function implemented multiple netflex series cards.


## Props in React JS - Making Netflix Cards Reusable

- React props`(properties)` facilitate data transfer from parent to child components.
- Data flows `unidirectionally`, ensuring a clear direction of information in React applications.
- Props are `immutable`, meaning child components cannot modify the data received from parents.(Read Only)
- Child components access props throught thier `function parameter`.
- You can also `pass JSX as props` to another component.

- Props related chnages done in `Netflix Series card"


## React Coding Challenge: Passing JSX as Props in React

### Coding challenge:
Cerate a react application that demonstrate the use of props by building a simple profile card system. Each profile card should display a user's name, age, and a personalized gretting message. Additionally, use props.children to allow for flexible constant inside each profile card.

Challenge Details:
// Create a Main Component: Profile
- This component should render multiple ProfileCard components, each with different user data and children elements.

// Create a ProfileCard Component:
- This component should accept props for the user's name, age, and a personalized gretting message (as JSX).

- This component should also use props.children to render additional content inside the card.

### Requirements:

// Props Usage:
- Pass the user's name, age , and a personalized gretting message as props to the ProfileCard component.

// Children Prop:
- User props.children to allow for flexible content insdie the ProfileCard component, such as additional text, image

// Dynamic Conent 
- The personalized gretting message be a JSX element passed as a prop.


### Solution

- IF you are passing no in variable include in `{}` braces . `{20}`
- We can also pass jsx as a props.
- To get the Value Passed b/w starting and closing component , We use {props.children}


## Add CSS Styling in React: Class vs ClassName , Inline CSS Styling 

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

## Conditional Styling for Dynamic UIs 

- You can use ternary operator to add conditional styling to your css.

- To use both conditional styling and normal css propery we use `Template Literals`.

```javascript
        <h3> Rating: <span className={`rating ${rating >= 8.5 ? "super_hit" : "average" }`}>{rating}</span>
        </h3>
````


## CSS Modules in React: Scoped and Reusable Styles 

- Every time you import a CSS file in your react component, they are regarded as global CSS.

- `CSS Modules` help you keep styles specific to the component they're used in.

- Each module encapsulates its styles, preventing unitendended style conflict with other modules.

- The class names in CSS modules are often `automatically` generally `reducing` the likelihood of `naming clashes`.

- Name you CSS Module files with the `.module.css` or .`module.scss` extension.

- Import the CSS module file in your React Component. Access class names as `properties` of the imported styles object.

- Access class names as properties of the imported styles object.

- Combine `multiple` class names using `template literals or the class library`.

- Dynamically apply class names based on component state.

- When using CSS Modules , class name with hyphens can sometimes cause issues if not accessed correctly. In CSS Modules you need to use bracket notation for class names with hyphens.

- `<div className={styles['card-content]}>`
 **Explanation:**
- *Using Bracket Notation*:
    - IN Javascript, when accessing object properties with special characters (like hyphens), you need to uses bracket notation instead of the dot notation.

- *Dot Notation*:
    - styles.card-content will not work because . expects a valid javascript identifier, which cannot contain hyphens.

- *Bracket Notation*:
    - styles['card-content'] correctly accesses the class name from imported styles object


## Styled Components in React JS for Clean and Dynamic UI

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


# Tailwind CSS in React v19: Installing and Using Tailwind CSS to Style Your React App

## Applying Padding in Tailwind

Here are both approaches:

### Extended Spacing Scale:

If you're extended the spacing scale , you can use the custom classes:

`<div class="py-32 px-12>Content</div>

### Arbitrary Values

You can use arbitrary values directly:

`<div class="py-[3.2rem] px-[1.2rem]">conten</div>`


## Events Handling

- Event handling in *React.js is the process of capturing and responding to user interactions, such as clicks , keystrokes, or form submissions* , within a React application.

- Event handling in React follows a similar pattern to standard Javascript event handling but some key diffrences, such as using `syntetic events` for `cross-browser compatibilty` and providing `consistent event handling` across different elements and browsers.

- What is `SynteticBaseEvent` in React ?

- When you handle events in React, like clicking button or typing in an input box.
- `React wraps the native browser events in something called a SyntheticEvent.`
- This Sytheti is a wrapper around the browser's native event, making sure that events behave consistent in browser

### Here are some widely used `React.js events.`
    1. `onClick`: triggered when a element is clicked.
    2. `onChange`: Triggered when the value of an input element chnages.
    3. `onSubmit`: Triggered when a form is submitted.
    4. `onMouseEnter`: Triggered when the mouse pointer enters an element.
    5. `onMouseLeave`: Trigerred when the mouse pointer leaves an element.
    6. `onKeyDown`: Triggered when key is pressed down.
    7. `onKeyUp`: Triggered when a key is released.
    8. `onFocus`: Triggered when an element receives focus.
    9. `onBlur`: Triggered when an element loses focus.
    10. `onInput`: triggered when the value of an element is changed(similar to onChnage)

### Event Naming Conventions

- `CamelCase`: Event names in JSX should be writtern in camleCase.

- Prefix with `on`

## Function Naming Conventions

- Prefix with `handle`: It is a common convention to prefix event hanlder funtions with `handle` to clearly indicate thier purpose.

- For ex: handleClick, handleChange, handleSubmit.

- `Descriptive Names`:Funtions names should be descriptive and reflect what the function does. 

- For ex: handleFormSubmit instead of just handleSubmit id it is specifically for form submission.


```javascript
import  './EV.css'

export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert("Button Clicked");
    // }
    const  handleButtonClick = (event) =>{
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Button Clicked");
    }

    const handleWelcomeUser = (name) => {
        alert(`Welcome ${name}`);
    }

    return (
    <>
    {/*  Function Components with Named Functions */}
    {/*     
    If you call this funtion then it will run wthout even clicking. You just need to pass refrence and not call here.  
    */}

    <button onClick={handleButtonClick}>click Me</button>
    <button onClick={ (event) => handleButtonClick(event)} className='pt-2'>click Me 2</button>

    {/* Inline Event Handlers */}
    <button onClick={(event) => console.log(event)}>Inline Function</button>

    {/* Funtion Components with Inline Arrow Functions */}

    <button onClick={() => alert("Inline Arrow funtion")}>Inline Arrow Fun</button>

    {/* Passing Aruments to Event Handlers */}
    <button onClick={() => handleWelcomeUser("Ayush")}>click Me</button>

    </>
    );
};
```

## Passing Events as Props in React

- PAssing event handlers as props in React.js is a common pattern `used to allow child components to communicate with parent components.` This pattern is useful in various scenarios , inncluding.

- *Form Handling* : PAssin