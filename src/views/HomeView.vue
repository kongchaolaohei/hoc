<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <imf-form class="test" ref="form" :model="form" label-width="80px">
      <imf-form-item label="活动名称">
        <imf-input v-model="form.name"></imf-input>
      </imf-form-item>
      <imf-form-item label="活动区域">
        <imf-select v-model="form.region" placeholder="请选择活动区域">
          <imf-option label="区域一" value="shanghai"></imf-option>
          <imf-option label="区域二" value="beijing"></imf-option>
        </imf-select>
      </imf-form-item>
      <imf-form-item label="活动时间">
        <imf-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></imf-date-picker>
      </imf-form-item>
      <imf-form-item label="活动性质">
        <imf-checkbox-group v-model="form.type">
          <imf-checkbox label="美食/餐厅线上活动" name="type"></imf-checkbox>
          <imf-checkbox label="地推活动" name="type"></imf-checkbox>
          <imf-checkbox label="线下主题活动" name="type"></imf-checkbox>
          <imf-checkbox label="单纯品牌曝光" name="type"></imf-checkbox>
        </imf-checkbox-group>
      </imf-form-item>
      <imf-form-item label="特殊资源">
        <imf-radio-group v-model="form.resource">
          <imf-radio label="线上品牌商赞助"></imf-radio>
          <imf-radio label="线下场地免费"></imf-radio>
        </imf-radio-group>
      </imf-form-item>
      <imf-form-item label="活动形式">
        <imf-input type="textarea" v-model="form.desc"></imf-input>
      </imf-form-item>
      <imf-form-item>
        <imf-button type="primary" @click="onSubmit">立即创建</imf-button>
        <el-button>取消</el-button>
      </imf-form-item>
    </imf-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 400px;
  margin: auto;
}
</style>
