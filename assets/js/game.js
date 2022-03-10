var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enermyAttack = 12;


//Game states
//"WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"LOSE" - Player robots's health is zero or less


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");

    //fight or leave?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    if(promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    } else {
        window.alert(enemyNames + " still has " +enemyHealth+ " health left.");
    }

    playerHealth = playerHealth - enermyAttack;
    console.log(enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");

    if(playerHealth <= 0) {
        window.alert(playerName = " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player chooses to skip
    }else if (promptFight === "skip" || promptFight === "SKIP"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if(confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
    // if player did not chose 1 or 2 in prompt
    } else {
     window.alert("you need to pick a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length ; i++) {
    fight(enemyNames[i]);
}






