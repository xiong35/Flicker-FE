/**
 * 展示一个 toast
 * @param msg 展示的祖字符串
 * @param type toast 类型
 * - success: 成功, 绿色 toast
 * - warn: 警告, 黄色 toast
 * - error: 失败, 红色 toast
 * @param duration 显示的时长(ms), 默认 1000 ms
 */
export function showToast(
  msg: string,
  type: "success" | "warn" | "error",
  duration = 1000
) {
  alert(msg);
}
