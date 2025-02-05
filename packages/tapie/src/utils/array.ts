export function shuffle<T>(array: Array<T>) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];

    newArray[i] = newArray[j];

    newArray[j] = temp;
  }

  return newArray;
}

export function splitArray<T>(array: Array<T>, size: number) {
  const newArray = [];

  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }

  return newArray;
}
