
var sumDivisibleByK = function(nums, k) {
    let result = 0;
    let count =1
    for(let i=0; i<nums.length; i++){
         if( nums[i] === nums[i+1]){
             ++count 
         }
         if( nums[i] !== nums[i+1]){
             if(count % k === 0){
                  result= result + nums[i]* count 
             count =1
                }
              
         }
    }
     return  result
};
console.log(sumDivisibleByK([1,2,2,3,3,3,3,4],  2));
