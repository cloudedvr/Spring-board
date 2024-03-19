function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            console.log(noise);
        }
    };
}

// Example usage:
const cat = createAnimal('cat', 'meow', 'meow');
const dog = createAnimal('dog', 'bark', 'woof');

cat.meow(); // Output: meow
dog.bark(); // Output: woof
