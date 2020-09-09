# ared_ui

## Project setup
```
npm install ared_ui
```

## 全局引入
```
import AredUI from 'ared_ui'
```

### 样式引入
```
import 'ared_ui/dist/ared_ui.css'
```
## 全局注册
```
Vue.use(AredUI)
```
## 组件的使用
```
<template>
  <div id="app">
    <ared-form :model="model" labelWidth="100px">
      <ared-form-item label="用户名">
        <ared-input placeholder="请输入内容" v-model="model.name"></ared-input>
      </ared-form-item>
      <ared-form-item label="选择">
        <ared-switch v-model="model.active"></ared-switch>
      </ared-form-item>
      <ared-form-item label="多选">
        <ared-radio label="吃饭" v-model="model.hobby"></ared-radio>
        <ared-radio label="睡觉" v-model="model.hobby"></ared-radio>
      </ared-form-item>
      <ared-form-item label="提交">
        <ared-button type="success" plain circle>提交</ared-button>
      </ared-form-item>
    </ared-form>
  </div>
</template>

<script>
export default {
    data(){
      return {
        model: {
          name:'username',
          active: true,
          hobby:'睡觉'
        },
        hobby: ['吃饭','睡觉','敲代码'],
        visible: true,
        username:'ared',
        active: false,
        gender: 1,
      }
    }
}
</script>
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

