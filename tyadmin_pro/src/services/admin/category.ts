// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /category */
export async function categoryList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryListParams,
  options?: { [key: string]: any },
) {
  return request<{ count: number; next?: string; previous?: string; results: API.CategoryList[] }>(
    '/category',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /category */
export async function categoryCreate(
  body: API.CategoryCreateUpdate,
  options?: { [key: string]: any },
) {
  return request<API.CategoryCreateUpdate>('/category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /category/${param0} */
export async function categoryRead(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryReadParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CategoryCreateUpdate>(`/category/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /category/${param0} */
export async function categoryUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryUpdateParams,
  body: API.CategoryCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CategoryCreateUpdate>(`/category/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /category/${param0} */
export async function categoryDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryDeleteParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/category/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /category/${param0} */
export async function categoryPartialUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryPartialUpdateParams,
  body: API.CategoryCreateUpdate,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CategoryCreateUpdate>(`/category/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /category/display_order/ */
export async function categoryDisplayOrder(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryDisplayOrderParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.CategoryCreateUpdate[];
  }>('/category/display_order/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /category/list_display/ */
export async function categoryListDisplay(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryListDisplayParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.CategoryCreateUpdate[];
  }>('/category/list_display/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /category/verbose_name/ */
export async function categoryVerboseName(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.categoryVerboseNameParams,
  options?: { [key: string]: any },
) {
  return request<{
    count: number;
    next?: string;
    previous?: string;
    results: API.CategoryCreateUpdate[];
  }>('/category/verbose_name/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
