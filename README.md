# Advanced JavaScript Objects

In this class, we will explore some advanced concepts related to JavaScript objects.

## Built-in Object Methods

JavaScript objects come with built-in methods that allow us to perform various operations on objects. These methods provide powerful functionalities for working with objects. Some commonly used built-in methods for objects include:

- `Object.keys(obj)`: Returns an array of the keys of an object.
- `Object.values(obj)`: Returns an array of the values of an object.
- `Object.entries(obj)`: Returns an array of key-value pairs of an object.

## "this" Keyword and Arrow Functions

The "this" keyword is a special keyword in JavaScript that refers to the object it belongs to. It allows us to access and manipulate object properties and methods within the object's context. However, when using arrow functions, the "this" keyword behaves differently. Arrow functions do not bind their own "this" value and instead inherit it from the surrounding scope.

## Destructured Assignment

Destructured assignment is a convenient feature in JavaScript that allows us to extract values from objects and arrays and assign them to variables in a single line of code. It provides a concise way to access and work with specific properties of an object without having to access them one by one.

```javascript
// Example of destructured assignment
const { name, age, city } = person;
```
By using destructured assignment, we can easily extract values from an object and assign them to variables with meaningful names.

---

In this class, we have covered the concepts of built-in Object methods, "this" keyword, arrow functions, and destructured assignment. Understanding these advanced concepts will enhance your skills in working with JavaScript objects.
