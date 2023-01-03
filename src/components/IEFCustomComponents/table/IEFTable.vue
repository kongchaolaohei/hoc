<template>
  <fks-table
    class="ief-table"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-for="(_, slotName) in $scopedSlots" v-slot:[slotName]="slotData">
      <slot :name="slotName" v-bind="slotData"/>
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </fks-table>
</template>

<script>

export default {
  name: 'IEFTable',
};
</script>
<style lang="scss">
.ief-table.fks-table {
  position: relative;
  background: transparent;
  border: 1px solid #E4E6EB;
  border-radius: 8px;

  .fks-checkbox {
    display: inline-flex;
    align-items: center;

    .fks-checkbox__label {
      display: inline-flex;
      align-items: center;
      line-height: initial;
      color: #18253D;
      font-weight: 400;
      min-width: 120px;
    }

    .fks-checkbox__input {
      display: inline-flex;
      align-items: center;

      &.is-checked {
        .fks-checkbox__inner {
          &::after {
            display: none;
          }

          background-image: url('~@/assets/img/iefCoustomComponents/checkbox/checked.png') !important;
          background-position: center !important;
          background-color: #0CC0CC !important;
          background-size: 100% 100% !important;
          border: none;
        }
      }

      &.is-indeterminate {
        .fks-checkbox__inner {
          &::after {
            display: none;
          }

          background-image: url('~@/assets/img/iefCoustomComponents/checkbox/indeterminate.png') !important;
          background-position: center !important;
          background-size: 100% 100% !important;
          border: none;
        }
      }

      .fks-checkbox__inner {
        border-color: #CED4E0;
        border-radius: 4px;

        &:hover {
          border-color: #CED4E0;
        }
      }
    }
  }

  &::before {
    display: none;
  }
  .fks-table__header-wrapper {
    th {
      // background-color: transparent !important;
      color: #5F687A !important;
      font-weight: 500;
      border-bottom: 1px solid #E4E6EB;
      border-right: 1px solid #E4E6EB;
      &:nth-last-child(-n+2) {
        border-right: 1px solid transparent;
      }
      &.gutter {
        border-bottom: 1px solid transparent;
      }
    } 
    tr {
      // background: rgba(14,252,255,0.08);
    }
  }
  .fks-table__body-wrapper {
    &::-webkit-scrollbar-thumb {
      // background-color: rgba(14, 252, 255, 0.50);
      border-radius: 0;
    }
    &::-webkit-scrollbar-track {
      // background-color: rgba(14, 252, 255, 0.05);
    }
    td {
      color: #18253D;
      border-bottom: 1px solid #E4E6EB;
      border-right: 1px solid #E4E6EB;
      &:last-child {
        border-right: 1px solid transparent;
      }
    }
    tr {
      background: transparent;
      &:last-child td {
        border-bottom: 1px solid transparent;
      }
    }
    .fks-table__row td{
      // background: rgba(14,252,255,0.05);
    }
    .fks-table__row.fks-table__row--striped td {
      // background: rgba(14,252,255,0.03);
    }
    .fks-table__empty-text {
      // color: #FFFFFF;
    }
  }
}
</style>