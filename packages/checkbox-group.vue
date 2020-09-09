<template>
  <div class="ared-checkbox-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'AredCheckboxGroup',
    provide() {
        return {
            CheckboxGroup: this
        }
    },
    props: {
        value: {
            type: Array,
            defalut: []      
        }
    }
}

</script>
<style lang='less' scoped>
</style>