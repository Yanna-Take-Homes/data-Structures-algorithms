/*

    Codewriting

    Given an integer n and an array a of length n, your task is to apply the following mutation to a:

    Array a mutates into a new array b of length n.
    For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
    If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].
    Example

    For n = 5 and a = [4, 0, 1, -2, 3], the output should be mutateTheArray(n, a) = [4, 5, -1, 2, 1].

    b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
    b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
    b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
    b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
    b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
    So, the resulting array after the mutation will be [4, 5, -1, 2, 1].

    Input/Output

    [execution time limit] 4 seconds (js)

    [input] integer n

    An integer representing the length of the given array.

    Guaranteed constraints:
    1 ≤ n ≤ 103.

    [input] array.integer a

    An array of integers that needs to be mutated.

    Guaranteed constraints:
    a.length = n,
    -103 ≤ a[i] ≤ 103.

    [output] array.integer

    The resulting array after the mutation.

*/

/*
    Problem in own words
    -----------------------
    Given array a, create an array b such that for every index ( n ) in a, 
    b[ n ] = a[ n - 1 ] + a[ n ] + a[ n + 1 ]
    If any element in the sum above doesn't exist, set that summand to 0. 

    Algorithm
    ---------------
    1) Iterate through the array
        - Keep track of the element at the current index, the index before, and the 
        index after. 
        - If some element doesn't exist, set it to 0. Notice that the only time an element wouldn't exist is:
            if i = 0, the index ( i - 1 ) doesn't exist in the array.
            if ( i = startingArray.length - 1 ), the index ( i + 1 ) doesnt exist in the array.
        - add all those elements together and save to the new array

    Edge Cases
    --------------
    1) What if a has only one element? --> return the array.

*/

function mutateTheArray( n, a ) {
    if ( n == 1 ) return a;
    let b = [];
    for ( let i = 0; i < n; i++ ) {
        let curIdx = i;
        let prevIdx = i - 1;
        let nxtIdx = i + 1;

        if ( curIdx ==  0 ) b.push( a[ curIdx ] + a[ nxtIdx ] );
        else if ( curIdx == a.length - 1 ) b.push( a[ prevIdx ] + a[ curIdx ] );
        else {
            b.push( a[ prevIdx ] + a[ curIdx ] + a[ nxtIdx ] );
        }
    }
    return b;
}
n = 5;
a = [4, 0, 1, -2, 3];
console.log( mutateTheArray( n, a ) )

/*
    Test Cases
    -----------------
    For n = 5 and a = [4, 0, 1, -2, 3], the output should be mutateTheArray(n, a) = [4, 5, -1, 2, 1].
*/

/*
    Big O
    -----------
    Our time complexity is O( n ) algorithm, since we use a for-loop to iterate through the input array. 
    Our space complexity is O( n ), since our input creates/returns a new array with length n. 
*/

/*
    Questions/Thoughts
    -----------------------
    ...
*/

