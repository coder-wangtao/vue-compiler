import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
import { defineComponent as _defineComponent } from "/node_modules/.vite/deps/vue.js?v=999c93ba";
import { ref } from "/node_modules/.vite/deps/vue.js?v=999c93ba";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    const msg = ref("hello");
    function handleChange() {
      msg.value = "world";
    }
    const __returned__ = { msg, handleChange };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true,
    });
    return __returned__;
  },
});
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "/node_modules/.vite/deps/vue.js?v=999c93ba";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock("div", null, [
      _cache[0] ||
        (_cache[0] = _createElementVNode(
          "h1",
          null,
          "title",
          -1
          /* CACHED */
        )),
      _createElementVNode(
        "p",
        null,
        _toDisplayString($setup.msg),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "button",
        { onClick: $setup.handleChange },
        "change msg"
      ),
    ])
  );
}
_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" &&
  __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.on("file-changed", ({ file }) => {
  __VUE_HMR_RUNTIME__.CHANGED_FILE = file;
});
import.meta.hot.accept((mod) => {
  if (!mod) return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "/@id/__x00__plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [
  ["render", _sfc_render],
  ["__file", "D:/project/vue-compiler/src/App.vue"],
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQVNBLFNBQVMsV0FBVzs7Ozs7QUFFcEIsVUFBTSxNQUFNLElBQUksT0FBTztBQUV2QixhQUFTLGVBQWU7QUFDdEIsVUFBSSxRQUFRO0FBQUEsSUFDZDs7Ozs7Ozs7dUJBZEUsb0JBSU07QUFBQSw4QkFISjtBQUFBLE1BQWM7QUFBQTtBQUFBLE1BQVY7QUFBQSxNQUFLO0FBQUE7QUFBQTtBQUFBLElBQ1Q7QUFBQSxNQUFnQjtBQUFBO0FBQUEsdUJBQVYsVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQ1Qsb0JBQWlELFlBQXhDLFNBQU8sb0JBQVksR0FBRSxZQUFVO0FBQUEiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+dGl0bGU8L2gxPlxyXG4gICAgPHA+e3sgbXNnIH19PC9wPlxyXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJoYW5kbGVDaGFuZ2VcIj5jaGFuZ2UgbXNnPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XHJcblxyXG5jb25zdCBtc2cgPSByZWYoXCJoZWxsb1wiKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcclxuICBtc2cudmFsdWUgPSBcIndvcmxkXCI7XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiJdLCJmaWxlIjoiRDovcHJvamVjdC92dWUtY29tcGlsZXIvc3JjL0FwcC52dWUifQ==
