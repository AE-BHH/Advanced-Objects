/*
Method contex:
Let’s create a new object to practice using `this`.

1. Add a property of `model` and assign to it a value of '1E78V2'. Add another property, `energyLevel` and assign to it a value of 100.

2. Add a method named `provideInfo`. Inside the body of `provideInfo()`, return the following string by using interpolation:
'I am MODEL and my current energy level is ENERGYLEVEL.'
Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. 
Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!

3. Now to check .provideInfo() has access to the internal properties of robot. 
Log the result of calling .provideInfo() method on robot to the console.

*/


const robot = {
  
  
}

/*

Binding context:
Let's try usind the `bind` method with the `this` keyword.

1. Create a new object called `airCraft`.

2.Add a property of `model` and assign to it a value of '3DG67A'. Add another property, `energyLevel` and assign to it a value of 78.

3. Now we want to call the `provideInfo` method that is in the `robot` object and bind it to the `airCraft` object. 
The output we are expecting is: 'I am 3DG67A and my current energy level is 78.'


*/
