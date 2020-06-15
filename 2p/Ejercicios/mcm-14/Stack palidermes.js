function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.length = length;
   }
   function length() {
    return this.top;
   }
   function push(element) {
    this.dataStore[this.top++] = element;
   }
   function pop() {
    return this.dataStore[--this.top];
   }
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
    rword += s.pop();
    }
    if (word == rword) {
    return true;
    }
    else {
   
    return false;
    }
   }
   var word = "hello";
   if (isPalindrome(word)==true) {
    console.log(word + " is a palindrome.");
   }
   else {
    console.log(word + " is not a palindrome.");
   }
   word = "racecar"
   if (isPalindrome(word)==true) {
    console.log(word + " is a palindrome.");
   }
   else {
    console.log(word + " is not a palindrome.");
   }