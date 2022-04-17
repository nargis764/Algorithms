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
    

    display() {
        let runner = this.head;
        let string1 ="";
    while(runner != null) {
        
        string1 += runner.data + "-";   
        runner = runner.next;        
    }
    return string1;
    } 


}

let node1 = new Node(500);
let node2 = new Node(600);
let node3 = new Node(700);
let node4 = new Node(800);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

let sll2 = new LinkedList();
sll2.head = node1;

//console.log(sll2)
console.log(sll2.display())