// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /currentUser */
export async function currentUserList(options?: { [key: string]: any }) {
  return request<any>('/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
