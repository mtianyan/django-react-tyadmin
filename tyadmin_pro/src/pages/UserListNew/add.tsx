import React, {useContext, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm from '@ant-design/pro-form';
import {Button, message} from 'antd';
import {userProfileCreate as addRule} from "@/services/admin/userProfile";
// import {dealError} from "@/utils/utils";
import {Link, history} from 'umi';
import { KeepAliveContext } from '@umijs/max';
import {CommonForm} from "./components/commonForm";
import {fieldErrorResponse} from "@/utils/common";

const EditPage: React.FC = (props: any) => {
  // const {closeCurrent} = usePanelTab();
  const addFormRef = useRef()
  const { dropByCacheKey } = useContext<any>(KeepAliveContext)
  const handleAdd = async (fields: any) => {
    const hide = message.loading('正在添加');
    try {
      await addRule({...fields});
      hide();
      message.success('保存成功');
      // closeCurrent()

      // history.push('/list');
      // 返回列表页
      const pathname = location.pathname;
      dropByCacheKey(pathname);

      history.push('/admin/user/list')
      return true;
    } catch (error) {
      console.log("err", error)
      fieldErrorResponse(error, addFormRef);
      hide();
      message.error('保存失败');
      return false;
    }
  };

  return (
    <PageContainer header={{
      title: '新增商家',
    }}>
      <ProCard>
        <ProForm
          grid={true}
          formRef={addFormRef}
          layout='horizontal'
          onFinish={async (values) => {
            await handleAdd(values);
          }}
          submitter={{
            // 完全自定义整个区域
            render: (props) => {
              console.log(props);
              return [
                <Button style={{marginLeft: 180}} type={'primary'} key="submit" onClick={() => {
                  props.form?.submit?.()
                }}>
                  保存
                </Button>,
                <Button key="rest" onClick={() => props.form?.resetFields()}>
                  重置
                </Button>,
              ];
            },
          }}
        >
          <CommonForm></CommonForm>
        </ProForm>
      </ProCard>

    </PageContainer>
  );
};

export default EditPage;
