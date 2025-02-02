"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
/**
 * 转义`Confluence`语法使用的特殊字符
 * @param text 将要转义的字符串
 */
const escape = (text) => (text || '').replace(/(?=[{}|*!\[\]])/gm, '\\');
/**
 * 将代码语言转成`Confluence`识别的语言，他识别的语言如下：
 * actionscript3,applescript,bash,c#,cpp,css,coldfusion,delphi,diff,erl,groovy,
 * xml,java,jfx,js,php,perl,text,powershell,py,ruby,sql,sass,scala,vb,yaml(6.7)
 */
const languages = {
    html: 'xml',
    json: 'js',
    javascript: 'js',
    less: 'sass',
    'c++': 'cpp',
    python: 'py',
};
/**
 * 创建一个将`Markdown`转成`Confluence Wiki Markup`的渲染器
 * 参考文档
 * https://confluence.atlassian.com/display/CONF42/Confluence+Wiki+Markup
 */
function Renderer() { }
Object.assign(Renderer.prototype, marked.Renderer.prototype, {
    hr: () => '----\n',
    em: (text) => `_${text}_`,
    del: (text) => `-${text}-`,
    strong: (text) => `*${text}*`,
    text: (text) => text,
    link: (href, title, text) => text ? `[${text}|${href}]` : `[${href}]`,
    image: (href, title, alt) => `!${href}|title=${title || ''},alt=${alt}!`,
    code: (code, lang) => `{code:language=${languages[lang] || lang}|linenumbers=true|collapse=false}\n${code}\n{code}\n`,
    // 一对大括号两边要有空格，防止用户没有添加空格导致不能识别
    codespan: (code) => ` {{${escape(code)}}} `,
    list: (text, ordered) => text.trim().replace(/^|(?<=\n+)/g, ordered ? '# ' : '* ') + '\n\n',
    listitem: (text) => `${text}\n`,
    table: (header, body) => `${header}${body}`,
    tablerow: (cells) => `${cells}|\n`,
    tablecell: (cell, options) => options.header ? `||${cell}` : `|${cell}`,
    heading: (text, depth) => `h${depth}. ${text}\n`,
    paragraph: (text) => `${text}\n`,
    blockquote: (quote) => `{quote}${quote}{quote}\n`,
    // 使用`marked`自带渲染器的方法
    // br: ()=>'\n',
    // html: (html)=>html,
    // checkbox: (checked)=>checked,
});
const renderer = new Renderer();
exports.default = (markdown) => marked(markdown, { renderer });
//# sourceMappingURL=index.js.map