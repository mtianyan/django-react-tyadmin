// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /demo_default_model */
export async function demoDefaultModelList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoDefaultModelList[];
  }>('/demo_default_model', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /demo_default_model */
export async function demoDefaultModelCreate(
  body: API.DemoDefaultModelCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.DemoDefaultModelCreateUpdate>('/demo_default_model', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_default_model/${param0} */
export async function demoDefaultModelRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoDefaultModelCreateUpdate>(`/demo_default_model/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /demo_default_model/${param0} */
export async function demoDefaultModelUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelUpdateParams,
  body: API.DemoDefaultModelCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoDefaultModelCreateUpdate>(`/demo_default_model/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /demo_default_model/${param0} */
export async function demoDefaultModelDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/demo_default_model/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /demo_default_model/${param0} */
export async function demoDefaultModelPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelPartialUpdateParams,
  body: API.DemoDefaultModelCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoDefaultModelCreateUpdate>(`/demo_default_model/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_default_model/display_order/ */
export async function demoDefaultModelDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoDefaultModelCreateUpdate[];
  }>('/demo_default_model/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_default_model/list_display/ */
export async function demoDefaultModelListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoDefaultModelCreateUpdate[];
  }>('/demo_default_model/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_default_model/verbose_name/ */
export async function demoDefaultModelVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoDefaultModelVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoDefaultModelCreateUpdate[];
  }>('/demo_default_model/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
