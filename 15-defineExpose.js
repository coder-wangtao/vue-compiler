/* 
//父组件
<template>
  <ChildDemo ref="child" />
  <button @click="handleClick">调用子组件的validate方法</button>
</template>

<script setup lang="ts">
import ChildDemo from "./child.vue";
import { ref } from "vue";

const child = ref();

function handleClick() {
  console.log(child.value.validate);
  child.value.validate?.();
}
</script> 
*/

/*
//子组件 
<template>
</template>

<script setup>
function validate() {
  console.log("执行子组件validate方法");
}
</script> 
*/

const _sfc_main = {
  __name: "child",
  setup(__props, { expose: __expose }) {
    function validate() {
      console.log("执行子组件validate方法");
    }
    __expose({
      validate,
    });
    const __returned__ = { validate };
    return __returned__;
  },
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}
_sfc_main.render = _sfc_render;
export default _sfc_main;

//在expose函数内部做的事情也很简单，将子组件需要暴露的属性或者方法组成的对象赋值给vue实例上的exposed属性。

//<ChildDemo ref="child" />
//这样使用后就可以使用child变量访问子组件，其实在这里child变量的值就是一个名为getExposeProxy函数的返回值

function getExposeProxy(instance) {
  if (instance.exposed) {
    return (
      instance.exposeProxy ||
      (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          // ...省略
        },
      }))
    );
  }
}

// 在上面的getExposeProxy函数中就是返回了instance.exposed的Proxy对象，当我们使用child.value.validate访问子组件的validate方法
// ，其实就是访问的是instance.exposed对象中的validate方法，而instance.exposed中的validate方法就是defineExpose宏函数暴露的validate方法。
