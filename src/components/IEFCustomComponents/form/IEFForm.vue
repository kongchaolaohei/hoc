<template>
  <fks-form 
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    class="ief-form"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </fks-form>
</template>

<script>
export default {
  name: 'IEFForm',
  methods: {
    getRef() {
      return this.$refs.form
    }
  }
}
</script>

<style lang="scss">
.ief-form {
  
}
</style>