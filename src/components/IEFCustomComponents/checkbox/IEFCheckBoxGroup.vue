<template>
  <fks-checkbox-group
    class="ief-checkbox-group"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </fks-checkbox-group>
</template>

<script>

export default {
  name: 'IEFCheckBoxGroup',
};
</script>
<style lang="scss">
.ief-checkbox-group.fks-checkbox-group {
  .ief-checkbox {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
