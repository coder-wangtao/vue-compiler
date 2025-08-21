//这里的 options.compiler.compileScript() 其实就是调用的 vue/compiler-sfc 包暴露出来的 compileScript 函数

import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
const _sfc_main = /*@__PURE__*/ _defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    const msg = ref("hello word");
    const __returned__ = { msg };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true,
    });
    return __returned__;
  },
});

_sfc_main.render = _sfc_render;
export default _sfc_main;
