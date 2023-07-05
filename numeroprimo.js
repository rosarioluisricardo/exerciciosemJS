//função que verifica se um numrero é primo
function primo(num){
    if(num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }

    return true
}

console.log(primo(7));
console.log(primo(10));