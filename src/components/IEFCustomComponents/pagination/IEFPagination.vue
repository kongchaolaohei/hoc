<template>
  <fks-pagination
    class="ief-pagination"
    popper-class="ief-pagination-popper"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>

export default {
  name: 'IEFPagination',
};
</script>
<style lang="scss">
@mixin icon-effect-by-img () {
  @content;
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
}

.ief-pagination.fks-pagination {
  height: 32px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  button, span:not([class*=suffix]) {
    line-height: initial;
    height: auto;
  }
  .fks-pagination__total {
    color: #8E99AD;
    margin-right: 0;
  }
  .fks-pagination__jump {
    color: #8E99AD;
    margin-left: 12px;
    .fks-input {
      padding: 0;
      margin: 0 8px;
    }
  }
  .fks-pagination__sizes {
    margin: 0;
    margin-left: 12px;
    .fks-input {
      margin: 0;
    }
  }
  .fks-pager {
    
    .number:hover {
      color: #0CC0CC;
    }
    .number,.more {
      margin-left: 8px;
      height: 32px;
      width: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;   
      font-size: 14px;
      &:first-child {
        margin: 0;
      }
    }
    .number.active {
      color: #FFFFFF;
      background-color: #0CC0CC;
      border: 1px solid #0CC0CC;
    }
    .fks-icon-more {
      &::before {
        display: none;
      }
      @include icon-effect-by-img {
        background-image: url('~@/assets/img/iefCoustomComponents/pagination/page-more.png');
      }
    }
    .fks-icon-d-arrow-right {
      &::before {
        display: none;
      }
      transform: rotateZ(180deg);
      @include icon-effect-by-img {
        background-image: url('~@/assets/img/bigScreenComponents/datePicker/double-arrow-left.png');
      }
    }
    .fks-icon-d-arrow-left {
      &::before {
        display: none;
      }
      @include icon-effect-by-img {
        background-image: url('~@/assets/img/bigScreenComponents/datePicker/double-arrow-left.png');
      }
    }
  }
  .btn-prev {
    // background: rgba(255,255,255,0);
    // color: white;
    border-radius: 4px;
    margin-right: 8px;
    padding: 0 7px;
    // page-prev-arrow
    >i {
      width: 20px;
      height: 20px;
      &::before {
        display: none;
      }
      transform: rotateZ(180deg);
      @include icon-effect-by-img {
        background-image: url('~@/assets/img/iefCoustomComponents/pagination/page-next-arrow.png');
      }
    }
    &[disabled="disabled"]>i {
      width: 20px;
      height: 20px;
      &::before {
        display: none;
      }
      transform: rotateZ(0);
      @include icon-effect-by-img {
        background-image: url('~@/assets/img/iefCoustomComponents/pagination/page-prev-arrow-disable.png');
      }
    }
  }
  .btn-next {
    // background: rgba(255,255,255,0);
    // color: white;
    border-radius: 4px;
    margin-left: 0 8px;
    padding: 0 7px;
    >i {
      width: 20px;
      height: 20px;
      &::before {
        display: none;
      }
      @include icon-effect-by-img {
        background-image: url('~@/assets/img/iefCoustomComponents/pagination/page-next-arrow.png');
      }
    }
    &[disabled="disabled"]>i {
      width: 20px;
      height: 20px;
      &::before {
        display: none;
      }
      transform: rotateZ(180deg);
      @include icon-effect-by-img {
        background-image: url('~@/assets/img/iefCoustomComponents/pagination/page-prev-arrow-disable.png');
      }
    }
  }
  .fks-select, .fks-input, .fks-input__inner {
     height: 32px !important;
  }
  .fks-pagination__editor .fks-input__inner {
    // background: rgba(255, 255, 255, 0.05) !important;
  }
  .fks-input {
    .fks-input__inner {
      border: 1px solid #CED4E0;
      // color: #E4E6EB;
      // background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%);
      &:hover {
        border-color: #0CC0CC;
      }
      &::placeholder {
        color: #B8C0D1;
      }
    }
    .fks-input__suffix {
      line-height: 32px;
      right: 8px;
      .fks-input__suffix-inner>i {
        // color: #E4E6EB;
      }
      .fks-icon-arrow-up {
        &::before {
          display: none;
        }
        line-height: 20px !important;
        width: 20px;
        height: 20px;
        @include icon-effect-by-img {
          background-image: url('~@/assets/img/iefCoustomComponents/select/select-top-arrow.png');
        }
      }
    }
    &.is-focus .fks-input__inner {
      // border-color: rgba(14,252,255,0.8);
      // box-shadow: inset 0px 0px 10px 0px #0EFCFF;
    }
  }
}
.ief-pagination-popper.fks-popper {
  // background: rgba(0, 53, 53, .6);
  backdrop-filter: blur(4px);
  // box-shadow: inset 0px 0px 10px 0px #0EFCFF;
  border: none;
  .fks-select-dropdown__item {
    // color: #fff;
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
    &.hover, &:hover {
      // background-color: rgba(14, 252, 255, 0.1);
    }
    &.selected {
      // background-color: rgba(14, 252, 255, 0.1);
      // color: #0EFCFF;
    }
  }
}
</style>
