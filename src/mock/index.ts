/**
 * 等待一段时间的函数
 * @param time 多少ms后 resolve
 */
export function wait(time: number) {
  return new Promise((res) => {
    setTimeout(res, time);
  });
}
