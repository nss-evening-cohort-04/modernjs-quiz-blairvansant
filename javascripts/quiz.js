
"use strict";

//1. A base Robot function

function Robot () {
  this.attackType = null;
  this.damage = Math.floor(Math.random() * 10);
  this.health = 0;
  this.weapon = null;
  console.log(this);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//4. Define at least 2 specific robot model functions for each type
//5. Give each robot model a different range of health

function Aerial () {
  this.attackType = "Aerial";
  this.health = getRandomInt(50, 80);
  this.damage = 20;

}
Aerial.prototype = new Robot();

function Ground () {
  this.attackType = "Ground";
  this.health = getRandomInt(60, 120);
  this.damage = 20;
}
Ground.prototype = new Robot();
  
//2. Define three robot type functions (e.g. Drone, Bipedal, ATV)
//3. Aerial Robots: Drone, Bipedal, ATV
//6. Give each robot model a different range of damage they do using the same technique

//---AERIAL GROUP---

function AerialDrone () {
  this.type = "Drone";
  this.damage += 5;
}
AerialDrone.prototype = new Aerial();

function AerialBipedal () {
  this.type = "Bipedal";
	this.damage += 10;
}
AerialBipedal.prototype = new Aerial();

function AerialATV () {
  this.type = "ATV";
	this.damage += 15;
}
AerialATV.prototype = new Aerial();

//2. Define three robot type functions (e.g. Drone, Bipedal, ATV)
//3. Ground Robots: Drone, Bipedal, ATV
//6. Give each robot model a different range of damage they do using the same technique

//---GROUND GROUP---

function GroundDrone () {
  this.type = "Drone";
	this.damage += 5;
}

GroundDrone.prototype = new Ground();

function GroundBipedal () {
  this.type = "Bipedal";
	this.damage += 10;
}

GroundBipedal.prototype = new Ground();

function GroundATV () {
  this.type = "ATV";
	this.damage += 15;
}

GroundATV.prototype = new Ground();

let player1 = new Aerial();
let player2 = new Ground();{
console.log("player one health", player1.health);
console.log("player two health", player2.health);
  
}




































