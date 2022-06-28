function delayedResult(n1, n2, delayTime, callback) {
  // n1+n1直接log，setTimeout()再顯示('n1+n2')
  const result = n1 + n2;
  // console.log(n1 + n2);

  // setTimeout在delayTime後呼叫callback產生log result
  setTimeout(() => {
    callback(result);
    console.log(`(${n1}+${n2})`);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds
