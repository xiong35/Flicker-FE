import { useParams } from "react-router-dom";

export function useSetup() {
  let { id } = useParams<{ id: string }>();

  return { id };
}
