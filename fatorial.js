//função que retorna um fatorial de um numero
function fatorial(n){
    if (n === 0 || n === 1){
        return 1;
    }

    return n * fatorial(n - 1);
}
console.log(fatorial(10));