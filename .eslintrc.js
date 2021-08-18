/*
 * @Description  : eslint配置
 * @Author       : XiaoLei
 * @Date         : 2021-04-09 14:54:55
 * @LastEditTime : 2021-08-17 16:06:31
 * @LastEditors  : BigBigger
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 'warn',
    'vue/no-parsing-error': 'warn',
    // 禁止向模板添加多个根节点
    'vue/no-multiple-template-root': 'off',
    // template上禁用key属性，与vue3 `vue/no-v-for-template-key-on-child` 冲突
    'vue/no-v-for-template-key': 'off',
    // 与vue3冲突
    'vue/no-v-model-argument': 'off',
    // 自定义组件、svg、MathML 没内容时自我闭合
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any', // 与prettier冲突，设置为any
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 组件 prop 必须有默认值，没必要限制
    'vue/require-default-prop': 'off',
    semi: ['error', 'always'],
  },
};
