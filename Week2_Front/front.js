class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        let node_head = new Node(val)

        if(!this.head) {
            this.head = node_head;
            return this
        }

        node_head.next = this.head;
        this.head = node_head;
    }


    removeFront() { 
    if (!this.head) {
    return;
    }
    this.head = this.head.next;
    }

    valueFront() { 
   // return this.head.next.data
    return this.head.data
}


}

let node1 = new Node(500);
let node2 = new Node(800);
let node3 = new Node(900);
let node4 = new Node(300);



let sll1 = new LinkedList()

sll1.head = node1;

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = null

//sll1.addFront(834);
//sll1.removeFront();

//console.log(sll1);
console.log(sll1.valueFront());