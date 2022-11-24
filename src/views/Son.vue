<template>
  <div class="son">
    我是子组件
    <p>父组件传的值:{{ data }}</p>
    <button @click="setSonParam">传递参数给父组件</button>
    <div>
      插槽：
      <slot name="name"></slot>
      <slot></slot>
    </div>
    <Grandson></Grandson>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Grandson from '@/views/Grandson.vue';
// 接收父组件的数据
defineProps<{
  data: String;
}>();

// 给父组件派发参数
const sonData = ref('子组件的参数');
const emit = defineEmits(['handParam']);
const setSonParam = () => {
  emit('handParam', sonData.value);
};
</script>
<style lang="scss" scoped>
.son {
  width: 200px;
  background-color: aquamarine;
}
</style>
