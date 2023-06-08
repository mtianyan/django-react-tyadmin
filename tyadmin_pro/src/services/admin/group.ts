// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /group */
export async function groupList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupListParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.GroupList[] }>(
    '/group',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /group */
export async function groupCreate(body: API.GroupCreateUpdate, options?: { [key: string]: any }) {
  return request<API.GroupCreateUpdate>('/group', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /group/${param0} */
export async function groupRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GroupCreateUpdate>(`/group/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /group/${param0} */
export async function groupUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupUpdateParams,
  body: API.GroupCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GroupCreateUpdate>(`/group/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /group/${param0} */
export async function groupDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/group/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /group/${param0} */
export async function groupPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupPartialUpdateParams,
  body: API.GroupCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.GroupCreateUpdate>(`/group/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /group/display_order/ */
export async function groupDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.GroupCreateUpdate[];
  }>('/group/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /group/list_display/ */
export async function groupListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.GroupCreateUpdate[];
  }>('/group/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /group/verbose_name/ */
export async function groupVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.groupVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.GroupCreateUpdate[];
  }>('/group/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
