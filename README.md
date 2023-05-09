# Advanced JavaScript Objects

In this class, we will explore some advanced concepts related to JavaScript objects.

## Built-in Object Methods

JavaScript objects come with built-in [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) that allow us to perform various operations on objects. These methods provide powerful functionalities for working with objects. Some commonly used built-in methods for objects include:

- `Object.keys(obj)`: Returns an array of the keys of an object.
- `Object.values(obj)`: Returns an array of the values of an object.
- `Object.entries(obj)`: Returns an array of key-value pairs of an object.

## Group Activity

In this exercise, you will explore the MDN (Mozilla Developer Network) documentation for object methods in JavaScript. Follow these steps:

- Visit the [MDN website](https://developer.mozilla.org/).

- Search for "Object methods" and click on the "Object" link in the search results.

- Explore the list of object methods provided.

- Choose an interesting method and read its description, syntax, and usage examples.

- Prepare a presentation highlighting the method's name, functionality, syntax, and examples.

- Practice your presentation to ensure clarity.

- Present your findings to the class, encouraging questions and discussions.

- Take notes during other students' presentations to expand your knowledge.

By completing this exercise, you'll become familiar with using MDN documentation and deepen your understanding of JavaScript object methods.

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

## Exercises

Follow the instructions in [rocket.js](./exercises/rocket.js)


## Destructuring Objects in JavaScript

In JavaScript, object destructuring is a convenient way to extract individual properties from an object and assign them to variables. It provides a concise syntax for accessing and working with object properties.

To destructure an object, you use the following syntax:

![Syntax example](https://www.freecodecamp.org/news/content/images/2021/02/destructure.png)

Here, `name` is the property you want to extract from `user`. You can provide multiple property names separated by commas.

Consider the following object:

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

```
If you want to extract the `name` and `age` properties from the `person` object, you can use object destructuring as follows:

```js
const { name, age } = person;
console.log(name);  // Output: John
console.log(age);   // Output: 30

```

In this example, we created two variables `name` and `age` and assigned them the values of the corresponding properties from the `person` object. Now, you can directly use `name` and `age` variables instead of `person.name` and `person.age`.



---

In this class, we have covered the concepts of built-in Object methods, "this" keyword, arrow functions, and destructured assignment. Understanding these advanced concepts will enhance your skills in working with JavaScript objects.
