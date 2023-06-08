// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /demo_foreign_key */
export async function demoForeignKeyList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoForeignKeyList[];
  }>('/demo_foreign_key', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /demo_foreign_key */
export async function demoForeignKeyCreate(
  body: API.DemoForeignKeyCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.DemoForeignKeyCreateUpdate>('/demo_foreign_key', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_foreign_key/${param0} */
export async function demoForeignKeyRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoForeignKeyCreateUpdate>(`/demo_foreign_key/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /demo_foreign_key/${param0} */
export async function demoForeignKeyUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyUpdateParams,
  body: API.DemoForeignKeyCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoForeignKeyCreateUpdate>(`/demo_foreign_key/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /demo_foreign_key/${param0} */
export async function demoForeignKeyDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/demo_foreign_key/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /demo_foreign_key/${param0} */
export async function demoForeignKeyPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyPartialUpdateParams,
  body: API.DemoForeignKeyCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DemoForeignKeyCreateUpdate>(`/demo_foreign_key/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_foreign_key/display_order/ */
export async function demoForeignKeyDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoForeignKeyCreateUpdate[];
  }>('/demo_foreign_key/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_foreign_key/list_display/ */
export async function demoForeignKeyListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoForeignKeyCreateUpdate[];
  }>('/demo_foreign_key/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demo_foreign_key/verbose_name/ */
export async function demoForeignKeyVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.demoForeignKeyVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.DemoForeignKeyCreateUpdate[];
  }>('/demo_foreign_key/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
