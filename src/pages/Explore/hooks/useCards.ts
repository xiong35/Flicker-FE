import { useState } from "react";

import { Card } from "../../../models/card";

export const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
};
