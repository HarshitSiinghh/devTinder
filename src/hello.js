
var rotateString = function(s, goal) {

if (s.length !== goal.length) return false;
    
    // Concatenate s with itself
    // If goal is a rotation, it will appear as a substring
    console.log((s + s));
    
    return (s + s).includes(goal);  
};
console.log(rotateString("abcde" ,"cdeab")) ;
