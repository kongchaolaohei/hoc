import IMFRadio from './radio/IMFRadio.vue'
import IMFRadioGroup from './radio/IMFRadioGroup.vue'

import IMFCheckBox from './checkbox/IMFCheckBox.vue'
import IMFCheckBoxGroup from './checkbox/IMFCheckBoxGroup.vue'

import IMFInput from './input/IMFInput.vue'

import IMFButton from './button/IMFButton.vue'

import IMFTable from './table/IMFTable.vue'
import IMFTableColumn from './table/IMFTableColumn.vue'

import IMFPagination from './pagination/IMFPagination.vue'

import IMFSelect from './select/IMFSelect.vue'
import IMFOption from './select/IMFOption.vue'

import IMFTabs from './tabs/IMFTabs.vue'

import IMFDialog from './dialog/IMFDialog.vue'

import IMFForm from './form/IMFForm.vue'
import IMFFormItem from './form/IMFFormItem.vue'

import IMFDatePicker from './date/IMFDatePicker.vue'

import IMFDropdown from './dropdowm-menu/IMFDropdown.vue'
import IMFDropdownMenu from './dropdowm-menu/IMFDropdownMenu.vue'
import IMFDropdownMenuItem from './dropdowm-menu/IMFDropdownMenuItem.vue'

const components = [
  IMFRadio,
  IMFRadioGroup,

  IMFCheckBox,
  IMFCheckBoxGroup,

  IMFInput,

  IMFButton,

  IMFTable,
  IMFTableColumn,

  IMFPagination,

  IMFSelect,
  IMFOption,

  IMFTabs,
  IMFDialog,

  IMFForm,
  IMFFormItem,

  IMFDatePicker,

  IMFDropdown,
  IMFDropdownMenu,
  IMFDropdownMenuItem
]

const install = (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

export default {
  install,

  IMFRadio,
  IMFRadioGroup,

  IMFCheckBox,
  IMFCheckBoxGroup,

  IMFInput,

  IMFButton,

  IMFTable,
  IMFTableColumn,

  IMFPagination,

  IMFSelect,
  IMFOption,

  IMFTabs,
  IMFDialog,

  IMFForm,
  IMFFormItem,

  IMFDatePicker,

  IMFDropdown,
  IMFDropdownMenu,
  IMFDropdownMenuItem
}