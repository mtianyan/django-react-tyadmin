UPDATE_PASSWORD_METHOD = """const handlePassWordUpdate = () => {
    if (updatePasswordForm.getFieldValue('password') !== updatePasswordForm.getFieldValue('re_password')) {
      updatePasswordForm.setFields([{
        name: 're_password',
        errors: ['两次密码不一致'],
      }]);
    } else {
      updatePasswordForm.validateFields().then(
        value => {
          updateUserPassword({
            ...value,
            username: updateFormValues["username"],
          }).then(
            message.success('密码修改成功'),
            handleUpdatePassWordModalVisible(false),
          );
        },
      );
      updatePasswordForm.submit;
    }
  };"""
PASSWORD_UPDATE_FORM = """      {
                      <UpdatePasswordForm
                        onCancel={() => {
                          handleUpdatePassWordModalVisible(false);
                        }}
                        handleUpdate={handlePassWordUpdate}
                        updateModalVisible={updatePassWordModalVisible}
                        userName={updateFormValues["username"]}
                      >
                        <Form form={updatePasswordForm}>
                          <FormItem
                            labelCol={{
                              span: 5,
                            }}
                            wrapperCol={{
                              span: 15,
                            }}
                            label="密码"
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: '请输入密码！',
                              },
                            ]}
                          >
                            <Input.Password placeholder="请输入密码" type="password" />
                          </FormItem>
                          <FormItem
                            labelCol={{
                              span: 5,
                            }}
                            wrapperCol={{
                              span: 15,
                            }}
                            label="重复密码"
                            name="re_password"
                            rules={[
                              {
                                required: true,
                                message: '请输入重复密码',
                              },
                            ]}
                          >
                            <Input.Password placeholder="请再次输入密码" type="password" />
                          </FormItem>
    
                        </Form>
                      </UpdatePasswordForm>
                    }"""
PASSWORD_PLACE = 'const [updatePassWordModalVisible, handleUpdatePassWordModalVisible] = useState(false);\nconst [updatePasswordForm] = Form.useForm();'
PASSWORD_FORM = """import {updateUserPassword} from './service';\nimport UpdatePasswordForm from './components/UpdatePasswordForm';"""
