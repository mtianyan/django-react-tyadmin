import React, {useContext, useEffect, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProForm from '@ant-design/pro-form';
import {Button, message} from 'antd';
import {userProfileRead as getOneRule, userProfileUpdate as updateRule} from "@/services/admin/userProfile";
// import {dealError} from "@/utils/utils";
import {history, Link, useLocation} from 'umi';
// import {usePanelTab} from 'umi';
import {CommonForm} from "./components/commonForm";
import {KeepAliveContext, useParams, useSearchParams} from "@@/exports";
import {fieldErrorResponse} from "@/utils/common";

const EditPage: React.FC = (props_out: any) => {
  const { dropByCacheKey } = useContext<any>(KeepAliveContext)
  // const {
  //   closeCurrent
  // } = usePanelTab();
  // user/abc/repo/def
  const [params] = useSearchParams()
  console.log("params",params)
  console.log("params",params.get('id'))
  console.log("location",location)
  const business_id = params.get('id')
  console.log("business_id",business_id)
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
      const pathname = location.pathname;
      dropByCacheKey(pathname);
      history.push('/admin/user/list')

      return true;
    } catch (error) {
      fieldErrorResponse(error, addFormRef);
      hide();
      message.error('保存失败');
      return false;
    }
  };

  return (
    <PageContainer header={{
      title: '编辑#VNAME#',
      ghost: true
    }}>
      <ProCard>
        <ProForm
          request={getCurRule}
          grid={true}
          formRef={addFormRef}
          layout='horizontal'
          onFinish={async (values) => {
            await handleUpdate(values);
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
