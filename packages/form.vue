<template>
  <div class="ared-form">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'AredForm',
    provide() {
        return {
            Form: this
        }
    },
    props: {
        model: {
            type: Object,
            require: true
        },
        labelWidth: {
            type: String,
            default:'50px'
        }
    }
}

</script>
<style lang='less' scoped>

</style>