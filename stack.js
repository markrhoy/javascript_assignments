class Stack{
    constructor(){
        this.stack = []
    }

    push(item){
        this.stack.push(item)
    }

    pop(){
        this.stack.pop()
    }

    check(){
        if(!this.stack.length){
            console.log("Stack is currently empty")
            return
        } 
        
        console.log(this.stack)
    }
}

const stack = new Stack

stack.push("Item A")
stack.push("Item B")
stack.check()
stack.pop()
stack.check()
stack.pop()
stack.check()