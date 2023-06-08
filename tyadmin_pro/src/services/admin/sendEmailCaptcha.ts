// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /sendEmailCaptcha */
export async function sendEmailCaptchaList(options?: { [key: string]: any }) {
  return request<any>('/sendEmailCaptcha', {
    method: 'GET',
    ...(options || {}),
  });
}
