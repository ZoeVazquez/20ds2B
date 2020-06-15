function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
   }
   function push(element) {
    this.dataStore[this.top++] = element;
   }
   function peek() {
    return this.dataStore[this.top-1];
   }
   function pop() {
    return this.dataStore[--this.top];
   }
   function clear() {
    this.top = 0;
   }
   function length() {
    return this.top;
   }
   var stack = new Stack();
   stack.push("David");
   stack.push("Raymond");
   stack.push("Bryan");
   console.log("length: " + stack.length());
   console.log(stack.peek());
   var popped = stack.pop();
   console.log("The popped element is: " + popped);
   console.log(stack.peek());
   stack.push("Cynthia");
   console.log(stack.peek());
   stack.clear();
   console.log("length: " + stack.length());
   console.log(stack.peek());
   stack.push("Clayton");
   console.log(stack.peek());