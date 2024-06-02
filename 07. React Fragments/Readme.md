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

