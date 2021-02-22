const ar = [12, 3, 5, 6, 7, 8, 9, 0, 6, 4, 333, 2, 1, -994, 6, -6, -7, 5, -5];

for (let j = 1; j < ar.length; j++) {
  for (let i = ar.length - 1; i >= 1 - j; i--) {
    if (ar[i] < ar[i - 1]) {
      const buf = ar[i];
      ar[i] = ar[i - 1];
      ar[i - 1] = buf;
    }
  }
}
