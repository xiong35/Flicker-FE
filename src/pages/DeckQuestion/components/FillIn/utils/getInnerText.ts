export function getInnerText(html: string) {
  const el = document.createElement("div");

  el.innerHTML = html;

  return el.innerText;
}
