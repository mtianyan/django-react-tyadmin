import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryDemoDefaultModel(params) {
  return request('/api/xadmin/v1/demo_default_model', {
    params,
  });
}
export async function removeDemoDefaultModel(params) {
  return request(`/api/xadmin/v1/demo_default_model/${params}`, {
    method: 'DELETE',
  });
}
export async function addDemoDefaultModel(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/demo_default_model', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateDemoDefaultModel(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/demo_default_model/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryDemoDefaultModelVerboseName(params) {
  return request('/api/xadmin/v1/demo_default_model/verbose_name', {
    params,
  });
}
export async function queryDemoDefaultModelListDisplay(params) {
  return request('/api/xadmin/v1/demo_default_model/list_display', {
    params,
  });
}
export async function queryDemoDefaultModelDisplayOrder(params) {
  return request('/api/xadmin/v1/demo_default_model/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

