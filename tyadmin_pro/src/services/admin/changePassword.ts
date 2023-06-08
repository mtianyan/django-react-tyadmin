// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /change_password */
export async function changePasswordCreate(options?: { [key: string]: any }) {
  return request<any>('/change_password', {
    method: 'POST',
    ...(options || {}),
  });
}
