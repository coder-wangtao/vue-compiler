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




import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.vue");import { useCssVars as _useCssVars, defineComponent as _defineComponent } from "/node_modules/.vite/deps/vue.js?v=999c93ba";
import { ref } from "/node_modules/.vite/deps/vue.js?v=999c93ba";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    _useCssVars((_ctx) => ({
      "7a7a37b1-primaryColor": primaryColor.value
    }));
    const primaryColor = ref("red");
    const __returned__ = { primaryColor };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "/node_modules/.vite/deps/vue.js?v=999c93ba";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, _cache[0] || (_cache[0] = [
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
    )
  ]));
}
import "/src/App.vue?vue&type=style&index=0&scoped=7a7a37b1&lang.css";
_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a7a37b1"], ["__file", "D:/project/vue-compiler/src/App.vue"]]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQVFBLFNBQVMsV0FBVzs7Ozs7Ozs7QUFFcEIsVUFBTSxlQUFlLElBQUksS0FBSzs7Ozs7Ozs7dUJBVDVCLG9CQUdNO0FBQUEsSUFGSjtBQUFBLE1BQVU7QUFBQTtBQUFBLE1BQVA7QUFBQSxNQUFHO0FBQUE7QUFBQTtBQUFBLElBQ047QUFBQSxNQUFzQztBQUFBLFFBQWhDLE9BQU0sUUFBTztBQUFBLE1BQUM7QUFBQSxNQUFXO0FBQUE7QUFBQTtBQUFBIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHAudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHA+MjIyPC9wPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJibG9ja1wiPmhlbGxvIHdvcmxkPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xyXG5cclxuY29uc3QgcHJpbWFyeUNvbG9yID0gcmVmKFwicmVkXCIpO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5ibG9jayB7XHJcbiAgY29sb3I6IHYtYmluZChwcmltYXJ5Q29sb3IpO1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJmaWxlIjoiRDovcHJvamVjdC92dWUtY29tcGlsZXIvc3JjL0FwcC52dWUifQ==