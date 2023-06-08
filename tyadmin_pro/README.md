# Ty-admin Pro

## 初始化
### 1. 增加多标签配置

```
  keepalive: [/./],
  tabsLayout: {
  hasDropdown: true,
},
```

### 2. 修改proxy到后端项目

```
export default {
  dev: {
    '/api/': {
      target: 'http://127.0.0.1:8002',
      changeOrigin: true,
      pathRewrite: {
      },
    },
  },
};
```

### 3. 增加图形验证码

```
 <Row gutter={8}>
                <Col span={16}>
                  <ProForm.Item name="pic_captcha"
                    // placeholder="验证码"
                                rules={[
                                  {
                                    required: true,
                                    message: '请输入验证码！',
                                  },
                                ]}>
                    <Input size="large" placeholder='请输入验证码'
                           prefix={<IconFont type="iconyanzhengma"/>}/>
                  </ProForm.Item>
                </Col>
                <Col span={8}>
                  <Spin spinning={imgLoading}>
                    <img alt="Captcha"
                         style={{width: '100%', height: 35, marginTop: 2.5, marginLeft: 10}}
                         src={captchaImg}
                         onClick={onGetCaptcha}
                    />
                  </Spin>
                </Col>
              </Row>

            </>
          )}
```

处理验证码刷新，提交，错误统一处理

### 4. 修改密码功能， footer 底部固定

```
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          overflow: 'auto',
        }}
```
### 4.1 openapi

```
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: "http://127.0.0.1:8002/swagger/?format=openapi",
      projectName: 'admin',
      mock: false,
    },
  ],
```

### 5. 用户列表 以及 异步filter



### 6. modal版本 + 新页面版本

### 


