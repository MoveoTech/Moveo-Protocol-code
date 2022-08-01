# Moveo Protocol Code - React

*A mostly reasonable approach to React and JSX*

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide.

## Table of Contents

  1. [Extension](#extension)
  1. [ESlints](#eslints)
  1. [Project Structure](#project-structure)
  1. [Component Structure](#component-structure)
  1. [File Structure](#file-structure)
  1. [Name Convention](#name-convention)
  1. [Declaration](#declaration)
  1. [Alignment](#alignment)
  1. [Quotes](#quotes)
  1. [Spacing](#spacing)
  1. [Props](#props)
  1. [Refs](#refs)
  1. [Parentheses](#parentheses)
  1. [Tags](#tags)
  1. [Methods](#methods)
  1. [Ordering](#ordering)
  1. [`isMounted`](#ismounted)

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

## File Structure
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



  - **Extensions**: Use `.jsx` extension for React components. eslint: [`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
  - **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // bad
    import reservationCard from './ReservationCard';

    // good
    import ReservationCard from './ReservationCard';

    // bad
    const ReservationItem = <ReservationCard />;

    // good
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



## Tags

  - Always self-close tags that have no children. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // bad
    <Foo variant="stuff"></Foo>

    // good
    <Foo variant="stuff" />
    ```


## Methods

  - Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they [do not massively hurt performance](https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/), in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time.

    ```jsx
    function ItemList(props) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={(event) => { doSomethingWith(event, item.name, index); }}
            />
          ))}
        </ul>
      );
    }
    ```


## Translation

  This JSX/React style guide is also available in other languages:

  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinese (Simplified)**: [jhcccc/javascript](https://github.com/jhcccc/javascript/tree/master/react)
  - ![tw](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Taiwan.png) **Chinese (Traditional)**: [jigsawye/javascript](https://github.com/jigsawye/javascript/tree/master/react)
  - ![es](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Spain.png) **Español**: [agrcrobles/javascript](https://github.com/agrcrobles/javascript/tree/master/react)
  - ![jp](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Japan.png) **Japanese**: [mitsuruog/javascript-style-guide](https://github.com/mitsuruog/javascript-style-guide/tree/master/react)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [apple77y/javascript](https://github.com/apple77y/javascript/tree/master/react)
  - ![pl](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Poland.png) **Polish**: [pietraszekl/javascript](https://github.com/pietraszekl/javascript/tree/master/react)
  - ![Br](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png) **Portuguese**: [ronal2do/javascript](https://github.com/ronal2do/airbnb-react-styleguide)
  - ![ru](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Russia.png) **Russian**: [leonidlebedev/javascript-airbnb](https://github.com/leonidlebedev/javascript-airbnb/tree/master/react)
  - ![th](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Thailand.png) **Thai**: [lvarayut/javascript-style-guide](https://github.com/lvarayut/javascript-style-guide/tree/master/react)
  - ![tr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Turkey.png) **Turkish**: [alioguzhan/react-style-guide](https://github.com/alioguzhan/react-style-guide)
  - ![ua](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Ukraine.png) **Ukrainian**: [ivanzusko/javascript](https://github.com/ivanzusko/javascript/tree/master/react)
  - ![vn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Vietnam.png) **Vietnam**: [uetcodecamp/jsx-style-guide](https://github.com/UETCodeCamp/jsx-style-guide)

**[⬆ back to top](#table-of-contents)**
