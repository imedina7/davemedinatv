import { Ref } from './Ref'

export default class Click {
    constructor(refid, url) {
        this.ref = new Ref(refid)
        this.date = new Date()
        this.url = url
    }
    get getRef() {
        return this.ref
    }
    get getDate() {
        return this.date
    }
    get getURL() {
        return this.url
    }
}
