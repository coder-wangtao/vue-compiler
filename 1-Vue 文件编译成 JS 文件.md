value.compiler 的值就是 Vue 的底层库 vue/compiler-sfc

@vitejs/plugin-vue 插件中有个叫 transform 的钩子函数，
当 Vite 加载模块的时候就会触发这个钩子函数。所以当 import 一个 Vue 文件的时候，就会走到 @vitejs/plugin-vue 中的 transform 钩子函数中，在 transform 钩子函数中主要调用了 transformMain 函数。
transformMain 最主要的逻辑是：  
//1.对 script: 用 vue/compiler-sfc 的 compileScript 函数，将 Vue 文件的 <script setup> 模块转换为浏览器可直接执行的 JavaScript 代码。
//2.对 template: vue/compiler-sfc 的 compileTemplate 函数，将 Vue 文件的 <template> 模块转换为 render 函数
//3.对 style: 将 Vue 文件的 style 模块转换为 import "/src/App.vue?vue&type=style&index=0&scoped=7a7a37b1&lang.css"; 样子的 import 语句。

然后使用换行符 \n 将以上三部分合并起来
当浏览器执行到 import "/src/App.vue?vue&type=style&index=0&scoped=7a7a37b1&lang.css"; 语句时，触发了加载模块操作，再次触发了 @vitejs/plugin-vue 中的 transform 钩子函数。此时在 transform 函数中会执行 transformStyle 函数，在 transformStyle 函数中同样也是调用 vue/compiler-sfc 的 compileStyleAsync 函数，Vue 文件的 <style scoped='less'></style> 模块转换为编译后的 CSS 代码 code 字符串。
