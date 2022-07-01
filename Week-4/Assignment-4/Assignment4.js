function delayedResultPromise(n1, n2, delayTime) {
  // 2:判斷輸入的型別
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    // 1:建立Promise Object執行setTimeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n1 + n2);
      }, delayTime);
    });
  }
  // 3:捕捉可能的error
  else if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    return new Promise((resolve, reject) => {
      reject('Please input number!');
    });
  }
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds

// 4:測試error可執行
delayedResultPromise('4', 5, 3000).catch(console.log);
// Please input numbers!

async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  // 5: async/await function執行Promise，並用try/catch做判斷
  try {
    const result = await delayedResultPromise(4, 5, 3000);
    console.log(`async function : ${result}`);
  } catch (error) {
    console.error(error);
  }
}
main(); // result will be shown in the console after <delayTime> seconds
