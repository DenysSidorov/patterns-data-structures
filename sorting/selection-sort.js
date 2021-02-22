const ar = [12, 3, 5, 6, 7, 8, 9, 0, 6, 4, 3, 2, 1, 4, 6, -6, -7, 56, -50];

for (let i = 0; i < ar.length; i++) {
  for (let j = i; j < ar.length; j++) {
    if (ar[j] < ar[i]) {
      const buf = ar[i];
      ar[i] = ar[j];
      ar[j] = buf;

    }
  }
}
