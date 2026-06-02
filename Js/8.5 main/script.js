class Dog {
    #weight;
    #name;
    #isTrained;

    constructor(name, breed, weight = 3) {
        this.#name = name;
        this.breed = breed;
        // this._weight = weight;
        this.#weight = weight;
    }

    get fullData() {
        return `${this.breed} ${this.#name}`;
    }

    // get weight() {
    //     // return this._weight ;
    //     return this.#weight;
    //     // return this.weight;
    // }

    // get isTrained() {
    //     return this.#isTrained;
    // }

    // get name() {
    //     return this.#name;
    // }

    // set weight(newWeight) {
    //     if (newWeight > 0) {
    //         //    this._weight  = newWeight;
    //         this.#weight = newWeight;
    //     } else {
    //         console.error('вес должен быт положительным числом');
    //     }
    // }

    // set isTrained(newStatus) {
    //     if (typeof newStatus === 'boolean') {
    //         this.#isTrained = newStatus
    //     } else {
    //         console.error('статус должен быт логическом типом');
    //     }
    // }


    // set name(newName) {
    //     if (typeof newName === 'string' && newName.trim() !== '') {
    //         this.#isTrained = newName
    //     } else {
    //         console.error('имя  должен быт не пустой строкой');
    //     }
    // }

    set fullData(value) {
        [this.breed, this.#name] = value.split(" ");
    }

    increaseWeight(amount = 1) {
        // console.log(this.#weight);
        // this.weight += amount;
        this.#weight += amount;
        // console.log(this.weight);
        console.log(this.#weight);
        this.#logWeightChange()
    }

    #logWeightChange(){
        console.log('вес изменен');
    }
}

const dog1 = new Dog("Бим", "лайка", 20);

// dog1.weight = -20
// dog1.weight = 50
// dog1._weight = -20
// dog1.#weight = 100

// dog1.increaseWeight(35)
// dog1.fullData = "болонка Бася";
// dog1.isTrained = 123
// dog1.name = ''
// console.log(dog1);

// dog1.#logWeightChange();  error

dog1.increaseWeight()