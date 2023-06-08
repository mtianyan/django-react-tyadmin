import { CommonForm } from './components/commonForm';
import { ModalForm } from '@ant-design/pro-form';

const EditForm = (props: any) => {
  const currentRow = props.currentRow;
  const addFormRef = props.addFormRef;
  const actionRef = props.actionRef;
  const handleUpdate = props.handleUpdate;
  const trigger = props.trigger;
  return (
    <ModalForm
      title="修改"
      width="1100px"
      trigger={trigger}
      initialValues={currentRow}
      grid={true}
      formRef={addFormRef}
      layout="horizontal"
      onFinish={async (values) => {
        const success = await handleUpdate(values);
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
export default EditForm;
