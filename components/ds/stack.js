class Stack {
    constructor(_items=[]) {
        this.items  = [];
        _items.foreach(e => {
            this.push(e);
        });
        return this;
    }

    push(item) {
        this.items.push(item);
        return this;
    }

    pop() {
        this.items.pop();
        return this;
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

export default Stack;
