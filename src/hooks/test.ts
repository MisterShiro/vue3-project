import { ref } from 'vue';
export default function () {
  const hookData = ref('这是hook的值');
  console.log(hookData.value);
}
