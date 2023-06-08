// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /dashboard */
export async function dashboardList(options?: { [key: string]: any }) {
  return request<any>('/dashboard', {
    method: 'GET',
    ...(options || {}),
  });
}
