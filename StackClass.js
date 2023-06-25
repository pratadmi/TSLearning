var StackClass = /** @class */ (function () {
    function StackClass(size) {
        this.size = size;
        this.pointer = -1;
        this.top = this.pointer;
        this.data = [];
    }
    StackClass.prototype.push = function (element) {
        this.data[++this.pointer] = element;
        this.top = element;
        console.log(this.data[this.pointer]);
    };
    StackClass.prototype.pop = function () {
        if (this.pointer >= 0) {
            var poppedElement = this.data[this.pointer];
            this.data[this.pointer] = null;
            this.pointer--;
            console.log("popped:", poppedElement);
            return poppedElement;
        }
        else {
            return null;
        }
    };
    StackClass.prototype.getSize = function () {
        return this.pointer + 1;
    };
    StackClass.prototype.getTop = function () {
        return this.data[this.pointer];
    };
    StackClass.prototype.isEmpty = function () {
        return this.pointer === -1;
    };
    return StackClass;
}());
console.log("Testing StackClass");
// Create a new stack instance
var stack = new StackClass(5);
// Test pushing elements to the stack
stack.push(10);
console.log("Expected output: Pushed: 10");
stack.push(20);
console.log("Expected output: Pushed: 20");
stack.push(30);
console.log("Expected output: Pushed: 30");
stack.push(40);
console.log("Expected output: Pushed: 40");
stack.push(50);
console.log("Expected output: Pushed: 50");
// Try pushing an element when the stack is already full
stack.push(60);
console.log("Expected output: Stack Overflow");
// Test getting the top element
console.log("Expected output: Top element: 50");
// Test popping elements from the stack
var poppedElement1 = stack.pop();
console.log("Expected output: Popped element: 50");
var poppedElement2 = stack.pop();
console.log("Expected output: Popped element: 40");
// Test getting the current size of the stack
console.log("Expected output: Stack size: 3");
// Test isEmpty() method
console.log("Expected output: Is stack empty? false");
// Pop remaining elements
stack.pop();
stack.pop();
stack.pop();
console.log("Expected output: Stack size: 0");
// Test isEmpty() method when the stack is empty
console.log("Expected output: Is stack empty? true");
// Test getting the top element when the stack is empty
console.log("Expected output: Top element: null");
