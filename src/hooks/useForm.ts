import { useState } from "react";

type ConfigOpts = {
  /** 字段的默认值 */
  default?: string;
  /**
   * 对字段的检验函数
   * @param value 此字段现在的值
   * @returns 若检验成功则返回 undefined, 否则返回对应的提示信息
   */
  validator: (value: string) => Promise<string | undefined>;
};

export function useForm<T extends { [name: string]: ConfigOpts }>(config: T) {
  // 返回的 表单的类型
  type Form = { [K in keyof T]: string };
  // 返回的 表单检验结果的类型
  type FormHint = { [K in keyof T]?: string };

  // 调用真正的 react hook 得到响应式的表单数据, 之所以叫 _setForm 是因为后面还要做一层封装
  const [form, _setForm] = useState(() =>
    // 根据传入配置得到表单的初始值
    Object.keys(config).reduce((prev, key: keyof T) => {
      // 若传入了默认值则使用之, 否则设置为空串
      prev[key] = config[key].default || "";
      return prev;
    }, {} as Form)
  );
  // 调用 react hook 得到响应式的表单检验情况数据, 默认为都通过
  const [formErrorHint, setFormValidate] = useState<FormHint>({});

  /**
   * 修改表单的部分字段
   * @param partOfNewForm {字段: 值}, 只改变传入参数中包含的字段
   */
  function setForm(partOfNewForm: Partial<Form>) {
    const newForm: Form = { ...form, ...partOfNewForm };
    _setForm(newForm);
  }

  /**
   * 检查表单的部分(或全部)字段
   * @param keysToCheck 传入多个参数作为需要检验的字段, 若不传参数则检查所有字段
   * @returns 是否通过检查
   */
  async function doValidate(...keysToCheck: (keyof T)[]): Promise<boolean> {
    if (keysToCheck.length === 0) {
      // 如果不传入参数则检查所有字段
      keysToCheck = Object.keys(config);
    }
    const newIsValidate = { ...formErrorHint };
    for (let key of keysToCheck) {
      newIsValidate[key] = await config[key].validator(form[key]);
    }
    setFormValidate(newIsValidate);

    return Object.values(newIsValidate).every((v) => v === undefined);
  }

  return { form, setForm, formErrorHint, doValidate };
}
