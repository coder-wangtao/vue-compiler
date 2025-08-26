// 对于动态节点，vue 做的优化是将这些动态节点收集起来，然后当响应式变量修改后进行靶向更新。
// 那么 vue 对静态节点有没有做什么优化呢？答案是：当然有，对于静态节点会进行“静态提升”。

// 未开启静态提升生成的 render 函数:
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock("template", null, [
      _createElementVNode("div", null, [
        _createElementVNode("h1", null, "title"),
        _createElementVNode(
          "p",
          null,
          _toDisplayString(_ctx.msg),
          1 /* TEXT */
        ),
        _createElementVNode(
          "button",
          { onClick: _ctx.handleChange },
          "change msg",
          8 /* PROPS */,
          ["onClick"]
        ),
      ]),
    ])
  );
}

//开启静态提升后生成的render函数
import {
  createElementVNode as _createElementVNode,
  toDisplayString as _toDisplayString,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";

const _hoisted_1 = /*#__PURE__*/ _createElementVNode(
  "h1",
  null,
  "title",
  -1 /* HOISTED */
);

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock("template", null, [
      _createElementVNode("div", null, [
        _hoisted_1,
        _createElementVNode(
          "p",
          null,
          _toDisplayString(_ctx.msg),
          1 /* TEXT */
        ),
        _createElementVNode(
          "button",
          {
            onClick:
              _cache[0] ||
              (_cache[0] = (...args) =>
                _ctx.handleChange && _ctx.handleChange(...args)),
          },
          "change msg"
        ),
      ]),
    ])
  );
}

//如何实现静态提升?
// 实现静态提升主要分为两个阶段：
// 1.transform阶段遍历AST抽象语法树，将静态节点找出来进行标记和处理，然后将这些静态节点塞到根节点的hoists数组中。
// 2.generate阶段遍历上一步在根节点存的hoists数组，在render函数外去生成存储静态节点虚拟DOM的_hoisted_x变量。
// 然后在render函数中使用这些_hoisted_x变量表示这些静态节点。
