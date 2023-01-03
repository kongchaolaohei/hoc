<template>
  <fks-table-column
    class="measuring-point-table"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </fks-table-column>
</template>

<script>

export default {
  name: 'IEFTableColum',
};
</script>
<style lang="scss">
.measuring-point-table.fks-date-editor {
  
}
</style>
