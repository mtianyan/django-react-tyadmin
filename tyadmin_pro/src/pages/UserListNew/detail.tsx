import React, {useEffect, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm from '@ant-design/pro-form';
import {Button, message} from 'antd';
import {userProfileRead as getOneRule, userProfileUpdate as updateRule} from "@/services/admin/userProfile";
// import {dealError} from "@/utils/utils";
import {history, Link} from 'umi';
// import {usePanelTab} from 'umi';
import {CommonForm} from "./components/commonForm";
import {useSearchParams} from "@@/exports";

const ViewPage: React.FC = (props_out: any) => {
  // const {
  //   closeCurrent
  // } = usePanelTab();
  const [params] = useSearchParams()
  console.log("params",params)
  console.log("params",params.get('id'))
  console.log("location",location)
  const business_id = params.get('id')
  const getCurRule = async () => {
    return await getOneRule({id: business_id})
  }
  useEffect(() => {
    getCurRule()
  }, [])
  // 查询
  const addFormRef = useRef()
  const handleUpdate = async (fields: any) => {
    const hide = message.loading('正在添加');
    try {
      await updateRule({id: business_id}, fields);
      hide();
      message.success('保存成功');
      // closeCurrent()
      // 返回列表页
      history.push('/admin/user/list')
      return true;
    } catch (error) {
      // dealError(error, addFormRef, hide, "添加");
      hide();
      message.error('保存失败');
      return false;
    }
  };

  return (
    <PageContainer header={{
      title: '查看#VNAME#',
      ghost: true,
    }}>
      <ProCard>
        <ProForm
          request={getCurRule}
          grid={true}
          layout='horizontal'
          submitter={false}
        >
          <CommonForm readonly={true}></CommonForm>
        </ProForm>
      </ProCard>

    </PageContainer>
  );
};

export default ViewPage;
