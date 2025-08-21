如何将 template 编译为 render 函数？
1.Vue 源码中的几个包：@vue/compiler-sfc、@vue/compiler-dom、@vue/compiler-core。
@vue/compiler-sfc：用于编译 vue 的 SFC 文件，这个包依赖 vue 下的其他包，比如@vue/compiler-dom 和@vue/compiler-core。这个包一般是给 vue-loader 和 @vitejs/plugin-vue 使用的。
@vue/compiler-dom：这个包专注于浏览器端的编译，处理浏览器 dom 相关的逻辑都在这里面。
@vue/compiler-core：从名字你也能看出来这个包是 vue 编译部分的核心，提供了通用的编译逻辑，不管是浏览器端还是服务端编译最终都会走到这个包里面来。

2.调用流程：@vue/compiler-sfc -> @vue/compiler-dom ->@vue/compiler-core
@vue/compiler-dom 调用@vue/compiler-core 包是为了传入一些浏览器中特有的 options

<!--
options(
  transformStyle:用于处理 dom 上面的 style，比如 style="color: red"
  cloak: compilerCore.noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  on: transformOn,
  show: transformShow
)
-->

经过@vue/compiler-dom 的 compile 函数处理后，再调用@vue/compiler-core 中 baseCompile 函数就有了处理 dom 相关的转换函数了。

3.@vue/compiler-core 中 baseCompile 逻辑(核心)
3.1 先通过 Parse： 将 template 里的代码转化成 《《模版 AST 抽象语法树》》。此时 node 节点中还有 v-for、v-model 等指令，并没有被处理掉。这里的《《模版 AST 抽象语法树》》的结构和 template 中的结构一模一样，模版 AST 抽象语法树是对 template 中的结构进行描述。

3.2nodeTransforms 数组中的为一堆处理 node 节点的转换函数，比如处理 v-once 指令的 transformOnce 转换函数、处理 v-if 指令的 transformIf 转换函数。
3.3directiveTransforms 对象中存的是对一些“会生成 props 的指令”进行转换的函数，用于给 node 节点生成对应的 props。比如处理 v-model 指令的 transformModel 转换函数。

3.4 再通过 transform：传入 nodeTransforms、directiveTransforms 和《模版 AST 抽象语法树》，通过 transform 转化为《《javascript AST 抽象语法树》》，在这一过程中 v-for、v-model 等指令已经被转换函数给处理了。得到的 javascript AST 抽象语法树的结构和 render 函数的结构一模一样，javascript AST 抽象语法树就是对 render 函数的结构进行描述。

3.5generate：拿到了和 render 函数的结构一模一样的 javascript AST 抽象语法树，只需要在 generate 函数中遍历 javascript AST 抽象语法树进行字符串拼接就可以得到 render 函数了。
