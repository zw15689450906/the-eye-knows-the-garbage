import React from 'react';
import { Modal } from 'antd';

const CreateForm = props => {
  const { modalVisible, onCancel } = props;
  return (
    <Modal
      destroyOnClose
      title="新建用户概览"
      visible={modalVisible}
      width={800}
      onCancel={() => onCancel()}
      footer={null}
    >
      {props.children}
    </Modal>
  );
};

export default CreateForm;
