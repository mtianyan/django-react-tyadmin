import {CommonForm} from './components/commonForm';
import {ModalForm} from '@ant-design/pro-form';

const AddForm: React.FC<any> = (props: any) => {
  const addFormRef = props.addFormRef;
  const handleAdd = props.handleAdd;
  const actionRef = props.actionRef;
  const trigger = props.trigger;
  return (
    <ModalForm
      formRef={addFormRef}
      title={'新建'}
      width="1100px"
      trigger={trigger}
      grid={true}
      layout="horizontal"
      onFinish={async (value) => {
        const success = await handleAdd(value as any);

        if (success) {
          if (actionRef.current) {
            actionRef.current.reload();
          }
          return true;
        } else {
          return false;
        }
      }}
    >
      <CommonForm formRef={addFormRef}/>
    </ModalForm>
  );
};

export default AddForm;
