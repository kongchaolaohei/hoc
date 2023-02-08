<template>
  <el-date-picker
    class="imf-date-paicker"
    popper-class="imf-date-paicker-popper"
    ref="IEFDatePickerRef"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData" />
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-date-picker>
</template>

<script>
export default {
  name: "imf-date-picker",
  methods: {
    getRef() {
      return this.$refs.IEFDatePickerRef;
    },
  },
};
</script>
<style lang="scss">
@mixin icon-effect-by-img() {
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  @content;
}

.imf-date-paicker {
  // 时间范围选择
  &.el-range-editor {
    height: 32px;
    line-height: 32px;
    border: 1px solid #004f63;
    background-color: transparent;
    position: relative;

    .el-range-input {
      background-color: transparent;
      color: #00b2df;
      font-size: 15px;
      &::placeholder {
        font-size: 15px;
        color: rgba(0, 204, 255, 0.50);
      }
    }

    .el-range-separator {
      line-height: 22px;
      color: #00b2df;
    }
  }
  //日期时间选择器
  &.el-date-editor--datetimerange{
    .el-range-input {
      background-color: transparent;
      color: #00b2df;
      font-size: 15px;
      &::placeholder {
        font-size: 15px;
        color: rgba(0, 204, 255, 0.50);
      }
    }
    .el-icon-time{
      font-family: "iconfont" !important;
      color: rgb(0, 204, 255);
      &::before {
        content: "\e672";
      }
    }
  }
  // 日期选择
  &.el-date-editor {
    height: 32px;
    line-height: 32px;
    background-color: transparent;
    position: relative;

    .el-input__inner {
      height: 32px;
      border: 1px solid #004f63;
      line-height: 32px;
      background-color: transparent;
      color: #00b2df;
      font-size: 15px;
      &::placeholder {
        color: rgba(0, 204, 255, 0.50);
        font-size: 15px;
      }
    }

    .el-input__icon {
      color: #00b2df;
      line-height: 1;
    }
  }
}

.imf-date-paicker-popper {
  transform: none !important;

  // 日期选择
  &.el-date-picker {
    background-color: #001b29;
    margin-top: 6px;
    border: none;
    border-radius: 0;

    .el-date-picker__header-label {
      color: #00cafd;
    }

    .el-picker-panel__icon-btn {
      color: #00cafd;
    }

    // 日、周选择器
    tbody {
      tr:nth-child(1) {
        th {
          border-bottom: 1px solid #004052;
          color: #00cafd;
        }
      }

      .el-date-table__row {
        &.current {
          span {
            display: block;
            width: 28px;
            height: 28px;
            line-height: 28px;
            border: 1px solid #00b0dd;
            background: linear-gradient(#00455c, #0097bf);
            border-radius: 3px;
            margin-top: -2px;
          }
        }
        .available {
          div {
            background-color: #001b29;
          }
          span {
            color: #00cafd;
          }
          &.current {
            span {
              display: block;
              width: 28px;
              height: 28px;
              line-height: 28px;
              border: 1px solid #00b0dd;
              background: linear-gradient(#00455c, #0097bf);
              border-radius: 3px;
            }
          }
        }
        .today span {
          color: #c0c4cc;
          font-weight: 500;
        }
        .disabled {
          div {
            background-color: #001b29;
          }
          span {
            color: #c0c4cc;
          }
        }
      }
    }
    .is-week-mode {
      .current{
        .next-month{
          div{
            background-color: #001b29;
          }
        }
        .prev-month{
          div{
            background-color: #001b29;
          }
        }
      }
      .el-date-table__row:hover div {
        background-color: #00364a;
      }
    }

    //月、年选择器
    .el-date-picker__header--bordered {
      border-bottom: 1px solid #004052;
    }

    .el-month-table,
    .el-year-table {
      .today {
        .cell {
          color: #00cafd;
          font-weight: 500;
        }
      }
      .current{
        .cell{
            color: #00cafd;
            border: 1px solid #00b0dd;
            background: linear-gradient(#00455c, #0097bf);
            border-radius: 3px;
        }
      }
      .cell {
        color: #00cafd;
      }
      .available .cell{
        font-size: 13px;
      }
      .disabled .cell {
        background-color: transparent;
        color: #c0c4cc;
      }
    }
  }

  // 时间范围选择
  &.el-date-range-picker {
    background: #001b29;
    border: 1px solid #00566c;

    .el-picker-panel__body-wrapper {
      .el-picker-panel__body {
        .el-icon-arrow-right {
          color: #00b2df;
        }

        .is-left {
          border-right: none;
        }

        .el-date-range-picker__time-header {
          border-bottom: 1px solid #004052;
          color: #00b2df;

          .el-input__inner {
            background-color: transparent;
            color: #00b2df;
            border: 1px solid #002c3b;
          }

          .el-time-panel {
            background-color: #001b29;
            border: 1px solid #00566c;

            .el-time-panel__content {
              &::before {
                top: 50%;
              }

              .el-time-spinner {
                .el-time-spinner__wrapper {
                  .el-scrollbar__wrap {
                    .el-scrollbar__view {
                      li {
                        color: #008fb3;

                        &:hover {
                          background: transparent;
                        }
                      }

                      .active {
                        color: #409eff;
                      }
                    }
                  }
                }
              }
            }

            .el-time-panel__content::before,
            .el-time-panel__content::after {
              border-top: 1px solid #004052;
              border-bottom: 1px solid #004052;
            }

            .el-time-panel__footer {
              background: #001b29;
              border-top: 1px solid #004052;

              button {
                height: 27px;
                width: 56px;
              }

              .confirm {
                background: linear-gradient(to top, #005771, #00141f, #00141f);
                background-size: cover;
                color: #00ccff;
                border: 1px solid #00566c;
              }

              .cancel {
                color: #409eff;
              }
            }
          }
        }

        .el-date-range-picker__header {
          span,
          div {
            color: #00b2df;
          }

          button {
            color: #00b2df;
          }
        }

        .el-picker-panel__content {
          .el-date-table {
            tbody {
              tr:first-child {
                th {
                  border-bottom: 1px solid #004052;
                }
              }

              .el-date-table__row {
                .prev-month,
                .next-month {
                  color: rgba(50, 67, 75, 1);
                }

                .available {
                  color: rgba(0, 143, 179, 1);
                }

                .disabled {
                  div {
                    background-color: transparent;
                  }
                }

                // 选中之后的效果
                .in-range {
                  div {
                    background-color: rgba(0, 54, 74, 1);

                    span {
                      color: #fff;
                    }
                  }
                }

                .start-date,
                .end-date {
                  div {
                    // width: 30px;
                    border: 1px solid rgba(0, 175, 220, 1);
                    border-radius: 3px;
                    background-image: linear-gradient(#004157, #009cc5);

                    span {
                      background-color: transparent;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .el-picker-panel__footer {
      background: #001b29;
      border-top: 1px solid #004052;

      .el-button--default {
        background: linear-gradient(to top, #005771, #00141f, #00141f);
        background-size: cover;
        color: #00ccff;
        border: 1px solid #00566c;
      }
    }

    .popper__arrow {
      border-top-color: #00566c;
    }

    .popper__arrow::after {
      border-top-color: transparent;
    }
  }
}
</style>
