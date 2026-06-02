class Dog {
  constructor(name, breed, weight = 3) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }

  increaseWeight(amount = 1) {
    this.weight += amount;
    console.log(this.weight);
  }

  decreaseWeight(amount = 1) {
    this.weight -= amount;
    console.log(this.weight);
  }
}

// const dog1 = new Dog("Шарик", "корги");

// console.log(dog1);

// dog1.increaseWeight();

// console.log(dog1);

// class HuntingDog {
//   constructor(name, breed, weight = 10, isTrained = false) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.isTrained = isTrained;
//   }

//   increaseWeight(amount = 1) {
//     this.weight += amount;
//     console.log(this.weight);
//   }

//   decreaseWeight() {
//     this.weight -= amount;
//     console.log(this.weight);
//   }

//   duckHunt() {
//     this.increaseWeight(0.5);
//     this.isTrained = true;
//     console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
//   }
// }

// const dog2 = new HuntingDog("Бим", "лайка", 20);

// console.log(dog2);

// dog2.duckHunt();

// console.log(dog2);

class HuntingDog extends Dog {
  constructor(name, breed, weight = 10, isTrained = false) {
    super(name, breed, weight);
    this.isTrained = isTrained;
  }

  increaseWeight(amount = 1) {
    this.weight += amount;
    console.log(this.weight);
  }

  decreaseWeight() {
    this.weight -= amount;
    console.log(this.weight);
  }

  duckHunt() {
    this.increaseWeight(0.5);
    this.isTrained = true;
    console.log(`${this.name} поймал утку! Теперь он дрессированный!`);
  }
}

const dog2 = new HuntingDog("Бим", "лайка", 20);

console.log(dog2);

dog2.duckHunt();


class RetrievingDog extends HuntingDog {
  constructor(name, breed, weight = 10, isTrained) {
    super(name, breed, weight, isTrained);
  }

  retrieve(item) {
    console.log(`${this.name} вернул ${item}!`);
    this.increaseWeight(0.25);
  }
}

const dog3 = new RetrievingDog("Рекс", "ретривер", 8);

dog3.retrieve("мячик");

dog3.duckHunt();

console.log(dog3);