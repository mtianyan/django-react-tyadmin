// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /rich_text_demo */
export async function richTextDemoList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.RichTextDemoList[];
  }>('/rich_text_demo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /rich_text_demo */
export async function richTextDemoCreate(
  body: API.RichTextDemoCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.RichTextDemoCreateUpdate>('/rich_text_demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /rich_text_demo/${param0} */
export async function richTextDemoRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RichTextDemoCreateUpdate>(`/rich_text_demo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /rich_text_demo/${param0} */
export async function richTextDemoUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoUpdateParams,
  body: API.RichTextDemoCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RichTextDemoCreateUpdate>(`/rich_text_demo/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /rich_text_demo/${param0} */
export async function richTextDemoDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/rich_text_demo/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /rich_text_demo/${param0} */
export async function richTextDemoPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoPartialUpdateParams,
  body: API.RichTextDemoCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RichTextDemoCreateUpdate>(`/rich_text_demo/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /rich_text_demo/display_order/ */
export async function richTextDemoDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.RichTextDemoCreateUpdate[];
  }>('/rich_text_demo/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /rich_text_demo/list_display/ */
export async function richTextDemoListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.RichTextDemoCreateUpdate[];
  }>('/rich_text_demo/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /rich_text_demo/verbose_name/ */
export async function richTextDemoVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.richTextDemoVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.RichTextDemoCreateUpdate[];
  }>('/rich_text_demo/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
