<template>
  <div class="parent">
    我是父组件
    <p>子组件的参数:{{ sonData }}</p>
    <Global></Global>
    <Son @handParam="getSonParam" :data="data">
      <template #name> 具名插槽 </template>
      <template v-slot> 父组件放插槽 </template>
    </Son>
  </div>
</template>
<script lang="ts" setup>
import Son from '@/views/Son.vue';
import { getCurrentInstance, provide, ref } from 'vue';

const data = ref('父组件的数据');
// 接收子组件参数
let sonData = ref<string>();
const getSonParam = (data: string) => {
  console.log(data);
  sonData.value = data;
};
// 给孙子传递数据
provide('parent', data);
// 接收mitt方法
const instance = getCurrentInstance();
instance?.proxy?.$Bus.on('mittEvent', (res: any) => {
  console.log('触发mitt', res);
});
</script>
<style lang="scss" scoped>
.parent {
  width: 300px;
  background-color: cadetblue;
}
</style>
