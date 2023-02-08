<template>
  <el-option
    class="imf-option"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </el-option>
</template>

<script>

export default {
  name: 'imf-option',
};
</script>
<style lang="scss">
.imf-option {

}
</style>
