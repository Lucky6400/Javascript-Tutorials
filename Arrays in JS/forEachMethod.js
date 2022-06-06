'use strict';



// for (const runs of yuvrajSinghLastInnings) {
//     if(runs>=100){
//         console.log(`Yuvraj Singh scored a ton by scoring ${runs} runs.`)
//     } else if (runs >=50 && runs <100){
//         console.log(`Yuvraj Singh scored a half century by scoring ${runs} runs.`)
//     } else {
//         console.log(`Yuvraj Singh failed to give a show and could only score ${runs} runs.`)
//     }
// };

/* //? -- SAME TASK WITH forEach METHOD -- */

const yuvrajSinghLastInnings = [
    101, 130, 50, 44, 67, 73, 12, 140, 59, 10, 22, 15, 52, 63, 135, 100,101, 130, 50, 44, 67, 73, 12, 140, 59, 10, 22, 15, 52, 63, 135, 100
];

yuvrajSinghLastInnings.forEach((runs, index, array) => {
    // THIS IS A HIGHER ORDER FUNCTION AND HENCE TAKES A CALLBACK FUNCTION. IT ALSO TAKES THE CURRENT ARRAY ELEMENT AS AN ARGUEMENT.
    // LET US CREATE A SIMPLE PROGRAM THAT INFORMS ABOUT YUVI'S INNINGS BASED ON HIS SCORE. IF ENDS WITH 1 THEN PRINT 1ST, IF ENDS WITH 2 THEN 2ND AND SO ON BUT NOT FOR NUMBERS FROM 4 TO 20. MEANS 11 SHOULD BE 11TH BUT 21 SHOULD BE 21ST, 32 SHOULD BE 32ND AND SO ON...

    if (runs >= 100) {
        console.log(`Yuvraj Singh scored a ton in his ${index + 1 === 1 ? `1st`: index + 1 === 2 ? `2nd`: index + 1 === 3 ? `3rd`: String(index + 1) > 20 && String(index + 1).at(-1) == 1 ? `${String(index + 1)}st`:  String(index + 1) > 20 && String(index + 1).at(-1) == 2 ? `${String(index + 1)}nd`:  String(index + 1) > 20 && String(index + 1).at(-1) == 3 ? `${String(index + 1)}rd`: `${index + 1}th`} innings by scoring ${runs} runs.`)
    } else if (runs >= 50 && runs < 100) {
        console.log(`Yuvraj Singh scored a half century in his ${index + 1 === 1 ? `1st`: index + 1 === 2 ? `2nd`: index + 1 === 3 ? `3rd`: String(index + 1) > 20 && String(index + 1).at(-1) == 1 ? `${String(index + 1)}st`:  String(index + 1) > 20 && String(index + 1).at(-1) == 2 ? `${String(index + 1)}nd`:  String(index + 1) > 20 && String(index + 1).at(-1) == 3 ? `${String(index + 1)}rd`: `${index + 1}th`} innings by scoring ${runs} runs.`)
    } else {
        console.log(`Yuvraj Singh failed to give a show in his ${index + 1 === 1 ? `1st`: index + 1 === 2 ? `2nd`: index + 1 === 3 ? `3rd`: String(index + 1) > 20 && String(index + 1).at(-1) == 1 ? `${String(index + 1)}st`:  String(index + 1) > 20 && String(index + 1).at(-1) == 2 ? `${String(index + 1)}nd`:  String(index + 1) > 20 && String(index + 1).at(-1) == 3 ? `${String(index + 1)}rd`: `${index + 1}th`} innings and could only score ${runs} runs.`)
    }
});

/*

Yuvraj Singh scored a ton in his 1st innings by scoring 101 runs.
Yuvraj Singh scored a ton in his 2nd innings by scoring 130 runs.
Yuvraj Singh scored a half century in his 3rd innings by scoring 50 runs.
Yuvraj Singh failed to give a show in his 4th innings and could only score 44 runs.
Yuvraj Singh scored a half century in his 5th innings by scoring 67 runs.
Yuvraj Singh scored a half century in his 6th innings by scoring 73 runs.
Yuvraj Singh failed to give a show in his 7th innings and could only score 12 runs.
Yuvraj Singh scored a ton in his 8th innings by scoring 140 runs.
Yuvraj Singh scored a half century in his 9th innings by scoring 59 runs.
Yuvraj Singh failed to give a show in his 10th innings and could only score 10 runs.
Yuvraj Singh failed to give a show in his 11th innings and could only score 22 runs.
Yuvraj Singh failed to give a show in his 12th innings and could only score 15 runs.
Yuvraj Singh scored a half century in his 13th innings by scoring 52 runs.
Yuvraj Singh scored a half century in his 14th innings by scoring 63 runs.
Yuvraj Singh scored a ton in his 15th innings by scoring 135 runs.
Yuvraj Singh scored a ton in his 16th innings by scoring 100 runs.
Yuvraj Singh scored a ton in his 17th innings by scoring 101 runs.
Yuvraj Singh scored a ton in his 18th innings by scoring 130 runs.
Yuvraj Singh scored a half century in his 19th innings by scoring 50 runs.
Yuvraj Singh failed to give a show in his 20th innings and could only score 44 runs.
Yuvraj Singh scored a half century in his 21st innings by scoring 67 runs.
Yuvraj Singh scored a half century in his 22nd innings by scoring 73 runs.
Yuvraj Singh failed to give a show in his 23rd innings and could only score 12 runs.
Yuvraj Singh scored a ton in his 24th innings by scoring 140 runs.
Yuvraj Singh scored a half century in his 25th innings by scoring 59 runs.
Yuvraj Singh failed to give a show in his 26th innings and could only score 10 runs.
Yuvraj Singh failed to give a show in his 27th innings and could only score 22 runs.
Yuvraj Singh failed to give a show in his 28th innings and could only score 15 runs.
Yuvraj Singh scored a half century in his 29th innings by scoring 52 runs.
Yuvraj Singh scored a half century in his 30th innings by scoring 63 runs.
Yuvraj Singh scored a ton in his 31st innings by scoring 135 runs.
Yuvraj Singh scored a ton in his 32nd innings by scoring 100 runs.

*/



