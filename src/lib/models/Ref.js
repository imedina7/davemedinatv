class Ref {

    constructor(id) {
        this.id = id
        this.type = 'button'
        this.location = 'landing'
    }
    /**
     * @param {string} loc
     */
    set setLoc(loc) {
        this.location = loc
    }
    get getLoc() {
        return this.location
    }
    /**
     * @param {string} type
     */
    set setType(type) {
        this.type = type
    }

    get getType() {
        return this.type
    }
}

module.exports = Ref