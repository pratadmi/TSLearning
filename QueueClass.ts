class Queue<T> {
    data: T[];
    
    constructor(){
        this.data=[];
    }

    enqueue = (element: T) => this.data.push(element);

    dequeu = () => this.data.shift()

    peek = ()=> this.data[0];
    
    isEmpty = () => this.data.length <= 0;
    

}

let test = new Queue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(4);

console.log(test.peek(),"peek without remove");
test.enqueue(5);
test.enqueue(6);
test.dequeu();
test.dequeu();
test.dequeu();
console.log(test.peek(),"peek without remove");
test.dequeu();
test.dequeu();
test.dequeu();
console.log(test.peek(),"peek without remove");
test.dequeu();
test.dequeu();