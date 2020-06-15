function fac(n){
   let f=n
    for (let i = 1; i < n; i++) {
	f=f*i
    }
    return f;
}

console.log(fac(6))
console.log(fac(5))
