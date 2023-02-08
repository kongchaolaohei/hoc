<template>
  <el-radio-group
    class="imf-radio-group"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </el-radio-group>
</template>

<script>

export default {
  name: 'imf-radio-group',
};
</script>
<style lang="scss">
.imf-radio-group.el-radio-group {
  .imf-radio {
    // margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
