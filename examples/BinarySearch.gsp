
function binarySearch(nums: int[], search: int): int { 
        var left = 0
        var right = nums.length - 1
        while (left <= right) { 
            var mid = left + (right - left) / 2
  
            if (nums[mid] == search) 
                return mid; 
  
            if (nums[mid] < search) 
                left = mid + 1; 
            else
                right = mid - 1; 
        } 
        return -1; 
} 
  
var arr = new int[]{ 2, 3, 4, 10, 40 }; 
var x = 4; 
var result = binarySearch(arr, x); 

print(result)