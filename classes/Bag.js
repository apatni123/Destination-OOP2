class Bag {
    #owner
    constructor(weight,id){
        this.weight=weight
        this.id=id
        this.#owner = null
    }

    getOwner = () => {
        return this.#owner
    }

    assignOwner = (Person) => {
        this.#owner=Person
    }
}


module.exports = Bag;