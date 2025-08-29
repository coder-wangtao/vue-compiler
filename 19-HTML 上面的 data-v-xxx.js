// 使用了scoped后，vue是如何给html增加自定义属性data-v-x ?

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

// 首先在编译时会根据当前vue文件的路径进行加密算法生成一个id，这个id就是自定义属性data-v-x中的x。
// 然后给编译后的vue组件对象增加一个属性__scopeId，属性值就是data-v-x。
// 在运行时的renderComponentRoot函数中，这个函数接收的参数是vue实例instance对象，instance.type的值就是编译后的vue组件对象。
// 在renderComponentRoot函数中会执行setCurrentRenderingInstance函数，将全局变量currentScopeId的值赋值为instance.type.__scopeId，也就是data-v-x。
// 在renderComponentRoot函数中接着会执行render函数，在生成虚拟DOM的过程中会去读取全局变量currentScopeId，并且将其赋值给虚拟DOM的scopeId属性。
// 接着就是拿到render函数生成的虚拟DOM去执行patch函数生成真实DOM，在我们这个场景中最终生成真实DOM的是mountElement函数。
// 在mountElement函数中首先会调用document.createElement函数去生成一个div标签，然后使用textContent属性将div标签的文本节点设置为hello world。
// 最后就是调用setAttribute方法给div标签设置自定义属性data-v-x。
