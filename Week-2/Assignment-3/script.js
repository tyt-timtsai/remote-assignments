function count(input) {
    /* 
    return a object {
        a : ?,
        b : ?,
        c : ?,
        d : ?,
        .........,
        z : ?,
    } 
    先排序input,然後遍歷每一個字母，第一次遇見的字母加入object，變成新的property；有遇見過的則修改原本的value加一，因為有排序過，所以不用擔心不斷遇到不同字母時要抓取該字母出現過的次數。
    */
    let sortInput = input.sort();
    let current = "";
    let counts = {};
    for (let i = 0; i < sortInput.length; i++) {    
        if(sortInput[i] !== current){
            if(!counts[`${sortInput[i]}`]){
            counts[`${sortInput[i]}`] = 1;
            // console.log(counts);
            } else {
            counts[`${sortInput[i]}`] += 1;
            // console.log(counts);
            }
        }
    }
    return counts

    /*
    後來再去研究stackoverflow上的討論，發現可以用forEach()對每個Array item各自執行一次function，減少寫for的麻煩，也更直觀。

    let counts = {};
    input.forEach(x => { counts[x] = (counts[x] || 0) + 1});
    return counts;
    */
    }
    let input1 = ["a", "b", "c", "a", "c", "a", "x"];
    console.log(count(input1));
    // should print {a:3, b:1, c:2, x:1}

    function groupByKey(input) {
    /*  
    應該跟第一個function count很像，
    只是要多一個存取object的syntax而已 
    */
    let counts = {};
    input.forEach(i => { counts[i.key] = (counts[i.key]||0) + i.value })
    // console.log(input.forEach(i));
    // input.forEach(i => console.log(i.key));
    // input.forEach(i => console.log(i.value));
    return counts
    }
    let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
    ];
    console.log(groupByKey(input2));
    // should print {a:6, b:1, c:7}