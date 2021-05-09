const add = (a, b) => {
    // console.log(arguments)
    return a + b
}

// console.log(add(10, 10, 100));

const user = {
    name: 'Aayush',
    location: ['Thane', 'Pune'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log(this.location);

        return this.location.map((city) => {
            return city;
        });
    }
};

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => {
            return num * this.multiplyBy;
        });
    }
}

console.log(multiplier.multiply());