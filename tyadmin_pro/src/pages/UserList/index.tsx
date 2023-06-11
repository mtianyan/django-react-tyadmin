import {DeleteOutlined, DownOutlined, EditOutlined, ExportOutlined, PlusOutlined,} from '@ant-design/icons';
import {Button, Divider, Dropdown, Input, Menu, message, Popconfirm} from 'antd';
import React, {useRef, useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ActionType, ColumnsState} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {exportExcelAll, exportExcelCurrent, fieldErrorResponse, list_display_map} from '@/utils/common';
import {
  userProfileCreate as tableCreate,
  userProfileDelete as tableDelete,
  userProfileList as tableList,
  userProfileUpdate as tableUpdate,
} from '@/services/admin/userProfile';
import AddForm from './add';
import EditForm from './edit';
import DetailShow from './detail';

const handleRemove = async (selectedRows: any) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const ids = selectedRows.map((row: { id: any }) => row.id).join(',');
    await tableDelete({id: ids});
    hide();
    message.success('删除成功');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败');
    return false;
  }
};

const TableList: React.FC = () => {
  // 显示单行数据详情
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<any>();

  // 表格纯字段列
  const columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: true,
    },

    {
      title: '密码',
      dataIndex: 'password',
    },

    {
      title: '上次登录',
      dataIndex: 'last_login',
    },

    {
      title: '超级用户状态',
      dataIndex: 'is_superuser',
    },

    {
      title: '名字',
      dataIndex: 'first_name',
    },

    {
      title: '姓氏',
      dataIndex: 'last_name',
    },

    {
      title: '工作人员状态',
      dataIndex: 'is_staff',
    },

    {
      title: '有效',
      dataIndex: 'is_active',
    },

    {
      title: '加入日期',
      dataIndex: 'date_joined',
      sorter: true,
      valueType: 'dateTimeRange',
      render: (curNode: any) => {
        return <span>{curNode.props.text}</span>
      },
      transform: (values: any) => {
        return {
          date_joined_after: values ? values[0].slice(0, -3) : undefined,
          date_joined_before: values ? values[1].slice(0, -3) : undefined,
        };
      }
    },

    {
      title: '修改时间',
      dataIndex: 'update_time',

    },

    {
      title: '创建时间',
      dataIndex: 'create_time',
    },

    {
      title: '用户账号',
      dataIndex: 'username',
      render: (dom: any, entity: any) => {
        return (
          <a
            onClick={() => {
              console.log('en', entity);
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },

    {
      title: '邮箱',
      dataIndex: 'email',
    },

    {
      title: '电话',
      dataIndex: 'mobile',
    },

    {
      title: '头像',
      dataIndex: 'avatar',
    },

    {
      title: '姓名',
      dataIndex: 'name',
    },

    {
      title: '性别',
      dataIndex: 'gender',
    },
  ];

  // 是否显示全部列，全部列则忽略下方list_display
  const show_all = false;

  // 表格显示哪些列
  const list_display = ['username', 'email', 'phone', 'date_joined', 'avatar'];

  // 表格ref
  const actionRef = useRef<ActionType>();
  // 新增表单ref
  const addFormRef = useRef<ActionType>();

  // 处理新建
  const handleAdd = async (fields: any) => {
    const hide = message.loading('正在添加');
    try {
      await tableCreate({...fields});
      hide();
      message.success('保存成功');
      return true;
    } catch (error) {
      fieldErrorResponse(error, addFormRef)
      // dealError(error, addFormRef, hide, '添加');
      hide();
      message.error('保存失败');
      return false;
    }
  };

  // 处理更新
  const handleUpdate = async (fields: any) => {
    const hide = message.loading('正在添加');
    try {
      console.log('ccc', currentRow);
      await tableUpdate({id: currentRow.id}, fields);
      hide();
      message.success('保存成功');
      return true;
    } catch (error) {
      // dealError(error, addFormRef, hide, '添加');
      hide();
      message.error('保存失败');
      return false;
    }
  };

  // table 受控参数
  const [paramState, setParamState] = useState({});

  // 新增按钮
  const addButton = (
    <Button type="primary">
      <PlusOutlined/> 新建
    </Button>
  );

  // 编辑按钮
  const editButton = (record: any) => {
    return (
      <EditOutlined
        title="编辑"
        className="icon"
        onClick={() => {
          setCurrentRow(record);
        }}
      />
    );
  };
  // 导出按钮
  const exportButton = () => {
    return (
      <Button
        type="primary"
        onClick={() => exportExcelAll(paramState, tableList, columns, '商家列表-All')}
      >
        <ExportOutlined/> 导出全部
      </Button>
    );
  };
  // 搜索按钮
  const searchButton = () => {
    return (
      <Input.Search
        style={{marginRight: 20}}
        placeholder="搜索商家列表"
        onSearch={(value) => {
          setParamState({
            search: value,
          });
          actionRef.current?.reload();
        }}
      />
    );
  };

  // 下拉按钮
  const batchDropdown = (selectedRows: any) => {
    return (
      <Dropdown
        overlay={
          <Menu
            onClick={async (e) => {
              if (e.key === 'remove') {
                await handleRemove(selectedRows);
                actionRef.current?.reloadAndRest!();
              } else if (e.key === 'export_current') {
                exportExcelCurrent(selectedRows, columns, '商家列表-select');
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
          批量操作 <DownOutlined/>
        </Button>
      </Dropdown>
    );
  };

  // 表格操作列
  const opera_column = {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    fixed: 'right',
    width: 100,
    render: (text: any, record: any) => (
      <>
        <EditForm
          currentRow={record}
          addFormRef={addFormRef}
          actionRef={actionRef}
          handleUpdate={handleUpdate}
          trigger={editButton(record)}
        />
        <Divider type="vertical"/>
        <Popconfirm
          title="您确定要删除商家列表吗？"
          placement="topRight"
          onConfirm={async () => {
            await handleRemove([record]);
            actionRef.current?.reloadAndRest!();
          }}
          okText="确定"
          cancelText="取消"
        >
          <DeleteOutlined title="删除" className="icon"/>
        </Popconfirm>
      </>
    ),
  };
  columns.push(opera_column);

  // 根据list_display 计算columnsMap
  let columnsMap = {};
  if (!show_all) {
    columnsMap = list_display_map(columns, list_display);
  }

  // 显示隐藏哪些列
  const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>(columnsMap);

  return (
    <PageContainer title={false} breadcrumb={undefined}>
      <ProTable<any, any>
        cardBordered
        headerTitle="用户表格"
        actionRef={actionRef}
        params={paramState}
        rowKey="id"
        form={{
          labelAlign: "left"
        }}
        columnsState={{
          value: columnsStateMap,
          onChange: setColumnsStateMap,
        }}
        rowSelection={{}}
        search={{
          // span: 12,
          labelWidth: 150,
        }
        }
        toolBarRender={(action, {selectedRows}) => [
          // eslint-disable-next-line react/jsx-key
          <AddForm
            addFormRef={addFormRef}
            handleAdd={handleAdd}
            actionRef={actionRef}
            trigger={addButton}
          />,
          exportButton(),
          searchButton(),
          selectedRows && selectedRows.length > 0 && batchDropdown(selectedRows),
        ]}
        request={(params, sorter, filter) => {
          let order = ''
          for (const user in sorter) {
            if (sorter[user] === 'descend') {
              order = user
            } else {
              order = "-" + user
            }
          }
          if (order !== '') {
            params["ordering"] = order
          }
          return tableList({...params, filter})
        }}
        columns={columns}
      />
      <DetailShow
        showDetail={showDetail}
        currentRow={currentRow}
        columns={columns}
        setCurrentRow={setCurrentRow}
        setShowDetail={setShowDetail}
      />
    </PageContainer>
  );
};

export default TableList;
