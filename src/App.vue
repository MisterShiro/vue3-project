<template>
  <p>====================app=========================</p>
  <p>ref:{{ name }}</p>
  <p>reactive:{{ person.name }}</p>
  <p>computed:{{ plusOne }}</p>
  <button @click="setValut">操作1</button>
  <p>====================components=========================</p>
  <router-view />
  <p>======================directive ======================</p>
  <div v-move="{ color: 'red' }" class="testColor">自定义指令</div>
  <!-- <div v-move-directive class="testColor">自定义指令</div> -->
</template>
<script lang="ts" setup>
import hook from './hooks/test';
import {
  computed,
  watch,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
} from 'vue';
import { RouterView } from 'vue-router';

// hook
const hookeData = hook;
hookeData();

// 自定义指令
const vMove = (el: any, binding: any) => {
  console.log('指令', el, binding);
  el.style.background = 'red';
};
/* const vMoveDirective = {
  created: () => {
    console.log('初始化====>');
  },
  beforeMount() {
    // 在元素上做些操作
    console.log('初始化一次=======>');
  },
  mounted(el: any, dir: any) {
    el.style.background = dir.value.background;
    console.log('初始化========>');
  },
  beforeUpdate() {
    console.log('更新之前');
  },
  updated() {
    console.log('更新结束');
  },
  beforeUnmount(...args: Array<any>) {
    console.log(args);
    console.log('======>卸载之前');
  },
  unmounted(...args: Array<any>) {
    console.log(args);
    console.log('======>卸载完成');
  },
}; */
// ref
const name = ref<String>('张三');
// reactive
interface Person {
  name: string;
  age: number;
}
const person = reactive<Person>({
  name: '张三',
  age: 18,
});

// computed
const plusOne = computed(() => {
  let data: any = '';
  data = person.age;
  return data;
});

// watch(在监听reactive属性时 需要以()=>{}的形式去监听)
watch(
  () => person.name,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);

function setValut() {
  person.name = '王五';
  name.value = '王五';
}

// 切换组件
onBeforeMount(() => {
  console.log('onBeforeMount================>');
});
onMounted(() => {
  console.log('onMounted================>');
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdate================>');
});
onUpdated(() => {
  console.log('onUpdated================>');
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount================>');
});
onUnmounted(() => {
  console.log('onUnmounted================>');
});
</script>
<style lang="scss" scoped></style>
