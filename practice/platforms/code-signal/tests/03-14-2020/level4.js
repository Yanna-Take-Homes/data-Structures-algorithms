/*
    Given an array of positive integers a, your task is to calculate the sum of every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.

    Example

    For a = [10, 2], the output should be concatenationsSum(a) = 1344.

    a[0] ∘ a[0] = 10 ∘ 10 = 1010,
    a[0] ∘ a[1] = 10 ∘ 2 = 102,
    a[1] ∘ a[0] = 2 ∘ 10 = 210,
    a[1] ∘ a[1] = 2 ∘ 2 = 22.
    So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

    For a = [8], the output should be concatenationsSum(a) = 88.

    There is only one number in a, and a[0] ∘ a[0] = 8 ∘ 8 = 88, so the answer is 88.

    Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer a

    A non-empty array of positive integers.

    Guaranteed constraints:
    1 ≤ a.length ≤ 105,
    1 ≤ a[i] ≤ 106.

    [output] integer64

    The sum of all a[i] ∘ a[j]s. It's guaranteed that the answer is less than 253.
    [JavaScript (ES6)] Syntax Tips

    // Prints help message to the console
    // Returns a string
    function helloWorld(name) {
        console.log("This prints to the console when you Run Tests");
        return "Hello, " + name;
    }
*/

/*
 a = [ 10, 2 ]

 a[ 0 ], a[ 0 ]
 a[ 0 ], a[ 1 ] 
 a[ 1 ], a[ 0 ] 
 a[ 1 ], a[ 1 ] 

 a = [ 10, 2, 3 ]

 [ 10, 2 ]
 a[ 0 ], a[ 0 ] = 1010
 a[ 0 ], a[ 1 ]  = 102
 a[ 1 ], a[ 0 ]  = 210
 a[ 1 ], a[ 1 ]  = 22

 [ 2, 3 ]
 a[ 1 ], a[ 1 ] = 22
 a[ 1 ], a[ 2 ] = 23
 a [ 2 ], a[ 1 ] = 32
 a[ 2 ], a[ 2 ] = 33

Algorithm
--------------
Set up a sliding window with two pointers
Iterate through the array, adding each concatention from the two pointers into the sum.
return the sum
*/


const concatentaionsSum = ( arr ) => {
    if ( arr.length < 2 ) return Number( String( arr[ 0 ] ).concat( String( arr[ 0 ] ) ) );
    let sum = 0;
    for ( let i = 0; i < arr.length-1; i ++ ) {
        sum += Number( String( arr[ i ] ).concat( String( arr[ i ] ) ) );
        sum += Number( String( arr[ i ] ).concat( String( arr[ i+1 ] ) ) );
        sum += Number( String( arr[ i+1 ] ).concat( String( arr[ i ] ) ) );
        sum += Number( String( arr[ i+1 ] ).concat( String( arr[ i+1 ] ) ) );
    }
    return sum;
}

let a = [10,2,3];  
console.log( concatentaionsSum( a ) ) ;

/*
Test Cases
-----------
let a = [10, 2];    --> 1344
let a = [10,2,3];   --> 1454
let a = [ 10 ];     --> 1010;


Big O
--------
Our algo is O( n ) since we only iterate through the array once at most. 
Space complexoty is constant since we only use one variable. 

*/