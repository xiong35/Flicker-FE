import { useQuery } from "../../../hooks/useQuery";
import { Card } from "../../../models/card";
import { StudyStatus } from "../../../models/study";
import FillIn from "../components/FillIn";
import FlipCard from "../components/FlipCard";
import { CardQueue } from "./useCard";

enum QuesType {
  FillIn = "fill-in",
  FlipCard = "flip-card",
}

export type CompProps = {
  card: Card;
  switchCard: (direction: "forward" | "backward") => Promise<void>;
  addStudyRecord: (status: StudyStatus) => void;
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
