<template>
  <label class="ared-checkbox"
    :class="{'is-checked': isChecked}"
  >
      <span class="ared-checkbox_input">
          <span class="ared-checkbox_inner"></span>
          <input type="checkbox" 
          class="ared-checkbox_origin"
          :name="name"
          v-model="model"
          :value="label"
          >
      </span>
      <span class="ared-checkbox_label">{{label}}</span>
  </label>
</template>

<script>
export default {
    name: 'AredCheckbox',
    inject: {
        CheckboxGroup: {
          default: ''
        }
    },
    computed: {
      isGroup(){
        return !!this.CheckboxGroup;
      },  
      model: {
        get() {
          return this.isGroup ? this.CheckboxGroup.value : this.value;
        },
        set(value) {
          console.log(value);
          return this.isGroup ? this.CheckboxGroup.$emit('input',value) : this.$emit('input',value);
        }
      },
      isChecked() {
        return this.isGroup ? this.model.includes(this.label) : this.model;
      }
    },
    props: {
      label: {    
          type: [String,Number,Boolean],
          default:''
      },
      value: {
        type: Boolean,
        default: false
      },
      name: {
          type: String,
          default: ''
      }
    }
}

</script>
<style lang='scss' scoped>
.ared-checkbox {
  display: inline-block;
  .ared-checkbox_input {
    position: relative;
    .ared-checkbox_inner {
      display: inline-block;
      width: 12px;
      height: 12px;
      vertical-align: middle;
      border: 1px solid #666;
      border-radius: 3px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 7px;
        height: 3px;
        border-left: 1.5px solid #fff;
        border-bottom: 1.5px solid #fff;
        top: 35%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-45deg) scale(0);
        transition: all .3s;
      }
    }
    .ared-checkbox_origin {
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
  .ared-checkbox_label {
    font-size: 12px;
    color: #333;
    margin: 0 5px;    
  }
}
.ared-checkbox.is-checked {
  .ared-checkbox_input {
    .ared-checkbox_inner{
        background-color: #bb3451;
        &::after {
          transform: translate(-50%,-50%) rotate(-45deg) scale(1);
        }
    }
  }
  .ared-checkbox_label {
    color: #bb3451;
  } 
}
</style>