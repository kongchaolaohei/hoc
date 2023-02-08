<template>
  <el-pagination
    class="imf-pagination"
    popper-class="imf-pagination-popper"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>

export default {
  name: 'imf-pagination',
};
</script>
<style lang="scss">
@mixin icon-effect-by-img () {
  @content;
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
}

.imf-pagination.el-pagination {
  font-weight: normal;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .el-pagination__total {
    color: rgb(0, 178, 223);
  }
  .btn-prev,
  .btn-next {
    min-width: 28px;
    height: 28px;
    margin: 0;
    padding: 0;
    border: 1px solid #004053;
    border-radius: 3px;
    margin-right: 8px;
    background-color: transparent !important;
    color: rgb(0, 178, 223);
  }
  .btn-prev{
    position: relative;
    // >i {
    //   width: 20px;
    //   height: 20px;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: rotateZ(0deg) translate(-50%, -50%);
    //   &::before {
    //     display: none;
    //   }
    //   transform: rotateZ(0deg) translate(-50%, -50%);
    //   @include icon-effect-by-img {
    //     background-image: url('~@/assets/component/pagination-pre-page-icon.png');
    //   }
    // }
    // &[disabled="disabled"]>i {
    //   width: 20px;
    //   height: 20px;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: rotateZ(0deg) translate(-50%, -50%);
    //   &::before {
    //     display: none;
    //   }
    //   @include icon-effect-by-img {
    //     transform: rotateZ(0deg) translate(-50%, -50%);
    //     background-image: url('~@/assets/component/pagination-prev-arrow-disable.png');
    //   }
    // }
  }
  .btn-next {
    position: relative;
    // >i {
    //   width: 20px;
    //   height: 20px;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: rotateZ(0deg) translate(-50%, -50%);
    //   &::before {
    //     display: none;
    //   }
    //   @include icon-effect-by-img {
    //     transform: rotateZ(0deg) translate(-50%, -50%);
    //     background-image: url('~@/assets/component/pagination-next-page-icon.png');
    //   }
    // }
    // &[disabled="disabled"]>i {
    //   width: 20px;
    //   height: 20px;
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: rotateZ(0deg) translate(-50%, -50%);
    //   &::before {
    //     display: none;
    //   }
    //   @include icon-effect-by-img {
    //     transform: rotateZ(180deg) translate(-50%, -50%);
    //     transform-origin: 0 0;
    //     background-image: url('~@/assets/component/pagination-prev-arrow-disable.png');
    //   }
    // }
  }
  button {
    padding: 0;
  }
  button:disabled {
    background-color: transparent !important;
  }
  .el-pager {
    .el-icon-more {
      // &::before {
      //   display: none;
      // }
      // @include icon-effect-by-img {
      //   background-image: url('~@/assets/component/pagination-more-page-icon.png') !important;
      //   background-size: 20px 20px !important;
      //   background-position: center !important;
      //   background-repeat: no-repeat !important;
      // }
    }
    li {
      padding: 0;
      min-width: 28px;
      margin-right: 8px;
      background: transparent !important;
      border: 1px solid #004053;
      color: rgb(0, 178, 223);
      border-radius: 3px;
      &:not(.disabled):hover{
        color: rgb(0, 178, 223);
      }
    }
    .active {
      color: #eef3f4;
      background-image: linear-gradient(#001623, #007190) !important;
    }
  }
  .el-pagination__sizes {
    .el-icon-arrow-up {
      font-size: 18px;
      color: rgb(0, 204, 255);
      &::before {
        content: "\e78f";
      }
    }
    .el-select--mini {
      .el-input {
        width: 75px;
        .el-input__inner {
          border: 1px solid #004053;
          background-color: transparent;
          color: rgb(0, 178, 223);
          padding-right: 20px;
        }
      }
    }
  }
  .el-pagination__jump {
    margin-left: 0px;
    color: rgb(0, 178, 223);
    .el-input {
      width: 64px;
      .el-input__inner {
        border: 1px solid #004053;
        background-color: transparent;
        color: #00b2df;
      }
    }
  }
}
// .imf-pagination-popper{
//   border-radius: 0;
//   border: 1px solid #004f63 !important;
//   background-color: #004f63 !important;
//   margin-top: 6px !important;
//   box-sizing: border-box;
// }
.imf-pagination-popper.el-select-dropdown {
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
