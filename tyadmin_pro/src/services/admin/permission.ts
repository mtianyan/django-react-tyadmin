// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /permission */
export async function permissionList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.PermissionList[];
  }>('/permission', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /permission */
export async function permissionCreate(
  body: API.PermissionCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.PermissionCreateUpdate>('/permission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/${param0} */
export async function permissionRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PermissionCreateUpdate>(`/permission/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /permission/${param0} */
export async function permissionUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionUpdateParams,
  body: API.PermissionCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PermissionCreateUpdate>(`/permission/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /permission/${param0} */
export async function permissionDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/permission/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /permission/${param0} */
export async function permissionPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionPartialUpdateParams,
  body: API.PermissionCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PermissionCreateUpdate>(`/permission/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/display_order/ */
export async function permissionDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.PermissionCreateUpdate[];
  }>('/permission/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/list_display/ */
export async function permissionListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.PermissionCreateUpdate[];
  }>('/permission/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /permission/verbose_name/ */
export async function permissionVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.permissionVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.PermissionCreateUpdate[];
  }>('/permission/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
