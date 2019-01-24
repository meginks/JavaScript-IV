/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/ 
/* my code from js iii is in comments */ 

/*** function GameObject (properties) {
this.createdAt = properties.createdAt;
this.dimensions = properties.dimensions;
  this.destroy = function () {
    console.log(`${this.name} was removed from the game`);
    }
}; ***/ 

class GameObject {
    constructor(properties) {
    this.createdAt = properties.createdAt;
    this.dimensions = properties.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
};


/***  function CharacterStats (attributes) {
  this.healthPoints = attributes.healthPoints;
  this.name = attributes.name;
};

CharacterStats.prototype.takeDamage = function() {
  console.log(`${this.name} took damage`);
}
**/
/** have to change this to a child for inheritance pattern to work */ 

class CharacterStats extends GameObject {
    constructor(charStatsAttrs) {
        super(charStatsAttrs);
        this.healthPoints = charStatsAttrs.healthPoints;
        this.name = charStatsAttrs.name;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
} 


/*** function Humanoid (attributes) {
  GameObject.call(this, attributes);
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
};

Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  console.log(`${this.name} offers a greeting in ${this.language}`);
} 
**/ 

class Humanoid extends CharacterStats {
    constructor(humanoidAttrs) {
        super(humanoidAttrs);
        this.team = humanoidAttrs.team;
        this.weapons = humanoidAttrs.weapons;
        this.language = humanoidAttrs.language;
    } 
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}



  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table 
  console.log(mage.weapons); // Staff of Shamalama 
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

/*** 
  function Villain (attributes) {
    this.evilName = attributes.evilName;
    this.nickName = attributes.nickName;
    Humanoid.call(this, attributes);
    this.avadaKedavra = function (victim) {
      if (victim.healthPoints > 0) {
        victim.healthPoints -= 1; 
        console.log(`${victim.name} now has ${victim.healthPoints} health points`)
      } if (victim.healthPoints === 0) {
        victim.destroy();
      } else {
        console.log(`The spell didn't work! ${victim.name} is still alive, but wounded!`);
      }
    }
  };
***/ 

class Villain extends Humanoid {
    constructor(villainAttrs) {
        super(villainAttrs); 
        this.evilName = villainAttrs.evilName;
        this.nickName = villainAttrs.nickName;
    }
    avadaKedavra(victim) {
        if (victim.healthPoints > 0) {
            victim.healthPoints -= 1; 
            return `${victim.name} now has ${victim.healthPoints} health points`;
          } if (victim.healthPoints === 0) {
            victim.destroy();
          } else {
            return `The spell didn't work! ${victim.name} is still alive, but wounded!`;
          }
    }
};


  const voldemort = new Villain({
    name: 'Tom Riddle',
    evilName: 'Voldemort',
    nickName: 'He who must not be named',
    healthPoints: 100,
    language: ['Parseltongue', 'English'],
    weapons: ['wand'] 
  });

/** 
  function Hero (attributes) {
    Humanoid.call(this, attributes);
    this.goodName = attributes.goodName;
    this.nickName = attributes.nickName;
    this.expelliarmus = function (subject) {
        console.log(`${subject.evilName} drops his ${subject.weapons}!`);
    };
  } 
  **/ 
class Hero extends Humanoid {
    constructor(heroAttrs) {
        super(heroAttrs);
        this.goodName = heroAttrs.goodName;
        this.nickName = heroAttrs.nickName;
    }
    expelliarmus(subject) { 
        return `${subject.evilName} drops his ${subject.weapons}!`;
    }
};

  const harry = new Hero({
    name: 'Harry Potter', 
    goodName: 'the Chosen One', 
    nickName: 'the boy who lived', 
    healthPoints: 100, 
    team: 'Griffindor',
    language: ['Parseltongue', 'English'],
    weapons: ['wand'], 
  });

  


  console.log(voldemort.avadaKedavra(harry));

  console.log(harry.expelliarmus(voldemort));