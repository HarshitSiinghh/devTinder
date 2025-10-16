
var nextGreaterElement = function(nums1, nums2) {
    let stack =[]
    for(let i =0; i<nums1.length;i++){
      let next =-1
        let index = nums2.indexOf(nums1[i]);
        for(let j= index ; j<nums2.length; j++){
            if(nums1[i]<nums2[j]){
                next = nums2[j]
                break
            }
            else{
                
             
            }
        }
        stack.push(next)
    }
     return stack
    
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
