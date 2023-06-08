// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /ty_admin_email_verify_record */
export async function tyAdminEmailVerifyRecordList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.TyAdminEmailVerifyRecord[];
  }>('/ty_admin_email_verify_record', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /ty_admin_email_verify_record */
export async function tyAdminEmailVerifyRecordCreate(
  body: API.TyAdminEmailVerifyRecord,
  options?: { [key: string]: any },
) {
  return request<API.TyAdminEmailVerifyRecord>('/ty_admin_email_verify_record', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ty_admin_email_verify_record/${param0} */
export async function tyAdminEmailVerifyRecordRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TyAdminEmailVerifyRecord>(`/ty_admin_email_verify_record/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /ty_admin_email_verify_record/${param0} */
export async function tyAdminEmailVerifyRecordUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordUpdateParams,
  body: API.TyAdminEmailVerifyRecord,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TyAdminEmailVerifyRecord>(`/ty_admin_email_verify_record/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /ty_admin_email_verify_record/${param0} */
export async function tyAdminEmailVerifyRecordDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/ty_admin_email_verify_record/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /ty_admin_email_verify_record/${param0} */
export async function tyAdminEmailVerifyRecordPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordPartialUpdateParams,
  body: API.TyAdminEmailVerifyRecord,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TyAdminEmailVerifyRecord>(`/ty_admin_email_verify_record/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ty_admin_email_verify_record/display_order/ */
export async function tyAdminEmailVerifyRecordDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.TyAdminEmailVerifyRecord[];
  }>('/ty_admin_email_verify_record/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ty_admin_email_verify_record/list_display/ */
export async function tyAdminEmailVerifyRecordListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.TyAdminEmailVerifyRecord[];
  }>('/ty_admin_email_verify_record/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /ty_admin_email_verify_record/verbose_name/ */
export async function tyAdminEmailVerifyRecordVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tyAdminEmailVerifyRecordVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.TyAdminEmailVerifyRecord[];
  }>('/ty_admin_email_verify_record/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
