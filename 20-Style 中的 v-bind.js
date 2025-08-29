// vue2的时候想必大家有遇到需要在style模块中访问script模块中的响应式变量，为此我们不得不使用css变量去实现。
// 现在vue3已经内置了这个功能啦，可以在style中使用v-bind指令绑定script模块中的响应式变量，
// 这篇文章我们来讲讲vue是如何实现在style中使用script模块中的响应式变量。

/* 
<template>
  <div>
    <p>222</p>
    <span class="block">hello world</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const primaryColor = ref("red");
</script>

<style scoped>
.block {
  color: v-bind(primaryColor);
}
</style> 
*/

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    _useCssVars((_ctx) => ({
      "7a7a37b1-primaryColor": primaryColor.value,
    }));
    const primaryColor = ref("red");
    const __returned__ = { primaryColor };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true,
    });
    return __returned__;
  },
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      "div",
      null,
      _cache[0] ||
        (_cache[0] = [
          _createElementVNode(
            "p",
            null,
            "222",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "span",
            { class: "block" },
            "hello world",
            -1
            /* CACHED */
          ),
        ])
    )
  );
}

// 浏览器是不认识v-bind(primaryColor);指令的，所以经过编译后就变成了浏览器认识的css变量var(--c845efc6-primaryColor);。

// 我们的<span>标签在编译阶段由color: v-bind(primaryColor);编译成了css变量color: var(--c845efc6-primaryColor)。
// 并且在运行时由于useCssVars函数的作用在根节点生成了css变量的定义--c845efc6-primaryColor: red;。由于css继承，
// 所以span标签也继承了这个css变量的定义，所以span标签渲染到页面上的color值最终为red。
