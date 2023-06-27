class LinkedList {
    head: Node | null;
    
    constructor(){
       this.head = null;
    }

   

}


class Node<T> {
    value: T;
    next: Node | null;

    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

