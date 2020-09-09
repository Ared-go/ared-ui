<template>
  <div class="ared-switch" @click="change" :class="{'is-checked': value}">
      <input type="checkbox" class="ared-switch_input" ref="input">
      <span class="ared-switch_core" ref="core">
          <span class="ared-switch_button"></span>
      </span>
  </div>
</template>

<script>
export default {
    name:'AredSwitch',
    props: {
        value: {
            type: Boolean,
            defalut: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        async change() {
            // => 实现双向数据绑定
            this.$emit('input',!this.value);
            // => 等待value发生了变化, 
            // => 数据修改后 等待DOM更新,再修改按钮的颜色
            await this.$nextTick();
            this.setColor();
            this.$refs.input.checked = this.value;
        },
        setColor() {
            if (this.activeColor || this.inactiveColor) {
                let color = this.value ? this.activeColor: this.inactiveColor;
                this.$refs.core.style.backgroundColor = color;
            }
        }
    },
    mounted() {
        this.setColor();
        this.$refs.input.checked = this.value;        
    }    
}

</script>
<style lang='scss' scoped>
.ared-switch {
    display: inline-flex;
    height: 18px;
    position: relative;
    top: 6px;
    &_input {
        position: absolute;
        width: 0;
        height: 0;
    }
    &_core {
        margin: 0;
        width: 36px;
        height: 18px;
        position: relative;
        background-color: #ccc;
        border-radius: 18px;
        transition: all .3s;
        cursor: pointer;
        .ared-switch_button {   
            display: inline-block;
            position: absolute;
            top: 1px;
            left: 1px;
            width: 16px;
            height: 16px;
            transition: all .3s;
            border-radius: 100%;
            background-color: #fff;
        }
    }
}
.ared-switch.is-checked {
    .ared-switch_core {
        background-color: #e94f7d;
        .ared-switch_button {
            transform: translateX(18px);
        }
    }
}
</style>