<template>
  <div class="ared-input " :class="{'ared-input--suffix': show}">
      <!-- 如果传入了showPassword 才要进行密码的显示隐藏的切换  -->
      <input  class="ared-input_inner"
        :class="{'is-disabled': disabled}"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :placeholder="placeholder"
        :name="name"
        :disabled="disabled"
        :value="value"
        @input="inputHandle"
      >
      <span class="ared-input_suffix" v-if="show">
          <!-- 有值才会显示 没有值会隐藏 -->
          <i class="close" v-if="clearable && value" @click="clear">×</i>
          <i class="view" v-if="showPassword && value" style="position: absolute; top: 5px; right: 6px" @click="change"
            :class="{'view-active': passwordVisible}"
          >*</i>
      </span>
  </div>
</template>

<script>
export default {
    name:'AredInput',
    data() {
        return {
            passwordVisible: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            defalut:''
        },
        disabled: {
            type: Boolean,
            default:false
        },
        value: {
            type: String,
            default:''
        },
        clearable: {
            type: Boolean,
            default:false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        show() {
            return this.clearable || this.showPassword;
        }
    },
    methods: {
        clear() {
            // =>让父组件把元素清空
            this.$emit('input','');
        },
        change() {
            this.passwordVisible = !this.passwordVisible;
        },
        inputHandle(e) {
            this.$emit('input',e.target.value);
        }
    }
}

</script>
<style lang='scss'>
.ared-input {
    width: 100%;
    display: inline-block;
    &_inner {
        width: 100%;
        height: 40px;
        outline: none;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1.5px solid #ccc;
        padding: 7px 10px;
        font-size: 18px;
        color: #7b1823;
        cursor: pointer;
        transition: border-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:focus {
            border-color: #7b1823;
        }
    }
    &_inner::placeholder {
        color: #ddafb3;
    }
    &_inner.is-disabled {
        background-color: #ccc;
        cursor: not-allowed;
        color:  #777071!important;
    }
}
.ared-input--suffix {
    position: relative;
    .ared-input_inner {
        padding-right: 30px;
    }
    .ared-input_suffix {
        position: absolute;
        vertical-align: bottom;
        text-align: center;
        top: 0px;
        right: 10px;
        i {
            font-size: 30px;
            color: #ccc;
            font-style: normal;
            cursor: pointer;
             // 禁止按钮的文字被选中
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
        .view-active {
            color: #ec3650;
        }   
    }
}

</style>