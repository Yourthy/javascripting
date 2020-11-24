const arg = Number(process.argv.slice(2));


const newF = function(num){
    let newArray = [];
    for(let i = 0; i < num; i++){
        let r = Math.floor(Math.random() * 6) + 1;
        newArray.push(r);
    }
    return newArray.join(', ');
}
console.log(newF(arg));


