$(document).ready(function(){

  const showSelection = $("#submitResult");  
  const outputDiv = $("#output");
  const submitBtn = $("#submit");
  const attackBtn = $("#attack");
  let robot1;
  let robot2;
  let name1;
  let name2;
  const select1 = $("#selectOne");
  const select2 = $("#selectTwo");

  submitBtn.click();
  attackBtn.click();

function newPlayer () {
  event.preventDefault();
  name1 = $("#name1").val();
  name2 = $("#name2").val();
  robot1 = new window[select1.val()]();
  robot2 = new window[select2.val()]();

     
let output = `<p>${name1} is the ${player1.name} robot and starts with ${player1.health} health and ${player1.damage} damage.</p>`;
  output += `<p>${name2} is the ${player2.name} robot and starts with ${player2.health} health and ${player2.damage} damage.</p>`;
  showSelection.append(output);
};