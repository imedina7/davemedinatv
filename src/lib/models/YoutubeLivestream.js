export default class YoutubeLivestream {
    constructor(YTID) {
        this.yt_id = YTID
    }
    set title(title) {
        this.title = title
    }
    get title() {
        return this.title
    }
    set startTime(startTime) {
        this.startTime = startTime
    }
    get startTime() {
        return this.startTime
    }
}