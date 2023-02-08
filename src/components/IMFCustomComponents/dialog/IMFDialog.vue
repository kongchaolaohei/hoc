<template>
  <el-dialog
    class="imf-dialog-wrapper"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'imf-dialog'
}
</script>

<style lang="scss">
.imf-dialog-wrapper.el-dialog__wrapper {
    .el-dialog{
      background-color: #001C29;
      box-shadow: 0 0 13px 6px #013545 inset;
      width: 797px;
      // height: 864px;
      display: flex;
      display: -ms-flex; /* 兼容IE */
      flex-direction: column;
      -ms-flex-direction: column; /* 兼容IE */
      margin:0 !important;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      max-height:calc(100% - 30px);
      max-width:calc(100% - 30px);
      .el-dialog__header {
        padding: 15px 0 15px 35px;
        position: relative;
        color: white;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-image: linear-gradient(to right, #004b5e 0%, rgba(0, 75, 94, 0.75) 5%, rgba(0, 75, 94, 0) 100%);
        }
        .iconfont {
          margin-right: 10px;
          &::before{
            color: #FFF;
          }
        }
        .el-dialog__headerbtn {
          top: 17px;
          right: 30px;
          .el-dialog__close {
            color: #00ccff;
            font-size: 20px;
          }

        }
      }
    }
    .el-dialog__body {
      padding-right: 75px;
      // padding-bottom: 10px;
      padding-top: 30px;
      .el-select__caret {
        height: 40px;
        margin-top: -4px;
      }
      .el-icon-circle-close {
        color: #00ccff;
      }
      .text-tooltip {
        width: 100%;
        cursor: pointer;
        padding: 0 15px;
        border: 1px solid rgb(0,88,110);
        background-color: transparent;
        color:#fff;
        border-radius: 0;
        height: 32px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
        &::placeholder {
          color: rgb(51,102,153)
        }
        &:hover, &:focus {
          border: 1px solid rgb(0, 204, 255);
        }

      }
      .el-form-item__label {
        color: rgba(0, 204, 255, 1);
        font-size: 14px;
        padding-right: 12px;
        line-height: 32px;
      }
      .is-required {
        .el-form-item__label {
          &::before {
            display: none;
          }
          &::after {
            content: '*';
            color: #F56C6C;
            margin-right: 0px;
            margin-left: 4px;
            font-size: 12px;
          }
        }
      }
      .rotate {
        animation: rotate 3s linear infinite;
        @keyframes rotate {
          from{transform: rotate(0deg)}
          to{transform:rotate(360deg)}
        }
      }
      .el-input__inner {
        border: 1px solid rgb(0,88,110);
        background-color: transparent;
        color:#fff;
        border-radius: 0;
        height: 32px;
        &::placeholder {
          color: rgb(51,102,153)
        }
        &:hover, &:focus {
          border: 1px solid rgb(0, 204, 255);
        }
      }
      .symbol {
        cursor: pointer;
        margin-right: 4px;
        height: 32px;
        flex: 1;
        border: 1px solid rgb(0,88,110);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(0, 204, 255);
        transition: all .3s ease-out;
        font-size: 16px;
        padding-bottom: 2px;
        &:last-child {
          margin-right: 0px;
        }
        &:hover, &:focus {
          border: 1px solid rgb(0, 204, 255);
          transition: all .3s ease-out;
        }
      }
      .center {
        padding-bottom: 10px;
      }
      .large {
        font-size: 22px;
      }
      .inner-input {
        flex: 1;
        margin-left: 12px;
        &:first-child {
          margin-right: 12px;
        }
      }
      .el-form-item {
        flex: 1;
        width: 100%;
        display: flex;
        height: 32px;
        margin-bottom: 32px;
      }
      .el-form-item__content {
        width: calc(100% - 140px);
        height: 32px;
        line-height: 32px;
        display: flex;
        color: rgb(0, 204, 255);
        align-items: center;
        img {
          margin-left: 6px;
          width: 25px;
          height: 25px;
        }
      }
      .el-select {
        flex: 1;
        width: 100%;
        height: 32px;
      }
      .el-icon-arrow-up {
        font-size: 16px;
        color: rgb(0,204,255);
        &::before {
          content: "\e78f";
        }
      }
      .alarm-confirm{
        .alarm-confirm-input {
          width: 95px;
        }
        .alarm-confirm-radio {
          color: #fff;
          .el-radio__inner {
            background-color: transparent;
            background-image: linear-gradient(
              transparent 20%,
              rgba(61, 128, 145, 0.7) 70%,
              rgba(0, 204, 255, 0.8)
            );
            border-radius: 2px;
            border: 1px solid rgb(0, 204, 255);
            width: 14px;
            height: 14px;
            &::after {
              border-radius: 0;
              background-color: transparent;
              border: 1px solid #fff;
              border-left: 0;
              border-top: 0;
              height: 8px;
              left: 4px;
              top: 1px;
              width: 4px;
              transition: transform 0.15s ease-in 0.05s;
              transform-origin: center;
            }
          }
          &.is-checked {
            .el-radio__label {
              color: #fff;
            }
            .el-radio__inner::after {
              transform: rotate(45deg) scaleY(1);
            }
          }
        }
      }
      .form-close-up {
        margin-bottom: 10px;
      }
      .trigger-bottom-warp {
        margin-left: 64px;
        //margin-bottom: 30px;
        .common-box {
          padding: 12px 20px;
          border: 1px solid #00576d;
          .box-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0;
            .item-header {
              width: 26%;
              color: rgba(0, 204, 255, 1);
              text-align: right;
              .el-checkbox__label {
                color: rgba(0, 204, 255, 1);
                padding-left: 8px;
              }
              &.is-required::after {
                content: "*";
                color: #fb3f54;
                margin-right: 0px;
                margin-left: 4px;
                font-size: 12px;
              }
            }
            .item-content {
              width: 70%;
              display: flex;
              align-items: center;
              color: #fff;
              .warnig-value-input {
                width: 60%;
                margin-right: 8px;
              }
              .mutation-value-input {
                width: 42% !important;
                margin-right: 8px;
              }
            }
          }
        }
        .middle-box {
          color: #00c5f6;
          padding: 15px 0;
        }
      }
    }
    .el-dialog__footer {
      display: flex;
      justify-content: center;
      button {
        width: 90px;
        height: 32px;
        border: 1px solid rgb(0,88,110);
        background-color: transparent;
        color: rgb(0,204,255);
        padding: 0;
        line-height: 30px;
        border-radius: 0;
      }
      .el-button+.el-button {
        margin-left: 5px;
      }
      .save-button {
        background-image: linear-gradient(to top, rgba(0,204,255,.4) 0%, rgba(0,204,255,0) 100%);
        border-color: rgba(0,204,255,.4);
      }
    }
}
</style>