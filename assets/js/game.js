var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;



var enemyName = "Roborto";
var enemyHealth = 50;
var enermyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

fight ()
enemyHealth = enemyHealth - playerAttack;
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " +enemyHealth+ " health left.");
}

playerHealth = playerHealth - enermyAttack;
console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");

if(playerHealth <= 0) {
    window.alert(playerName = " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

var playerHealth = 100;
if (playerHealth > 0) {
    console.log("Your player is still alive!")
}

