// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /tags */
export async function tagsList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsListParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.TagsList[] }>(
    '/tags',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /tags */
export async function tagsCreate(body: API.TagsCreateUpdate, options?: { [key: string]: any }) {
  return request<API.TagsCreateUpdate>('/tags', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /tags/${param0} */
export async function tagsRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TagsCreateUpdate>(`/tags/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /tags/${param0} */
export async function tagsUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsUpdateParams,
  body: API.TagsCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TagsCreateUpdate>(`/tags/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /tags/${param0} */
export async function tagsDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/tags/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /tags/${param0} */
export async function tagsPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsPartialUpdateParams,
  body: API.TagsCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TagsCreateUpdate>(`/tags/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /tags/display_order/ */
export async function tagsDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.TagsCreateUpdate[];
  }>('/tags/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /tags/list_display/ */
export async function tagsListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.TagsCreateUpdate[];
  }>('/tags/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /tags/verbose_name/ */
export async function tagsVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.tagsVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.TagsCreateUpdate[];
  }>('/tags/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
