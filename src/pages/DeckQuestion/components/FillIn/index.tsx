import "./index.scss";

import { useEffect, useState } from "react";

import { TextField } from "@mui/material";

import Loading from "../../../../components/Loading";
import ArrowLeftCircle from "../../../../imgComponents/ArrowLeftCircle";
import CheckMark from "../../../../imgComponents/CheckMark";
import { StudyStatus } from "../../../../models/study";
import { useCardState } from "../../hooks/useCardState";
import { CompProps } from "../../hooks/useQuestionComp";
import Comments from "../Comments";
import { getInnerText } from "./utils/getInnerText";

const ANIMATION_TIME = 150;

function FlipCard(props: CompProps) {
  const { card, switchCard, addStudyRecord } = props;

  const { questionState, setQuestionState, text, renderedAnswer } =
    useCardState(card);

  const [answer, setAnswer] = useState("");

  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const textAnswer = getInnerText(renderedAnswer);
    if (answer === card.answer || answer === textAnswer) setPassed(true);
  }, [answer]);

  return (
    <div className="dq-fill_in">
      <div
        onClick={() => {
          if (questionState === "fading") return;
          setQuestionState("fading");

          setTimeout(() => {
            if (questionState === "answer") {
              setQuestionState("question");
            } else {
              setQuestionState("answer");
            }
          }, ANIMATION_TIME);
        }}
        className={`dq-fill_in-card ${questionState}`}
      >
        <div
          className="dq-fill_in-card-scroll"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
      <div className="dq-fill_in-actions">
        <ArrowLeftCircle
          className="dq-fill_in-actions-icon"
          onClick={() => {
            addStudyRecord(StudyStatus.LEARNING);
            switchCard("backward");
          }}
        />

        <div className="dq-fill_in-actions-input-wrap">
          <TextField
            label="答案"
            className="dq-fill_in-actions-input reset_mui_input_secondary"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            multiline
            maxRows={3}
            InputProps={
              passed
                ? {
                    endAdornment: (
                      <CheckMark className="dq-fill_in-actions-input-right" />
                    ),
                  }
                : {}
            }
          ></TextField>
        </div>

        <ArrowLeftCircle
          className="dq-fill_in-actions-icon rotate"
          onClick={() => {
            addStudyRecord(StudyStatus.LEARNING);
            switchCard("forward");
          }}
        />
      </div>
      {passed && (
        <div className="dq-fill_in-pass">
          <span
            onClick={() => {
              addStudyRecord(StudyStatus.LEARNT);
              switchCard("forward");
            }}
            className="dq-fill_in-pass-text"
          >
            &nbsp;PASS&nbsp;
          </span>
        </div>
      )}
      <div className="dq-fill_in-note">
        填入正确答案以标注学会此题，学会的题目将不再显示
        <br />
        点击左右键切换题目（不会标记为已学会）
      </div>
      <Comments id={card.id}></Comments>
    </div>
  );
}

export default FlipCard;
