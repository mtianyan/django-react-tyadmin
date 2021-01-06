import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryDemoModel(params) {
  return request('/api/xadmin/v1/demo_model', {
    params,
  });
}
export async function removeDemoModel(params) {
  return request(`/api/xadmin/v1/demo_model/${params}`, {
    method: 'DELETE',
  });
}
export async function addDemoModel(params) {
  let fileFieldList = ["image_field","file_field"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/demo_model', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateDemoModel(params, id) {
  let fileFieldList = ["image_field","file_field"]
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/demo_model/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryDemoModelVerboseName(params) {
  return request('/api/xadmin/v1/demo_model/verbose_name', {
    params,
  });
}
export async function queryDemoModelListDisplay(params) {
  return request('/api/xadmin/v1/demo_model/list_display', {
    params,
  });
}
export async function queryDemoModelDisplayOrder(params) {
  return request('/api/xadmin/v1/demo_model/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

