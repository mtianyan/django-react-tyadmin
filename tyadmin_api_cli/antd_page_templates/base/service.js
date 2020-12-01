import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function query>>MODEL_NAME<<(params) {
  return request('/api/xadmin/v1/>>MODEL_NAME_LOWER_CASE<<', {
    params,
  });
}
export async function remove>>MODEL_NAME<<(params) {
  return request(`/api/xadmin/v1/>>MODEL_NAME_LOWER_CASE<</${params}`, {
    method: 'DELETE',
  });
}
export async function add>>MODEL_NAME<<(params) {
  let fileFieldList = [>>IMAGE_FIELD_LIST<<]
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/>>MODEL_NAME_LOWER_CASE<<', {
    method: 'POST',
    data: fileData,
  });
}
export async function update>>MODEL_NAME<<(params, id) {
  let fileFieldList = [>>IMAGE_FIELD_LIST<<]
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/>>MODEL_NAME_LOWER_CASE<</${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function query>>MODEL_NAME<<VerboseName(params) {
  return request('/api/xadmin/v1/>>MODEL_NAME_LOWER_CASE<</verbose_name', {
    params,
  });
}
export async function query>>MODEL_NAME<<ListDisplay(params) {
  return request('/api/xadmin/v1/>>MODEL_NAME_LOWER_CASE<</list_display', {
    params,
  });
}
export async function query>>MODEL_NAME<<DisplayOrder(params) {
  return request('/api/xadmin/v1/>>MODEL_NAME_LOWER_CASE<</display_order', {
    params,
  });
}
>>UPDATE_PASSWORD_SERVICE<<
>>ADAPTER_SERVICE<<
