module.exports = {
  // 单行长度
  printWidth: 86,
  // 缩进长度
  tabWidth: 2,
  // 使用空格代替tab缩进
  useTabs: false,
  // 句末使用分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 仅在必需时为对象的key添加引号
  quoteProps: 'as-needed',
  // jsx中使用单引号
  jsxSingleQuote: true,
  // 多行时尽可能打印尾随逗号
  // trailingComma: 'all',
  // 在对象前后添加空格
  bracketSpacing: true,
  // 多属性html标签的‘>’折行放置
  jsxBracketSameLine: true,
  // 无需顶部注释即可格式化
  requirePragma: false,
  // 单个参数的箭头函数不加括号 x => x
  arrowParens: 'avoid',
  // 在已被preitter格式化的文件顶部加上标注
  insertPragma: false,
  // 对HTML全局空白不敏感
  htmlWhitespaceSensitivity: 'ignore',
  // 不对vue中的script及style标签缩进
  // vueIndentScriptAndStyle: false,
  // 文件换行格式 LF/CRLF
  endOfLine: 'auto',
  // 对引用代码进行格式化
  embeddedLanguageFormatting: 'auto',
  // 是否要换行
  'prettier.proseWrap': 'preserve',
  // vetur 使用 prettier格式化代码
  'vetur.format.defaultFormatter.js': 'prettier',
}
