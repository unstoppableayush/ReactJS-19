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