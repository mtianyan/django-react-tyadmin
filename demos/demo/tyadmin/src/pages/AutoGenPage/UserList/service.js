import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryUser(params) {
  return request('/api/xadmin/v1/user', {
    params,
  });
}
export async function removeUser(params) {
  return request(`/api/xadmin/v1/user/${params}`, {
    method: 'DELETE',
  });
}
export async function addUser(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/user', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateUser(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/user/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryUserVerboseName(params) {
  return request('/api/xadmin/v1/user/verbose_name', {
    params,
  });
}
export async function queryUserListDisplay(params) {
  return request('/api/xadmin/v1/user/list_display', {
    params,
  });
}
export async function queryUserDisplayOrder(params) {
  return request('/api/xadmin/v1/user/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

