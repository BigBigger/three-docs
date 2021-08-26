/*
 * @Description  : 路由
 * @Author       : BigBigger
 * @Date         : 2021-08-12 09:11:33
 * @LastEditTime : 2021-08-20 15:36:06
 * @LastEditors  : BigBigger
 */
const routes = {
  docs: {
    '/docs/': [
      {
        text: '目录',
        link: '/docs/',
      },
      {
        text: '第一章 使用Three.js创建你的第一个三维场景',
        link: '/docs/chapter1/',
        children: [
          { text: '第一节 准备工作', link: '/docs/chapter1/01' },
          { text: '第二节 获取源码', link: '/docs/chapter1/02' },
          { text: '第三节 搭建HTML框架', link: '/docs/chapter1/03' },
          { text: '第四节 渲染并查看三维对象', link: '/docs/chapter1/04' },
          {
            text: '第五节 添加材质、光源和阴影效果',
            link: '/docs/chapter1/05',
          },
          { text: '第六节 让你的场景动起来', link: '/docs/chapter1/06' },
          {
            text: '第七节 使用dat.GUl简化试验流程',
            link: '/docs/chapter1/07',
          },
          { text: '第八节 场景对浏览器的自适应', link: '/docs/chapter1/08' },
          { text: '第九节 总结', link: '/docs/chapter1/09' },
        ],
      },
      {
        text: '第二章 构建Three.js应用的基本组件',
        link: '/docs/chapter2/',
        children: [
          { text: '第一节 创建场景', link: '/docs/chapter2/01' },
          { text: '第二节 几何体和网络', link: '/docs/chapter2/02' },
          { text: '第三节 选择合适的摄像机', link: '/docs/chapter2/03' },
          { text: '第四节 总结', link: '/docs/chapter2/04' },
        ],
      },
      {
        text: '第三章 学习使用Three.js中的光源',
        link: '/docs/chapter3/',
        children: [
          {
            text: '第一节 Three.js中不同种类的光源',
            link: '/docs/chapter3/01',
          },
          { text: '第二节 基础光源', link: '/docs/chapter3/02' },
          { text: '第三节 特殊光源', link: '/docs/chapter3/03' },
          { text: '第四节 总结', link: '/docs/chapter3/04' },
        ],
      },
      {
        text: '第四章 使用Three.js中的材质',
        link: '/docs/chapter4/',
        children: [
          { text: '第一节 理解材质的共有属性', link: '/docs/chapter4/01' },
          { text: '第二节 从简单的网络材质开始', link: '/docs/chapter4/02' },
          { text: '第三节 高级材质', link: '/docs/chapter4/03' },
          { text: '第四节 线性几何体的材质', link: '/docs/chapter4/04' },
          { text: '第五节 总结', link: '/docs/chapter4/05' },
        ],
      },
      {
        text: '第五章 学习使用几何体',
        link: '/docs/chapter5/',
        children: [
          {
            text: '第一节 Three.js提供的基础几何体',
            link: '/docs/chapter5/01',
          },
          { text: '第二节 总结', link: '/docs/chapter5/02' },
        ],
      },
      {
        text: '第六章 高级几何体和二元操作',
        link: '/docs/chapter6/',
        children: [
          { text: '第一节 THREE.ConvexGeometry', link: '/docs/chapter6/01' },
          { text: '第二节 THREE.LatheGeometry', link: '/docs/chapter6/02' },
          { text: '第三节 通过拉伸创建几何体', link: '/docs/chapter6/03' },
          {
            text: '第四节 THREE.ParametricGeometry',
            link: '/docs/chapter6/04',
          },
          { text: '第五节 创建三维文本', link: '/docs/chapter6/05' },
          { text: '第六节 使用二元操作组合网格', link: '/docs/chapter6/06' },
          { text: '第七节 总结', link: '/docs/chapter6/07' },
        ],
      },
      {
        text: '第七章 粒子与精灵',
        link: '/docs/chapter7/',
        children: [
          { text: '第一节 理解粒子', link: '/docs/chapter7/01' },
          {
            text: '第二节 THREE.Points和THREE.PointsMaterial',
            link: '/docs/chapter7/02',
          },
          { text: '第三节 使用HTML5画布样式化粒子', link: '/docs/chapter7/03' },
          { text: '第四节 使用纹理样式化粒子', link: '/docs/chapter7/04' },
          { text: '第五节 使用精灵贴图', link: '/docs/chapter7/05' },
          {
            text: '第六节 从高级几何体创建THREE.Points',
            link: '/docs/chapter7/06',
          },
          { text: '第七节 总结', link: '/docs/chapter7/07' },
        ],
      },
      {
        text: '第八章 创建、加载高级网络和几何体',
        link: '/docs/chapter8/',
        children: [
          { text: '第一节 集合体组合与合并', link: '/docs/chapter8/01' },
          { text: '第二节 从外部资源加载几何体', link: '/docs/chapter8/02' },
          { text: '第三节 导入三维格式文件', link: '/docs/chapter8/03' },
          { text: '第四节 总结', link: '/docs/chapter8/04' },
        ],
      },
      {
        text: '第九章 创建动画和移动摄像机',
        link: '/docs/chapter9/',
        children: [
          { text: '第一节 基础动画', link: '/docs/chapter9/01' },
          { text: '第二节 使用摄像机', link: '/docs/chapter9/02' },
          { text: '第三节 变形动画和骨骼动画', link: '/docs/chapter9/03' },
          { text: '第四节 使用外部模型创建动画', link: '/docs/chapter9/04' },
          { text: '第五节 总结', link: '/docs/chapter9/05' },
        ],
      },
      {
        text: '第十章 加载和使用纹理',
        link: '/docs/chapter10/',
        children: [
          { text: '第一节 将纹理应用于材质', link: '/docs/chapter10/01' },
          { text: '第二节 纹理的高级用途', link: '/docs/chapter10/02' },
          { text: '第三节 总结', link: '/docs/chapter10/03' },
        ],
      },
      {
        text: '第十一章 自定义着色器和后期处理',
        link: '/docs/chapter11/',
        children: [
          {
            text: '第一节 配置Three.js以进行后期处理',
            link: '/docs/chapter11/01',
          },
          { text: '第二节 后期处理通道', link: '/docs/chapter11/02' },
          {
            text: '第三节 使用THREE.ShaderPass自定义效果',
            link: '/docs/chapter11/03',
          },
          {
            text: '第四节 创建自定义后期处理着色器',
            link: '/docs/chapter11/04',
          },
          { text: '第五节 总结', link: '/docs/chapter11/05' },
        ],
      },
      {
        text: '第十二章 加载和使用纹理',
        link: '/docs/chapter12/',
        children: [
          { text: '第一节 创建基本的Three.js场景', link: '/docs/chapter12/01' },
          { text: '第二节 Physi.js材质属性', link: '/docs/chapter12/02' },
          { text: '第三节 Physi.js基础形体', link: '/docs/chapter12/03' },
          { text: '第四节 使用约束限制对象的移动', link: '/docs/chapter12/04' },
          { text: '第五节 在场景中添加声源', link: '/docs/chapter12/05' },
          { text: '第六节 总结', link: '/docs/chapter12/06' },
        ],
      },
    ],
  },
  example: {
    '/example/': [
      {
        text: '目录',
        link: '/example/',
      },
      {
        text: '第一章 使用Three.js创建你的第一个三维场景',
        children: [
          {
            text: '01-basic-skeleton',
            link: '/example/chapter1/01-basic-skeleton',
          },
          {
            text: '02-first-scene',
            link: '/example/chapter1/02-first-scene',
          },
          {
            text: '03-materials-light',
            link: '/example/chapter1/03-materials-light',
          },
          {
            text: '04-materials-light-animation',
            link: '/example/chapter1/04-materials-light-animation',
          },
          {
            text: '05-control-gui',
            link: '/example/chapter1/05-control-gui',
          },
          {
            text: '06-screen-size-change',
            link: '/example/chapter1/06-screen-size-change',
          },
        ],
      },
      {
        text: '第二章 构建Three.js应用的基本组件',
        children: [
          {
            text: '01-basic-scene',
            link: '/example/chapter2/01-basic-scene',
          },
          {
            text: '02-foggy-scene',
            link: '/example/chapter2/02-foggy-scene',
          },
          {
            text: '03-forced-materials',
            link: '/example/chapter2/03-forced-materials',
          },
          {
            text: '04-geometries',
            link: '/example/chapter2/04-geometries',
          },
          {
            text: '05-custom-geometry',
            link: '/example/chapter2/05-custom-geometry',
          },
          {
            text: '06-mesh-properties',
            link: '/example/chapter2/06-mesh-properties',
          },
          {
            text: '07-both-cameras',
            link: '/example/chapter2/07-both-cameras',
          },
          {
            text: '08-cameras-lookat',
            link: '/example/chapter2/08-cameras-lookat',
          },
        ],
      },
      {
        text: '第三章 学习使用Three.js中的光源',
        children: [
          {
            text: '01-ambient-light',
            link: '/example/chapter3/01-ambient-light',
          },
          {
            text: '02-spot-light',
            link: '/example/chapter3/02-spot-light',
          },
          {
            text: '03-point-light',
            link: '/example/chapter3/03-point-light',
          },
          {
            text: '04-directional-light',
            link: '/example/chapter3/04-directional-light',
          },
          {
            text: '05-hemisphere-light',
            link: '/example/chapter3/05-hemisphere-light',
          },
          {
            text: '06-area-light',
            link: '/example/chapter3/06-area-light',
          },
          {
            text: '07-lensflares',
            link: '/example/chapter3/07-lensflares',
          },
        ],
      },
      {
        text: '第四章 使用Three.js的材质',
        children: [
          {
            text: '01-basic-mesh-material',
            link: '/example/chapter4/01-basic-mesh-material',
          },
          {
            text: '02-depth-material',
            link: '/example/chapter4/02-depth-material',
          },
          {
            text: '03-combined-material',
            link: '/example/chapter4/03-combined-material',
          },
          {
            text: '04-mesh-normal-material',
            link: '/example/chapter4/04-mesh-normal-material',
          },
          {
            text: '05-mesh-face-material',
            link: '/example/chapter4/05-mesh-face-material',
          },
          {
            text: '06-mesh-lambert-material',
            link: '/example/chapter4/06-mesh-lambert-material',
          },
          {
            text: '07-mesh-phong-material',
            link: '/example/chapter4/07-mesh-phong-material',
          },
          {
            text: '08-mesh-toon-material',
            link: '/example/chapter4/08-mesh-toon-material',
          },
          {
            text: '09-mesh-standard-material',
            link: '/example/chapter4/09-mesh-standard-material',
          },
          {
            text: '10-mesh-physical-material',
            link: '/example/chapter4/10-mesh-physical-material',
          },
          {
            text: '11-shader-material',
            link: '/example/chapter4/11-shader-material',
          },
          {
            text: '12-line-material',
            link: '/example/chapter4/12-line-material',
          },
          {
            text: '13-line-material-dashed',
            link: '/example/chapter4/13-line-material-dashed',
          },
        ],
      },
      {
        text: '第五章 学习使用几何体',
        children: [
          {
            text: '01-basic-2d-geometries-plane',
            link: '/example/chapter5/01-basic-2d-geometries-plane',
          },
          {
            text: '02-basic-2d-geometries-circle',
            link: '/example/chapter5/02-basic-2d-geometries-circle',
          },
          {
            text: '03-basic-3d-geometries-ring',
            link: '/example/chapter5/03-basic-3d-geometries-ring',
          },
          {
            text: '04-basic-2d-geometries-shape',
            link: '/example/chapter5/04-basic-2d-geometries-shape',
          },
          {
            text: '05-basic-3d-geometries-cube',
            link: '/example/chapter5/05-basic-3d-geometries-cube',
          },
          {
            text: '06-basic-3d-geometries-sphere',
            link: '/example/chapter5/06-basic-3d-geometries-sphere',
          },
          {
            text: '07-basic-3d-geometries-cylinder',
            link: '/example/chapter5/07-basic-3d-geometries-cylinder',
          },
          {
            text: '08-basic-3d-geometries-cone',
            link: '/example/chapter5/08-basic-3d-geometries-cone',
          },
          {
            text: '09-basic-3d-geometries-torus',
            link: '/example/chapter5/09-basic-3d-geometries-torus',
          },
          {
            text: '10-basic-3d-geometries-torus-knot',
            link: '/example/chapter5/10-basic-3d-geometries-torus-knot',
          },
          {
            text: '11-basic-3d-geometries-polyhedron',
            link: '/example/chapter5/11-basic-3d-geometries-polyhedron',
          },
        ],
      },
      {
        text: '第六章 高级几何体和二元操作',
        children: [
          {
            text: '01-advanced-3d-geometries-convex',
            link: '/example/chapter6/01-advanced-3d-geometries-convex',
          },
          {
            text: '02-advanced-3d-geometries-lathe',
            link: '/example/chapter6/02-advanced-3d-geometries-lathe',
          },
          {
            text: '03-extrude-geometry',
            link: '/example/chapter6/03-extrude-geometry',
          },
          {
            text: '04-extrude-tube',
            link: '/example/chapter6/04-extrude-tube',
          },
          {
            text: '05-extrude-svg',
            link: '/example/chapter6/05-extrude-svg',
          },
          {
            text: '06-parametric-geometries',
            link: '/example/chapter6/06-parametric-geometries',
          },
          {
            text: '07-text-geometry',
            link: '/example/chapter6/07-text-geometry',
          },
          {
            text: '08-binary-operations',
            link: '/example/chapter6/08-binary-operations',
          },
        ],
      },
      {
        text: '第七章 粒子和精灵',
        children: [
          { text: '01-sprites', link: '/example/chapter7/01-sprites' },
          {
            text: '02-points-webgl',
            link: '/example/chapter7/02-points-webgl',
          },
          {
            text: '03-basic-point-cloud',
            link: '/example/chapter7/03-basic-point-cloud',
          },
          {
            text: '04-program-based-sprites',
            link: '/example/chapter7/04-program-based-sprites',
          },
          {
            text: '05-program-based-points-webgl',
            link: '/example/chapter7/05-program-based-points-webgl',
          },
          {
            text: '06-program-based-sprites-webgl',
            link: '/example/chapter7/06-program-based-sprites-webgl',
          },
          {
            text: '07-rainy-scene',
            link: '/example/chapter7/07-rainy-scene',
          },
          {
            text: '08-snowy-scene',
            link: '/example/chapter7/08-snowy-scene',
          },
          { text: '09-sprites', link: '/example/chapter7/09-sprites' },
          {
            text: '10-sprites-3D',
            link: '/example/chapter7/10-sprites-3D',
          },
          {
            text: '11-create-particle-system-from-model',
            link: '/example/chapter7/11-create-particle-system-from-model',
          },
        ],
      },
      {
        text: '第八章 创建、加载高级网络和几何体',
        children: [
          { text: '01-grouping', link: '/example/chapter8/01-grouping' },
          { text: '02-merging', link: '/example/chapter8/02-merging' },
          {
            text: '03-load-save-json-object',
            link: '/example/chapter8/03-load-save-json-object',
          },
          {
            text: '04-load-save-json-scene',
            link: '/example/chapter8/04-load-save-json-scene',
          },
          {
            text: '05-blender-from-json',
            link: '/example/chapter8/05-blender-from-json',
          },
          { text: '06-load-obj', link: '/example/chapter8/06-load-obj' },
          {
            text: '07-load-obj-mtl',
            link: '/example/chapter8/07-load-obj-mtl',
          },
          {
            text: '08-load-collada',
            link: '/example/chapter8/08-load-collada',
          },
          { text: '09-load-stl', link: '/example/chapter8/09-load-stl' },
          { text: '10-load-ctm', link: '/example/chapter8/10-load-ctm' },
          { text: '11-load-vtk', link: '/example/chapter8/11-load-vtk' },
          { text: '12-load-pdb', link: '/example/chapter8/12-load-pdb' },
          { text: '13-load-PLY', link: '/example/chapter8/13-load-PLY' },
          { text: '14-load-awd', link: '/example/chapter8/14-load-awd' },
          {
            text: '15-load-assimp',
            link: '/example/chapter8/15-load-assimp',
          },
          {
            text: '16-load-vrml',
            link: '/example/chapter8/16-load-vrml',
          },
          {
            text: '17-load-babylon',
            link: '/example/chapter8/17-load-babylon',
          },
          { text: '18-load-tds', link: '/example/chapter8/18-load-tds' },
          { text: '19-load-3MF', link: '/example/chapter8/19-load-3MF' },
          { text: '20-load-amf', link: '/example/chapter8/20-load-amf' },
          {
            text: '21-load-play-canvas',
            link: '/example/chapter8/21-load-play-canvas',
          },
          {
            text: '22-load-draco',
            link: '/example/chapter8/22-load-draco',
          },
          {
            text: '23-load-prwm',
            link: '/example/chapter8/23-load-prwm',
          },
          {
            text: '24-load-gcode',
            link: '/example/chapter8/24-load-gcode',
          },
          {
            text: '25-load-nrrd',
            link: '/example/chapter8/25-load-nrrd',
          },
          { text: '26-load-svg', link: '/example/chapter8/26-load-svg' },
        ],
      },
      {
        text: '第九章 创建动画和移动摄像机',
        children: [
          {
            text: '01-basic-animation',
            link: '/example/chapter9/01-basic-animation',
          },
          {
            text: '02-selecting-objects',
            link: '/example/chapter9/02-selecting-objects',
          },
          {
            text: '03-animation-tween',
            link: '/example/chapter9/03-animation-tween',
          },
          {
            text: '04-trackball-controls-camera',
            link: '/example/chapter9/04-trackball-controls-camera',
          },
          {
            text: '05-fly-controls-camera',
            link: '/example/chapter9/05-fly-controls-camera',
          },
          {
            text: '06-first-person-camera',
            link: '/example/chapter9/06-first-person-camera',
          },
          {
            text: '07-controls-orbit',
            link: '/example/chapter9/07-controls-orbit',
          },
          {
            text: '08-morph-targets',
            link: '/example/chapter9/08-morph-targets',
          },
          {
            text: '09-morph-targets-manually',
            link: '/example/chapter9/09-morph-targets-manually',
          },
          {
            text: '10-bones-manually',
            link: '/example/chapter9/10-bones-manually',
          },
          {
            text: '11-animation-from-blender',
            link: '/example/chapter9/11-animation-from-blender',
          },
          {
            text: '12-animation-from-collada',
            link: '/example/chapter9/12-animation-from-collada',
          },
          {
            text: '13-animation-from-md2',
            link: '/example/chapter9/13-animation-from-md2',
          },
          {
            text: '14-animation-from-gltf',
            link: '/example/chapter9/14-animation-from-gltf',
          },
          {
            text: '15-animation-from-fbx',
            link: '/example/chapter9/15-animation-from-fbx',
          },
          {
            text: '16-animation-from-x',
            link: '/example/chapter9/16-animation-from-x',
          },
          {
            text: '17-animation-from-bvh',
            link: '/example/chapter9/17-animation-from-bvh',
          },
          {
            text: '18-animation-from-sea',
            link: '/example/chapter9/18-animation-from-sea',
          },
        ],
      },
      {
        text: '第十章 加载和使用纹理',
        children: [
          { text: '00-template', link: '/example/chapter10/00-template' },
          {
            text: '01-basic-texture',
            link: '/example/chapter10/01-basic-texture',
          },
          {
            text: '02-basic-texture-dds',
            link: '/example/chapter10/02-basic-texture-dds',
          },
          {
            text: '03-basic-texture-pvr',
            link: '/example/chapter10/03-basic-texture-pvr',
          },
          {
            text: '04-basic-texture-tga',
            link: '/example/chapter10/04-basic-texture-tga',
          },
          {
            text: '05-basic-texture-ktx',
            link: '/example/chapter10/05-basic-texture-ktx',
          },
          {
            text: '06-basic-texture-exr',
            link: '/example/chapter10/06-basic-texture-exr',
          },
          {
            text: '07-basic-texture-rgbe',
            link: '/example/chapter10/07-basic-texture-rgbe',
          },
          { text: '08-bump-map', link: '/example/chapter10/08-bump-map' },
          {
            text: '09-normal-map',
            link: '/example/chapter10/09-normal-map',
          },
          {
            text: '10-displacement-map',
            link: '/example/chapter10/10-displacement-map',
          },
          { text: '11-ao-map', link: '/example/chapter10/11-ao-map' },
          {
            text: '12-light-map',
            link: '/example/chapter10/12-light-map',
          },
          {
            text: '13-metal-roughness-map',
            link: '/example/chapter10/13-metal-roughness-map',
          },
          {
            text: '14-alpha-map',
            link: '/example/chapter10/14-alpha-map',
          },
          {
            text: '15-emissive-map',
            link: '/example/chapter10/15-emissive-map',
          },
          {
            text: '16-specular-map',
            link: '/example/chapter10/16-specular-map',
          },
          {
            text: '17-env-map-static',
            link: '/example/chapter10/17-env-map-static',
          },
          {
            text: '18-env-map-dynamic',
            link: '/example/chapter10/18-env-map-dynamic',
          },
          {
            text: '19-uv-mapping',
            link: '/example/chapter10/19-uv-mapping',
          },
          {
            text: '20-uv-mapping-manual',
            link: '/example/chapter10/20-uv-mapping-manual',
          },
          {
            text: '21-repeat-wrapping',
            link: '/example/chapter10/21-repeat-wrapping',
          },
          {
            text: '22-canvas-texture',
            link: '/example/chapter10/22-canvas-texture',
          },
          {
            text: '23-canvas-texture',
            link: '/example/chapter10/23-canvas-texture',
          },
          {
            text: '24-video-texture',
            link: '/example/chapter10/24-video-texture',
          },
          { text: 'test', link: '/example/chapter10/test' },
        ],
      },
      {
        text: '第十一章 自定义着色器和后期处理',
        children: [
          { text: '00-template', link: '/example/chapter11/00-template' },
          {
            text: '01-basic-effect-composer',
            link: '/example/chapter11/01-basic-effect-composer',
          },
          {
            text: '02-simple-pass-1',
            link: '/example/chapter11/02-simple-pass-1',
          },
          {
            text: '03-simple-pass-2',
            link: '/example/chapter11/03-simple-pass-2',
          },
          {
            text: '04-post-processing-masks',
            link: '/example/chapter11/04-post-processing-masks',
          },
          { text: '05-bokeh', link: '/example/chapter11/05-bokeh' },
          {
            text: '06-ambient-occlusion',
            link: '/example/chapter11/06-ambient-occlusion',
          },
          {
            text: '07-shader-pass-simple',
            link: '/example/chapter11/07-shader-pass-simple',
          },
          {
            text: '08-shader-pass-blur',
            link: '/example/chapter11/08-shader-pass-blur',
          },
          {
            text: '09-shader-pass-custom',
            link: '/example/chapter11/09-shader-pass-custom',
          },
          {
            text: '103-post-processing-masks',
            link: '/example/chapter11/103-post-processing-masks',
          },
          {
            text: '104-shaderpass-simple',
            link: '/example/chapter11/104-shaderpass-simple',
          },
          {
            text: '105-shaderpass-blur',
            link: '/example/chapter11/105-shaderpass-blur',
          },
          {
            text: '106-shaderpass-advanced',
            link: '/example/chapter11/106-shaderpass-advanced',
          },
          {
            text: '107-shaderpass-custom',
            link: '/example/chapter11/107-shaderpass-custom',
          },
        ],
      },
      {
        text: '第十二章 在场景中添加物理效果和声音',
        children: [
          { text: '00-template', link: '/example/chapter12/00-template' },
          { text: '01-dominos', link: '/example/chapter12/01-dominos' },
          { text: '02-material', link: '/example/chapter12/02-material' },
          { text: '03-shapes', link: '/example/chapter12/03-shapes' },
          {
            text: '04-point-constraint',
            link: '/example/chapter12/04-point-constraint',
          },
          {
            text: '05-sliders-hinges',
            link: '/example/chapter12/05-sliders-hinges',
          },
          {
            text: '06-dof-constraint',
            link: '/example/chapter12/06-dof-constraint',
          },
          { text: '07-audio', link: '/example/chapter12/07-audio' },
        ],
      },
    ],
  },
};

module.exports = function (root) {
  return routes[root];
};
