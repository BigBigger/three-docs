/*
 * @Description  : 路由
 * @Author       : BigBigger
 * @Date         : 2021-08-12 09:11:33
 * @LastEditTime : 2021-08-18 09:08:19
 * @LastEditors  : BigBigger
 */

const routes = {
  docs: {
    '/docs/chapter1/': [
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
    ],
  },
};

module.exports = function (root) {
  return routes[root];
};
