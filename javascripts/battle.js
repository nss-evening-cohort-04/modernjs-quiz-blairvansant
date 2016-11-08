"use strict";

$(document).ready(function(){

let player1 = new Aerial();
let player2 = new Ground();
console.log("player one", player1);
console.log("player two", player2);

  let showSelection = $("#submitResult");  
  let outputDiv = $("#output");
  let submitBtn = $("#submitButton");
  let attackBtn = $("#attack");
  // let robot1;
  // let robot2;
  // let name1;
  // let name2;
  let select1 = $("#selectOne");
  let select2 = $("#selectTwo");

  //attackBtn.click();

function newPlayer () {
  event.preventDefault();
  player1.name = $("#name1").val();
  player2.name = $("#name2").val();
  player1.robotType = select1.val();
  player2.robotType = select2.val();
  player1.robot = new window[select1.val()]();
  player2.robot = new window[select2.val()]();
  console.log('robot one', player1);
  console.log('robot two', player2);
let output = `<p>${player1.name} is the ${player1.robotType} robot and starts with ${player1.health} health and ${player1.damage} damage.</p>`;
  output += `<p>${player2.name} is the ${player2.robotType} robot and starts with ${player2.health} health and ${player2.damage} damage.</p>`;
  showSelection.append(output);
}


submitBtn.on("click", function(){
     console.log("submit", submitBtn);
  newPlayer();
});
    
function attack () {
  player1.health -= player2.damage;
  player2.health -= player1.damage;

if (player1.health > 0 && player2.health > 0){
  let output = `<p>${player1.name}, the ${player1.robotType} robot, now has ${player1.health} health.</p>`;
    output += `<p>${player2.name}, the ${player2.robotType} robot, now has ${player2.health} health.</p>`;
    outputDiv.append(output);
} else if (player2.health < 0){
       let output = `<p>${player1.name} won the battle and defeated ${player2.name}.`;
       outputDiv.append(output);
     } else {
       let output = `<p>${player2.name} won the battle and defeated ${player1.name}.`;
       outputDiv.append(output);
     }
}

attackBtn.on("click", function(){
  attack();
  });

});



