<template>
  <fks-date-picker
    class="ief-date-paicker"
    popper-class="ief-date-paicker-popper"
    ref="IEFDatePickerRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </fks-date-picker>
</template>

<script>

export default {
  name: 'IEFDatePicker',
  methods: {
    getRef() {
      return this.$refs.IEFDatePickerRef
    }
  }
};
</script>
<style lang="scss">
@mixin icon-effect-by-img () {
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  @content;
}
.ief-date-paicker {
  // 时间范围选择
  &.fks-range-editor {
    position: relative;

    >i {
      transition: none !important;
    }

    &.fks-input__inner {
      height: 32px;
      width: 260px;
      // background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      border-color: #CED4E0;

      .fks-range-input {
        background: transparent;
        color: #18253D;

        &::placeholder {
          color: #B8C0D1;
        }
      }

      .fks-input__icon {
        line-height: 24px;
      }

      .fks-range-separator {
        color: #B8C0D1;
        line-height: 24px;

        @include icon-effect-by-img {
          background-image: url('~@/assets/img/bigScreenComponents/datePicker/range-icon.png');
        }
      }

      .fks-range__icon {
        &::before {
          display: none;
        }

        transform: translateX(-60%);

        @include icon-effect-by-img {
          background-image: url('~@/assets/img/iefCoustomComponents/datePicker/date-icon.png');
        }
      }

      .fks-icon-circle-close+.fks-range__icon {
        visibility: hidden;
        pointer-events: none;
      }

      .fks-range__close-icon {
        position: relative;
        pointer-events: none;
        transform: translateX(20%);
      }

      .fks-range__close-icon.fks-icon-circle-close {
        right: 0;

        &::before {
          content: ' ';
          display: block;
          width: 100%;
          height: 100%;
          pointer-events: auto;

          @include icon-effect-by-img {
            background-image: url('~@/assets/img/iefCoustomComponents/datePicker/clear.png');
          }
        }

      }
    }

    &.is-active,
    &.is-active:hover {
      // border: 1px solid rgba(14, 252, 255, 0.8);
      // box-shadow: inset 0px 0px 10px 0px #0EFCFF;
      border-color: #0CC0CC;
    }
  }
  // 日期选择
  &.fks-date-editor--datetime {
    .fks-input__inner {
      display: block;
      height: 32px;
      width: 100%;
      // background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
      border-color: #CED4E0;
      &:focus, :hover {
        border-color: #0CC0CC;
      }
      background: transparent;
      color: #18253D;
      &::placeholder {
        color: #B8C0D1;
      }
  
      
    }
    .fks-input__suffix {
      display: inline-flex;
      width: 32px;
      height: 32px;
      line-height: initial;
      align-items: center;
      justify-content: center;
      .fks-input__suffix-inner {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;
        > i {
          position: absolute;
          right: 0;
          display: block;
          width: 20px;
          height: 20px;
          transform: none;
          transition: none;
        }
        .fks-icon-time {
          &::before {
            content: ' ';
            display: block;
            width: 100%;
            height: 100%;
            pointer-events: auto;
    
            @include icon-effect-by-img {
              background-image: url('~@/assets/img/iefCoustomComponents/datePicker/date-icon.png');
            }
          }
        }
    
        .fks-icon-circle-close {
          background: #FFFFFF;
          &::before {
            content: ' ';
            display: block;
            width: 100%;
            height: 100%;
            pointer-events: auto;
    
            @include icon-effect-by-img {
              background-image: url('~@/assets/img/iefCoustomComponents/datePicker/clear.png');
            }
          }
    
        }
      }
    }
  }
}
.ief-date-paicker-popper {
  transform: none !important;
  &.fks-date-picker {
    .fks-picker-panel__body-wrapper .fks-picker-panel__body{
      .fks-date-picker__time-header {
        .fks-input__inner {
          border-color: #CED4E0;
          height: 32px;
          border-radius: 4px;
          background: transparent;
          color: #18253D;
          &.is-active,
            &.is-active:hover {
              // border: 1px solid rgba(14, 252, 255, 0.8);
              // box-shadow: inset 0px 0px 10px 0px #0EFCFF;
              border-color: #0CC0CC;
            }
        
          &::placeholder {
            color: #B8C0D1;
          }
          &:focus {
            // border: 1px solid rgba(14, 252, 255, 0.8);
            // box-shadow: inset 0px 0px 10px 0px #0EFCFF;
            border-color: #0CC0CC;
          }
        }
        .fks-time-panel.fks-popper {
          .fks-time-spinner__item.active {
            color: #0CC0CC;
          }
          // fks-time-panel__btn cancel
          .fks-time-panel__btn.confirm {
            color: #0CC0CC;
          }
        }
      }
      .fks-picker-panel__content .fks-date-table .fks-date-table__row {
        .available {
          &.prev-month {

          }
          &.next-month {

          }
          &.today {
            span { color: #0CC0CC; }
          }
          &.current {

          }
        }
      }
    }
    .fks-picker-panel__footer {
      .fks-button {
        color: #0CC0CC;
        border-color: transparent;
      }
    }
  }
  &.fks-date-range-picker {

  }
}
</style>
