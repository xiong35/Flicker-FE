import * as qiniu from "qiniu-js";

import _request from "../_request";

type GetUploadTokenReqData = {
  type: "avatar" | "image" | "audio";
  file: File;
};
type ImgInfo = {
  token: string; // "上传凭证",
  resource_key: string; // "图片相对路径",
  url: string; // "图片URL"
};

/**
 * 获得七牛云上传 token
 * @returns token
 */
async function getUploadTokenReq(type: GetUploadTokenReqData["type"]) {
  const res = await _request<ImgInfo>({
    url: "/service/upload_token",
    method: "GET",
    params: {
      type,
    },
  });

  return res;
}

const KB = 1000;
function compressImg(img: File) {
  let rate = 1;

  if (img.size < 100 * KB) {
    rate = 0.9;
  } else if (img.size < 1000 * KB) {
    rate = 0.7;
  } else {
    rate = 0.4;
  }
  return qiniu.compressImage(img, {
    quality: rate,
  });
}

/**
 * 上传图片
 * @param file {File} 图片文件
 * @returns 图片的 resource_key(图床中的文件名, 同时也是访问路径)
 */
export async function uploadToQn(
  data: GetUploadTokenReqData
): Promise<string | undefined> {
  let { file, type } = data;

  if (!file.type.startsWith("image/")) return;

  const info = await getUploadTokenReq(type);
  if (!info) return;

  if (
    ["png", "jpeg", "jpg", "webp", "bmp"].indexOf(file.type.split("/")[1]) !==
    -1
  ) {
    file = (await compressImg(file)).dist as File;
  }

  const observer = qiniu.upload(
    file,
    info.resource_key,
    info.token,
    undefined,
    {
      useCdnDomain: true,
      region: qiniu.region.z2,
    }
  );

  return new Promise((resolve, _) => {
    observer.subscribe(
      undefined,
      (e) => {
        console.error(e);
        resolve(undefined);
      },
      (res) => {
        resolve(info.resource_key);
      }
    );
  });
}
