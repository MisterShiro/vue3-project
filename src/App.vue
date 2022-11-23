<template>
  <p>ref:{{ name }}</p>
  <p>reactive:{{ person.name }}</p>
  <p>computed:{{ plusOne }}</p>
  <button @click="setValut">操作1</button>
</template>
<script lang="ts" setup>
import { computed, watch } from 'vue';
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
} from 'vue';
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
