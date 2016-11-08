"use strict";

function Robot () {
  this.attackType = null;
  this.damage = Math.floor(Math.random() * 10);
  this.health = 0;
  this.weapon = null;
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function Aerial () {
  this.attackType = "Aerial";
  this.health = getRandom(50, 80);
  this.damage = 18;

}
Aerial.prototype = new Robot();

function Ground () {
  this.attackType = "Ground";
  this.health = getRandom(60, 120);
  this.damage = 17;
}
Ground.prototype = new Robot();
  
function AerialDrone () {
  this.type = "Drone";
  this.damage += 7;
}
AerialDrone.prototype = new Aerial();

function AerialBipedal () {
  this.type = "Bipedal";
	this.damage += 12;
}
AerialBipedal.prototype = new Aerial();

function AerialATV () {
  this.type = "ATV";
	this.damage += 16;
}
AerialATV.prototype = new Aerial();

function GroundDrone () {
  this.type = "Drone";
	this.damage += 9;
}

GroundDrone.prototype = new Ground();

function GroundBipedal () {
  this.type = "Bipedal";
	this.damage += 11;
}

GroundBipedal.prototype = new Ground();

function GroundATV () {
  this.type = "ATV";
	this.damage += 18;
}

GroundATV.prototype = new Ground();


// button.click(); {
//   if ("drone") {
//     let player1 = new AerialDrone();
//   }
// }
// button.click{
//   if (bipedal){
//     let player1 = new GroundATV();
//   }

//   player1.name = 
// };

// let weapon = new sword()
// player1.weapon = weapon


// Functional Requirements

// 1.When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// 2.You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// 3.Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// 4.Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

// The Viper Drone defeated the Behemoth ATV with its flamethrower.






























