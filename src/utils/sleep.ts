export const sleep = (msec: number): boolean => {
  const d1: number = new Date().valueOf()
  // 開始時間と今の時間がmsecよりも小さかったらwhile繰り返す
  while (true) {
    const d2: number = new Date().valueOf()
    if (d2 - d1 > msec) {
      return true
    }
  }
}
