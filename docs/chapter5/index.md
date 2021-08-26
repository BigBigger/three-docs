# 第五章 学习使用几何体 {#chapter5}

在前面的几章中，我们已经学了Three.js库的很多用法，知道了如何创建基础场景、添加光源以及为网格配置材质。在[第 2 章](/docs/chapter2/)，我们接触了Three.js库中可用的几何体，可以用这些几何体创建三维物体，但我们并没有真正深入讨论这些几何体的细节。本章和[第 6 章](/docs/chapter6/)将展示Three.js提供的所有几何体（不包括在[第 4 章](/docs/chapter4/)探讨过的 `THREE.Line` ）。本章涉及的几何体包括：

* THREE.CircleGeometry（圆形）
* THREE.RingGeometry（环形）
* THREE.PlaneGeometry（平面）
* THREE.ShapeGeometry（任意图形）
* THREE.BoxGeometry（长方体）
* THREE.SphereGeometry（球体）
* THREE.CylinderGeometry（圆柱体）
* THREE.ConeGeometry（圆锥体）
* THREE.TorusGeometry（圆环）
* THREE.TorusKnotGeometry（环状扭结）
* THREE.PolyhedronGeometry（多面体）
* THREE.IcosahedronGeometry（二十面体）
* THREE.OctahedronGeometry（八面体）
* THREE.TetraHedronGeometry（四面体）
* THREE.DodecahedronGeometry（十二面体）

在开始学习Three.js提供的几何体之前，需要首先深入了解一下Three.js中用于代表几何体的两个可用基类： `THREE.Geometry` 和 `THREE.BufferGeometry` 。前者是旧版本中所有几何体的基类，而后者则由新版本提供给开发者。新几何体基类 `THREE.BufferGeometry` 的内部数据组织形式与GPU所期待的数据结构保持一致，从而进一步提高了运行效率。但是作为代价，新几何体基类的易用性稍差一些。

旧几何体基类 `THREE.Geometry` 使用下表所列的属性来定义物体形状。

| 属性 | 描述 |
| --- | --- |
| vertices(顶点) | 该属性是一个顶点数组，存储了用于定义一个几何体的所有顶点的空间位置 |
| faces(面) | 该属性是一个Face3数组，其中每一个元素定义了一个面。每个面都通过索引指定了vertices属性中的三个顶点 |

可见， `THREE.Geometry` 非常易于理解和使用。你可以直接向几何体对象添加新顶点并定义新的面，或者通过修改现有顶点来修改现有的面。新的 `THREE.BufferGeometry` 并没有 `vertices` 和 `faces` 属性，而只有 `attribute` 属性以及可选的 `index` 属性。**（译注：attribute虽然也常常被译作“属性”，但这里应该当作“分量”来理解，因为一个顶点的数据往往由多个attribute分量组成，包括但不限于空间坐标、颜色、法向量、纹理坐标等。）**上述两个属性如下表所示。

| 属性 | 描述 |
| --- | --- |
| attributes(分量) | `分量` 属性所存储的信息将被直接送往GPU进行处理。比如，若要定义一个形体，你需要至少创建一个 `Float32Array` 数组，其中每三个数组元素指定了一个顶点的三维空间坐标，而每三个顶点(即该数组中每九个元素)确定一个面。该数组可以向下面这样创建并添加到分量属性中： `geometry.addAttribute( position',new THREE.BufferAttribute(arrayOfVertices, 3));` |
| idnex(索引) | 一般不需要特意指定面，因为默认情况下position (位置)分量中每三个空间坐标确定一个面。但我们也可以通过 `index` 属性像 `THREE.Geometry` 类一样去指定用于组成每一个面的顶点 |

在本章的示例程序中，你暂时无须关心这两个几何体类的区别。如果想使用基于 `THREE.Geometry` 类的几何体，可以使用本章开始时罗列的几何体类；而如果想使用这些几何体基于 `THREE.BufferGeometry` 类的等价实现，则直接在类名中加上“Buffer”即可。例如将 `THREE.PlaneGeometry` 改为 `THREE.PlaneBufferGeometry` 即可，其他几何体类与之类似。接下来让我们看看Three.js提供的所有基础几何体。

:::tip 提示
有时我们需要在基于 `THREE.Geometry` 的几何体和基于 `THREE.BufferGeometry` 的几何体之间转换。例如有的模型加载器只能创建基于 `THREE.BufferGeometry` 的模型对象。但是如果需要在加载模型之后修改模型，则适宜将它转换成为基于 `THREE.Geometry` 的对象，从而使我们能够直接修改 `顶点` 和 `面` ，避免去操作庞大的 `attribute` 数组。幸运的是， `THREE.Geometry` 提供了 `fromBufferGeometry` 方法，可以接收基于 `THREE.BufferGeometry` 的对象，并将其数据导入到 `THREE.Geometry` 对象中。对应地， `THREE.BufferGeometry` 也提供了 `fromGeometry` 方法，用于实现反向转换。例如，下面代码将基于 `THREE.BufferGeometry` 的对象转换为基于 `THREE.Geometry` 的对象：

```js
var normalGeometry = new THREE.Geometry();
normalGeometry.fromBufferGeometry(bufferGeometry);
```

下面代码则进行反向转换：

```js
var bufferGeometry = new THREE.BufferGeometry();
bufferGeometry.fromGeometry(normalGeometry);
```

:::
