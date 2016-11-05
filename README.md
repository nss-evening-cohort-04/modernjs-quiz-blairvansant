Code/Tools Requirements

Use ES6 language features wherever you can. At a minimum, you should be using let, const, fat arrows, property shorthand, method properties, and string templates.
Have a Grunt task running at all times to validate your JavaScript. We will be validating your project and we should see 0 errors.

You must use jQuery for interacting with the DOM.

Logical Requirements

You'll be building robots to battle each other.

1.A base Robot function.
2.Define three robot type functions (e.g. Drone, Bipedal, ATV).
3.Each type must have a unique property, for example, if it is aerial or ground based.
4.Define at least 2 specific robot model functions for each type.
5.Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
6.Give each robot model a different range of damage they do using the same technique.

Functional Requirements

1.When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
2.You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
3.Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
4.Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

The Viper Drone defeated the Behemoth ATV with its flamethrower.