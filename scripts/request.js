/**
 * @param url 请求的完整地址, 如 "https://flicker.woolensheep.top/api/v1/user/created"
 * @param body 请求体, 对象形式
 * @param method 不区分大小写, 都行
 */
async function request(url, body, method) {
  const res = await fetch(url, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDA0MzQ0MDgsImlkIjoiNjFiZGNmODVhZDNmNDAzODgwODlmNTM0IiwibWFpbCI6Inhpb25nMzVAcXEuY29tIiwidXNlcm5hbWUiOiJ4aW9uZzM1In0.10hoBdU_ykUjlr8TLCqzH0vzU211CEuYIUJOtupN9Fc",
      "cache-control": "no-cache",
      pragma: "no-cache",
      prefer: "safe",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: method.toUpperCase() === "GET" ? null : JSON.stringify(body),
    method: method.toUpperCase(),
    mode: "cors",
  });

  console.log(await res.json());
}
/* 
## e.g.

request("https://flicker.woolensheep.top/api/v1/user/created", null, "get");
request(
  "https://flicker.woolensheep.top/api/v1/cardset/61bdd3abad3f40388089f537/card",
  { question: "123", answer: "123" },
  "POST"
);
 */
