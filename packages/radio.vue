<template>
<!-- 点击label标签会跳转到input标签 -->
  <label class="ared-radio" :class="{'is-checked': label === model}">
      <span class="ared-radio_input">
          <span class="ared-radio_inner"></span>
          <input class="ared-radio_origin"
           type="radio"
           :value="label"
           :name="name"
           v-model="model"
           >
      </span>
      <span class="ared-radio_label">
          <slot>{{label}}</slot>
      </span>
  </label>
</template>
<script>
export default {
    name:'AredRadio',
    created() {
        console.log(this.value);
    },
    // => 子组件进行注入
    inject: {
        RadioGroup: {
            default: ''
        }
    },
    // => 计算属性使用v-model时需要使用setter和getter
    computed: {
        model: {
            get() {
                return this.isGroup ? this.RadioGroup.value : this.value;
            },
            set(value) {
                console.log('set');
                console.log(value);
                this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value);
            }
        },
        isGroup() {
            // => 判断是否被RadioGroup所包裹
            return !!this.RadioGroup;
        }
    },
    props: {
        label: {    
            type: [String,Number,Boolean],
            default:''
        },
        value: null,
        name: {
            type: String,
            default: ''
        }
    }
}

</script>
<style lang='scss' scoped>
      
.ared-radio {
    display: inline-block;
    .ared-radio_input {
        position: relative;
        vertical-align: middle;
        .ared-radio_inner {
            display: inline-block;
            position: relative;
            width: 12px;
            height:12px;
            border-radius: 50%;
            border: 0.8px solid #666;
            // background-color: #bb3451;
            &::after {
                content:'';
                display: inline-block;
                width: 4px;
                height: 4px;
                position: absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: all .3s;
                border-radius: 50%;
                background-color: #fff;
            }
            &:hover {
                border-color: #bb3451;
            }
        }
        .ared-radio_origin {
            opacity: 0;
            position: absolute;
            outline: none;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 0;
            height: 0;
        }
    }
    .ared-radio_label {
        margin: 0 4px;
        font-size: 12px;
        color: #333;
    }
}
.ared-radio.is-checked {
    .ared-radio_input {
        .ared-radio_inner {
            background-color: #bb3451;
            &:after {
                transform: translate(-50%,-50%) scale(1);
            }
        }
    }
    .ared-radio_label {
        color:#bb3451;
    }
}
</style>