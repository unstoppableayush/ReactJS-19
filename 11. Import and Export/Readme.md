# React Import and Export 

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