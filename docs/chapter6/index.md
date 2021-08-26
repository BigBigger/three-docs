# 第六章 高级几何体和二元操作 {#chapter6}

在[第 5 章](/docs/chapter5/)我们向你展示了 Three.js 库提供的所有基础几何体。除了这些基础几何体，Three.js 库还提供了一些比较高级而且特别的对象。本章我们会展示这些高级几何体，并涵盖以下这些主题：

* 如何使用高级几何体，例如 `THREE.ConvexGeometry` 、 `THREE.LatheGeometry` 和 `THREE.TubeGeometry` 。
* 如何使用 `THREE.ExtrudeGeometry` 从二维图形创建三维图形。我们会使用 Three.js 提供的函数来画这个二维图形，并且我们还会展示如何从一个外部加载的 SVG 图片创建出一个三维图形。
* 你可以通过轻松地修改前面章节中讨论过的图形来创建自定义图形。不过 Three.js 库也提供了一个 `THREE.ParamtericGeometry` 对象。使用这个对象，可以基于一组方程来创建几何体。
* 最后，介绍如何使用 `THREE.TextGeometry` 来创建三维文字效果。
* 另外，我们还会展示如何使用二元操作从已有的几何体创建出新几何体。二元操作是由 Three.js 的扩展 ThreeBSP 提供的功能。

我们从 `THREE.ConvexGeometry` 开始讨论。
