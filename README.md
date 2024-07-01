# re.js
re.js is a javascript library for checking and using regex; so string filters will be easier. Follow the rest of this README to learn how to use it:

## commands offered:
exist 4 functions:

### re.re(s: string, r: regex, f: function(m: string))
the main function of this library is this function, where you check all matchs($r) of a string($s); each match is passed as an argument of the desired function($f($m));
```javascript
let str = "hello world, you good";
let match = /\s\w+/g;

re.re(str, match, function(m) {
    console.log(m);
});

//output: " world" " you" " good"
```
***NOTES***:
    -   if no have matchs, is returned one erro.
    - add the 'g' flag in the regex.

### re.matchs(s: string, r: regex)
where you check all matchs($r) of a string($s), returns: (*int*)the total of matchs in the string.

```javascript
let str = "hello world, you're good";
// /!\   note the specials caracters
let regex = /\s\w+/g;

let matchs = re.matchs(str, regex);
console.log(matchs);
//output: 3
// cause: array [ " world", " you", " good" ]
```
***NOTES***:
    -   if no have matchs, is returned 0(no?).
    - add the 'g' flag in the regex.

### re.reDesincluding(s: string, r: regex, f: function(m: string))
using re.re, plus... desincluding de reguex($r) use part
```javascript
let str = "hello world, you're good";
let regex = /\s\w+/g;

re.reDesincluding(str, regex, function(m) {
    console.log(m);
});
//output:
// cause: array [ ",", "\'re", <empty string> ]
//      no have rest                      ^
```
***NOTES***:
    -   if no have matchs, is returned one erro.
    - add the 'g' flag in the regex.

## credits
- director: artur
- programer: artur
- (all artur)

## license
MIT license, in license.txt (:
