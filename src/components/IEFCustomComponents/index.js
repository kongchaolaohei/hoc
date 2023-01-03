import IEFCheckBox from './checkbox/IEFCheckBox.vue'
import IEFCheckBoxGroup from './checkbox/IEFCheckBoxGroup.vue'

import IEFButton from './button/IEFButton.vue'

import IEFTable from './table/IEFTable.vue'
import IEFTableColum from './table/IEFTableColum.vue'

import IEFPagination from './pagination/IEFPagination.vue'

import IEFSelect from './select/IEFSelect.vue'
import IEFOption from './select/IEFOption.vue'

import IEFTabs from './tabs/IEFTabs.vue'

import IEFDialog from './dialog/IEFDialog.vue'

import IEFForm from './form/IEFForm.vue'
import IEFFormItem from './form/IEFFormItem.vue'

import IEFDatePicker from './date/IEFDatePicker.vue'


const components = [
  IEFCheckBox,
  IEFCheckBoxGroup,
  IEFButton,
  IEFTable,
  IEFTableColum,
  IEFPagination,
  IEFSelect,
  IEFOption,
  IEFTabs,
  IEFDialog,
  IEFForm,
  IEFFormItem,
  IEFDatePicker
]

const install = function(Vue) {
  components.forEach(component => {
    console.log(component, Vue);
    Vue.component(component.name, component)
  })
}

export default {
  install,

  IEFCheckBox,
  IEFCheckBoxGroup,

  IEFButton,

  IEFTable,
  IEFTableColum,

  IEFPagination,

  IEFSelect,
  IEFOption,

  IEFTabs,
  IEFDialog,

  IEFForm,
  IEFFormItem,

  IEFDatePicker
}