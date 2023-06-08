// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /adapters/periodic_task/task */
export async function adaptersPeriodicTaskTaskList(options?: { [key: string]: any }) {
  return request<any>('/adapters/periodic_task/task', {
    method: 'GET',
    ...(options || {}),
  });
}
