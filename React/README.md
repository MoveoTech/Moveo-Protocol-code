# Moveo Protocol Code - React

_A mostly reasonable approach to React and JSX_TSX

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide.

## Table of Contents

1. [Extension](#extension)
1. [ESlints](#eslints)
1. [Project Structure](#project-structure)
1. [Component Structure](#component-structure)
1. [JS File Structure](#js-file-structure)
1. [Name Convention](#name-convention)
1. [Loading Indicator](#loading-indicator)
1. [Error Handler](#error-handler)
1. [Quotes](#quotes)
1. [Generic](#generic)

## Extension

- Must Have:

  - Prettier
  - Code Spell Checker

- Nice To Have:
  - ESLint
  - ES7 + React/Redux/React-Native snippets

## ESlints

- Must Have:

  - Eslint. - Prettier & Airbnb

  ```jsx
   npm i --save-dev eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin     @typescript-eslint/parser
  ```
  
  ```jsx
  {
    "extends": [
      "airbnb",
      "prettier",
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "plugins": ["prettier", "react", "react-hooks", "import"],
    "settings": {
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true
        }
      }
    },
    "rules": {
      //prettier
      "prettier/prettier": ["error", { "singleQuote": true }],
      "jsx-quotes": [2, "prefer-single"],

    //import
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],

    //  react

    "react/sort-comp": "off",
    "react/prefer-stateless-function": "warn",
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react/jsx-curly-spacing": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "error",
    "react/no-array-index-key": "warn",
    "react/function-component-definition": "off",
    "arrow-body-style": "off",
    "react/jsx-props-no-spreading": "off",

    // react-hooks

    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    //jsx-a11y/
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    // others
    "no-use-before-define": "off",
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "[I]\\w+^_"
      }
    ],
       
     // TS

    "@typescript-eslint/no-use-before-define": ["error"],
    
    // general
    
    "no-console": "warn",
    "no-debugger": "warn",
    "no-nested-ternary": "off",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "linebreak-style": "off",
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": ["state"]
      }
    ]
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
  - thunks
  - adapters
- resources
  - should contain all the text of the website will be here. (create a base for more than language)
- shared (shared generic functions and components) :
  - components (example: cards,buttons, etc..)
  - constants ( IMAGES, AUDIOS, ICONS)
  - validators (example: url validtors,  etc...)
  - hooks - (example: useIsMobile() | useDownloadUrl())
- data (all project data) :
  - UI ( COLOR , SIZES , FONTS, IMAGES, AUDIOS, ICONS)
  - types (general types)
  - utils (example: cards,buttons)
  - enums

## Component Structure

# A component should

- components
  - unique components
- hooks
  - unique hooks
- index
- ComponentName
- styles

## TS/JS File Structure

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
- files - name.("Father").js - (should belond undet the Father folder) Examples:
  1. Button.components.tsx
  2. useIsMocile.hooks.tsx
  3. homePage.data.ts
  3. homePage.types.ts


Format of names list:

- boolean - isName - camelCase
- hooks -  useIsMobile - camelCase
- function - getData  - Always do Action when use Get*And*FiltersCars is a 2 action should create 2 function

TypeScript Format of names:

- interface (TS) - IButtonTitle
  ```jsx
    interface IPagination {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }

- type (TS) - ButtonTitleType 
```jsx
    type PaginationType = {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        }
```

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
  - Linear / progress indicator
  - Spinner

## Error Handler

- When you are developing your web application, you have to perform asynchronous operations, e.g. perform a fetch/ajax call to obtain data from the server. Sometimes you need to do silent background operations, whereas in other cases you need to block the user interface or notify them that something is going on.

** User most notify when async action went wrong **

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


## Generic

- Most of the functions and components need to be generic. You always need to think if there is possible the use the function/component in another place, most of the cases it will be correct.
- use storybook(or any opensource for create a UI development, testing, and documentation) -  **Storybook** is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. No save data o

examples:

- Shared/components/Buttons -->  Button - generic Button

```jsx
// stateless button
const Button: FC<IButtonProps> = ({
  label,
  icon,
  isDisabled,
  refItem,
  customStyle,
  typographyStyle,
  type = BUTTON_TYPES.MAIN,
  size = BUTTON_SIZES.LARGE,
  loading = false,
  ariaLabel,
  onClickFunc,
}) => {
  const classes = useStyles();

  const buttonType = useMemo(() => {
    return buttonTypeFormatter(type, classes);
  }, [classes, type]);

  const buttonSize = useMemo(() => {
    return buttonSizeFormatter(size);
  }, [size]);

  return (
    <MButton
      aria-label={ariaLabel}
      className={`${classes.root} ${buttonType}`}
      onClick={onClickFunc}
      disabled={isDisabled || loading}
      ref={refItem}
      sx={{ ...buttonSize, ...customStyle }}
    >
      {icon}
      <Typography variant='h5' sx={{ ...labelSx, ...typographyStyle }}>
        {label}
      </Typography>
      {loading && <CircularProgress size={LOADER_SIZES.SMALL} sx={loaderStyle} />}
    </MButton>
  );
};
```

- Shared/validators. --> urlValidor

```jsx
// check if the url is valid
const isValidUrl = (urlString) => {
  const urlPattern = new RegExp(
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

- Shared/hooks. --> useIsMobile

```jsx

export const useIsMobile = (mobileWidth = DEFAULT_MOBILE_WIDTH) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return useMemo(() => {
    return width < mobileWidth;
  }, [mobileWidth, width]);
};
```
## React hooks

****The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
The useCallback and useMemo Hook only runs when one of its dependencies update. This can improve performance.****

- useMemo.

  > returns a memoized value.
  The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

  ```jsx
  // bad
  const isSelected = item === selected 

  // good
   const isSelected = useMemo(() => item === selected, [item, selected]);
  ```
- useCallback.

 > returns a memoized function.
 It takes two arguments: a function and an array of dependencies. If the dependencies haven't changed, the hook will return the previous memoized function. This can be useful when you have a performance-critical function that you don't want to re-create on every render.
 

  ```jsx
 const Example = ({ data }) => {
  const [selected, setSelected] = useState(null);
  
  // bad
  const handleClick = (item) => {
      setSelected(item);
    };
  
  // good
  const handleClick = useCallback(
    (item) => {
      setSelected(item);
    },
    [setSelected]
  );

  return (
    <ul>
      {data.map(item => (
        <li
          key={item.id}
          onClick={() => handleClick(item)}
          className={item === selected && 'selected'}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
  ```

  > Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

  ```jsx
  // bad
  {isFoo ?
  <Foo bar='bar' />
  : ''}

  // good
   {isFoo && <Foo bar="bar" />}

  // bad
  <Foo style={isSelected?{ left: "20px" }:{} />

  // good
  <Foo style={isSelected && { left: '20px' }} />
  ```

## Best Practices

- Don't use if (`?`) if the else id empty  (: '')  use And ('&&).

  > Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

  ```jsx
  // bad
  {isFoo ?
  <Foo bar='bar' />
  : ''}

  // good
   {isFoo && <Foo bar="bar" />}

  // bad
  <Foo style={isSelected?{ left: "20px" }:{} />

  // good
  <Foo style={isSelected && { left: '20px' }} />
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
