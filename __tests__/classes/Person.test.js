const Person = require('../../classes/Person'); 

describe('Person Class', () => {
    let person;

    beforeEach(() => {
        // Initialize a new Person instance before each test
        person = new Person("Aishah", "Japan"); 
    });

    test('should create an instance of Person', () => {
        expect(person).toBeInstanceOf(Person);
    });

    test('should assign name and destination correctly', () => {
        expect(person.name).toBe("Aishah");
        expect(person.destination).toBe("Japan");
    });

    test('bags should be empty array', () => {
        expect(person.bags).toEqual([]);
    });

    test('should add a bag to the bags array using addBag()', () => {
        const bag = new Bag(10,2); // Create a new Bag instance
        person.addBag(bag); // Add the bag to the person

        // Verify that the bag is added to the bags array
        expect(person.getBags()).toContain(bag); // Assuming getBags() returns the bags array
    });
});



