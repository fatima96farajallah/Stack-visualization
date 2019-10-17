



class StackSet {
  constructor(maxSize) {
    if (arguments.length < 1) {
      throw new Error ('Woops, maxSize is required!')
    }
    
    this.stacks = [[]]
    this.maxSize = maxSize
  }
  
  push(value) {
    if (this.stacks[this.stacks.length - 1].length === this.maxSize) {
      this.stacks.push([])
    }
    
    this.stacks[this.stacks.length - 1].push(value) 
  }
  
  pop() {
   const value = this.stacks[this.stacks.length - 1].pop()
   
   if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
    this.stacks.pop()
   }
    
    return value
  }
}
const myStack = new StackSet(3)
// to test if it works
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.push(6)
function setAnimationpop(item) {
  item.className += " div1";
}
function setAnimationpush(item) {
  item.className += " div2";
}