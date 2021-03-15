class Count {
    countEvenNumbers(){
        let result = 0;
        for(let i = 0; i < input.length; i++){
            if(input[i] % 2 === 0){
                result += 1;
            }
        }
        return result;  
    }
};

module.exports = Count;