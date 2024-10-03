class Person {
    constructor(name,destination){
        this.name=name
        this.destination=destination
        this.bags=[]
    }

    addBag(bag) {
        bag.assignOwner(this);  // Assign this person as the bag's owner
        this.bags.push(bag);
    }

    getBags = () => {
        return this.bags
    }

}


module.exports = Person;