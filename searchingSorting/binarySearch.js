function searchTarget(target, nums) {
    let l = 0
    let r = nums.length - 1

    while (r >= l){
        let m = Math.floor((l + r)/2)

        if (target === nums[m]){
            return m
        } else if (target < nums[m]){
            r = m-1
        } else{
            l = m + 1
        }
    }
    return -1 
    
};
console.log(searchTarget(9, [-4,-1,0,4,6,7,9,11,13]))