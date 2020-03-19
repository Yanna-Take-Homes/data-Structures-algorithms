/*

Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.


*/

/* Algorithm
---------------
Iterate through the array, keeping track of each element and unique elements seperately, using two objects.
    if the current element is not in the tracker object
        add it to the tracker object and the uniques object
    if the current element is in the tracker object
        if the element is also in the uniques object,
        delete it from the uniques obj.

else return '_';

*/

function firstNotRepeatingCharacter( s ) {
    const obj = {};
    const obj1 = {};
    for ( const k of s ) {
        if ( !obj[ k ] ) { 
            obj[ k ] = true;
            obj1[ k ] = true;
        }
        else {
            if ( obj1[ k ] ) delete obj1[ k ];
        }
    }
    const keys = Object.keys( obj1 );
    if ( keys ) return keys[ 0 ];
    else return '_';
}

/*
Complexity
------------
Our algo is O( n ) due to looping over the entire string
Our space complexity is O( 3 ) since we store two objects and one array in memory. 

Questions
-----------
What's the time complexity of Object.keys( obj )?  
*/


// the above solution wasn't accepted due to time constraints, even though it has superior big O
// the below solution was acepted. but due to using Arr.filter, it has O( n ^ 2 )

function firstNotRepeatingCharacter( s ) {
    let res = {};
    for ( const k of s ) {
        if ( !res[ k ] ) res[ k ] = k;
        else res[ k ] = 'dupe';
    }
    res = Object.values( res ).filter( val => val.length == 1 );
    if ( res.length > 0 ) return res[ 0 ];
    else return '_';
}


// the below solution is O( n ) time and O( c ) space!
function firstNotRepeatingCharacter( s ) {
    const obj = {};
    const obj1 = {};
    for ( const k of s ) {
        if ( !obj[ k ] ) { 
            obj[ k ] = true;
            obj1[ k ] = true;
        } else if ( obj1[ k ] ) delete obj1[ k ];
    }
    for ( let prop in obj1 ) return prop;
    return '_'
}

