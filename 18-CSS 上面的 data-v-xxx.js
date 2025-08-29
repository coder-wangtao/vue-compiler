// scoped 用于 组件局部样式隔离。避免不同组件的样式互相污染。

// 在vue中使用scoped可以避免父组件的样式渗透到子组件中。使用了scoped后会给html增加自定义属性data-v-x，同时会给组件内CSS选择器添加对应的属性选择器[data-v-x]。
// 这篇我们来讲讲vue是如何给CSS选择器添加对应的属性选择器[data-v-x]。

/* 
<template>
  <div class="block">hello world</div>
</template>

<style scoped>
.block {
  color: red;
}
</style> 
*/
// ==============>
/* <template>
  <div data-v-c1c19b25 class="block">hello world</div>
</template>

<style>
.block[data-v-c1c19b25] {
  color: red;
}
</style> 
*/

// 第一部分为在@vitejs/plugin-vue包内执行。
// 首先会根据当前vue文件的路径进行加密算法生成一个id，这个id就是添加的属性选择器[data-v-x]中的x。
// 然后就是执行transformStyle函数，这个transformStyle并不是实际干活的地方，他调用了@vue/compiler-sfc包的compileStyleAsync函数。
// 并且传入了id、code（css代码字符串）、scoped（是否在style中使用scoped）。

// 第二部分在@vue/compiler-sfc包执行。
// compileStyleAsync函数依然不是实际干活的地方，而是调用了doCompileStyle函数。
// 在doCompileStyle函数中，如果scoped为true就向plugins数组中插入一个    插件，这个是vue写的postcss插件，
// 用于处理css scoped。然后使用postcss转换编译器对css代码进行转换。
// 当postcss处理到选择器开头的规则就会走到scopedPlugin插件中的Rule钩子函数中。在Rule钩子函数中会执行processRule函数。
// 在processRule函数中会使用postcss-selector-parser包将当前选择器替换为一个新的选择器，
// 新的选择器和原来的选择器的区别是在后面会添加一个属性选择器[data-v-x]。其中的x就是根据当前vue文件的路径进行加密算法生成的id。
