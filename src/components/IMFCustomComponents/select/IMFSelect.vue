<template>
  <el-select
    class="imf-select"
    popper-class="imf-select-popper"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </el-select>
</template>

<script>

export default {
  name: 'imf-select',
};
</script>
<style lang="scss">
.imf-select.el-select {
  .el-input {
    &.is-disabled {
      z-index: 10;
    }
    &.is-disabled .el-input__inner {
      color: #626C72 !important;
      &::placeholder {
        color: #626C72;
      }
    }
    &.is-focus .el-input__inner {
      border-color: #004f63;
    }
    .el-input__inner {
      display: block;
      border: 1px solid #004f63;
      background-color: transparent;
      border-color: #004f63 !important;
      color: #00ccff;
      border-radius: 0;
      height: 32px;
      line-height: 32px;
      padding: 0 35px 0 12px;
      &::placeholder {
        font-size: 15px;
        color: rgba(0, 204, 255, 0.50);
      }
    }
    .el-input__suffix {
      line-height: 32px;
      .el-input__suffix-inner {
        &>i {
          line-height: 32px;
        }
      }
      .el-icon-arrow-up {
        &::before {
          content: "";
          color: #00cafd;
        }
      }
      .el-icon-circle-close {
        &::before {
          color: #00ccff;
        }
      }
      
    }
  }
  .el-select__tags {
    height: 100%;

    // .el-tag.
    .el-tag {
      background-color: rgba(0, 54, 74, 1);
      border-color: transparent;
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      .el-tag__close {
        color: #fff;
      }
      .el-tag__close.el-icon-close {
        border: 1px solid #00ccff;
        background-color: transparent;
        right: -2px;
        top: initial;
        margin: 0;
        color: #00ccff;
        &::before {
          display: block;
          transform: none;
        }
        &:hover{
          border: 1px solid #fff;
          color: #fff;
        }
      }
    }
  }
}
.imf-select-popper.el-select-dropdown {
  border-radius: 0;
  border: 1px solid #004f63 !important;
  background-color: #004f63 !important;
  margin-top: 6px !important;
  box-sizing: border-box;
  .el-scrollbar {
    background-color: #001b29;
  }
  .popper__arrow {
    display: none;
  }
  .el-select-dropdown__list {
    padding: 0;
  }
  .el-select-dropdown__item {
    color: #00cafd;
    padding: 0 13px;
    box-sizing: border-box;
    &.selected {
      color: #00cafd;
      background: -webkit-linear-gradient(left, #00202f, #004f68);
      font-weight: 500;
      &::after {
        right: 13px;
      }
    }
    &.hover {
      // background-color: wheat;
      background: -webkit-linear-gradient(left, #00202f, #004f68);
      color: white;
    }
  }
}
</style>
