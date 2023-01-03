<template>
  <fks-dialog
    class="ief-dialog-wrapper"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </fks-dialog>
</template>

<script>
export default {
  name: 'IEFDialog'
}
</script>

<style lang="scss">
.ief-dialog-wrapper.fks-dialog__wrapper {
  .fks-dialog {
    border-radius: 8px;
    .fks-dialog__header {
      padding: 16px 20px;
      .fks-dialog__title {
        font-weight: 600;
        color: #18253D;
      }
      .fks-dialog__headerbtn, .fks-dialog__headerbtn:hover {
        // background: url('~@/assets/img/iefCoustomComponents/dialog/close.png') center / 100% 100% no-repeat !important;
        > * {
          display: none;
        }
      }
    }
    .fks-dialog__body {
      padding: 20px;
    }
  
    .fks-dialog__footer {
      padding: 12px 20px;
    }
  }
}
</style>