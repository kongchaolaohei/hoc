<template>
  <el-form 
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    class="imf-form"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-form>
</template>

<script>
export default {
  name: 'imf-form',
  methods: {
    getRef() {
      return this.$refs.form
    }
  }
}
</script>

<style lang="scss">
.imf-form {
  
}
</style>