function countAandB(input){
    let arrayAandB = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a'|| input[i] === 'b') {
            arrayAandB.push(input[i])
            // console.log(input[i]);
            // console.log(arrayAandB);
        }
    }
    // console.log(arrayAandB);
    return arrayAandB.length;
}

function toNumber(input){
    /* 最直觀做法 a=1 b=2 ......  */
    let arrayOfNumber = [];
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'a':
                arrayOfNumber.push(1);
                break;
            case 'b':
                arrayOfNumber.push(2);
                break;
            case 'c':
                arrayOfNumber.push(3);
                break;
            case 'd':
                arrayOfNumber.push(4);
                break;
            case 'e':
                arrayOfNumber.push(5);
                break;
            default:
                console.log(arrayOfNumber);
                break;
        }
    }
    return arrayOfNumber;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1));
console.log(toNumber(input1));

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
console.log(toNumber(input2));