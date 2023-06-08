import {PageContainer, ProForm, ProFormText,} from '@ant-design/pro-components';
import React, {useRef} from 'react';
import {LockOutlined} from "@ant-design/icons";
import {Card, message} from "antd";
import { changePasswordCreate as changePassword } from "@/services/admin/changePassword";
import { history } from 'umi';
import {fieldErrorResponse} from "@/utils/common";
const ChangePassWord: React.FC = () => {
  const changePassFormRef = useRef();
  const handleChangePassWord = (values: any) => {
    changePassword(values).then(
      () => {
        message.success('密码修改成功,请重新登录!');
        if (window.location.pathname !== '/xadmin/login') {
          history.replace({
            pathname: '/admin/login',
          });
        }
      },
    ).catch((error: any) => {
      fieldErrorResponse(error, changePassFormRef)
    });
  };
  return (
    <>
      <PageContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          overflow: 'auto',
        }}
      >
        <Card
          title={'修改当前账号密码'}
        >
          <ProForm
            formRef={changePassFormRef}
            onFinish={async (values) => {
              await handleChangePassWord(values);
              // message.success('提交成功');
            }}
            wrapperCol={{
              span: 12,
            }}>
            <ProFormText
              label="旧密码"
              placeholder="请输入旧密码"
              rules={[
                {
                  required: true,
                  message: '请输入旧密码',
                }]}
              name="old_password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined/>,
              }}
            />
            <ProFormText
              name="new_password"
              label="新密码"
              placeholder="请输入新密码"
              rules={[
                {
                  required: true,
                  message: '请输入新密码',
                }]}
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined/>,
              }}
            />
            <ProFormText
              name="re_password"
              label="重复新密码"
              placeholder="请输入名称"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined/>,
              }}
              rules={[
                {
                  required: true,
                  message: '请再次输入新密码',
                },
                ({getFieldValue}) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('new_password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次密码不匹配');
                  },
                }),
              ]}
            />
          </ProForm
          >
        </Card>
      </PageContainer>
    </>


  );
};

export default ChangePassWord;
