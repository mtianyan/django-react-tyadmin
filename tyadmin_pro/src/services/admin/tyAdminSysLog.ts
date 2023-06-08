// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /ty_admin_sys_log */
export async function tyAdminSysLogList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogListParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.TyAdminSysLog[] }>(
    '/ty_admin_sys_log',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /ty_admin_sys_log */
export async function tyAdminSysLogCreate(
  body: API.TyAdminSysLog,
  options?: { [key: string]: any },
) {
  return request<API.TyAdminSysLog>('/ty_admin_sys_log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ty_admin_sys_log/${param0} */
export async function tyAdminSysLogRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TyAdminSysLog>(`/ty_admin_sys_log/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /ty_admin_sys_log/${param0} */
export async function tyAdminSysLogUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogUpdateParams,
  body: API.TyAdminSysLog,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TyAdminSysLog>(`/ty_admin_sys_log/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /ty_admin_sys_log/${param0} */
export async function tyAdminSysLogDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ty_admin_sys_log/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ty_admin_sys_log/${param0} */
export async function tyAdminSysLogPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogPartialUpdateParams,
  body: API.TyAdminSysLog,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TyAdminSysLog>(`/ty_admin_sys_log/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ty_admin_sys_log/display_order/ */
export async function tyAdminSysLogDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.TyAdminSysLog[] }>(
    '/ty_admin_sys_log/display_order/',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /ty_admin_sys_log/list_display/ */
export async function tyAdminSysLogListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.TyAdminSysLog[] }>(
    '/ty_admin_sys_log/list_display/',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /ty_admin_sys_log/verbose_name/ */
export async function tyAdminSysLogVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminSysLogVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.TyAdminSysLog[] }>(
    '/ty_admin_sys_log/verbose_name/',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
