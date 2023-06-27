class LinkedList {
    head: Node | null;
    
    constructor(){
       this.head = null;
    }

    push(value:<T>) {
        const newNode = new Node(value);
    
        if (!this.head) {
          this.head = newNode;
        } else {
          let currentNode = this.head;
          while (currentNode.next) {
            currentNode = currentNode.next;
          }
          currentNode.next = newNode;
        }
    }

   
}


class Node<T> {
    value: T;
    next: Node | null;

    constructor(value:T) {
      this.value = value;
      this.next = null;
    }
}
