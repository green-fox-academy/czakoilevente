// Create a method that find the 5 most common lottery numbers in lottery.csv

/* 
BLOCK:

read file
save content in string
split by line
to arr/row -> split at ;
lottery numbers column 11,12,13,14,15 -> arr[11], arr[12]....arr[15]; -> objKey
create empty object
put lottery numbers into objKeys -> count lottery number (as values)
create empty mult array
for each object key
put lottery numbers and counts as two elem arr in mult arr 
sort mult arr by count index

after sort: last five elements number index   
*/

const ffss = require('fs');

function find5MostCommonNumbers(oneFile: string) {

  let lotteryContent: string = "";
  try {
    lotteryContent = ffss.readFileSync(oneFile, 'utf-8');
  }
  catch(error) {
    console.error(error);
  }

  let lotteryContentLine: string[] = lotteryContent.split('\n');
  let lotteryNumbers: { [key: string]: number } = {};
  
  lotteryContentLine.forEach((row: string): void => {
    let columns: string[] = row.split(';');

    /* 
    columns[11..15] -> lottery numbers  
    */

    for (let i: number = 11; i < 16; i++) {
      let num: string = columns[i];
      if (lotteryNumbers[num]) {
        lotteryNumbers[num] += 1;
      } else {
        lotteryNumbers[num] = 1;
      };
    };
  });

  let lotNumsAndApp: any[][] = [];
  //let numMax: number = 0;

  for (let num in lotteryNumbers) {
    let lotteryNumbersTwoElemArr: any[] = [];
    let numberCount: number = lotteryNumbers[num];
    lotteryNumbersTwoElemArr.push(lotteryNumbers[num], numberCount);
    lotNumsAndApp.push(lotteryNumbersTwoElemArr);
  };

  //Sort numbers by value -> 
  lotNumsAndApp.sort((a, b) => b[1] - a[1]);


  console.log(`The 5 most common numbers are: ${lotNumsAndApp[0][0]}, ${lotNumsAndApp[1][0]},
  ${lotNumsAndApp[2][0]}, ${lotNumsAndApp[3][0]}, ${lotNumsAndApp[4][0]}.`)


};

find5MostCommonNumbers('lottery.csv');