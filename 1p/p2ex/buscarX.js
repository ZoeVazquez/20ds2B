var anArray = [2, 3, 4, 5, 6]

n=7;

for (let x of anArray){
    console.log(x)
    if(x === n){
	console.log("Encontrado");
	break;
    }
}
