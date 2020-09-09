<template>
  <button @click="clickHandle" :disabled="disabled" class="ared-button" :class="[`ared-button--${this.type}`,{ 'is-plain':plain }, {'is-round': round}, {'is-circle': circle},{'is-disabled':disabled}]">
      <span><slot>点</slot></span>
  </button>
</template>

<script>
export default {
    name:'AredButton',
    // => 类型校验
    props:{
        type: {
            type:String,
            default: 'default'
        },
        plain: {
            type:Boolean,
            default: false
        },
        round: {
            type:Boolean,
            default: false
        },
        circle: {
            type:Boolean,
            default: false
        },
        disabled: {
            type:Boolean,
            default: false
        }
    },
    methods: {
        clickHandle(e) {
            this.$emit('click',e);
        }
    },
    created() {
        console.log(this.type);
        console.log(this.$slots);
    }   
}

</script>
<style lang='scss' scoped>
.ared-button {
    position: relative;
    display: inline-block;
    padding: 10px 12px;
    // 规定段落中的文本不进行换行
    white-space: nowrap;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    line-height: 1;
    text-align: center;
    outline: none;
    font-weight: 500;
    color: #666;
    // 禁止按钮的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    transition: 0.1s;
    &:hover,
    &:focus {
        border: 1px solid #430e24;
        color: #409eff;
        font-weight: 600;
        background-color: #eee;
    }   
}
.ared-button--primary {
    background-color: #66b1ff;
    color: #fff;
    &:hover,
    &:focus {
        background-color: lightskyblue;
        color: #fff;
    }
}
.ared-button--success {
    background-color: #67c23a;
    color: #fff;
    &:hover,
    &:focus {
        background-color: #87ca65;
        color: #fff;
    }
}
.ared-button--info {
    background-color: #a6a9ad;
    color: #fff;
    &:hover,
    &:focus {
        background-color: #babfc5;
        color: #fff;
    }
}
.ared-button--warning {
    background-color: #e6a23c;
    color: #fff;
    &:hover,
    &:focus {
        background-color: #f7b655;
        color: #fff;
    }
}
.ared-button--danger {
    background-color: #f78989;
    color: #fff;
    &:hover,
    &:focus {
        background-color: #f79f9f;
        color: #fff;
    }
}
/**********plain*************/
.ared-button--primary.is-plain {
    background-color: #ecf5ff;
    color: #409eff;
    &:hover,
    &:focus {
        background-color: #409eff;
        color: #fff;
    }
}
.ared-button--success.is-plain {
    background-color: #f0f9eb;
    color: #87ca65;
    &:hover,
    &:focus {
        background-color: #87ca65;
        color: #fff;
    }
}
.ared-button--info.is-plain {
    
    background-color: #f4f4f5;
    color: #a6a9ad;
    &:hover,
    &:focus {
        background-color: #a6a9ad;
        color: #fff;
    }
}
.ared-button--warning.is-plain {
    background-color: #fdf6ec;
    color: #e6a23c;
    &:hover,
    &:focus {
        background-color: #f7b655;
        color: #fff;
    }
}
.ared-button--danger.is-plain {
    background-color: #fef0f0;
    color: #f78989;
    &:hover,
    &:focus {
        background-color: #f79f9f;
        color: #fff;
    }
}
/***********round*****************/
// 圆角按钮
.ared-button.is-round {
    border-radius:18px;
    padding: 10px 20px;
}

// 圆形按钮
.ared-button.is-circle {
    border-radius:50%;
}

// 按钮禁用
.ared-button.is-disabled{
    cursor: not-allowed;
    filter: blur(0.1px);
}
</style>