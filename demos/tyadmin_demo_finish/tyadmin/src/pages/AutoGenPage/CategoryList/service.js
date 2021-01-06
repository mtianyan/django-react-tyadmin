import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryCategory(params) {
  return request('/api/xadmin/v1/category', {
    params,
  });
}
export async function removeCategory(params) {
  return request(`/api/xadmin/v1/category/${params}`, {
    method: 'DELETE',
  });
}
export async function addCategory(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/category', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateCategory(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/category/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryCategoryVerboseName(params) {
  return request('/api/xadmin/v1/category/verbose_name', {
    params,
  });
}
export async function queryCategoryListDisplay(params) {
  return request('/api/xadmin/v1/category/list_display', {
    params,
  });
}
export async function queryCategoryDisplayOrder(params) {
  return request('/api/xadmin/v1/category/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

