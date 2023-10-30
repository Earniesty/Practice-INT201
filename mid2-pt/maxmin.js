function returnNum(numArr) {
    let min = numArr[0];
    let max = numArr[0];
    let sum = 0;
    let avg = 0;

    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i];
        if(numArr[i] < min) min = numArr[i];
        if(numArr[i] > max) max = numArr[i];
        
    }

    avg = sum / numArr.length;
    return {min, max, sum, avg};
}

console.log(returnNum([5,8,12,50,3]));