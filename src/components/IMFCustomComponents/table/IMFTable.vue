<template>
  <el-table
    ref="table"
    class="imf-table"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-table>
</template>

<script>

export default {
  name: 'imf-table',
  methods:{
    getRef(){
      return this.$refs.table;
    }
  }
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
.imf-table.el-table {
  position: relative;
  background: transparent;
  .el-checkbox {
    display: inline-flex;
    align-items: center;

    .el-checkbox__label {
      display: inline-flex;
      align-items: center;
      line-height: initial;
      color: #18253D;
      font-weight: 400;
      min-width: 120px;
    }

    .el-checkbox__input {
      display: inline-flex;
      align-items: center;

      // &.is-checked {
      //   .el-checkbox__inner {
      //     &::after {
      //       display: none;
      //     }

      //     // background-image: url('~@/assets/img/iefCoustomComponents/checkbox/checked.png') !important;
      //     background-position: center !important;
      //     background-color: #0CC0CC !important;
      //     background-size: 100% 100% !important;
      //     border: none;
      //   }
      // }

      // &.is-indeterminate {
      //   .el-checkbox__inner {
      //     &::after {
      //       display: none;
      //     }

      //     // background-image: url('~@/assets/img/iefCoustomComponents/checkbox/indeterminate.png') !important;
      //     background-position: center !important;
      //     background-size: 100% 100% !important;
      //     border: none;
      //   }
      // }

      .el-checkbox__inner {
        // border-color: #CED4E0;
        // border-radius: 4px;

        &:hover {
          // border-color: #CED4E0;
        }
      }
    }

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

  &::before {
    display: none;
  }
  .el-table__header-wrapper {
    th {
      font-size: 16px;
      background: linear-gradient(180deg, rgba(0,204,255,0.7) 0%, rgba(0,204,255,0.1) 29%, rgba(0,204,255,0) 51%, rgba(0,204,255,0.1) 73%, #00CCFF 100%, rgba(0,204,255,0.5) 100%);
      font-weight: 500;
      color: #00CCFF;
      border-left: 1px solid rgba(0,204,255,0.2);
      border-bottom: 1px solid transparent !important;
      &:first-child {
        border-left: 1px solid transparent !important;
      }
      &.gutter {
        border-left: 1px solid transparent;
        border-bottom: 1px solid transparent;
      }
    }
    tr {
    }
  }
  .el-table__body-wrapper {
    &::-webkit-scrollbar-thumb {
      border-radius: 0;
    }
    &::-webkit-scrollbar-track {
    }
    .el-table__row {
      background: rgba(0,204,255,0.01) !important;
      &:hover {
        background: rgba(0,204,255,0.1) !important;
      }
      &.el-table__row--striped {
        background: rgba(0,204,255,0.05) !important;
        &:hover {
          background: rgba(0,204,255,0.1) !important;
        }
      }
    }
    td {
      color: #FFFFFF;
      font-size: 15px;
      border-left: 1px solid rgba(0,204,255,0.2);
      background: transparent !important;
      padding: 13px 0;
      &:first-child {
        border-left: 1px solid transparent;
      }
    }
    tr {
      background: transparent !important;
      &:last-child td {
        border-bottom: 1px solid rgba(0,204,255,0.2);
      }
    }
    .el-table__row td{
    }
    .el-table__row.el-table__row--striped td {
    }
    .el-table__empty-text {
    }
  }
}
</style>