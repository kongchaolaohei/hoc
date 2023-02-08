<template>
  <el-tabs
    class="imf-tabs"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-tabs>
</template>

<script>

export default {
  name: 'imf-tabs',
};
</script>
<style lang="scss">
@mixin icon-effect-by-img () {
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  @content;
}
.imf-tabs.el-tabs {
  .el-tabs__nav-wrap::after {
    height: 1px;
  }
  .el-tabs__active-bar.is-top {
    background-color: transparent;
    &::after{
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 3px;
      width: 32px;
      background: #0CC0CC;
      transform: translateX(-50%);
      border-radius: 2px;
    }
    // clip-path: polygon(25% 0, 75% 0, 75% 100%, 25% 100%)
  }
  .el-tabs__nav {
    .el-tabs__item {
      font-weight: 400;
      &:hover {
        color: #0CC0CC;
      }
      &.is-active {
        color: #0CC0CC;
        font-weight: 500;
      }
    }
  }
}
</style>
