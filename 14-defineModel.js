/* 
//父组件
<template>
  <CommonChild v-model="inputValue" />
  <p>input value is: {{ inputValue }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CommonChild from "./child.vue";

const inputValue = ref();
</script> 
*/

//子组件child
// <template>
//   <input v-model="model" />
//   <button @click="handelReset">reset</button>
// </template>

// <script setup lang="ts">
// const model = defineModel();

// function handelReset() {
//   model.value = "init";
// }
// </script>

import {
  defineComponent as _defineComponent,
  useModel as _useModel,
} from "/node_modules/.vite/deps/vue.js?v=23bfe016";

const _sfc_main = _defineComponent({
  __name: "child",
  props: {
    modelValue: {},
    modelModifiers: {},
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = _useModel(__props, "modelValue");
    function handelReset() {
      model.value = "init";
    }
    const __returned__ = { model, handelReset };
    return __returned__;
  },
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {}
_sfc_main.render = _sfc_render;
export default _sfc_main;

// 编译前的代码
const model = defineModel();

// 编译后的代码
const model = _useModel(__props, "modelValue");

// 使用defineModel宏函数后，为什么我们在子组件内没有写任何关于props定义的代码？
// 答案是本地会维护一个localValue变量接收父组件传递过来的名为modelValue的props。
// 调用defineModel函数的代码经过编译后会变成一个调用useModel函数的代码，useModel函数的返回值是一个ref对象。
// 当我们对defineModel的返回值进行“读操作”时，类似于Proxy的get方法一样会对读操作进行拦截到返回值ref对象的get方法中。
// 而get方法的返回值为本地维护的localValue变量，在watchSyncEffect的回调中将父组件传递过来的名为modelValue的props赋值给本地维护的localValue变量。
// 并且由于是在watchSyncEffect中，所以每次props改变都会执行这个回调，所以本地维护的localValue变量始终是等于父组件传递过来的modelValue。
// 也正是因为defineModel宏函数的返回值是一个ref对象而不是一个prop，所以我们可以在子组件内直接将defineModel的返回值使用v-model绑定到子组件input输入框上面。

// 使用defineModel宏函数后，为什么我们在子组件内没有写任何关于emit事件触发的代码？
// 答案是因为调用defineModel函数的代码经过编译后会变成一个调用useModel函数的代码，useModel函数的返回值是一个ref对象。
// 当我们直接修改defineModel的返回值，也就是修改useModel函数的返回值。
// 类似于Proxy的set方法一样会对写行为进行拦截到ref对象中的set方法中。在set方法中会手动触发依赖，
// render函数就会重新执行，浏览器上就会渲染最新的变量值。然后调用vue实例上的emit方法，向父组件抛出update:modelValue事件。
// 并且将最新的值随着事件一起传递给父组件，由父组件在update:modelValue事件回调中将父组件中v-model绑定的变量更新为最新值。

// 在template渲染中defineModel的返回值等于父组件v-model绑定的变量值，那么这个返回值是否就是名为modelValue的props呢？
// 从第一个回答中我们知道defineModel的返回值不是props，而是一个ref对象。
// 直接修改defineModel的返回值就会修改父组件上面绑定的变量，那么这个行为是否相当于子组件直接修改了父组件的变量值，破坏了vue的单向数据流呢？
// 修改defineModel的返回值，就会更新父组件中v-model绑定的变量值。看着就像是子组件中直接修改了父组件的变量值，
// 从表面上看着像是打破了vue的单向数据流。实则并不是那样的，
// 虽然我们在代码中没有写过emit抛出事件的代码，
// 但是在defineModel函数编译成的useModel函数中已经帮我们使用emit抛出事件了。所以并没有打破vue的单向数据流
