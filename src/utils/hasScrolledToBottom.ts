/**
 * 判断是否已经滚到底部
 * @returns 是否已经滚到底部
 */
export function hasScrolledToBottom(): boolean {
  const BOTTOM = 1500;

  //文档内容实际高度（包括超出视窗的溢出部分）
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  //滚动条滚动距离
  const scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  //窗口可视范围高度
  const clientHeight =
    window.innerHeight ||
    Math.min(document.documentElement.clientHeight, document.body.clientHeight);

  return clientHeight + scrollTop >= scrollHeight - BOTTOM;
}
