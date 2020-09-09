<template>
  <div class="ared-form-item">
      <label for="" class="ared-form-item_label" :style="{width: this.Form.labelWidth}">{{label}}</label>
      <div class="ared-form-item_content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:"AredFormItem",
    inject: ['Form'],
    props: {
        label: {
            type: String,
            default:''
        }
    }    
}

</script>
<style lang='scss' scoped>
.ared-form-item {
    margin-bottom: 20px;
    .ared-form-item_label {
        float: left;
        line-height: 40px;
        font-size: 18px;
        text-align: right;
        color: #bd2b37;
        padding: 0 10px 0 0;
        vertical-align: center;
        box-sizing: border-box;
    }
    .ared-form-item_content {
        position: relative;
        line-height: 40px;
        overflow: hidden;
        font-size: 12px;
    }
}
</style>