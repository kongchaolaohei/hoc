<template>
  <fks-form-item
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    class="ief-form-item"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </fks-form-item>
</template>

<script>
export default {
  name: 'IEFFormItem'
}
</script>

<style lang="scss">
.ief-form-item {
  
}
</style>