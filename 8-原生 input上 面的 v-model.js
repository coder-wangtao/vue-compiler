/* <template>
  <input v-model="msg" />
  <p>input value is: {{ msg }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const msg = ref();
</script> */

const _sfc_main = _defineComponent({
  __name: "index",
  setup(__props, { expose: __expose }) {
    __expose();
    const msg = ref();
    const __returned__ = { msg };
    return __returned__;
  },
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock(
      _Fragment,
      null,
      [
        _withDirectives(
          _createElementVNode(
            "input",
            {
              "onUpdate:modelValue":
                _cache[0] || (_cache[0] = ($event) => ($setup.msg = $event)),
            },
            null,
            512
          ),
          [[_vModelText, $setup.msg]]
        ),
        _createElementVNode(
          "p",
          null,
          "input value is: " + _toDisplayString($setup.msg),
          1
        ),
      ],
      64
    )
  );
}
// withDirectives:作用是给vnode（虚拟DOM）增加自定义指令
// <div v-pin:top.animate="200"></div>
const vnode = withDirectives(h("div"), [[pin, 200, "top", { animate: true }]]);

_withDirectives(
  _createElementVNode(
    "input",
    {
      "onUpdate:modelValue":
        _cache[0] || (_cache[0] = ($event) => ($setup.msg = $event)),
    },
    null,
    512
  ),
  [[_vModelText, $setup.msg]]
);
// 给input标签的vnode添加了一个vModelText的自定义指令，并且给指令绑定的值为msg变量。
// 还有就是在input标签的vnode中添加了一个onUpdate:modelValue的属性，属性值是一个回调函数，
// 触发这个回调函数就会将msg变量的值更新为输入框中的最新值。我
// 们知道input输入框中的值对应的是value属性，监听的是input和change事件。那么这里有两个问题：
// 1.如何将vModelText自定义指令绑定的msg变量的值传递给input输入框中的value属性的呢？
// 2.input标签监听input和change事件，编译后input上面却是一个名为onUpdate:modelValue的props回调函数？

// 在组件上面使用v-model和原生input上面使用v-model区别主要有三点：
// 1.组件上面的v-model编译后会生成modelValue属性和@update:modelValue事件。
// 而在原生input上面使用v-model编译后不会生成modelValue属性，只会生成onUpdate:modelValue回调函数和vModelText自定义指令。
// （在 普通组件上面的v-model 文章中我们已经讲过了@update:modelValue事件其实等价于onUpdate:modelValue回调函数）

// 2.在组件上面使用v-model，是由子组件中定义一个名为modelValue的props来接收父组件使用v-model绑定的变量，然后使用这个modelValue绑定到子组件的表单中。
// 在原生input上面使用v-model，是由编译后生成的vModelText自定义指令在mounted和beforeUpdate钩子函数中去将v-model绑定的变量值更新到原生input输入框的value属性，
// 以保证v-model绑定的变量值和input输入框中的值始终一致。

// 3.在组件上面使用v-model，是由子组件使用emit抛出@update:modelValue事件，在@update:modelValue的事件处理函数中去更新v-model绑定的变量。
// 而在原生input上面使用v-model，是由编译后生成的vModelText自定义指令在created钩子函数中去监听原生input标签的input或者change事件。
// 在事件回调函数中去手动调用onUpdate:modelValue回调函数，然后在回调函数中去更新v-model绑定的变量。

//input 事件: 当用户在 <input>（或 <textarea>）中 每次修改内容时立即触发。
//change 事件:当 <input> 的 值发生变化且失去焦点时触发（即用户离开输入框后）。
