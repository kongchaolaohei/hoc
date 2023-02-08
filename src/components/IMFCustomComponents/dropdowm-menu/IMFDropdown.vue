<template>
  <el-dropdown
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-dropdown>
</template>

<script>

export default {
  name: 'imf-dropdown',
};
</script>
<style lang="scss">
.el-dropdown-menu {
  background: #001b29;
  border: 1px solid #0089ad;
  border-radius: 0px;
  padding: 0;
  .el-dropdown-menu__item {
    background: #001b29;
    color: #0093b8;
    width: 122px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 15px;
    padding: 0;
    margin: 0;
    &:hover {
      color: #fff !important;
      background-image: linear-gradient(#001b29, #007798);
    }
  }
  .popper__arrow[x-placement="bottom"] {
    margin-top: -3px;
    border-bottom-color: transparent;
    transform: translateX(-50%);
    &::after {
      top: 10px;
      margin-left: 0;
      border-bottom-color: #00ccff;
    }
  }
}
</style>
