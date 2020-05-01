
const fibo = n => {
  let a1 = 0;
  let a2 = 1;
  const result = [a1, a2];
  if (n < 1) {
    return a1; //throw err
  }
  if (n === 1) {
    return [a1];
  }
  if (n === 2) {
    return [a2];
  }

  const worker = n => {
    if (n > 0) {
      let a3 = a1 + a2;
      result.push(a3);
      a1 = a2;
      a2 = a3;
      worker(--n);
    }
  }
  worker(n - 2);

  return result;
}

console.log(fibo(7));
