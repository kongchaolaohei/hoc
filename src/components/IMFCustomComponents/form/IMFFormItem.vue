<template>
  <el-form-item
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    class="imf-form-item"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-form-item>
</template>

<script>
export default {
  name: 'imf-form-item'
}
</script>

<style lang="scss">
.imf-form-item {
  
}
</style>