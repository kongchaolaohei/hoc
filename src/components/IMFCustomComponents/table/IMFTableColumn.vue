<template>
  <el-table-column
    class="measuring-point-table"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </el-table-column>
</template>

<script>

export default {
  name: 'imf-table-column',
};
</script>
<style lang="scss">
.measuring-point-table.el-date-editor {
  
}
</style>
