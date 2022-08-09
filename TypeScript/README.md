# Moveo Protocol Code - TypeScript

*There is not type like any*

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide.

## Table of Contents

  1. [General Types](#general-types)
  1. [Generics](#generics)
  1. [any](#any)
  1. [Return Types of Callbacks](#return-types-of-callbacks)
  1. [Optional Parameters in Callbacks](#optional-parameters-in-callbacks)
  5. [Use Union Types](#use-union-types)
  6. [Structure in project ](#structure-in-project)



## ESlints


- Must Have:

  - Eslint. - Prettier & Airbnb

  ```jsx
   npm i -D  @typescript-eslint/eslint-plugin @typescript-eslint/parser
  ```

  ```jsx
  {
   "extends": ["plugin:@typescript-eslint/recommended"],
   "plugins": ["@typescript-eslint"],
   "rules": {

   }
  }
  ```

## General Types
  
  *Number, String, Boolean, Symbol and Object*

❌ Don’t ever use the types Number, String, Boolean, Symbol, or Object These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.

````jsx
/* WRONG */
function reverse(s: String): String;
````
✅ Do use the types number, string, boolean, and symbol.


````jsx
/* OK */
function reverse(s: string): string;
````

instead of Object, use the non-primitive object type

 ## Generics

❌ Don’t ever have a generic type which doesn’t use its type parameter. 
## any
 ❌ Don’t use any as a type unless you are in the process of migrating a JavaScript project to TypeScript. The compiler effectively treats any as “please turn off type checking for this thing”. It is similar to putting an @ts-ignore comment around every usage of the variable. This can be very helpful when you are first migrating a JavaScript project to TypeScript as you can set the type for stuff you haven’t migrated yet as any, but in a full TypeScript project you are disabling type checking for any parts of your program that use it.

In cases where you don’t know what type you want to accept, or when you want to accept anything because you will be blindly passing it through without interacting with it, you can use unknown.


## Return Types of Callbacks

 ❌ Don’t use the return type any for callbacks whose value will be ignored:

````jsx

/* WRONG */
function fn(x: () => any) {
  x();
}
````


✅ Do use the return type void for callbacks whose value will be ignored:

````jsx

/* OK */
function fn(x: () => void) {
  x();
}

````
❔ Why: Using void is safer because it prevents you from accidentally using the return value of x in an unchecked way:

````jsx
function fn(x: () => void) {
  var k = x(); // oops! meant to do something else
  k.doSomething(); // error, but would be OK if the return type had been 'any'
}

````
## Optional Parameters in Callbacks

❌ Don’t use optional parameters in callbacks unless you really mean it:
````jsx

/* WRONG */
interface Fetcher {
  getObject(done: (data: unknown, elapsedTime?: number) => void): void;
}
````
This has a very specific meaning: the done callback might be invoked with 1 argument or might be invoked with 2 arguments. The author probably intended to say that the callback might not care about the elapsedTime parameter, but there’s no need to make the parameter optional to accomplish this — it’s always legal to provide a callback that accepts fewer arguments.

✅ Do write callback parameters as non-optional:
````jsx

/* OK */
interface Fetcher {
  getObject(done: (data: unknown, elapsedTime: number) => void): void;
}
````

## Use Union Types
 ❌ Don’t write overloads that differ by type in only one argument position:
````jsx

/* WRONG */
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}
````


✅ Do use union types whenever possible:

````jsx

/* OK */
interface Moment {
  utcOffset(): number;
  utcOffset(b: number | string): Moment;
}
````

Note that we didn’t make b optional here because the return types of the signatures differ.

❔ Why: This is important for people who are “passing through” a value to your function:
````jsx

function fn(x: string): void;
function fn(x: number): void;
function fn(x: number | string) {
  // When written with separate overloads, incorrectly an error
  // When written with union types, correctly OK
  return moment().utcOffset(x);
}
````

## Structure in project 
 every project there be two options that will  be types/interfaces in the project: 
 1. A general folder of types that can be used any where.
 1. A local file of type that use specific folder for example:  


❌ 
````jsx

/* WRONG */
// Teacher/Teacher.js
interface TeacherProps {
  name: string,
  classType: string
}
// Teacher/Teacher.js
const TeacherComponent = (props: TeacherProps)=>{return props.name}
````

✅ 
````jsx

/* OK */
// Teacher/types.js
export interface TeacherProps {
  name: string,
  classType: string
}

// Teacher/Teacher.js
 import TeacherProps from './types';

const TeacherComponent = (props: TeacherProps)=>{return props.name}
````





**[⬆ back to top](#table-of-contents)**
