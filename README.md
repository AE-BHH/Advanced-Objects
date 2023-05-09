# Advanced JavaScript Objects

In this class, we will explore some advanced concepts related to JavaScript objects.

## Built-in Object Methods

JavaScript objects come with built-in [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) that allow us to perform various operations on objects. These methods provide powerful functionalities for working with objects. Some commonly used built-in methods for objects include:

- `Object.keys(obj)`: Returns an array of the keys of an object.
- `Object.values(obj)`: Returns an array of the values of an object.
- `Object.entries(obj)`: Returns an array of key-value pairs of an object.

## Group Activity

explore

## Understanding the `this` Keyword in JavaScript Objects

In JavaScript, the `this` keyword refers to the current object and is a powerful tool for accessing and manipulating object properties and methods. It allows you to refer to the context in which a function is executed. Understanding how `this` works is essential for working effectively with objects in JavaScript.
Let's explore this example to better understand how `this` works:

```javascript
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};
person.greet();     // Output: Hello, John!
```

## Exercises

Follow the instructions in [robot.js](./exercises/robot.js)

## The Basics of `this`

The value of `this` depends on how a function is called. It can have different meanings in different situations:

- **Global Context**: When `this` is used outside of any function or object, it refers to the global object. In web browsers, the global object is the `window` object.

- **Method Invocation**: When a function is called as a method of an object, `this` refers to the object on which the method is being called.

- **Constructor Invocation**: When a function is used as a constructor function with the `new` keyword, `this` refers to the newly created instance.

- **Explicit Binding**: The `this` keyword can be explicitly set using methods like `call()`, `apply()`, or `bind()`, which allow you to specify the object that should be bound to `this` within a function.


## "this" Keyword and Arrow Functions

When it comes to arrow functions, the behavior of the `"this"` keyword is a bit different. Arrow functions do not have their own `"this"` value. Instead, they inherit the value of `"this"` from the surrounding scope, which is the context in which the arrow function is defined.

To put it simply, when we use the `"this"` keyword inside a regular function, it refers to the object that the function is being called on. But when we use the `"this"` keyword inside an arrow function, it will not have its own `"this"` value and will instead inherit it from the surrounding scope.

Lets see how it works:
```js
// Regular Function
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: Hello, my name is John

// Arrow Function
const person = {
  name: "John",
  age: 30,
  greet: () => {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: Hello, my name is undefined
```
In the first example, the `greet()` function inside the `person` object uses the `"this"` keyword, which refers to the `person` object itself. So, when calling `person.greet()`, it correctly outputs the person's name.

In the second example, the `greet()` function is defined as an arrow function. Arrow functions do not bind their own `"this"` value and instead inherit it from the surrounding scope, which is the `global` scope in this case. As a result, accessing `this.name` inside the arrow function returns `undefined`.

To summarize, regular functions have their own `"this"` value determined by the object they belong to, while arrow functions inherit the `"this"` value from the surrounding scope.

This difference is important to keep in mind because it affects how we access and use the "this" keyword in different contexts. Regular functions and arrow functions behave differently in terms of how they handle the `"this"` keyword.



## Destructured Assignment

Destructured assignment is a convenient feature in JavaScript that allows us to extract values from objects and arrays and assign them to variables in a single line of code. It provides a concise way to access and work with specific properties of an object without having to access them one by one.

```javascript
// Example of destructured assignment
const { name, age, city } = person;
```
By using destructured assignment, we can easily extract values from an object and assign them to variables with meaningful names.

---

In this class, we have covered the concepts of built-in Object methods, "this" keyword, arrow functions, and destructured assignment. Understanding these advanced concepts will enhance your skills in working with JavaScript objects.
