<template>
  <fks-option
    class="ief-option"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </fks-option>
</template>

<script>

export default {
  name: 'IEFOption',
};
</script>
<style lang="scss">
.ief-option {

}
</style>
