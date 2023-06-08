// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /demo_model */
export async function demoModelList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelListParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.DemoModelList[] }>(
    '/demo_model',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /demo_model */
export async function demoModelCreate(
  body: API.DemoModelCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.DemoModelCreateUpdate>('/demo_model', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model/${param0} */
export async function demoModelRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoModelCreateUpdate>(`/demo_model/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /demo_model/${param0} */
export async function demoModelUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelUpdateParams,
  body: API.DemoModelCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoModelCreateUpdate>(`/demo_model/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /demo_model/${param0} */
export async function demoModelDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/demo_model/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /demo_model/${param0} */
export async function demoModelPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelPartialUpdateParams,
  body: API.DemoModelCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoModelCreateUpdate>(`/demo_model/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model/display_order/ */
export async function demoModelDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoModelCreateUpdate[];
  }>('/demo_model/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model/list_display/ */
export async function demoModelListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoModelCreateUpdate[];
  }>('/demo_model/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_model/verbose_name/ */
export async function demoModelVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoModelVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoModelCreateUpdate[];
  }>('/demo_model/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
