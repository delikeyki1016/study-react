class Message {
    constructor(name, msg) {
        this.name = name;
        this.msg = msg + ' ' + this.name;
    }
}

export default Message