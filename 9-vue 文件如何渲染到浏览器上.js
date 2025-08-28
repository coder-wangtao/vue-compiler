// 从 vue3 开始 vue 引入了宏，比如 defineProps、defineEmits 等。我们每天写 vue 代码时都会使用到这些宏，
// 但是你有没有思考过 vue 中的宏到底是什么？为什么这些宏不需要手动从 vue 中 import？为什么只能在 setup 顶层中使用这些宏？

// 我们的 vue 代码一般都是写在后缀名为 vue 的文件上，显然浏览器是不认识 vue 文件的，浏览器只认识 html、css、jss 等文件。
// 所以第一步就是通过 webpack 或者 vite 将一个 vue 文件编译为一个包含 render 函数的 js 文件。然后执行 render 函数生成虚拟 DOM，
// 再调用浏览器的 DOM API 根据虚拟 DOM 生成真实 DOM 挂载到浏览器上。

// 通过前面我们知道了 vue 文件渲染到浏览器上主要经历了两个阶段。
// 第一阶段是编译时，也就是从一个 vue 文件经过 webpack 或者 vite 编译变成包含 render 函数的 js 文件。
// 此时的运行环境是 nodejs 环境，所以这个阶段可以调用 nodejs 相关的 api，但是没有在浏览器环境内执行，所以不能调用浏览器的 API。

// 第二阶段是运行时，此时浏览器会执行 js 文件中的 render 函数，然后依次生成虚拟 DOM 和真实 DOM。
// 此时的运行环境是浏览器环境内，所以可以调用浏览器的 API，但是在这一阶段中是不能调用 nodejs 相关的 api。
// 而宏就是作用于编译时，也就是从 vue 文件编译为 js 文件这一过程。

//  <template>
//       <div>content is {{ content }}</div>
//       <div>title is {{ title }}</div>
//  </template>

//  <script setup lang="ts">
//     import {ref} from "vue"
//     const props = defineProps({
//       content: String,
//     });
//     const title = ref("title")
//  </script>

import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";

const __sfc__ = _defineComponent({
  props: {
    content: String,
  },
  setup(__props) {
    const props = __props;
    const title = ref("title");
    const __returned__ = { props, title };
    return __returned__;
  },
});

import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";

function render(_ctx, _cache, $props, $setup) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _createElementVNode(
          "div",
          null,
          "content is " + _toDisplayString($props.content),
          1 /* TEXT */
        ),
        _createElementVNode(
          "div",
          null,
          "title is " + _toDisplayString($setup.title),
          1 /* TEXT */
        ),
      ],
      64 /* STABLE_FRAGMENT */
    )
  );
}
__sfc__.render = render;
export default __sfc__;

// vue中的宏到底是什么？
// vue3的宏是一种特殊的代码，在编译时会将这些特殊的代码转换为浏览器能够直接运行的指定代码，根据宏的功能不同，转换后的代码也不同。

// 为什么这些宏不需要手动从vue中import？
// 因为在编译时已经将这些宏替换为指定的浏览器能够直接运行的代码，在运行时已经不存在这些宏相关的代码，自然不需要从vue中import。

// 为什么只能在setup顶层中使用这些宏？
// 因为在编译时只会去处理setup顶层的宏，其他地方的宏会原封不动的输出回来。在运行时由于我们没有在任何地方定义这些宏，当代码执行到宏的时候当然就会报错。
