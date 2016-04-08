class Hero {
  constructor(name, power, hp) {
    this.name = name
    this.power = power
    this.hp = hp
  }
  attack(target){
    target.takeDamage(this.power)
  }
  takeDamage(damage){
    this.hp -= damage
  }
  pickUpItem(){
    this.power += 10
  }
  usePower(target) {
    target.takeDamage(this.power)
    target.checkDead();
  };
}

class SuperHero extends Hero {
  constructor(name, power, hp, superpower) {
    super(name, power, hp)
    this.superpower = superpower
  }
    checkDead() {
      if(this.hp <= 0){
        alert("You have died Game Over!");
      }
    }
    useSuperPower(target) {
      target.takeDamage(this.superpower)
      target.checkDead();
    };
}

class Enemy extends Hero {
  super(name, power, hp, superpower) {
    // Hero.call(this, name, power, hp)
  }
    checkDead() {
      if(this.hp <= 0){
        alert("You have defeated the enemy!");
      }
    }
}


//characters
var archer = new SuperHero('Arrow', 50, 100, 51);
var wizard = new SuperHero('The Wiz', 10, 150, 40);
var character;


//enemies
var giantSpider = new Enemy('Greg', 150, 65);
var dragon = new Enemy('Harry', 200, 100);
var angrySquirrel = new Enemy('Bobby', 10, 10);



function chooseCharacter(){
  character = prompt('Choose a character: Press "w" for wizard or "a" for archer');
  console.log(character);
  if(character !== ('w') && character !==('a')){
    alert("please make a valid selection");
    character = prompt('Choose a character: Press "w" for wizard or "a" for archer');
  }
  if(character === 'a'){
    alert("You have selected the Archer!");
    character = archer;
    console.log(character);
  } else {
    alert("You have selected the Wizard!");
    character = wizard;
    console.log(character);
  }
}

function gameBoard() {
  var path = prompt('You enter a cave and come upon a series of tunnels: Press "1" for tunnel 1, "2", for tunnel 2, or "3" for tunnel 3')
  console.log(path);
  if(path !== ('1') && path !==('2') && path !==('3')){
    alert("please make a valid selection");
    path = prompt('You enter a cave and come upon a series of tunnels: Press "1" for tunnel 1, "2", for tunnel 2, or "3" for tunnel 3')
  }
  if(path === '1'){
    alert("You have selected tunnel 1!");
    alert("You have found a Sword on the and ground pick it up!")
    character.pickUpItem();
    console.log(character);
    var attack = prompt("Oh no you have encountered a giant spider!: Do you want to attack with your power or superpower?: Press 'p' for power Press 's' for superpower ");
      if(attack !== ('p') && attack !==('s')){
        alert("please make a valid selection");
        attack = prompt('Choose a character: Press "w" for wizard or "a" for archer');
      }
      if(attack === 'p'){
        alert("You attack with your power!");
        character.usePower(giantSpider);
        alert("The giantSpider still has " + giantSpider.hp + " HP left and the spider attacks you back");
        giantSpider.usePower(character);
      } else {
        alert("You attack with your superpower");
        character.useSuperPower(giantSpider);
        alert("The giantSpider still has " + giantSpider.hp + " HP left and the spider attacks you back");
        giantSpider.usePower(character);
      }
  } else if(path === '2'){
    alert("You have selected tunnel 2!");
    alert("You have found a Axe on the and ground pick it up!");
    character.pickUpItem();
    console.log(character);
    var attack = prompt("Oh no you have encountered a dragon!: Do you want to attack with your power or superpower?: Press 'p' for power Press 's' for superpower ");
      if(attack !== ('p') && attack !==('s')){
        alert("please make a valid selection");
        attack = prompt('Choose a character: Press "p" for wizard or "s" for archer');
      }
      if(attack === 'p'){
        alert("You attack with your power!");
        character.usePower(dragon);
        alert("The dragon still has " + dragon.hp + " HP left and the dragon attacks you back");
        dragon.usePower(character);
      } else {
        alert("You attack with your superpower");
        character.useSuperPower(dragon);
        alert("The dragon still has " + dragon.hp + " HP left and the dragon attacks you back");
        dragon.usePower(character);
      }
  } else {
    alert("You have selected tunnel 3!");
    console.log(path);
    var attack = prompt("Oh no you have encountered an angry squirrel!: Do you want to attack with your power or superpower?: Press 'p' for power Press 's' for superpower ");
      if(attack !== ('p') && attack !==('s')){
        alert("please make a valid selection");
        attack = prompt('Choose a character: Press "p" for wizard or "s" for archer');
      }
      if(attack === 'p'){
        alert("You attack with your power!");
        character.usePower(angrySquirrel);
      } else {
        alert("You attack with your superpower");
        character.useSuperPower(angrySquirrel);
      }
      if( angrySquirrel.hp <= 0) {
        alert("You find a treasure chest full of gold You win!");
      }
  }
}

chooseCharacter();
gameBoard();
