import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryDemoForeignKey(params) {
  return request('/api/xadmin/v1/demo_foreign_key', {
    params,
  });
}
export async function removeDemoForeignKey(params) {
  return request(`/api/xadmin/v1/demo_foreign_key/${params}`, {
    method: 'DELETE',
  });
}
export async function addDemoForeignKey(params) {
  let fileFieldList = ["image","file"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/demo_foreign_key', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateDemoForeignKey(params, id) {
  let fileFieldList = ["image","file"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/demo_foreign_key/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryDemoForeignKeyVerboseName(params) {
  return request('/api/xadmin/v1/demo_foreign_key/verbose_name', {
    params,
  });
}
export async function queryDemoForeignKeyListDisplay(params) {
  return request('/api/xadmin/v1/demo_foreign_key/list_display', {
    params,
  });
}
export async function queryDemoForeignKeyDisplayOrder(params) {
  return request('/api/xadmin/v1/demo_foreign_key/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

