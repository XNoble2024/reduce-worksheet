//reduce
//whatever is returned from the callback function, becomes the new value of the accumulator
//accepts a callback function and an optional second parameter
//iterates through an array
//runs a callback on each value in the array
//the first parameter to the callback is eaither the first value in the array or the optional second parameter
//the first parameter to the callback is often called the "accumulator"
//the returned value from the callback becomes the new value of accumulator

let evens = [2, 4, 6, 8, 10];
evens.reduce(function (accumulator, nextValue) {
    return accumulator + nextValue;
});
/*
2
6
12
20
30
*/


const words = ['hello', 'i', 'love', 'you'];
words.reduce(function (accumulator, nextWord) {
    console.log(accum, nextWord);
    return accum + nextWord
});
/*
hello i
helloi love
helloilove you
*/

const midtermScores = [70, 88, 93, 94, 64, 62, 56];
const finalsScores = [92, 93, 76, 77, 78, 59, 61];

//lets find the minScore
/*
const minScore = midtermScores.reduce(function(min, nextScore){
    if(nextScore < min) {
        return nextScore;
    }
    return min;
});
*/
//56
//there is also a shorter way to wright this

const minMidtermScore = midtermScores.reduce(function (min, nextScore) {
    return nextScore < min ? nextScore : min;
});
//56
//or we can use this to find maxScore

const maxMidtermScore = midtermScores.reduce(function (max, nextScore) {
    return nextScore > max ? nextScore : max;
});
//94

const minOverallScore = finalsScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min;
}, minMidtermScore);
//56
