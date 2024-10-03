const Bag = require('../../classes/Bag'); // Importing the Bag class

describe('Bag Class', () => {
    let bag;

    beforeEach(() => {
        // Initialize a new Bag instance before each test
        bag = new Bag(15, 1); // Assuming weight = 15 and id = 1
    });

    test('should create an instance of Bag', () => {
        expect(bag).toBeInstanceOf(Bag);
    });

    test('should assign weight and id correctly', () => {
        expect(bag.weight).toBe(15);
        expect(bag.id).toBe(1);
    });

    test('should have an initial owner of null', () => {
        expect(bag.getOwner()).toBe(null);
    });

    test('should assign owner correctly using assignOwner()', () => {
        const person = new Person('John Doe', 'New York'); 
        bag.assignOwner(person); 
        expect(bag.getOwner()).toBe(person);
});
});
