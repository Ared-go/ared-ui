import Button from './button'
import CheckBox from './checkbox'
import CheckBoxGroup from './checkbox-group'
import Dialog from './dialog'
import Form from './form'
import FormItem from './form-item'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
const components = [
        Button,
        CheckBox,
        CheckBoxGroup,
        Dialog,
        Form,
        FormItem,
        Input,
        Radio,
        RadioGroup,
        Switch
    ]
    // => 定义整个包的入口
    // => 定义install方法,接收Vue作为参数,如果使用 use注册插件,则所有的组件都将被注册
const install = function(Vue) {
    // => 全局注册所有的组件
    components.forEach((item) => {
        Vue.component(item.name, item);
    });
}

// 判断是否是直接引入文件,如果是,就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install
}