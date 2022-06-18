function binarySearchPosition(numbers, target) {
    /* 
    目前了解到是由左右兩個邊界作為範圍，取其中間值與target做比較，再把一邊的邊界拉至中間值的隔一個，這樣每次可以篩選掉一半的量，在基數很大的資料中可以達到很高的效率。
    */
    let left = 0;
    let right = numbers.length - 1;
    // let middle = Math.floor((left+right)/2); //放在全域會無法被動態更改  
    for(let i = 0; i<6; i++){
        let middle = Math.floor((left+right)/2); // 作為區域變數在區域內會動態更改
        if(numbers[middle] === target){
            return index = middle;
        }else if(numbers[middle] > target){
            right = middle - 1;
            // console.log("middle:"+middle);
            // console.log("left:"+left);
            // console.log("right:"+right);
        }else{
            left = middle + 1;
            // console.log("middle:"+middle);
            // console.log("left:"+left);
            // console.log("right:"+right);
        }
    }
    return middle;
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3