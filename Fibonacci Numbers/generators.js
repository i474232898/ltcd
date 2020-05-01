(async () => {
  function* fibo(n) {
    if (n < 1) {
      return;
    }
    let a1 = 0;
    let a2 = 1;

    yield a1;
    yield a2;

    for (let i = 0; i < (n - 2); i++) {
      let a3 = a2 + a1;
      a1 = a2;
      a2 = a3;

      yield a3;
    }
  }

  for await (let i of fibo(8)) {
    console.log(i);
  }
})();
