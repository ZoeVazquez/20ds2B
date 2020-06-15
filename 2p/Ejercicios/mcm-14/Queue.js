function Queue() {
 this.dataStore = [];
 this.enqueue = enqueue;
 this.dequeue = dequeue;
 this.front = front;
 this.back = back;
 this.toString = toString;
}
function enqueue(element) {
 this.dataStore.push(element);
}
function toString() {
 var retStr = "";
 for (var i = 0; i < this.dataStore.length; ++i) {
 retStr += this.dataStore[i] + "\n";
 }
 return retStr;
}
function dequeue() {
 return this.dataStore.shift();
}
function front() {
 return this.dataStore[0];
}
function back() {
 return this.dataStore[this.dataStore.length-1];
}
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());