/* 
父组件
<template>
  <ChildDemo name="ouyang" />
</template>

<script setup lang="ts">
import ChildDemo from "./child.vue";
</script> 
*/

/* 
子组件
<template>
  {{ localName }}
</template>

<script setup lang="ts">
const { name: localName } = defineProps(["name"]);
console.log(localName);
</script> 
*/

//从上面可以看到原本的console.log(localName)经过编译后就变成了console.log(__props.name)，这样当然就不会丢失响应式了。

//在编译阶段首先会处理宏函数defineProps，在处理的过程中如果发现解构了defineProps的返回值，
//那么就会将解构的name属性，以及name解构到本地的localName变量，都全部一起存到ctx.propsDestructuredBindings对象中。
//接下来就会去递归遍历script模块中的所有代码，如果发现使用的localName变量能够在ctx.propsDestructuredBindings对象中找的到。
//那么就说明这个localName变量是由props解构得到的，就会将其替换为__props.name，所以使用解构后的props依然不会丢失响应式。
