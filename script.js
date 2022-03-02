"use strict";

//TODO - write your code here.

// 1. Declare an arrow function named randomDamage that has no parameters and returns a random integer between 1 and 10.
const randomDamage = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber;
  };
  console.log(randomDamage());
  
  /*Declare an arrow function named chooseOption that has two parameters named opt1
  and opt2. chooseOption does two things:
  ○ Declares and initializes a variable named randNum to either a 0 or 1, randomly.
  ○ Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary
  operator*/
  
  const chooseOption = (opt1, opt2) => {
    const randNum = Math.floor(Math.random() * 2);
    return randNum ? opt2 : opt1;
  };
  console.log(chooseOption("Pizza", "Healthy Food"));
  
  /*Declare a function expression named attackPlayer that has one parameter named
  health which returns a number equal to health minus the result of the randomDamage
  function*/
  
  const attackPlayer = function (health) {
    return health - randomDamage();
  };
  
  //console.log(attackPlayer(5));
  
  /*Declare an arrow function named logHealth that has two parameters named player
  and health which has a console.log method to state the following message: “player
  health: health”*/
  const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
  };
  
  const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
  };
  
  const isDead = (health) => health <= 0;
  
  function fight(player1, player2, player1Health, player2Health) {
    while (true) {
      const attacker = chooseOption(player1, player2);
      if (attacker === player1) {
        player2Health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
        if (isDead(player2Health)) {
          logDeath(player1, player2);
          break;
        }
      } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health)) {
          logDeath(player2, player1);
          break;
        }
      }
    }
  }
  
  fight("Nazima", "Taj", 100, 100);

 //Extended Challenges:

// printSquare: This function has a parameter for width. It logs a square shape to the
// console based on the width parameter. For example, given width 3, it would log:

const printSquare = (width) => {
    let string = "";
    for(let i = 0; i<width; i++){
        for(let j=0; j<width; j++){
            string +="#";
        }
        string += "\n";
    }
    return string;
}
console.log(printSquare(3));

// printTriangle: This function has a parameter for width. It logs a square shape to the
// console based on the width parameter. For example, given width 4, it would log:
const printTriangle = (width) => {
    let string = "";
    for(let i=0; i<width; i++){
        for(let j=0; j<width; j++){
            string += "";
        }
        for(let k =0; k<=i; k++){
            string += "#";
        } 
        string+="\n";
    }
    return string;
    }
    console.log(printTriangle(4));

// prioritize: This function has two parameters, urgent and important, both boolean. It
// returns the priority according to this rule: urgent & important → 1, important not
// urgent → 2, urgent not important → 3, neither urgent nor important → 4

const prioritize = (urgent, important)=> {
if(urgent && important){
    return `periority 1`;
}else if (!urgent && important){
    return `periority 2`;
}else if(urgent && !important){
    return `periority 3`;
}else {
    return `periority 4`;
}
}
console.log(prioritize(true, true));

// getGrade: This function takes in a number parameter (0 to 100). It returns the
// corresponding letter grade using the scale: A=90+, B=80+, C=70+, D=60+, F=below 60.
// Call the function with different numbers and log the results. (Note: there should be no
// console.log inside the function.)
const getGrade = (grade) => {
//grade >= 90 ? "A": grade >= 80 ? "B" : grade >=70 ? "C" : grade >=60 ? "D": "F";
if(grade >= 90 && grade <=100){
return `A`;
}else if(grade >=80 && grade < 90){
    return `B`;
}
else if(grade >=70 && grade < 80){
    return `C`;
}
else if(grade >=60 && grade < 70){
    return `D`;
}
else {
    return `F`;
}
}
console.log(getGrade(59));
console.log(getGrade(91));
console.log(getGrade(85));
console.log(getGrade(76));
console.log(getGrade(68));
  
  