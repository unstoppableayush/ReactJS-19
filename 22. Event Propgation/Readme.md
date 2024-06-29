## Event Propagation in React: Capturing, Bubbling, and Practical Implementation

**Event Propagation**

- Event propagation refres to the process of how events propagates ot travel through the DOM hierarchy.

- In javascript, there are two phases of event propagation `capturing` phase and `bubbling` phase.

    - `Capturing Phase:` - The event starts from the root of the DOM and goes down to the target element. ( From top to bottm)

    - `Target Phase:` The event reaches the target element.

    - `Bubbling Phase`: The event starts from the target element bubbles up to the root of the DOM. (From bottom to top)


** Event Propagtion in React **

- In React.js , event propagation refers to the process by which events propagate or "bubble" up from the target element through its parent element through its parent elements in the DOM hireracy. (Same propagation model as regular javascript)

- When an event occurs on an element in a React component, such as a button click, the event is first captured at the target element and then bubbles up through the parent elements, triggering any event handlers that have been defined along the way. This allow you to handle events at differnt levels of the component hierarchy.

- React provides a way to stop event propagation using the stopPropagtion which can be called on the event object within an event hanlder. This many the event bubbling up further in the DOM, ensuring that only the 