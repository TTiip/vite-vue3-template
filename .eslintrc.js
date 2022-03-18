module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  rules: {
    // 关闭没有定义会报错
    'no-undef': 'off',
    // 关闭TS any检测
    '@typescript-eslint/no-explicit-any': ['off'],
    // 关闭TS 空函数检测
    '@typescript-eslint/no-empty-function': ['off'],
    // 关闭tab检测
    'no-tabs': 'off',
    // 关闭对象属性取用是必须是.的形式调用
    'dot-notation': 'off',
    // 关闭函数必须声明返回值
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // require引入报错解决
    '@typescript-eslint/no-var-requires': ['off'],
    // 子组件修改父组件的值时报错提示
    'vue/no-mutating-props': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // script标签缩进设置
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 0,
      "ignores": []
    }]

  },
  overrides: [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off"
      }
    }
  ]
}
