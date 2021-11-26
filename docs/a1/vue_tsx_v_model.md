---
lang: zh-CN
title: v-model 的基础用法
description: vue-tsx 的基础用法
---


### tsx 自定义组件 v-model 的使用

#### 自定义组件
<!-- 指定代码语言 -->
@[code ts{7-9,15-21,34-36}](../../src/demo/demo_comp/TableCentTest.tsx)

#### 在页面中使用
<!-- 指定代码语言 -->
@[code{21-21}](../../src/demo/demo_view/MyVModel.tsx)


### 原理

如果你在一个组件上使用了 `v-model:xxx`，你应该使用 `@update:xxx`。

✅ 例子 `<n-input v-model:value="xxx" @update:value="yyy" />`。

❌ 例子 `<n-input v-model:value="xxx" :on-update:value="yyy" />`。

这是因为 `v-model:value="xxx"` 会被转化为 `:onUpdate:value="xxx"`。如果你同时使用了 `@update:value="yyy"`，他们会被转化为 `:onUpdate:value="[xxx, yyy]"`，然后 Naive UI 会来处理这种情况。

然是如果你使用了 `on-update:value="yyy"`，Vue 会生成类似于 `:onUpdate:value="xxx" :on-update-value="yyy"` 的代码，然后第二个属性会在运行时覆盖掉第一个，`v-model:value` 会崩掉。

如果你发现任何问题，欢迎在 GitHub 上提交 issue 和 PR。
