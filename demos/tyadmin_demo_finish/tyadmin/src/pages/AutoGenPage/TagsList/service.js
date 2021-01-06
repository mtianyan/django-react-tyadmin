import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryTags(params) {
  return request('/api/xadmin/v1/tags', {
    params,
  });
}
export async function removeTags(params) {
  return request(`/api/xadmin/v1/tags/${params}`, {
    method: 'DELETE',
  });
}
export async function addTags(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/tags', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateTags(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/tags/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryTagsVerboseName(params) {
  return request('/api/xadmin/v1/tags/verbose_name', {
    params,
  });
}
export async function queryTagsListDisplay(params) {
  return request('/api/xadmin/v1/tags/list_display', {
    params,
  });
}
export async function queryTagsDisplayOrder(params) {
  return request('/api/xadmin/v1/tags/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

