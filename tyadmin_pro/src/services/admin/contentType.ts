// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /content_type */
export async function contentTypeList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypeListParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.ContentTypeList[];
  }>('/content_type', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /content_type */
export async function contentTypeCreate(
  body: API.ContentTypeCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.ContentTypeCreateUpdate>('/content_type', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /content_type/${param0} */
export async function contentTypeRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypeReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ContentTypeCreateUpdate>(`/content_type/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /content_type/${param0} */
export async function contentTypeUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypeUpdateParams,
  body: API.ContentTypeCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ContentTypeCreateUpdate>(`/content_type/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /content_type/${param0} */
export async function contentTypeDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypeDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/content_type/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /content_type/${param0} */
export async function contentTypePartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypePartialUpdateParams,
  body: API.ContentTypeCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ContentTypeCreateUpdate>(`/content_type/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /content_type/display_order/ */
export async function contentTypeDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypeDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.ContentTypeCreateUpdate[];
  }>('/content_type/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /content_type/list_display/ */
export async function contentTypeListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypeListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.ContentTypeCreateUpdate[];
  }>('/content_type/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /content_type/verbose_name/ */
export async function contentTypeVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.contentTypeVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.ContentTypeCreateUpdate[];
  }>('/content_type/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
