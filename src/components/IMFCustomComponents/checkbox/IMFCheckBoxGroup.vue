<template>
  <el-checkbox-group
    class="imf-checkbox-group"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </el-checkbox-group>
</template>

<script>

export default {
  name: 'imf-checkbox-group',
};
</script>
<style lang="scss">
.imf-checkbox-group.el-checkbox-group {
  .imf-checkbox {
    //margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
