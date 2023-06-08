// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /sys/menu */
export async function sysMenuList(options?: { [key: string]: any }) {
  return request<any>('/sys/menu', {
    method: 'GET',
    ...(options || {}),
  });
}
