/*
    Given an array, find the average of all contiguous subarrays of size ‘K’ in it. Return each average within an array
    Example Input: Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
*/

// First Return Element would be the average of these k=5 elements: [1,3,2,6,-1]
// Second Return Element would be the average of these k=5 elements: [3,2,6,-1, 4]
// Third Return Element would be the average of these k=5 elements: [2,6,-1, 4, 1]
// And so on...

/* Naive Solution

We could use two loops. 

- *First we calculate how many averages our result will have. This is arr.length - k + 1*
- We use `arr.length-k+1` as our outer-loop terminator, and i will be used to access i_th elements of th array.
- Explanation

    The loop terminator is arr.length-k+1, because if the arr length
    is 9 like in the example, then we have 9-k+1 = 9-5+1 = 5 averages 
    to calculate. So the loop is keeping track of the number of singular averages being calculated, as well as being used to initialize j to the beginning element in each inner-loop iteration. 
        - First = [1,3,2,6,-1]
        - Second = [3,2,6,-1, 4]
        - Third =  [2,6,-1, 4, 1]
        - Fourth = [6,-1,4,1,8]
        - Fifth = [-1,4,1,8,2]

- The inner loop will be used to add the i_th element ( which j is initialized as) with the next 4 necessary elements for the average.
- At the end of the inner-loop iterations, we calculate the avergare and push it to our result.
- At the end of the outer-loop iterations, we have our resulting avergaes needed to solve the problem.

Notion Link: https://www.notion.so/Sliding-Window-d58e0127304e442f971a1b9daf13b533

*/

const findContigSums = ( k, arr ) => {
    const result = [];
    for ( let i = 0; i < arr.length-k+1; i++ ) {
        let sum = 0.0;
        // The iterator j is what is being used to add elements to average.
        for ( let j = i; j < k+i; j++ ) {
            sum += arr[ j ];
        }
        // Here we push the average to the result array and reset the sum 
        // for the next average's usage. 
        result.push( sum / k );
        sum = 0.0;
    }
    return result;
}

const result = findContigSums( 5, [ 1, 3, 2, 6, -1, 4, 1, 8, 2 ] );
console.log( `Averages of subarrays of size K: ${ result }` );
