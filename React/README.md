# Moveo Protocol Code - React

_A mostly reasonable approach to React and JSX_

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide.

## Table of Contents

1. [Extension](#extension)
1. [ESlints](#eslints)
1. [Project Structure](#project-structure)
1. [Component Structure](#component-structure)
1. [JS File Structure](#js-file-structure)
1. [Name Convention](#name-convention)
1. [Loading Indiaction](#loading-indiaction)
1. [Error Handler](#error-handler)
1. [Quotes](#quotes)
1. [Generic](#generic)

## Extension

- Must Have:

  - Prettier
  - Code Spell Checker

- Nice To Have:
  - ES7 + React/Redux/React-Native snippets

## ESlints

- Must Have:

  - Eslint. - Prettier & Airbnb

  ```jsx
   npm i --save-dev eslint prettier eslint-config-airbnb eslint-plugin-prettier
  ```

  ```jsx
  {
   "extends": ["airbnb", "prettier"],
   "plugins": ["prettier","react","react-hooks"],
   "rules": {

     //prettier
     "prettier/prettier": "error",

     //  react

      "react/sort-comp": "off",
      "react/prefer-stateless-function": "warn",
      "react/jsx-filename-extension": "off",
      "react/require-default-props": "off",
      "react/jsx-curly-spacing": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "error",
      "react/no-array-index-key": "warn"

   // react-hooks

    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

     // others

     "no-unused-vars": "warn",
     "no-console": "off",
     "no-debugger": "off",
     "no-nested-ternary": "off",
     "no-trailing-spaces": ["error", { "skipBlankLines": true }],
     "func-names": "off",
     "no-process-exit": "off",
     "object-shorthand": "off",
     "linebreak-style": "off"


   }
  }
  ```

## Project Structure

# recommended structure - > best practice

- assets
  - images
  - icons
  - audios
- services - REST API
  - axios
  - google map
  - facebook
- pages
- redux toolkit
  - slices
  - store
- shared (shared generic functions and components) :
  - constants ( COLOR , SIZES , FONTS, IMAGES, AUDIOS, ICONS, DATA)
  - utils (example: calculate items)
  - components (example: cards,buttons)
  - Validators (example: url validtors)
  - hooks - (example: every 'x' time do 'y')

## Component Structure

# A component should

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
import ReservationCard from "./ReservationCard";
import { useHistory } from "react-router-dom";
import RoutePaths from "../../shared/enums/RoutePaths";

// bad - break line is must between import type
import { useHistory } from "react-router-dom";
import ReservationCard from "./ReservationCard";
import RoutePaths from "../../shared/enums/RoutePaths";

// best practice
import { useHistory } from "react-router-dom";

import ReservationCard from "./ReservationCard";
import RoutePaths from "../../shared/enums/RoutePaths";
```

- Component/Function order by the next groups format.
  groups:
  1.  const
  2.  let
  3.  hooks
  4.  functions
  5.  return

```jsx
// bad - incorrect sort + breaklines
const [loading, setLoading] = useState(false);
const getDataFromApi = (loading) => {
  return loading;
};
const [actionCounter, setActionCounter] = useState(0);

useEffect(() => {}, [actionCounter]);
return <Container />;

// bad -  break lines
const [loading, setLoading] = useState(false);
const [actionCounter, setActionCounter] = useState(0);

useEffect(() => {}, [actionCounter]);

const getDataFromApi = (loading) => {
  return loading;
};
return <Container />;

// best practice
const [loading, setLoading] = useState(false);
const [actionCounter, setActionCounter] = useState(0);

useEffect(() => {}, [actionCounter]);

const getDataFromApi = (loading) => {
  return loading;
};

return <Container />;
```

## Name Convention

Case types :

- **camelCase**
- **PascalCase** - first letter of each appended word must be uppercased include the first word
- **UPPER_SNAKE_CASE**
- **snake_case**

type list:

- Compnent - PascalCase
- class - PascalCase
-
- Functions - camelCase
- Variables - camelCase
- Props - camelCase
-
- enum - UPPER_SNAKE_CASE
- constants - UPPER_SNAKE_CASE
-
- files - snake_case
-

Format of names list:

- boolean - isName - camelCase

examples:

- **Extensions**: Use `.jsx` extension for React components. eslint: [`react/jsx-filename-extension`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
- **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`.
- **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

  ```jsx
  // bad - import component - Pascal Case
  import reservationCard from "./ReservationCard";

  // best practice - Pascal Case
  import ReservationCard from "./ReservationCard";

  // bad - variable - camelCase
  const ReservationItem = <ReservationCard />;

  // best practice - variable - camelCase
  const reservationItem = <ReservationCard />;
  ```

- **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

## Loading indicator

- When you perform asynchronous operations, e.g. perform a fetch/ajax call to obtain data from the server. Sometimes you need to do silent background operations, whereas in other cases you need to block the user interface or notify them that something is going on.

* Loading types

  - Skelton <!--best practice -->
    ![Tux, the Linux mascot](https://miro.medium.com/max/1400/1*WED_fjwEcSSSpJAUIkZQQA.png)
  - Linear and Spinner
    ![Tux, the Linux mascot](https://kstatic.googleusercontent.com/files/e6094118eeee54168703cb764afedba9f6914bf88720388a655825805269ff598a4896f6c8f46bed651cc2cef41a122ecfb003c16a9dca9c4716e638cf610c8f)
    - Spinner
      ![Tux, the Linux mascot](https://kstatic.googleusercontent.com/files/e6094118eeee54168703cb764afedba9f6914bf88720388a655825805269ff598a4896f6c8f46bed651cc2cef41a122ecfb003c16a9dca9c4716e638cf610c8f)

* Coming Soon

## Error Handler

- When you are developing your web application, you have to perform asynchronous operations, e.g. perform a fetch/ajax call to obtain data from the server. Sometimes you need to do silent background operations, whereas in other cases you need to block the user interface or notify them that something is going on.

- best practice

  ```jsx
       // use try, catch and finally construct
     try {
        // Code to run
        const res =  await getAvailableItems();
        [break;]
     }

     catch ( e ) {
        // Code to run if an exception occurs
        errorHandlerNotification(errorMessage);
        [break;]
     }

     [ finally {
        // Code that is always executed regardless of
        // an exception occurring
     }]
  ```

- ## Types of Error Handlers

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

## Generic

- Most of the functions anf components need to be generic. You always need to think if there is possible the use the function/component in another place, most of the cases it will be correct.

examples:

- Shared/components/Buttons --> BaseButton

```jsx
// stateless button
const BaseButton = (props) => {
  const { buttonTextStyle, buttonWidgetStyle, onChange, buttonText } = props;

  return (
    <ButtonContainer onClick={onChange} style={buttonWidgetStyle}>
      <ButtonText style={buttonTextStyle}>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};
```

- Shared/validators. --> urlValidor

```jsx
// check if the url is valid
const isValidUrl = (urlString) => {
  let urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator

  return !!urlPattern.test(urlString);
};
```

- Shared/hooks. --> useCarouselByIndexArr

```jsx
//  every 'x' time  fo something by dependency of index
// The function will work as longest the dependency changes in onChange func

const useEveryTimeDoSomething = (props) => {
  const { delay, dependency, onChange } = props;

  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      onChange();
    }, delay);

    return () => clearInterval(timerRef.current);
  }, [dependency]);
};
```

- Avoid using an array index as `key` prop, prefer a stable ID.

We don’t recommend using indexes for keys if the order of items may change.

```jsx
// bad
{
  todos.map((todo, index) => <Todo {...todo} key={index} />);
}

// good
{
  todos.map((todo) => <Todo {...todo} key={todo.id} />);
}
```

**[⬆ back to top](#table-of-contents)**
