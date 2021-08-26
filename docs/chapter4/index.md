# 第四章 使用 Three.js 中的材质 {#chapter4}

前面的章节中简单地提了一下材质。你已经了解到一个材质结合 THREE.Geometry 对象，可以构成 THREE.Mesh 对象。材质就像物体的皮肤，决定了几何体的外表。例如，皮肤定义了一个几何体看起来是否像金属、透明与否，或者显示为线框。然后得到的 THREE.Mesh 对象才可以添加到 Three.js 渲染的场景中。到目前为止，我们还没有很详细地讨论过材质。本章将深入探讨 Three.js 库提供的所有材质，你也将会从中学到如何运用这些材质创建漂亮的三维对象。本章将要探讨的材质如下表所示。

| 名称 | 描述 |
| --- | --- |
| MeshBasicMaterial(网格基础材质) | 基础材质，用于给几何体赋予一种简单的颜色，可者显示几何体的线框 |
| MeshDepthMaterial(网格深度材质) | 这个材质使用从摄像机到网格的距离来决定如何给网格上色 |
| MeshNormalMaterial(网格法向材质) | 这是一种简单的材质，根据法向向量计算物体表面的颜色 |
| MeshLambertMaterial(网格 Lambert 材质) | 这是一种考虑光照影响的材质，用于创建暗淡的、不光亮的物体。 |
| MeshPhongMaterial(网格 Phong 材质) | 这是一种考虑光照影响的材质，用于创建光亮的物体 |
| MeshStandardMaterial(网格标准材质) | 这种标准材质使用“基于物理的渲染(PBR)”算法来绘制物体表面。它能够计算出表面与光线的正确互动关系，从而使渲染出的物体看起来更加真实 |
| MeshPhysicalMaterial(网格物理材质) | 这是 `MeshStandardMaterial` 的扩展材质，它为光线反射计算模型提供了更多的控制 |
| MeshToonMaterial(网格卡通材质) | 这是 `MeshPhongMaterial` 的扩展材质，它使得物体渲染更加卡通化 |
| ShadowMaterial(阴影材质) | 这是一个专门用于接收阴影图的特殊材质。在该材质中只有阴影图像，非阴影部分为完全透明的区域 |
| ShaderMaterial(着色器材质) | 这种材质允许使用自定义的着色器程序，直接控制顶点的放置方式以及像素的着色方式 |
| LineBasicMaterial(直线基础材质) | 这种材质可以用于 `THREE.Line` (直线)几何体，用来创建着色的直线 |
| LineDashMaterial(虚线材质) | 这种材质与 `LineBasicMaterial` (直线基础材质)一样，但允许创建出一.种虚线的效果 |

如果浏览 Three.js 库的源代码，你可能看到过 `THREE.RawShaderMaterial` 。这是一种特殊的材质，只能和 `THREE.BufferedGeometry` 一起使用。此几何体是用来优化静态几何体（如顶点和面不会改变的几何体）的一种特殊形式。本章并不会探讨这种材质，但会在[第 11 章](/docs/chapter11/)使用它。在源代码中，你也可以找到 `THREE.SpriteMaterial` 和 `THREE.PointMaterial` ，这些材质用来给单个点设置样式。本章不会讨论这些材质，但我们会在[第 7 章](/docs/chapter7/)探讨它们。
材质对象有一些共同的属性，所以在讨论第一个材质 `MeshBasicMaterial` 之前，我们先看一下所有材质共有的属性。
