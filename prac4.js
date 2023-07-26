function recFac(num){

    function calcFac(n){
        if(n === 0 || n === 1) 
        {
            return 1;
        }
        else{
            return n*calcFac(n-1);
        }
    }
}

const v=5;
const result=recFac(v);
console.log(`the factorial of ${v} is ${result}`);