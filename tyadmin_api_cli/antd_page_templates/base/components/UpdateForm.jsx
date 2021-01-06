import React from 'react';
import { Modal } from 'antd';

const UpdateForm = props => {
  const { modalVisible, onCancel } = props;
  return (
    <Modal
      destroyOnClose
      title="修改>>MODEL_VERBOSE_NAME<<"
      visible={modalVisible}
      >>WIDTH_PLACEHOLDER<<
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default UpdateForm;
