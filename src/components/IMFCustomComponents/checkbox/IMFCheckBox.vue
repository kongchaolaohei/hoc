<template>
  <el-checkbox
    class="imf-checkbox"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-if="$slots.default"></slot>
    <template v-if="!$slots.default">{{$attrs.label}}</template>
  </el-checkbox>
</template>

<script>
export default {
  name: 'imf-checkbox',
};
</script>
<style lang="scss">
@mixin checkboxInnerStyle{
  background-color: transparent;
  background-image: linear-gradient(
    transparent 20%,
    rgba(61, 128, 145, 0.7) 70%,
    rgba(0, 204, 255, 0.8)
  );
  border-radius: 2px;
  border: 1px solid rgb(0, 204, 255);
  width: 16px;
  height: 16px;
  transition:all 0s
}
.imf-checkbox.el-checkbox {
  display: inline-flex;
  align-items: center;
  .is-checked .el-checkbox__inner {
    @include checkboxInnerStyle;
    &::after {
      border-radius: 0;
      background-color: transparent;
      border: 2px solid #fff;
      border-left: 0;
      border-top: 0;
      transform-origin: center;
      height: 8px;
      left: 4px;
      top: 0px;
      width: 4px;
    }
  }
  .el-checkbox__inner {
    @include checkboxInnerStyle;
    &::after {
      //transition: all 0.2s ease-out;
    }
  }
  .el-checkbox__label {
    color: #fff;
  }
  &.is-checked {
    .el-checkbox__label {
      color: #fff;
    }
    .el-checkbox__inner::after {
      transform: rotate(45deg) scaleY(1);
    }
  }
}
</style>
