module.exports = {
    extends: [
        'stylelint-config-standard',//配置stylelint拓展插件
        'stylelint-config-html/vue',//配置 vue中 template 样式格式化
        'stylelint-config-standard-scss',//配置stylelint scss插件
        'stylelint-config-recommended-vue/scss',//配置 vue 中 scss 样式格式化
        'stylelint-config-recess-order',//配置stylelint css属性书写顺序插件,
        'stylelint-config-prettier',//配置stylelint和prettier兼容
    ],
    overrides: [
        {
            files: [' **/*.(scss|css|vue|html)'],
            customSyntax: 'postcss-scss',

        },
        {
            files: [' **/*.(html|vue)'],
            customSyntax: 'postcss-html',

        },
    ],
    ignoreFiles: [

        ' **/*.js',
        ' **/*.jsx',
        ' **/*.tsx',
        ' **/*.ts',
        ' **/*.json',
        '**/*.md',
        ' **/*.yaml',
    ],
    /*
    * null =>关闭该规则
    * always =>必须
    */

    rules: {
        'value-keyword-case': null,//在 css 中使用 v-bind,不报错
        'no-descending-specificity': null,//禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
        'function-url-quotes': 'always',// 要求或禁止 URL的引号“always(必须加上引号)
        'no-empty-source': null,// 关闭禁止空源码
        'selector-class-pattern': null,// 关闭强制选择器类名的格式
        'property-no-unknown': null,//禁止未知的属性(true 为不允许)
        'block-opening-brace-space-before': 'always',//大括号之前必须有一个空格或不允许有空格
        'valuet-no-vendor-prefix': null,//关闭 属性值前缀 -- webkit-box
        'property-no-vendor-prefix': null,// 关闭 属性前缀 -webkit-mask
        'selector-pseudo-class-no-unknown': [
            // 不允许未知的选择器
            true,
            {
                ignorePseudoClasses: ['global', 'v-deep', 'deep'],//忽略属性,修改eslint.config.mjs 中的 vue 文件配置
            },
        ],
    },
}