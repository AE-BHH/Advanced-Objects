/*
Currently the `.checkEnergy()` method is not producing the correct output.

Refactor, or change, the method to use a function expression.
Make sure that `.checkEnergy()` has access to the other internal properties of the `rocket` object.

*/



const rocket = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
