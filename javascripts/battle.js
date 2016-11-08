$(document).ready(function(){

  let showSelection = $("#submitResult");  
  let outputDiv = $("#output");
  let submitBtn = $("#submit");
  let attackBtn = $("#attack");
  let robot1;
  let robot2;
  let name1;
  let name2;
  let select1 = $("#selectOne");
  let select2 = $("#selectTwo");

  submitBtn.click(newPlayer);
  console.log("submit", submit);
  attackBtn.click();

function newPlayer () {
  event.preventDefault();
  name1 = $("#name1").val();
  name2 = $("#name2").val();
  robot1 = new window[select1.val()]();
  robot2 = new window[select2.val()]();

$("#submit").on("click", function(){
  console.log("button works");
})

     
let output = `<p>${name1} is the ${player1.name} robot and starts with ${player1.health} health and ${player1.damage} damage.</p>`;
  output += `<p>${name2} is the ${player2.name} robot and starts with ${player2.health} health and ${player2.damage} damage.</p>`;
  showSelection.append(output);
 };
});




