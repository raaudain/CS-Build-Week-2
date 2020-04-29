var twoSum = function(nums, target) {

    // Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    

    // Duplicate cleaner
    const set = new Set()

    // Array cleaned of duplicates
    const array = []
    
    // Stores differences and indices
    const table = {}

    nums.forEach(num => set.add(num))

    set.forEach(s => array.push(s))
    
    for(let index = 0; index < array.length; index++){
        
        const difference = target - array[index];
        
        // Checks if difference is defined in object
        if(table[difference] !== undefined){
            // Returns index and value/index of difference in table
            console.log([table[difference], index])
            return [table[difference], index]
        }
        else{
            table[array[index]] = index
        }
    }

    // Time complexity: 0(n)
    // Space complexity: 0(n)

};

twoSum([2, 7, 11, 15], 9)
//twoSum([2, 2, 7, 1, 3], 4)