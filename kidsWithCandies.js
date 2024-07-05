function kidsWithCandies(candies, extraCandies) {
    // Find the maximum number of candies any kid currently has
    const maxCandies = Math.max(...candies);
    
    // Map over the candies array to determine if each kid can have the greatest number of candies
    // after receiving the extraCandies. This is true if their current candies plus extraCandies
    // is greater than or equal to maxCandies.
    const result = candies.map(candy => candy + extraCandies >= maxCandies);
    
    return result;
}

// Example 1
console.log(kidsWithCandies([2,3,5,1,3], 3)); // [true,true,true,false,true]

// Example 2
console.log(kidsWithCandies([4,2,1,1,2], 1)); // [true,false,false,false,false]

// Example 3
console.log(kidsWithCandies([12,1,12], 10)); // [true,false,true]