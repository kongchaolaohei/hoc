<template>
  <fks-select
    class="ief-select"
    popper-class="ief-select-popper"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, name) in $scopedSlots" v-slot:[name]="data">
      <slot :name="name" v-bind="data"/>
    </template>
  </fks-select>
</template>

<script>

export default {
  name: 'IEFSelect',
};
</script>
<style lang="scss">
@mixin icon-effect-by-img () {
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  @content;
}
.ief-select.fks-select {
  width: 240px;
  .fks-input {
    &.is-disabled {
      z-index: 10;
    }
    &.is-disabled .fks-input__inner {
      color: #B8C0D1 !important;
    }
    &.is-focus .fks-input__inner {
      border-color: #0CC0CC;
    }
    .fks-input__inner {
      display: block;
      border: 1px solid #CED4E0;
      background: rgba(255,255,255,0.05);
      height: 32px;
      line-height: 32px;
      padding: 0 35px 0 12px;
      &::placeholder {
        color: #B8C0D1;
      }
    }
    .fks-input__suffix {
      line-height: 32px;
      right: 12px;
      .fks-input__suffix-inner {
        &>i {
          line-height: 32px;
        }
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
      .fks-icon-circle-close {
        &::before {
          display: none;
        }
        line-height: 20px !important;
        width: 20px;
        height: 20px;
        @include icon-effect-by-img {
          background-image: url('~@/assets/img/iefCoustomComponents/select/select-clearable.png');
        }
      }
      
    }
  }
  .fks-select__tags {
    height: 100%;
    .fks-tag {
      background: #F0F2F5;
      border-radius: 4px;
      border: 1px solid #E4E6EB;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      .fks-select__tags-text {
        color: #5F687A;
        line-height: initial;
      }
      .fks-tag__close {
        right: initial;
        top: initial;
        margin: 0;
        margin-right: -4px;
        transform: scale(1);
        &::before {
          display: none;
        }
        display: inline-flex;
        line-height: 16px !important;
        width: 16px;
        height: 16px;
        @include icon-effect-by-img {
          background-size: 16px 16px;
          background-image: url('~@/assets/img/iefCoustomComponents/select/select-tag-close.png');
        }
      }
    }
  }
}
.ief-select-popper.fks-select-dropdown {
  // background: rgba(0, 53, 53, .6);
  backdrop-filter: blur(4px);
  // box-shadow: inset 0px 0px 10px 0px #0EFCFF;
  border: none;
  .fks-select-dropdown__item {
    padding: 0 12px;
    color:#18253D;
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
    &.hover, &:hover {
      // 样式被污染,开始important军备竞赛
      background-color: #E7FEFF !important;
    }
    &.selected {
      position: relative;
      background-color: #E7FEFF !important;
      color: #0CC0CC !important;
    }
  }
  &.is-multiple {
    .fks-select-dropdown__item.selected {
      &::after {
        content: '';
        position: absolute;
        height: 20px;
        width: 20px;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
  
        @include icon-effect-by-img {
          background-image: url('~@/assets/img/iefCoustomComponents/select/select-checked.png');
        }
      }
    }
  }
}
</style>
