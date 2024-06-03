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