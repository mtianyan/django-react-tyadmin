// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /captcha-generate */
export async function captchaGenerateList(options?: { [key: string]: any }) {
  return request<any>('/captcha-generate', {
    method: 'GET',
    ...(options || {}),
  });
}
