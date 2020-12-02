import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryDemoModelRequire(params) {
  return request('/api/xadmin/v1/demo_model_require', {
    params,
  });
}
export async function removeDemoModelRequire(params) {
  return request(`/api/xadmin/v1/demo_model_require/${params}`, {
    method: 'DELETE',
  });
}
export async function addDemoModelRequire(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/demo_model_require', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateDemoModelRequire(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/demo_model_require/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryDemoModelRequireVerboseName(params) {
  return request('/api/xadmin/v1/demo_model_require/verbose_name', {
    params,
  });
}
export async function queryDemoModelRequireListDisplay(params) {
  return request('/api/xadmin/v1/demo_model_require/list_display', {
    params,
  });
}
export async function queryDemoModelRequireDisplayOrder(params) {
  return request('/api/xadmin/v1/demo_model_require/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

