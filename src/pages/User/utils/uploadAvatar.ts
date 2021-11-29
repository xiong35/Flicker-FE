import selectFile from "../../../utils/selectFile";
import { updateUserReq } from "../../../network/user/updateUser";
import { uploadToQn } from "../../../network/qiniu/uploadImg";
import { CDN_DOMAIN } from "../../../constants/domain";

export async function uploadAvatar() {
  const file = await selectFile("image/*");
  if (!file) return;

  const url = await uploadToQn({ type: "avatar", file });
  if (!url) return;

  const avatar = CDN_DOMAIN + url;

  const success = await updateUserReq({ avatar });

  if (success) return avatar;
}
