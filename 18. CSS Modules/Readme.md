#  CSS Modules in React: Scoped and Reusable Styles 

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

