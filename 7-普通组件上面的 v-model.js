// vue3 中 v-model 是:modelValue 和@update:modelValue 的语法糖

// <template>
//   <CommonChild v-model="inputValue" />
//   <p>input value is: {{ inputValue }}</p>
// </template>

// <script setup lang="ts">
// import { ref } from "vue";
// import CommonChild from "./child.vue";

// const inputValue = ref();
// </script>

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
// 这里分别是modelValue和onUpdate:modelValue。这两个key就是传递给CommonChild组件的两个props，等等这里有两个问题。
// 第一个问题是这里怎么是onUpdate:modelValue，我们知道的v-model是:modelValue和@update:modelValue的语法糖，
// 不是说好的@update怎么变成了onUpdate了呢？第二个问题是onUpdate:modelValue明显是事件监听而不是props属性，
// 怎么是“通过props属性”而不是“通过事件”传递给了CommonChild子组件呢？

// 因为在编译时处理v-on事件监听会将监听的事件首字母变成大写然后在前面加一个on，塞到props属性对象中，所以这里才是onUpdate:modelValue。
// 所以在组件上不管是v-bind的attribute和prop，还是v-on事件监听，经过编译后都会被塞到一个大的props对象中。
// 以on开头的属性我们都视作事件监听，用于和普通的attribute和prop区分。所以你在组件上绑定一个onConfirm属性，
// 属性值为一个handleClick的函数。在子组件中使用emit('confirm')是可以触发handleClick函数的执行的，
// 但是一般情况下还是不要这样写，维护代码的人会看着一脸蒙蔽的。

// v-model指令是如何变成组件上的modelValue属性和@update:modelValue事件呢？

// 首先会调用parse函数将template模块中的代码转换为AST抽象语法树，
// 此时使用v-model的node节点的props属性中还是v-model。
// 接着会调用transform函数，经过transform函数处理后在node节点中多了一个codegenNode属性。
// 在codegenNode属性中我们看到没有v-model指令，
// 取而代之的是modelValue和onUpdate:modelValue属性。
// 经过transform函数处理后已经将v-model指令编译为modelValue和onUpdate:modelValue属性。
// 其实在运行时onUpdate:modelValue属性就是等同于@update:modelValue事件。
// 接着就是调用generate函数，将AST抽象语法树生成render函数。
// 然后在浏览器中执行render函数时，将拿到的modelValue和onUpdate:modelValue属性塞到组件对象上，
// 所以在组件上就多了两个modelValue属性和@update:modelValue事件。

// 将v-model指令转换为modelValue属性和@update:modelValue事件这一过程是在编译时还是运行时进行的呢？
// 从上面的问题答案中我们可以知道将v-model指令转换为modelValue属性和@update:modelValue事件这一过程是在编译时进行的。
