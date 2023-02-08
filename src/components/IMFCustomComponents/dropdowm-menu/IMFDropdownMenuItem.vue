<template>
  <el-dropdown-menu-item
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-dropdown-menu-item>
</template>

<script>

export default {
  name: 'imf-dropdown-menu-item',
};
</script>
<style lang="scss">

</style>
