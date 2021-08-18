/*
 * @Description  : 注册全局组件
 * @Author       : BigBigger
 * @Date         : 2021-08-10 15:23:37
 * @LastEditTime : 2021-08-18 09:08:03
 * @LastEditors  : BigBigger
 */
import Theme from 'vitepress/theme';
import './custom.css';
import Demo from '/components/Demo.vue';
import Image from '/components/Image.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Demo', Demo);
    app.component('Image', Image);
  },
};
