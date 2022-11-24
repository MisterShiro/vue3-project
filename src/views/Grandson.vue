<template>
  <div class="grandson">
    孙子组件
    <p>接收爷爷的参数：{{ ParentParams }}</p>
    <teleport to="body">
      <div class="mask" v-show="maskFlag"></div>
    </teleport>
    <button @click="switchMask">显示模态框</button>
    <button @click="mitt">mitt派发事件</button>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, inject, ref } from 'vue';

let maskFlag = ref<boolean>(false);
function switchMask() {
  maskFlag.value = !maskFlag.value;
}
// 接收爷爷的参数
const ParentParams = inject('parent');

// 派发事件
const instance = getCurrentInstance();
const mitt = () => {
  instance?.proxy?.$Bus.emit('mittEvent', 100);
};
</script>
<style lang="scss" scoped>
.grandson {
  width: 100px;
  background-color: bisque;
  position: relative;
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
