import { DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, ExportOutlined } from '@ant-design/icons';
import { notification, Button, Col, Descriptions, Divider, Dropdown, Form, Input, Menu, message, Popconfirm, Popover, Row, Select, Tag, Transfer, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import KeyOutlined from '@ant-design/icons/lib/icons/KeyOutlined';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from 'mtianyan-pro-table';
import CreateForm from './components/CreateForm';
import { addDemoModel, queryDemoModel, removeDemoModel, updateDemoModel, queryDemoModelVerboseName, queryDemoModelListDisplay, queryDemoModelDisplayOrder} from './service';
import UpdateForm from './components/UpdateForm';
import UploadAvatar from '@/components/UploadAvatar';
import {queryDemoForeignKey, queryDemoForeignKeyVerboseName} from '@/pages/AutoGenPage/DemoForeignKeyList/service';

import moment from 'moment';
const { Option } = Select;
import { BooleanFormItem, dealManyToManyFieldTags, fileUpload, twoColumns, richForm, richCol, dealPureSelectField, orderForm, exportExcelCurrent, exportExcelAll, getUpdateColumns, dealRemoveError, dealError, BooleanDisplay, dealDateTimeDisplay, dealManyToManyField, dealTime, deepCopy, fieldErrorHandle, getTableColumns, renderManyToMany, richTrans, dealForeignKeyField, renderForeignKey, fieldsLevelErrorHandle } from '@/utils/utils';
import 'braft-editor/dist/index.css'
const FormItem = Form.Item;
const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
 
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef();
  const addFormRef = useRef();
  const updateFormRef = useRef();

  const handleAdd = async fields => {
    const hide = message.loading('正在添加');

    try {
      await addDemoModel({ ...fields });
      hide();
      message.success('添加成功');
      return true;
    } catch (error) {
      return dealError(error, addFormRef, hide, "添加");
    }
  };

  const handleUpdate = async (value, current_id) => {
    const hide = message.loading('正在修改');

    try {
      await updateDemoModel(value, current_id);
      hide();
      message.success('修改成功');
      return true;
    } catch (error) {
      return dealError(error, updateFormRef, hide, "修改");
    }
  };

  const handleRemove = async selectedRows => {
    const hide = message.loading('正在删除');
    if (!selectedRows) return true;

    try {
      const ids = selectedRows.map(row => row.id).join(',');
      await removeDemoModel(ids);
      hide();
      message.success('删除成功');
      return true;
    } catch (error) {
      hide()
      return dealRemoveError(error, "删除");
    }
  };
 
  const dateFieldList = ["date_field","date_time_field"]
  const base_columns = [{
                             title: 'id',
                             
        hideInForm: true,
        hideInSearch: true,
        
                             
                             dataIndex: 'id',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: 'CharField列',
                             
                             
                             dataIndex: 'char_field',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'CharField列为必填项',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'IntegerField列',
                             
                             
                             dataIndex: 'number_field',
                             valueType: 'digit',
                             rules: [
                                     {
                      required: true,
                      message: 'IntegerField列为必填项',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'FloatField列',
                             
                             
                             dataIndex: 'float_number_field',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'FloatField列为必填项',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'ImageField列',
                             
        hideInSearch: true,
        
                             
                             dataIndex: 'image_field',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'ImageField列为必填项',
                     },
                             ],
                             
                                          render: (text, record) => {
                      return <img src={text} width="80px" alt=""/>
                    },
renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                              const imageUrl = form.getFieldValue('image_field');
                              return <UploadAvatar img={imageUrl}/>
                            },
    
                             
                        },
                      {
                             title: 'FileField列',
                             
        hideInSearch: true,
        
                             
                             dataIndex: 'file_field',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'FileField列为必填项',
                     },
                             ],
                             
                        render: (text, record) => {
                          return <a download={text.split('/').slice(-1)} href={text}>{text.split('/').slice(-1)}</a>;
                        },    renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                          const downloadUrl = form.getFieldValue('file_field');
                          return fileUpload(downloadUrl);
                        },
                             
                        },
                      {
                             title: 'BooleanField列',
                             
                             
                             dataIndex: 'bool_field',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'BooleanField列为必填项',
                     },
                             ],
                             
                                     render: (text, record) => {
                                  return BooleanDisplay(text);
                                },
                        renderFormItem: (item, {value, onChange}) => {
                          return BooleanFormItem(value, onChange);
                        },
        
                             
                        },
                      {
                             title: 'TextField列',
                             
                             
                             dataIndex: 'text_field',
                             valueType: 'textarea',
                             rules: [
                                     {
                      required: true,
                      message: 'TextField列为必填项',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'DateField列',
                             
                             
                             dataIndex: 'date_field',
                             valueType: 'date',
                             rules: [
                                     {
                      required: true,
                      message: 'DateField列为必填项',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'DateTimeField列',
                             
                             
                             dataIndex: 'date_time_field',
                             valueType: 'dateTime',
                             rules: [
                                     {
                      required: true,
                      message: 'DateTimeField列为必填项',
                     },
                             ],
                             
                             
                        },
                      {
                             title: '关联外键',
                             
                             
                             dataIndex: 'foreign_key_field',
                             
                             rules: [
                                     {
                      required: true,
                      message: '关联外键为必填项',
                     },
                             ],
                             
                        renderFormItem: (item, {value, onChange}) => {
                                          return dealForeignKeyField(item, value, onChange, foreign_key_fieldForeignKeyList);
                                  },
                        render: (text, record) => {
                              return renderForeignKey(text, foreign_key_fieldVerboseNameMap);
                            },
                             
                        },
                          {
                              title: '操作',
                              dataIndex: 'option',
                              valueType: 'option',
                                    fixed: 'right',
          width: 100,
                              render: (text, record) => (
                                <>

                                  <EditOutlined title="编辑" className="icon" onClick={async () => {
                                   record.date_field = record.date_field === null ? record.date_field : moment(record.date_field);record.date_time_field = record.date_time_field === null ? record.date_time_field : moment(record.date_time_field);
                                    handleUpdateModalVisible(true);
                                    setUpdateFormValues(record);
                                  }} />
                                  <Divider type="vertical" />
                                  <Popconfirm
                                    title="您确定要删除全部字段类型-必填吗？"
                                    placement="topRight"
                                    onConfirm={() => {
                                      handleRemove([record])
                                      actionRef.current.reloadAndRest();
                                    }}
                                    okText="确定"
                                    cancelText="取消"
                                  >
                                    <DeleteOutlined title="删除" className="icon" />
                                  </Popconfirm>
                                </>
                              ),
                            },];

  let cp = deepCopy(base_columns);

  const [formOrder, setFormOrder] = useState([]);

  useEffect(() => {
    queryDemoModelDisplayOrder().then(r => {
      setFormOrder(r.form_order)
    })
  }, [])
  const table_columns = getTableColumns(cp);

  let order_cp = deepCopy(base_columns);
  const form_ordered = orderForm(formOrder, order_cp);

  const create_columns = [...form_ordered];
  const update_cp = deepCopy(form_ordered)
  const update_columns = getUpdateColumns(update_cp);

  const [columnsStateMap, setColumnsStateMap] = useState({});

  const [paramState, setParamState] = useState({});

  useEffect(() => {
    queryDemoModelListDisplay().then(value => {
      setColumnsStateMap(value)
    })
  }, [])


   
                                const [foreign_key_fieldForeignKeyList, setForeign_key_fieldForeignKeyList] = useState([]);
                                useEffect(() => {
                                queryDemoForeignKey({all: 1}).then(value => {
                                     setForeign_key_fieldForeignKeyList(value);
                                });
                                }, []);
                                const [foreign_key_fieldVerboseNameMap, setForeign_key_fieldVerboseNameMap] = useState([]);
                                useEffect(() => {
                                queryDemoForeignKeyVerboseName().then(value => {
                                    setForeign_key_fieldVerboseNameMap(value);
                                });
                                }, []);

   
  return (
    <PageHeaderWrapper>
      <ProTable
        beforeSearchSubmit={(params => {
          dealTime(params, dateFieldList);
          return params;
        })}
        params={paramState}
        scroll={{ x: '100%' }}
        columnsStateMap={columnsStateMap}
        onColumnsStateChange={(map) => setColumnsStateMap(map)}
        headerTitle="全部字段类型-必填表格"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 新建
          </Button>,
          <Button type="primary" onClick={() => exportExcelAll(paramState, queryDemoModel, table_columns, '全部字段类型-必填-All')}>
            <ExportOutlined /> 导出全部
          </Button>,
          <Input.Search style={{ marginRight: 20 }} placeholder="搜索全部字段类型-必填" onSearch={value => {
            setParamState({
              search: value,
            });
            actionRef.current.reload();
          }} />,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      actionRef.current.reloadAndRest();
                    }
                    else if (e.key === 'export_current') {
                      exportExcelCurrent(selectedRows, table_columns, '全部字段类型-必填-select')
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">批量删除</Menu.Item>
                  <Menu.Item key="export_current">导出已选</Menu.Item>
                </Menu>
              }
            >
              <Button>
                批量操作 <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          selectedRowKeys.length > 0 ? <div>
            已选择{' '}
            <a
              style={{
                fontWeight: 600,
              }}
            >
              {selectedRowKeys.length}
            </a>{' '}
            项&nbsp;&nbsp;
          </div> : false

        )}
        request={(params, sorter, filter) => queryDemoModel({ ...params, sorter, filter })}
        columns={table_columns}
        rowSelection={{}}
      />
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          formRef={addFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          search={twoColumns}
          form={
            {
              labelCol: { span: 6 },
              labelAlign: 'left',
            }}
          columns={create_columns}
          rowSelection={{}}
        />
      </CreateForm>
      <UpdateForm onCancel={() => handleUpdateModalVisible(false)} modalVisible={updateModalVisible}>
        <ProTable
          formRef={updateFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleUpdate(value, updateFormValues.id);

            if (success) {
              handleUpdateModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          search={twoColumns}
          type="form"
          form={{
            initialValues: updateFormValues, labelCol: { span: 6 },
            labelAlign: 'left',
          }}
          columns={update_columns}
          rowSelection={{}}
        />
      </UpdateForm>
       
    </PageHeaderWrapper>
  );
};

export default TableList;
