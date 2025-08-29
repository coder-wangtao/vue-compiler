// 为什么setup语法糖中的顶层绑定可以在template中直接使用的呢？setup语法糖是如何编译成setup函数的呢？

// <template>
//   <h1>{{ msg }}</h1>
//   <h2>{{ format(msg) }}</h2>
//   <h3>{{ title }}</h3>
//   <Child />
// </template>

// <script lang="ts" setup>
// import { ref } from "vue";
// import Child from "./child.vue";
// import { format } from "./util.js";

// const msg = ref("Hello World!");

// let title;

// if (msg.value) {
//   const innerContent = "xxx";
//   console.log(innerContent);
//   title = "111";
// } else {
//   title = "222";
// }
// </script>

// 由于innerContent是在if语句里面的变量，不是<script setup>中的顶层绑定，所以在template中是不能使用innerContent的。
// 但是你有没有想过为什么<script setup>中的顶层绑定就能在template中使用，而像innerContent这种非顶层绑定就不能在template中使用呢？

import { defineComponent as _defineComponent } from "/node_modules/.vite/deps/vue.js?v=23bfe016";
import { ref } from "/node_modules/.vite/deps/vue.js?v=23bfe016";
import Child from "/src/components/setupDemo2/child.vue";
import { format } from "/src/components/setupDemo2/util.js";

const _sfc_main = _defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const msg = ref("Hello World!");
    let title;
    if (msg.value) {
      const innerContent = "xxx";
      console.log(innerContent);
      title = "111";
    } else {
      title = "222";
    }
    const __returned__ = {
      msg,
      get title() {
        return title;
      },
      set title(v) {
        title = v;
      },
      Child,
      get() {
        return format;
      },
    };
    return __returned__;
  },
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  // ...省略
}
_sfc_main.render = _sfc_render;
export default _sfc_main;

//setup函数中的内容，其实和我们的源代码差不多，只是多了一个return。使用return会将组件中的那四个顶层绑定暴露出去，
// 所以在template中就可以直接使用<script setup>中的顶层绑定。

// 值的一提的是在return对象中title变量和format函数有点特别。title、format这两个都是属于访问器属性，其他两个msg、Child属于常见的数据属性。
// title是一个访问器属性，同时拥有get 和 set，读取title变量时会走进get中，当给title变量赋值时会走进set中。
// format也是一个访问器属性，他只拥有get ，调用format函数时会走进get中。由于他没有set，所以不能给format函数重新赋值。
// 其实这个也很容易理解，因为format函数是从util.js文件中import导入的，当然不能给他重新赋值。

//但是不是还有一句import { ref } from "vue"也是顶层绑定，为什么里面的ref没有在setup函数中使用return暴露出去呢？
// 还有在return对象中是如何将title、format识别为访问器属性呢？

// 主要是compileScript得逻辑：
// 根据<script setup>中的内容生成一个ctx上下文对象。
// 遍历<script setup>中的内容，处理里面的import语句、顶层变量、顶层函数、顶层类、顶层枚举声明等。
// 移除template和style中的内容，以及script的开始标签和结束标签。
// 将<script setup>中的顶层绑定的元数据存储到ctx.bindingMetadata对象中。
// 根据<script setup>中的顶层绑定生成return对象。
// 生成setup函数定义
// 插入import vue语句
