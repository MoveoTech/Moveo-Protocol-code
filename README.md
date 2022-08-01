# Moveo Protocol Code - React

*A mostly reasonable approach to React and JSX*

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide.

## Table of Contents

  1. [Extension](#extension)
  1. [ESlints](#eslints)
  1. [Project Structure](#project-structure)
  1. [Component Structure](#component-structure)
  1. [File Structure](#js-file-structure)
  5. [Name Convention](#name-convention)
  6. [Loading Indiaction](#loading_indiaction)
  7. [Error Handler](#error_handler)
  8. [Quotes](#quotes)
  9. [Generic](#generic)
  10. [Tags](#tags)
  11. [Methods](#methods)

## Extension

  - Must Have: 
    - Prettier 
    - Code Spell Checker

  - Nice To Have: 
    - ES7 + React/Redux/React-Native snippets
    
 ## ESlints

  - Must Have: 
    - Eslint. -  Prettier & Airbnb
    ```jsx 
     npm i -D eslint prettier eslint-config-airbnb eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
    ```
     ```jsx 
    {
      "extends": ["airbnb", "prettier", "plugin:node/recommended"],
      "plugins": ["prettier"],
      "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off"
      }
    }
    ```
    - Code Spell Checker

  - Nice To Have: 
    1. ES7 + React/Redux/React-Native snippets

## Project Structure

   - assets 
     - images 
     - icons
     - audios 
   - services - REST API
     - axios 
     - google map
     - facebook
   - pages
   - redux  toolkit
     - slices
     - store
   - shared  (shared generic functions and components) :
     - constants  ( COLOR , SIZES , FONTS, IMAGES, AUDIOS, ICONS,  DATA)
     - utils (example: calculate items)
     - components (example: cards,buttons)
     - Validators (example: url validtors)
     - hooks -  (example: every 'x' time do 'y')
  
## Component Structure

   - components 
     - unique components 
   - logic
     - unique functions  
   - index
   - componentName
   - styles  

## JS File Structure
- import format 
   - split between package import and internal import 
   - package import always been first
   - start from line 1
 ```jsx
      // bad - incorrect sort
    import ReservationCard from './ReservationCard';
    import { useHistory } from "react-router-dom";
    import RoutePaths from "../../shared/enums/RoutePaths";
    
      // bad - break line is must between import type
    import { useHistory } from "react-router-dom";
    import ReservationCard from './ReservationCard';
    import RoutePaths from "../../shared/enums/RoutePaths";
    
    
      // best practice
    import { useHistory } from "react-router-dom"
    
    import ReservationCard from './ReservationCard';
    import RoutePaths from "../../shared/enums/RoutePaths";
    

   ```
-  Component/Function sortBy format 
   1. const
   2. let
   3. hooks
   4. funcs
   5. return
   
   
 ```jsx
      // bad - incorrect sort + breaklines
     const [loading, setLoading] = useState(false);
     const getDataFromApi= (loading) =>{return loading};
     const [actionCounter, setActionCounter] = useState(0);

     useEffect(() => {},[actionCounter])
     return (<Container> </Container>)
    
      // bad -  breaklines
     const [loading, setLoading] = useState(false);
     const [actionCounter, setActionCounter] = useState(0);

     useEffect(() => {},[actionCounter])

     const getDataFromApi= (loading) =>{return loading};
     return (<Container> </Container>)
    
    
       // best practice
     const [loading, setLoading] = useState(false);
     const [actionCounter, setActionCounter] = useState(0);

     useEffect(() => {},[actionCounter])

     const getDataFromApi= (loading) =>{return loading};
    
     return (<Container> </Container>)
    

   ```

## Name Convention

Case types : 
 - **camelCase** 
 - **PascalCase** - first letter of each appended word must be uppercased include the first word
 - **UPPER_SNAKE_CASE**
 - **snake_case**

type list:
 - Compnent - Pascal case
 - class - Pascal case
 - 
 - Functions - Camel case
 - Variables - Camel case
 - Props - Camel case
 - 
 - enum - UPPER_SNAKE_CASE
 - constants - UPPER_SNAKE_CASE
 - 
 - files - snake_case
 -  





Format of names list: 
  - boolean - isName - Camel case

examples:

  - **Extensions**: Use `.jsx` extension for React components. eslint: [`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
  - **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // bad - import component - Pascal Case
    import reservationCard from './ReservationCard';

    // best practice - Pascal Case
    import ReservationCard from './ReservationCard';

    // bad - variable - camelCase
    const ReservationItem = <ReservationCard />;

    // best practice - variable - camelCase
    const reservationItem = <ReservationCard />;
    ```

  - **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

    ```jsx
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```

## Loading Indiaction

## Quotes

  - Always use double quotes (`"`) for JSX attributes, but single quotes (`'`) for all other JS. eslint: [`jsx-quotes`](https://eslint.org/docs/rules/jsx-quotes)

    > Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

    ```jsx
    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
    <Foo style={{ left: "20px" }} />

    // good
    <Foo style={{ left: '20px' }} />
    ```




  - Avoid using an array index as `key` prop, prefer a stable ID. eslint: [`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

> Why? Not using a stable ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) because it can negatively impact performance and cause issues with component state.

We don’t recommend using indexes for keys if the order of items may change.

  ```jsx
  // bad
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```



**[⬆ back to top](#table-of-contents)**
