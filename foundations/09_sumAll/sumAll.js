const sumAll = function(a, b) {
    
    if((a>0 && b > 0) && (Number.isInteger(a) && Number.isInteger(b))){
        let sum = 0;
        let start = (a < b) ? a : b;
        let end = (a < b) ? b : a;
        for(let i = start; i <= end; i++){
            sum += i;
        }
        return sum;
        
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
