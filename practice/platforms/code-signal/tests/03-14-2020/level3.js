/*

You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".

You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual way. If both number of occurences and characters are equal, you should take the characters from the first string to the result.

Given two strings s1 and s2, return the result of the special merge function you are implementing.

Example

For s1 = "dce" and s2 = "cccbd", the output should be mergeStrings(s1, s2) = "dcecccbd".
All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.

For s1 = "super" and s2 = "tower", the output should be mergeStrings(s1, s2) = "stouperwer".
Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.

st uo pw 

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting only of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length ≤ 104.

[input] string s2

A string consisting only of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length ≤ 104.

[output] string

The string that results by merging s1 and s2 using your special merge function.

*/

/* Test Cases
------------------
For s1 = "dce" and s2 = "cccbd", the output should be mergeStrings(s1, s2) = "dcecccbd".
All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.

For s1 = "super" and s2 = "tower", the output should be mergeStrings(s1, s2) = "stouperwer".

s u p e r 
t o w e r

s t o u 
s t o u p e r w e r
Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.
*/

/* Problem Stated in own words
------------------------------------

You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual way. If both number of occurences and characters are equal, you should take the characters from the first string to the result.

Given two strings s and t, merge them together as follows
- if the nth character in s occurs within s, more times than the nth character in t occurs within t, then place s[ n ] before t[ n ]
- if they both occur the same amount of times in their respective strings, then compare their ASCII/alphanetic placement value and place the largest first 
- if both number of occurences and characters are equal, place the character from the first string first.


Algorithm
-------------
split the strings into two arrays
iterate through the longer array
if the current element from the longer array is unique
    if it is also larger than the other character (from the shorter array)
        place that character first, and the other second
    if it is smaller than the other character
        place the second character first, and the other second
if the current element is not unique, 
    if the other character is unique, place that one first and the other second
    if both characters aren't unique, place the character with the least amount of occurences first
if the sliding window from both arrays features the same elements
    place one of them in-between the other

*/



let [ s, t ] = [ "ss", "kf" ];
console.log( merge( s, t ) );

function merge( str1, str2 ) {
    let arr = [ ...str1, ...str2 ];
    let firstStart = 0; 
    let secStart = str1.length;
    let mergedStr = '';

    let stopCondition;
    if ( str1.length > str2.length ) stopCondition = str1.length;
    else stopCondition = str2.length;

    stopCondition

    for ( let i = 0; i < stopCondition; i++ ) {
        let afterIdx1 = firstStart+1;
        let afterIdx2 = secStart+1;;

        /* Function that performs a merge when characters at different strings are equal */
        let helper = () => {
            let dups = '';
            let idx1 = afterIdx1;
            let idx2 = afterIdx2;
            ( arr[ firstStart ] < arr[ secStart ] ) ? mergedStr += arr[ firstStart ] : mergedStr += arr[ secStart ];
            while ( arr[ idx1 ] == arr[ idx2 ] ) {
                dups += arr[ idx1 ];
                idx1++;
                idx2++;
            }
            mergedStr += dups; 
            ( arr[ firstStart ] < arr[ secStart ] ) ? mergedStr += arr[ secStart ] : mergedStr += arr[ firstStart ];
            mergedStr += dups;
            return mergedStr;
        } 
        
        /* If there are no duplicates in either respective array */
        if ( arr[ firstStart ] < arr[ secStart ] ) { 
            if ( arr[ afterIdx1 ] == arr[ afterIdx2 ] ) {
                helper();
            } else {
                mergedStr += arr[ firstStart ];
                mergedStr += arr[ secStart ]
            }
        } 
        else if ( arr[ firstStart ] > arr[ secStart] ) {
            if ( arr[ afterIdx1 ] == arr[ afterIdx2 ] ) {
                helper();
            } else {
                mergedStr += arr[ secStart ];
                mergedStr += arr[ firstStart ];
            }
        } else if ( arr[ firstStart ] == undefined || arr[ secStart ] == undefined ) {
            ( arr[ firstStart ] == undefined ) ? mergedStr += arr[ secStart ] : mergedStr += arr[ firstStart ];
        } 
        secStart ++;
        firstStart++;
    }
    console.log( mergedStr.length, arr.length );
    return mergedStr;
}



/*

        if ( ( new Set( [ ...str1 ] ).size + new Set( [ ...str2 ] ).size ) == arr.length ) {


Test cases
------------
For s1 = "dce" and s2 = "cccbd", the output should be mergeStrings(s1, s2) = "dcecccbd".
All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.

For s1 = "super" and s2 = "tower", the output should be mergeStrings(s1, s2) = "stouperwer".

*/

/*

s u p e r   t o w e r 

s   t

su  to
u o

sup tow
p w

supe towe
e e 

super tower
r r 

[ s ]



        if ( str1Obj[ arr[ firstStart ] ] < str2Obj[ arr[ secStart ] ] ) {
            mergedStr += arr[ firstStart ];
            mergedStr += arr[ secStart ];
        } else if ( str1Obj[ arr[ firstStart ] ] > str2Obj[ arr[ secStart ] ] ) {
            mergedStr += arr[ secStart ];
            mergedStr += arr[ firstStart ];
        }
*/

// [ 's', 'u', 'per' ] , [ 't', 'o', 'wer'  ]



