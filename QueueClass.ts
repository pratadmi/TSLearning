class QueueClass {

    //private size: number;
    private front: number;
    private rear: number;
    private data: T[];

    constructor(size: number) {
        this.front = -1;

        this.rear = -1;
        this.data = [];

    }

    enqueue(element: T): void{
        if (this.isEmpty()){
            this.front = 0;
            this.rear = 0;
        }
        else{
            this.rear++;
        }
        this.data[this.rear] = element;

        

    }
    
    dequeue(): T | undefined {
        let poppedElement = this.data[this.front];
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1;
        }
        else{
            this.front++;
        }
        return poppedElement;
    }


    isEmpty(){
        return this.front === -1 && this.rear === -1;
    }


}