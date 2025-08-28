/* 
//vue2
<template>
  <button @click="handleClick">放大文字</button>
</template>

<script>
export default {
  name: "options-child",
  methods: {
    handleClick() {
      this.$emit("enlarge-text");
    },
  },
};
</script> */
//this大家都知道是指向的当前组件的vue实例，所以this.$emit是调用的当前vue实例的$emit方法

/* 
//vue3
<template>
  <button @click="handleClick">放大文字</button>
</template>

<script setup lang="ts">
const emits = defineEmits(["enlarge-text"]);
function handleClick() {
  emits("enlarge-text");
}
</script> 
*/




// 为什么 Vue 的 defineEmits 宏函数不需要 import 导入就可用？ 
// 在遍历script模块转换成的AST抽象语法树时，如果当前的node节点是在调用defineEmits函数，
// 就继续去找这个node节点下面的参数节点，也就是调用defineEmits函数传入的参数对应的node节点。
// 然后将参数节点对象赋值给当前的ctx上下文的emitsRuntimeDecl属性中，
// 接着根据defineEmits函数对应的node节点中记录的start和end位置对vue文件的code代码字符串进行替换。
// 将defineEmits(["enlarge-text"])替换为__emit，
// 此时在代码中已经就没有了 defineEmits 宏函数了，自然也不需要从vue中import导入。

// 当遍历完AST抽象语法树后调用genRuntimeEmits函数，从前面存的ctx上下文中的emitsRuntimeDecl属性中取出来调用defineEmits函数时传入的参数节点信息。
// 根据参数节点中记录的start和end位置，对script模块中的code代码字符串执行slice方法，截取出调用defineEmits函数时传入的参数。
// 然后通过字符串拼接的方式将调用defineEmits函数时传入的参数拼接到vue组件对象的emits属性上。

// 为什么defineEmits的返回值等同于$emit 方法用于在组件中抛出事件？ 
// defineEmits 宏函数在上个问题中我们已经讲过了会被替换为__emit，
// 而这个__emit是调用setup函数时传入的第二个参数对象上的emit属性。
// 而第二个参数对象是在setupStatefulComponent函数中调用createSetupContext函数生成的setupContext对象。
// 在createSetupContext函数中我们看到返回的emit属性其实就是一个箭头函数，当调用defineEmits函数返回的emit函数时就会调用这个箭头函数，
// 在箭头函数中其实是调用vue实例上的emit方法。

// 大部分看着高大上的黑魔法其实都是编译时做的事情，vue3中的像defineEmits这样的宏函数经过编译后其实还是我们熟悉的vue2的选项式API。