<template>
  <div class="ared-radio-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'AredRadioGroup',
    provide() {
        return {
            // => 提供Group组件本身
            RadioGroup:this
        }
    },
    props: {
        value:null
    }
}

</script>
<style lang='less' scoped>
</style>