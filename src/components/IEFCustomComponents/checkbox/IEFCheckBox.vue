<template>
  <fks-checkbox
    class="ief-checkbox"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-if="$slots.default"></slot>
    <template v-if="!$slots.default">{{$attrs.label}}</template>
  </fks-checkbox>
</template>

<script>

export default {
  name: 'IEFCheckBox',
};
</script>
<style lang="scss">
@mixin icon-effect-by-img () {
  @content;
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
}
.ief-checkbox.fks-checkbox {
  display: inline-flex;
  align-items: center;
  .fks-checkbox__label {
    display: inline-flex;
    align-items: center;
    line-height: initial;
    color: #18253D;
    font-weight: 400;
    min-width: 120px;
  }
  .fks-checkbox__input {
    display: inline-flex;
    align-items: center;
    &.is-checked {
      .fks-checkbox__inner {
        &::after {
          display: none;
        }
        background-image: url('~@/assets/img/iefCoustomComponents/checkbox/checked.png') !important;
        background-position: center !important;
        background-color: #0CC0CC !important;
        background-size: 100% 100% !important;
        border: none;
      }
    }
    &.is-indeterminate {
      .fks-checkbox__inner {
        &::after {
          display: none;
        }
        background-image: url('~@/assets/img/iefCoustomComponents/checkbox/indeterminate.png') !important;
        background-position: center !important;
        background-size: 100% 100% !important;
        border: none;
      }
    }
    .fks-checkbox__inner {
      border-color: #CED4E0;
      border-radius: 4px;
      &:hover {
        border-color: #CED4E0;
      }
    }
  }
}
</style>
