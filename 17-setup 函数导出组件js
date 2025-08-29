//在vue2的时候使用一个vue组件要么全局注册，要么局部注册。但是在setup语法糖中直接将组件import导入无需注册就可以使用，你知道这是为什么呢？
/* 
<template>
  <Child />
</template>

<script lang="ts" setup>
import Child from "./child.vue";
</script> 
*/

import {
  createBlock as _createBlock,
  defineComponent as _defineComponent,
  openBlock as _openBlock,
} from "/node_modules/.vite/deps/vue.js?v=23bfe016";
import Child from "/src/components/setupComponentsDemo/child.vue";

const _sfc_main = _defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { Child };
    return __returned__;
  },
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Child"]);
}

_sfc_main.render = _sfc_render;
export default _sfc_main;

// 执行compileScript函数会将setup语法糖编译成setup函数，在compileScript函数中会去遍历<script setup>对应的AST抽象语法树。
// 如果是顶层变量、函数、类、枚举声明，就会将其收集到setupBindings对象中。

// 如果是import语句，就会将其收集到ctx.userImports对象中。还会根据import导入的信息判断当前import导入是否是ts的类型导入，并且赋值给isType属性。
// 然后再去递归遍历template模块对应的AST抽象语法树，看import导入的变量是否在template中使用，并且赋值给isUsedInTemplate属性。

// 遍历setupBindings对象和ctx.userImports对象中收集的所有顶层绑定，生成setup函数中的return对象。在遍历ctx.userImports对象的时候有点不同，
// 会去判断当前import导入不是ts的类型导入并且在还在template中使用了，才会将其加到setup函数的return对象中。在我们这个场景中setup函数会返回{ Child }对象。

// 在render函数中使用$setup["Child"]将子组件渲染到页面上去，而这个$setup["Child"]就是在setup函数中返回的Child属性，也就是Child子组件的引用。
