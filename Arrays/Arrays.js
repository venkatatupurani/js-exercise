let numbersArray = [65,43,98,43,23,76,32,54,23,43,65];

let duplicateNumbers = [];

// Sorting Array. in Ascending order
numbersArray.sort(function(a,b) {return a-b});
console.log('1.  Array sorted in Ascending Order : '+numbersArray);

// Descending Order
numbersArray.sort(function(a,b) {return b-a});
console.log('1a.  Array sorted in Descending Order : '+numbersArray);

//Finding Duplicates in Array
numbersArray.forEach(function(element,index) {
    // Find if there is a duplicate or not
    if (numbersArray.indexOf(element, index + 1) > -1) {
        // Find if the element is already in the result array or not
        if (duplicateNumbers.indexOf(element) === -1) {
            duplicateNumbers.push(element);
        }
    }
});
console.log('2 & 6.  Duplicates in Array are : '+duplicateNumbers);

let replaceNum = 76, newNum=175;
numbersArray.forEach(function(element,index) {
    if(element == replaceNum) {
        numbersArray[index] =  newNum;
    }
});
console.log('3, Replaced Number : '+replaceNum+' with New Number : '+newNum+' Array After replacing : '+numbersArray);

let newUniqueNum = 1;
if(numbersArray.indexOf(newUniqueNum) === -1) {
    numbersArray.push(newUniqueNum);
}
console.log('4. New number tring to add uniquely :'+newUniqueNum+'    New Array  : '+numbersArray);


// Removing all duplicates in array. 
let uniqueArray = numbersArray.reduce(function(a, b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
console.log('6. Removed all duplicates into new unique Array - : '+uniqueArray);

numbersArray.forEach(function(element,index) {
    numbersArray[index] = numbersArray[index] * 10;
});
console.log('7. After multiply by 10 : '+numbersArray);



let copy = numbersArray.slice(0);
let duplicateArray = [];
numbersArray.forEach(function(element,index) {
    let myCount = 0;
    copy.forEach(function(el,ix) {
        if(numbersArray[index] == copy[ix]) {
            myCount++;
            delete copy[ix];      
        }
    });

    if(myCount > 1) {
        let temp = new Object();
        temp.value = numbersArray[index];
        temp.count = myCount;
        console.log(numbersArray[index]+' is repeated : '+myCount+' times');
        duplicateArray.push(temp);
    }
});

//Reversing array.
let reverseMutableArray =numbersArray.slice().reverse();
console.log(' Reversed Array Mutable : '+reverseMutableArray);

const immutableArr = [...reverseMutableArray];
console.log(' Reversed Array Immutable : '+immutableArr);