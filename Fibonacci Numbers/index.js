const fibo = n => {
  let a1 = 0;
  let a2 = 1;

  if (n < 1) {
    return a1; //throw err
  }
  if (n === 1) {
    return [a1];
  }
  if (n === 2) {
    return [a2];
  }
  const acc = [a1, a2];
  for (let i = 0; i < (n - 2); i++) {
    let a3 = a1 + a2;
    acc.push(a3);
    a1 = a2;
    a2 = a3;
  }

  return acc;
}

console.log(fibo(7));
