//调用 options.compiler.compileTemplate() 其实就是调用的 vue/compiler-sfc 包暴露出来的 compileTemplate 函数，
// template编译为render函数底层就是调用了@vue/compiler-sfc包暴露出来的compileTemplate函数。
import {
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";
const _hoisted_1 = { class: "msg" };
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      "h1",
      _hoisted_1,
      _toDisplayString($setup.msg),
      1 /* TEXT */
    )
  );
}
