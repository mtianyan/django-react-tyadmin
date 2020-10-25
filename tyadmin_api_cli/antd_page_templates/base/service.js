import request from 'umi-request';

import {buildFileFormData} from '@/utils/utils'
export async function query$占位模型名$(params) {
  return request('/api/xadmin/v1/$占位path$', {
    params,
  });
}
export async function remove$占位模型名$(params) {
  return request(`/api/xadmin/v1/$占位path$/${params}`, {
    method: 'DELETE',
  });
}
export async function add$占位模型名$(params) {
  let fileFieldList = [$图片字段列表$]
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/$占位path$', {
    method: 'POST',
    data: fileData,
  });
}
export async function update$占位模型名$(params, id) {
  let fileFieldList = [$图片字段列表$]
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/$占位path$/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function query$占位模型名$VerboseName(params) {
  return request('/api/xadmin/v1/$占位path$/verbose_name', {
    params,
  });
}
export async function query$占位模型名$ListDisplay(params) {
  return request('/api/xadmin/v1/$占位path$/list_display', {
    params,
  });
}
export async function query$占位模型名$DisplayOrder(params) {
  return request('/api/xadmin/v1/$占位path$/display_order', {
    params,
  });
}
$更新密码service占位$
$适配service占位$
