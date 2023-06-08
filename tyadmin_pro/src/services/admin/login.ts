// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /login/account */
export async function loginAccountCreate(options?: { [key: string]: any }) {
  return request<any>('/login/account', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 注销视图类 POST /login/outLogin */
export async function loginOutLoginCreate(options?: { [key: string]: any }) {
  return request<any>('/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
