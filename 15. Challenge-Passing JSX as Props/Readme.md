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