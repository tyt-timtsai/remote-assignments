function max(numbers) {
    // your code here, for-loop method preferred
    /* 先以直觀的做法做一遍，以index 0 ~ array.length 一個一個做比較，如果較大就回傳覆蓋最大值 */
    
    let maxNumber = 0;

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>maxNumber){
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
    }

    function findPosition(numbers, target) {
    // your code here, for-loop method preferred
    /* 直觀：可以透過for-loop 加上 if statement 做判斷，回傳第一個比對相同的值的index，但看到最後一個console.log，不存在時要回傳-1，所以應該要先設定一個值為-1的變數，再去做覆蓋跟return */

    let position = -1;

    for (let i = 0; i < numbers.length; i++) {
        // 這個寫法會讓target有重複時，無法取得第一個index
        // if(numbers[i] === target){
        //     position = i
        // }

        if(numbers[i] === target && position === -1){
            position = i
        }
    }
    return position;
    }
    console.log(max([1, 2, 4, 5])); // should print 5
    console.log(max([5, 2, 7, 1, 6])); // should print 7
    console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
    console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
    console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
    console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1