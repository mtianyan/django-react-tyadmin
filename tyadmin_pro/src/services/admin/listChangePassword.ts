// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /list_change_password */
export async function listChangePasswordCreate(options?: { [key: string]: any }) {
  return request<any>('/list_change_password', {
    method: 'POST',
    ...(options || {}),
  });
}
