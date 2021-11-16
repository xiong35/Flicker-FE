import { useState } from "react";

import { showToast } from "../../../utils/showToast";
import { sendCodeReq } from "../../../network/user/sendCode";

export function useSendCode(
  form: Parameters<typeof sendCodeReq>[0],
  doValidate: (keysToCheck: "mail") => Promise<boolean>
) {
  /** 距离下次重发还有多久 */
  const [timeLeft, setTimeLeft] = useState(0);

  async function sendCode() {
    if (timeLeft !== 0) return;

    const isValidate = await doValidate("mail");
    if (!isValidate) return;

    const success = true;
    // const success = await sendCodeReq({ mail: form.mail });
    if (!success) return showToast("发送失败", "error");

    let newTimeLeft = 60;

    setTimeLeft(newTimeLeft);

    const timer = setInterval(() => {
      if (newTimeLeft === 0) clearInterval(timer);
      newTimeLeft--;
      setTimeLeft(newTimeLeft);
    }, 1000);
  }

  return { sendCode, timeLeft };
}
