function solve(s: string): boolean{
    let pre = s.charCodeAt(0);

    for(let i = 0; i < s.length; i++){
        if(i > 0){
            if(s.charCodeAt(i) > pre &&
            s.charCodeAt(i) >= 'a'.charCodeAt(0) && 
            s.charCodeAt(i) <= 'z'.charCodeAt(0)){
                pre = s.charCodeAt(i);
            }else{
                return false;
            }
        }
    }

    return true;
}

let s = 'effg';
console.log(solve(s)); // false

s = 'cdce';
console.log(solve(s)); // false

s = 'ace';
console.log(solve(s)); // true

s = 'bxz';
console.log(solve(s)); // true