class StackClass {

    private size: number;
    private pointer: number;
    private top: number;
    data: any[];

    constructor(size: number) {
        this.size = size;
        this.pointer = -1;
        this.data = [];

    }

    push(element: any) {
        this.data[++this.pointer] = element;
        console.log(this.data[this.pointer]);
                
    }

    pop(){
        if(this.pointer >=  0){
        const poppedElement= this.data[this.pointer]; 
        this.data[this.pointer] = null;
        this.pointer--;
        console.log("popped:", poppedElement);
        
        return poppedElement;
        }
        else{
            return null;
        }
    }

    getSize(): number{
        return this.pointer+1;

    }

    getTop() {
        return this.data[this.pointer];
    }

    isEmpty(){
        return this.pointer === -1;
    }


}