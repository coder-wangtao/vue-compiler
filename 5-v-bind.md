<div v-bind:title="title">、<div :title="title">、<div :title>(vue3.4中引入的新的写法)。
这三种写法的作用都是一样的，将title变量绑定到div标签的title属性上。

在 transform 阶段处理 vue 内置的 v-for、v-model 等指令时会去执行一堆 transform 转换函数，其中有个 transformElement 转换函数中会去执行 buildProps 函数。buildProps 函数会去遍历当前 node 节点的所有 props 数组，此时的 props 中还是存的是 v-bind 指令，每个 prop 中存的是 v-bind 指令绑定的属性名和属性值。在 for 循环遍历 node 节点的所有 props 时，每次都会执行 transformBind 转换函数。如果我们在写 v-bind 时将值也给省略了，此时 v-bind 指令绑定的属性值就是 undefined。这时就需要将省略的属性值补回来，补回来的属性值的变量名称和属性名是一样的。在 transformBind 转换函数的最后会根据属性名和属性值生成一个包含 key、value 键的 props 对象。key 对应的就是属性名，value 对应的就是属性值。后续生成 render 函数时只需要遍历所有的 props，根据 key 和 value 字段进行字符串拼接就可以给 div 标签生成 title 属性了。
