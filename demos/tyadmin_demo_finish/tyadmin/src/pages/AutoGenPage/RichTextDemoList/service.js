import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryRichTextDemo(params) {
  return request('/api/xadmin/v1/rich_text_demo', {
    params,
  });
}
export async function removeRichTextDemo(params) {
  return request(`/api/xadmin/v1/rich_text_demo/${params}`, {
    method: 'DELETE',
  });
}
export async function addRichTextDemo(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/rich_text_demo', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateRichTextDemo(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/rich_text_demo/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryRichTextDemoVerboseName(params) {
  return request('/api/xadmin/v1/rich_text_demo/verbose_name', {
    params,
  });
}
export async function queryRichTextDemoListDisplay(params) {
  return request('/api/xadmin/v1/rich_text_demo/list_display', {
    params,
  });
}
export async function queryRichTextDemoDisplayOrder(params) {
  return request('/api/xadmin/v1/rich_text_demo/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

