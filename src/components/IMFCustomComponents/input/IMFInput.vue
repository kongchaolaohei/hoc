<template>
  <el-input
    ref="myInput"
    class="imf-input"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot v-if="$slots.default"></slot>
    <template v-if="!$slots.default">{{$attrs.label}}</template>
  </el-input>
</template>

<script>
export default {
  name: 'imf-input',
  methods: {
    getRef(){
      return this.$refs.myInput
    }
  }
};
</script>
<style lang="scss">
.imf-input.el-input {
  &.is-disabled {
    .el-input__inner {
      display: block;
      border: 1px solid #004f63;
      background-color: transparent;
      border-color: #004f63 !important;
      color: #626C72;
      border-radius: 0;
      height: 32px;
      line-height: 32px;
      // padding: 0 35px 0 12px;
      &::placeholder {
        color: #626C72 !important;
      }
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
    // padding: 0 35px 0 12px;
    &::placeholder {
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

.imf-input.el-textarea {
  &.is-disabled {
    .el-textarea__inner {
      display: block;
      border: 1px solid #004f63;
      background-color: transparent;
      border-color: #004f63 !important;
      color: #626C72;
      border-radius: 0;
      // padding: 0 35px 0 12px;
      &::placeholder {
        color: #626C72 !important;
      }
    }
  }
  &.is-focus .el-textarea__inner {
    border-color: #004f63;
  }
  .el-textarea__inner {
    display: block;
    border: 1px solid #004f63;
    background-color: transparent;
    border-color: #004f63 !important;
    color: #FFFFFF;
    border-radius: 0;
    // padding: 0 35px 0 12px;
    &::placeholder {
      color: rgba(0, 204, 255, 0.50);
    }
  }
}
</style>
