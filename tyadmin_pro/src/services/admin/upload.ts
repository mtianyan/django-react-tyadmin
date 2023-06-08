// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /upload */
export async function uploadCreate(options?: { [key: string]: any }) {
  return request<any>('/upload', {
    method: 'POST',
    ...(options || {}),
  });
}
