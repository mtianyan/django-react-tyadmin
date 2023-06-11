import {PlusOutlined, DownOutlined, ExportOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {Button, message, Dropdown, Menu, Divider, Popconfirm, Input, Drawer} from 'antd';
import React, {useState, useRef, useEffect} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import type {ProColumns, ActionType, ColumnsState} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {exportExcelCurrent, exportExcelAll} from '@/utils/common'
import {userProfileList as rule, userProfileDelete as removeRule} from '@/services/admin/userProfile';
import ProDescriptions from '@ant-design/pro-descriptions';
import {Link, useLocation} from 'umi';
import EditForm from "@/pages/UserList/edit";


/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: any) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const ids = selectedRows.map((row: { id: any; }) => row.id).join(',');
    await removeRule({"id": ids});
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
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<any>();
  const [search, setSearch] = useState<any>('');
  const actionRef = useRef<ActionType>();
  const searchRef = useRef<any>(null);
  const location = useLocation()
  useEffect(() => {
    actionRef.current?.reload()
  }, [location.key])
  const [paramState, setParamState] = useState({});
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
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

  // 表格操作列
  const opera_column =     {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    fixed: 'right',
    width: 400,
    render: (text, record) => (
      <>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            // packageCopy({ id: record.id }).then((r) => {
            //   message.success('复制成功');
            //   actionRef.current?.reload();
            // });
          }}
        >
          复制
        </Button>
        <Divider type="vertical"/>
        <Link to={{pathname: `/admin/user/detail`, search: `?id=` + record.id}}>
          <Button type="primary" size="small">
            查看
          </Button>
        </Link>
        <Divider type="vertical"/>
        <Link to={{pathname: `/admin/user/edit`, search: `?id=` + record.id}}>
          <Button type="primary" size="small">
            编辑
          </Button>
        </Link>
        <Divider type="vertical"/>
        <Popconfirm
          title="您确定要删除吗？"
          placement="topRight"
          onConfirm={async () => {
            await handleRemove([record]);
            // @ts-ignore
            actionRef.current?.reloadAndRest();
          }}
          okText="确定"
          cancelText="取消"
        >
          <Button type="primary" size="small">
            删除
          </Button>
        </Popconfirm>
      </>
    ),
  };
  columns.push(opera_column);

  const all_field = columns.filter(item => item.dataIndex !== 'option').map(item => item.dataIndex)
  const list_display = ['username', 'date_joined']
  const columnMap = {}
  // eslint-disable-next-line @typescript-eslint/no-for-in-array
  for (const index in list_display) {
    columnMap[list_display[index]] = {
      show: true,
      order: index,
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-for-in-array
  for (const index in all_field) {
    // @ts-ignore
    if (all_field[index] in columnMap) {

    } else {
      // @ts-ignore
      columnMap[all_field[index]] = {
        show: false,
        order: parseInt(index),
      }
    }
  }
  console.log(columnMap)
  // const columnMap =
  const [columnsStateMap, setColumnsStateMap] = useState<Record<string, ColumnsState>>(columnMap);

  return (
    <PageContainer title={false} breadcrumb={undefined}>
      <ProTable<any>
        headerTitle={'#VNAME#列表'}
        actionRef={actionRef}
        params={paramState}
        rowKey="id"
        columnsState={{
          value: columnsStateMap,
          onChange: setColumnsStateMap,
        }}
        rowSelection={{}}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={(action, {selectedRows}) => [
          <Link to={{pathname: `/admin/user/add`}}>
            <Button type="primary">
              <EditOutlined/> 新建
            </Button></Link>,
          // <Button type="primary" onClick={() => exportExcelAll(paramState, rule, columns, '商家列表-All')}>
          //   <ExportOutlined/> 导出全部
          // </Button>,
          <Input.Search value={search} style={{marginRight: 20}} placeholder="搜索" onChange={e=>{
            setSearch(e.target.value)
          }} onSearch={value => {
            setSearch(value)
            setParamState({
              search: value,
            });
            actionRef.current?.reload();
          }}/>,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      // @ts-ignore
                      actionRef.current?.reloadAndRest();
                    } else if (e.key === 'export_current') {
                      exportExcelCurrent(selectedRows, columns, '#VNAME#列表-select')
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">批量删除</Menu.Item>
                  {/*<Menu.Item key="export_current">导出已选</Menu.Item>*/}
                </Menu>
              }
            >
              <Button>
                批量操作 <DownOutlined/>
              </Button>
            </Dropdown>
          ),
        ]}
        request={rule}
        columns={columns}
        onReset={()=>{
          setParamState({})
          setSearch("")
        }}
      />
    </PageContainer>
  );
};


export default TableList;
