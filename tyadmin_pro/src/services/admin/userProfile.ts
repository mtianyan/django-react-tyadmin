// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /user_profile */
export async function userProfileList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfileListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.UserProfileList[];
  }>('/user_profile', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user_profile */
export async function userProfileCreate(
  body: API.UserProfileCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.UserProfileCreateUpdate>('/user_profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user_profile/${param0} */
export async function userProfileRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfileReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserProfileCreateUpdate>(`/user_profile/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /user_profile/${param0} */
export async function userProfileUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfileUpdateParams,
  body: API.UserProfileCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserProfileCreateUpdate>(`/user_profile/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /user_profile/${param0} */
export async function userProfileDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfileDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/user_profile/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /user_profile/${param0} */
export async function userProfilePartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfilePartialUpdateParams,
  body: API.UserProfileCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserProfileCreateUpdate>(`/user_profile/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user_profile/display_order/ */
export async function userProfileDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfileDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.UserProfileCreateUpdate[];
  }>('/user_profile/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user_profile/list_display/ */
export async function userProfileListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfileListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.UserProfileCreateUpdate[];
  }>('/user_profile/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user_profile/verbose_name/ */
export async function userProfileVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userProfileVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.UserProfileCreateUpdate[];
  }>('/user_profile/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
