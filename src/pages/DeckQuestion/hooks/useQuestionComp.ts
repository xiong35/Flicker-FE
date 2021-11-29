import { CardQueue } from "./useCard";
import FlipCard from "../components/FlipCard";
import FillIn from "../components/FillIn";
import { Card } from "../../../models/card";
import { useQuery } from "../../../hooks/useQuery";

enum QuesType {
  FillIn = "fill-in",
  FlipCard = "flip-card",
}

export type CompProps = {
  cards?: CardQueue;
  switchCard: (direction: "forward" | "backward") => void;
};

const type2Comp: Record<QuesType, (props: CompProps) => JSX.Element> = {
  [QuesType.FillIn]: FillIn,
  [QuesType.FlipCard]: FlipCard,
};

/**
 * 根据路由中 `type` 字段而修改渲染的答题组件
 * @returns 响应式的答题组件
 */
export default function useQuestionComp() {
  const query = useQuery<{ type: QuesType }>();
  let Comp = type2Comp[query.get("type")];

  if (!Comp) Comp = FlipCard;

  return { Comp };
}
