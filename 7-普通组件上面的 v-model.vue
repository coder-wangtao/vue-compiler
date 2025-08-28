<!-- //子組件  -->
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

function onInput(e) {
  emit("update:modelValue", e.target.value);
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _createVNode(
          $setup["CommonChild"],
          {
            modelValue: $setup.inputValue,
            "onUpdate:modelValue":
              _cache[0] ||
              (_cache[0] = ($event) => ($setup.inputValue = $event)),
          },
          null,
          8,
          ["modelValue"]
        ),
        _createElementVNode(
          "p",
          null,
          "input value is: " + _toDisplayString($setup.inputValue),
          1 /* TEXT */
        ),
      ],
      64 /* STABLE_FRAGMENT */
    )
  );
}
</script>

<template>
  <input :value="props.modelValue" @input="onInput" />
</template>

<!-- 父組件 -->
<CustomInput :modelValue="text" @update:modelValue="(val) => (text = val)" />
<CustomInput v-model="text" />

<!-- 
v-model = :modelValue + @update:modelValue
本质就是 父传值 → 子用 prop 接收 + 子更新 → 父用事件响应
Vue 3 可以多 v-model，通过 v-model:xxx 定制 prop 和事件名 
-->
