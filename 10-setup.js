// 我们每天写vue3项目的时候都会使用setup语法糖，但是你有没有思考过下面几个问题。
// setup语法糖经过编译后是什么样子的？为什么在setup顶层定义的变量可以在template中可以直接使用？
// 为什么import一个组件后就可以直接使用，无需使用components 选项来显式注册组件？

//   <template>
//       <h1>{{ title }}</h1>
//       <h1>{{ msg }}</h1>
//       <Child />
//   </template>

//   <script lang="ts" setup>
//      import { ref } from "vue";
//      import Child from "./child.vue";

//      const msg = ref("Hello World!");
//      const title = "title";
//       if (msg.value) {
//           const content = "content";
//          console.log(content);
//      }
//   </script>

import { ref } from "vue";
import Child from "./Child.vue";

const title = "title";

const __sfc__ = {
  __name: "index",
  setup() {
    const msg = ref("Hello World!");
    if (msg.value) {
      const content = "content";
      console.log(content);
    }
    const __returned__ = { title, msg, Child };
    return __returned__;
  },
};

import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  createVNode as _createVNode,
  Fragment as _Fragment,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _createElementVNode("h1", null, _toDisplayString($setup.title)),
        _createElementVNode(
          "h1",
          null,
          _toDisplayString($setup.msg),
          1 /* TEXT */
        ),
        _createVNode($setup["Child"]),
      ],
      64 /* STABLE_FRAGMENT */
    )
  );
}
__sfc__.render = render;
export default __sfc__;

//vue组件就是一个普通的js对象，import一个vue组件，实际就是import这个js对象。这个js对象中包含render方法和setup方法。

// 1.setup语法糖经过编译后是什么样子的？
// setup语法糖编译后会变成一个setup方法，编译后setup方法中的代码和script标签中的源代码很相似。
// 方法会返回一个对象，对象由setup中定义的顶层变量和import导入的内容组成。

// 2.为什么在setup顶层定义的变量可以在template中可以直接使用？
// 会执行由setup语法糖编译后的setup函数。然后将setup函数中由顶层变量和import导入组成的返回值对象经过Proxy处理后赋值给vue实例的setupState属性，
// 然后执行render函数的时候从vue实例中取出setupState属性也就是setup的返回值。
// 这样在render函数也就是template模版就可以访问到setup中的顶层变量和import导入。
