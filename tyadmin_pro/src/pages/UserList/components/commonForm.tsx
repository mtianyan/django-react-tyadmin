import ProCard from '@ant-design/pro-card';
import ProForm, {ProFormRadio, ProFormText,} from '@ant-design/pro-form';

export const CommonForm = () => {

  // 一行两个
  const twoInLine = {
    labelCol: {xl: 6},
    labelAlign: 'left' as const,
    colProps: {xl: 12},
    wrapperCol: {xl: 12},
  };

  return (
    <>
      <ProCard title="基础信息" bordered>
        <ProForm.Group>
          <ProFormText
            hidden={false}
            {...twoInLine}
            width="md"
            name="password"
            label="密码"
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          />
          <ProFormText
            {...twoInLine}
            width="md"
            name="first_name"
            label="名字"
            placeholder="请输入名字"
            rules={[
              {
                required: true,
                message: '请输入名字!',
              },
            ]}
          />
          <ProFormText
            {...twoInLine}
            width="md"
            name="last_name"
            label="姓氏"
            placeholder="请输入姓氏"
            rules={[
              {
                required: true,
                message: '请输入姓氏!',
              },
            ]}
          />
          <ProFormText
            {...twoInLine}
            width="md"
            name="username"
            label="用户账号"
            placeholder="请输入用户账号"
            rules={[
              {
                required: true,
                message: '请输入用户账号!',
              },
            ]}
          />
          <ProFormText
            {...twoInLine}
            width="md"
            name="email"
            label="邮箱"
            placeholder="请输入邮箱"
            rules={[
              {
                required: true,
                message: '请输入邮箱!',
              },
            ]}
          />
          {/*<ProFormText*/}
          {/*  {...twoInLine}*/}
          {/*  width="md"*/}
          {/*  name="mobile"*/}
          {/*  label="电话"*/}
          {/*  placeholder="请输入电话"*/}
          {/*  rules={[*/}
          {/*    {*/}
          {/*      required: true,*/}
          {/*      message: '请输入电话!',*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
          {/*<ProFormText*/}
          {/*  {...twoInLine}*/}
          {/*  width="md"*/}
          {/*  name="name"*/}
          {/*  label="姓名"*/}
          {/*  placeholder="请输入姓名"*/}
          {/*  rules={[*/}
          {/*    {*/}
          {/*      required: true,*/}
          {/*      message: '请输入姓名!',*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
          <ProFormRadio.Group
            name="gender"
            {...twoInLine}
            label="性别"
            initialValue="male"
            options={[
              {label: '女', value: 'female'},
              {label: '男', value: 'male'},
            ]}
          />
        </ProForm.Group>
      </ProCard>
    </>
  );
};
