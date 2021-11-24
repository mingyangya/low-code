module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    sensors: 'readonly' // 神策埋点忽略提示
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // add your custom rules here
  // @see https://cn.eslint.org/docs/user-guide/configuring
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则
  // "error" 或 2 - 开启规则
  rules: {
    'semi': 1, // 结尾的分号
    'space-in-parens': 1, // 函数参数之间的空格
    'space-before-function-paren': 1, // 函数参数前的空格
    'comma-spacing': 1, // 逗号后有一个空格
    'object-curly-spacing': 0, // 强制在花括号中使用一致的空格
    'no-unneeded-ternary': 0, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'space-infix-ops': 1, // 比较运算符两边的空格
    'no-unused-vars': [ 1, { vars: 'all', args: 'none' } ], // 禁止未使用过的变量
    'key-spacing': [ 1, { beforeColon: false, afterColon: true } ], // 禁止在对象字面量的键和冒号之间存在空格
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': 1, // 禁止出现多行空行
    'arrow-parens': 0, // 箭头函数参数适用圆括号包裹
    'generator-star-spacing': 0, // generator 函数中 * 的空格
    'standard/no-callback-literal': 0, // 严格模式下，修复cb（true｜false）不被允许 @see https://github.com/standard/eslint-plugin-standard/pull/15
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
