//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums: int[]): int[] {
  var index = 0
    for (i in nums){
      if (i!= 0){
        nums[index] = i
        index ++
      }
    }
    for (k in index..|nums.length){
     nums[k] = 0 
    }
    return nums
}

print(moveZeros(new int[]{0,0,0,0}))
print(moveZeros(new int[]{1,2,3,4}))
print(moveZeros(new int[]{0,1,3,0,5,6}))
print(moveZeros(new int[]{10,1,3,50,5,6}))
print(moveZeros(new int[]{10,1,3,0,5,6,0,0}))
