import FillIn from "../components/FillIn";
import FadeCard from "../components/FadeCard";
import { useQuery } from "../../../hooks/useQuery";

enum QuesType {
  FillIn = "fill-in",
  FadeCard = "fade-card",
}
const type2Comp: Record<QuesType, (...a: any) => JSX.Element> = {
  [QuesType.FillIn]: FillIn,
  [QuesType.FadeCard]: FadeCard,
};

/**
 * 根据路由中 `type` 字段而修改渲染的答题组件
 * @returns 响应式的答题组件
 */
export default function useQuestionComp() {
  const query = useQuery<{ type: QuesType }>();
  let Comp = type2Comp[query.get("type")];

  if (!Comp) Comp = FadeCard;

  return { Comp };
}
