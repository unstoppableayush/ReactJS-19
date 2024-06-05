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