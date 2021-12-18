export function pickFromArr<T>(arr: T[]): T {
  const len = arr.length;

  const randIndex = Math.floor(Math.random() * len);

  return arr[randIndex];
}
