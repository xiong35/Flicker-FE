import { useEffect, useState } from "react";

import { userNameValidator, useValidator } from "../../../utils/validators";
import { showToast } from "../../../utils/showToast";
import { updateUserReq } from "../../../network/user/updateUser";
import { useSelf } from "../../../context/Self/useSelf";

export function useEditName() {
  const { self, setSelf } = useSelf();

  const [isEditing, setIsEditing] = useState(false);

  const [newName, setNewName] = useState(self.username);

  function startEditing(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.stopPropagation();

    setIsEditing(true);

    document.addEventListener(
      "click",
      () => {
        setIsEditing(false);
      },
      {
        once: true,
      }
    );
  }

  async function finishEditing() {
    if (!(await useValidator(userNameValidator, newName))) return;

    const success = await updateUserReq({ username: newName });
    if (!success) return;

    showToast("修改成功", "success");
    setIsEditing(false);
    setSelf({ ...self, username: newName });
  }

  useEffect(() => {
    setNewName(self.username);
  }, [self.username]);

  return {
    newName,
    setNewName,
    isEditing,
    startEditing,
    finishEditing,
  };
}
