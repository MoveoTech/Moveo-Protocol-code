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
  6. [Loading Indiaction](#loading-indiaction)
  7. [Error Handler](#error-handler)
  8. [Quotes](#quotes)
  9. [Generic](#generic)

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

## Name Convention
 ## Loading Indiaction
 ## Error Handler
## Quotes
## Generic




**[⬆ back to top](#table-of-contents)**
