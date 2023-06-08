// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /demo_model_require */
export async function demoModelRequireList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequireListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoModelRequireList[];
  }>('/demo_model_require', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /demo_model_require */
export async function demoModelRequireCreate(
  body: API.DemoModelRequireCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.DemoModelRequireCreateUpdate>('/demo_model_require', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model_require/${param0} */
export async function demoModelRequireRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequireReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoModelRequireCreateUpdate>(`/demo_model_require/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /demo_model_require/${param0} */
export async function demoModelRequireUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequireUpdateParams,
  body: API.DemoModelRequireCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoModelRequireCreateUpdate>(`/demo_model_require/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /demo_model_require/${param0} */
export async function demoModelRequireDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequireDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/demo_model_require/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /demo_model_require/${param0} */
export async function demoModelRequirePartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequirePartialUpdateParams,
  body: API.DemoModelRequireCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoModelRequireCreateUpdate>(`/demo_model_require/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model_require/display_order/ */
export async function demoModelRequireDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequireDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoModelRequireCreateUpdate[];
  }>('/demo_model_require/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model_require/list_display/ */
export async function demoModelRequireListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequireListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoModelRequireCreateUpdate[];
  }>('/demo_model_require/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model_require/verbose_name/ */
export async function demoModelRequireVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelRequireVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoModelRequireCreateUpdate[];
  }>('/demo_model_require/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
