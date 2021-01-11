const NUM_OF_ROLLS = 4;
const NUM_APPLIED_ROLLS = 3;
const NUM_DIE_SIDES = 6;

const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  }
  if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((score - 10) / 2);
};

class Character {
  constructor() {
    this._strength = this.constructor.rollAbility();
    this._dexterity = this.constructor.rollAbility();
    this._constitution = this.constructor.rollAbility();
    this._intelligence = this.constructor.rollAbility();
    this._wisdom = this.constructor.rollAbility();
    this._charisma = this.constructor.rollAbility();
    this._hitpoints = 10 + abilityModifier(this._constitution);
  }

  static rollAbility() {
    return Array.from(Array(NUM_OF_ROLLS))
      .map(e => Math.floor((Math.random() * Math.floor(NUM_DIE_SIDES)) + 1))
      .sort((a, b) => b - a)
      .slice(0, NUM_APPLIED_ROLLS)
      .reduce((acc, cur) => acc + cur, 0);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
   return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
   return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}

module.exports = {
  Character,
  abilityModifier
};

