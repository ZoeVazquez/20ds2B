function Mathpow(base, potencia){
    let resultado=1
    for(var i=1;i<=potencia;++i){
	resultado = resultado * base
    }
    return resultado
}
let base = 2, potencia = 4
console.log(Mathpow(base, potencia))
