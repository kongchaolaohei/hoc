<template>
  <el-radio
    class="imf-radio"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-if="$slots.default"></slot>
    <template v-if="!$slots.default">{{$attrs.label}}</template>
  </el-radio>
</template>

<script>
export default {
  name: 'imf-radio',
};
</script>
<style lang="scss">
.imf-radio.el-radio {
  display: inline-flex;
  align-items: center;
  .is-checked .el-radio__inner {
    border: 1px solid rgb(0, 178, 223);
    &::after {
      width: 8px;
      height: 8px;
      background-color: rgb(0, 178, 223);
    }
  }
  .el-radio__inner {
    border: 1px solid rgb(0, 120, 152);
    background-color: rgb(0, 54, 74);
    transition: all 0.2s ease-out;
    &::after {
      transition: all 0.2s ease-out;
    }
  }
  .el-radio__label {
    padding-left: 10px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgb(0, 178, 223);
  }
}
</style>
