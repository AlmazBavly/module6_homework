function isPrime(n) {
    if (n > 1000) {
      return "Данные неверны";
    }
    if (n === 0 || n === 1) {
      return "Не простое число";
    }
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return "Не простое число";
      }
    }
    return "Простое число";
  };
  
