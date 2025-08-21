<template>
  <p>{{ doubleCount }}</p>
  <button @click="flag = !flag">切换flag</button>
  <button @click="count1++">count1++</button>
  <button @click="count2++">count2++</button>
</template>

<script setup>
import { computed, ref } from "vue";
const count1 = ref(1);
const count2 = ref(10);
const flag = ref(true);

const doubleCount = computed(() => {
  console.log("computed");
  if (flag.value) {
    return count1.value * 2;
  } else {
    return count2.value * 2;
  }
});
</script>
