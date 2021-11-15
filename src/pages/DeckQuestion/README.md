# 模块说明

有多种答题模式, 其中相同之处的逻辑在 `index.tsx` 中, 主体部分写在 `components` 文件夹下

目前支持的答题模式如下

| 模式     | Comp 名字  | 对应 type   |
| -------- | ---------- | ----------- |
| 翻面卡片 | `FadeCard` | `fade-card` |
| 填空题   | `FillIn`   | `fill-in`   |

`hooks/useQuestionComp`会根据路由中提取出的 type(见上) query 来决定在主体部分渲染哪个组件并返回之

上述组件中, 类名格式为: `dq-${type}`, 其中 `dq` 指 `DeckQuestion`
