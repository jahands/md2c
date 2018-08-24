!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";t.__esModule=!0;var r=n(2),s={html:"xml",json:"js",javascript:"js",less:"sass","c++":"cpp",python:"py"};function i(){}Object.assign(i.prototype,r.Renderer.prototype,{hr:function(){return"----\n"},em:function(e){return"_"+e+"_"},del:function(e){return"-"+e+"-"},strong:function(e){return"*"+e+"*"},text:function(e){return e},link:function(e,t,n){return n?"["+n+"|"+e+"]":"["+e+"]"},image:function(e,t,n){return"!"+e+"|title="+(t||"")+",alt="+n+"!"},code:function(e,t){return"{code:language="+(s[t]||t)+"|linenumbers=true|collapse=false}\n"+e+"\n{code}\n"},codespan:function(e){return" {{"+function(e){return(e||"").replace(/(?=[{}|*!\[\]])/gm,"\\")}(e)+"}} "},list:function(e,t){return e.trim().replace(/^|(?<=\n+)/g,t?"# ":"* ")+"\n\n"},listitem:function(e){return e+"\n"},table:function(e,t){return""+e+t},tablerow:function(e){return e+"|\n"},tablecell:function(e,t){return t.header?"||"+e:"|"+e},heading:function(e,t){return"h"+t+". "+e+"\n"},paragraph:function(e){return e+"\n"},blockquote:function(e){return"{quote}"+e+"{quote}\n"}});var l=new i;t.default=function(e){return r(e,{renderer:l})}},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=document.getElementById("markdown"),l=document.getElementById("markup");i.onchange=i.onkeyup=function(){l.value=s()(i.value)}},function(e,t,n){(function(t){!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:d,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:d,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:d,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||x.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=u(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=u(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=u(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=u(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=u(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=u(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=b({},n),n.gfm=b({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=u(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=b({},n.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=b({},n.normal,{html:u("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=n,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,s,i,l,o,a,h,p,u,c,g,f,d,b,x,y;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:k(i,"\n")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))&&(a={type:"table",header:m(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(i[0].length),g=0;g<a.align.length;g++)/^ *-+: *$/.test(a.align[g])?a.align[g]="right":/^ *:-+: *$/.test(a.align[g])?a.align[g]="center":/^ *:-+ *$/.test(a.align[g])?a.align[g]="left":a.align[g]=null;for(g=0;g<a.cells.length;g++)a.cells[g]=m(a.cells[g],a.header.length);this.tokens.push(a)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),h={type:"list_start",ordered:b=(l=i[2]).length>1,start:b?+l:"",loose:!1},this.tokens.push(h),p=[],r=!1,d=(i=i[0].match(this.rules.item)).length,g=0;g<d;g++)c=(a=i[g]).length,~(a=a.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(c-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&g!==d-1&&(l===(o=n.bullet.exec(i[g+1])[0])||l.length>1&&o.length>1||(e=i.slice(g+1).join("\n")+e,g=d-1)),s=r||/\n\n(?!\s*$)/.test(a),g!==d-1&&(r="\n"===a.charAt(a.length-1),s||(s=r)),s&&(h.loose=!0),y=void 0,(x=/^\[[ xX]\] /.test(a))&&(y=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:x,checked:y,loose:s},p.push(u),this.tokens.push(u),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(h.loose)for(d=p.length,g=0;g<d;g++)p[g].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),f=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))&&(a={type:"table",header:m(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]}).header.length===a.align.length){for(e=e.substring(i[0].length),g=0;g<a.align.length;g++)/^ *-+: *$/.test(a.align[g])?a.align[g]="right":/^ *:-+: *$/.test(a.align[g])?a.align[g]="center":/^ *:-+ *$/.test(a.align[g])?a.align[g]="left":a.align[g]=null;for(g=0;g<a.cells.length;g++)a.cells[g]=m(a.cells[g].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var s={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:d,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:d,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function i(e,t){if(this.options=t||x.defaults,this.links=e,this.rules=s.normal,this.renderer=this.options.renderer||new l,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=s.pedantic:this.options.gfm&&(this.options.breaks?this.rules=s.breaks:this.rules=s.gfm)}function l(e){this.options=e||x.defaults}function o(){}function a(e){this.tokens=[],this.token=null,this.options=e||x.defaults,this.options.renderer=this.options.renderer||new l,this.renderer=this.options.renderer,this.renderer.options=this.options}function h(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function u(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function c(e,t){return g[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?g[" "+e]=e+"/":g[" "+e]=k(e,"/",!0)),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}s._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,s._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,s._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,s.autolink=u(s.autolink).replace("scheme",s._scheme).replace("email",s._email).getRegex(),s._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,s.tag=u(s.tag).replace("comment",n._comment).replace("attribute",s._attribute).getRegex(),s._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,s._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,s._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,s.link=u(s.link).replace("label",s._label).replace("href",s._href).replace("title",s._title).getRegex(),s.reflink=u(s.reflink).replace("label",s._label).getRegex(),s.normal=b({},s),s.pedantic=b({},s.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:u(/^!?\[(label)\]\((.*?)\)/).replace("label",s._label).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",s._label).getRegex()}),s.gfm=b({},s.normal,{escape:u(s.escape).replace("])","~|])").getRegex(),url:u(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",s._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:u(s.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),s.breaks=b({},s.gfm,{br:u(s.br).replace("{2,}","*").getRegex(),text:u(s.gfm.text).replace("{2,}","*").getRegex()}),i.rules=s,i.output=function(e,t,n){return new i(t,n).output(e)},i.prototype.output=function(e){for(var t,n,r,s,l,o,a="";e;)if(l=this.rules.escape.exec(e))e=e.substring(l[0].length),a+=l[1];else if(l=this.rules.autolink.exec(e))e=e.substring(l[0].length),r="@"===l[2]?"mailto:"+(n=h(this.mangle(l[1]))):n=h(l[1]),a+=this.renderer.link(r,null,n);else if(this.inLink||!(l=this.rules.url.exec(e))){if(l=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),e=e.substring(l[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):h(l[0]):l[0];else if(l=this.rules.link.exec(e))e=e.substring(l[0].length),this.inLink=!0,r=l[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],s=t[3]):s="":s=l[3]?l[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),a+=this.outputLink(l,{href:i.escapes(r),title:i.escapes(s)}),this.inLink=!1;else if((l=this.rules.reflink.exec(e))||(l=this.rules.nolink.exec(e))){if(e=e.substring(l[0].length),t=(l[2]||l[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){a+=l[0].charAt(0),e=l[0].substring(1)+e;continue}this.inLink=!0,a+=this.outputLink(l,t),this.inLink=!1}else if(l=this.rules.strong.exec(e))e=e.substring(l[0].length),a+=this.renderer.strong(this.output(l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.em.exec(e))e=e.substring(l[0].length),a+=this.renderer.em(this.output(l[6]||l[5]||l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.code.exec(e))e=e.substring(l[0].length),a+=this.renderer.codespan(h(l[2].trim(),!0));else if(l=this.rules.br.exec(e))e=e.substring(l[0].length),a+=this.renderer.br();else if(l=this.rules.del.exec(e))e=e.substring(l[0].length),a+=this.renderer.del(this.output(l[1]));else if(l=this.rules.text.exec(e))e=e.substring(l[0].length),a+=this.renderer.text(h(this.smartypants(l[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{do{o=l[0],l[0]=this.rules._backpedal.exec(l[0])[0]}while(o!==l[0]);e=e.substring(l[0].length),"@"===l[2]?r="mailto:"+(n=h(l[0])):(n=h(l[0]),r="www."===l[1]?"http://"+n:n),a+=this.renderer.link(r,null,n)}return a},i.escapes=function(e){return e?e.replace(i.rules._escapes,"$1"):e},i.prototype.outputLink=function(e,t){var n=t.href,r=t.title?h(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,h(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},l.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+h(t,!0)+'">'+(n?e:h(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:h(e,!0))+"</code></pre>"},l.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},l.prototype.html=function(e){return e},l.prototype.heading=function(e,t,n){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},l.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},l.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},l.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},l.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},l.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},l.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},l.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},l.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},l.prototype.strong=function(e){return"<strong>"+e+"</strong>"},l.prototype.em=function(e){return"<em>"+e+"</em>"},l.prototype.codespan=function(e){return"<code>"+e+"</code>"},l.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},l.prototype.del=function(e){return"<del>"+e+"</del>"},l.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(p(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!f.test(e)&&(e=c(this.options.baseUrl,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch(e){return n}var s='<a href="'+h(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},l.prototype.image=function(e,t,n){this.options.baseUrl&&!f.test(e)&&(e=c(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},l.prototype.text=function(e){return e},o.prototype.strong=o.prototype.em=o.prototype.codespan=o.prototype.del=o.prototype.text=function(e){return e},o.prototype.link=o.prototype.image=function(e,t,n){return""+n},o.prototype.br=function(){return""},a.parse=function(e,t){return new a(t).parse(e)},a.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,b({},this.options,{renderer:new o})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop()},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,p(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var l=this.token.ordered,o=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,l,o);case"list_item_start":i="";var a=this.token.loose;for(this.token.task&&(i+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)i+=a||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var g={},f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function d(){}function b(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function m(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,s=t;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function k(e,t,n){if(0===e.length)return"";for(var r=0;r<e.length;){var s=e.charAt(e.length-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function x(e,t,n){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null);var s,i,l=(t=b({},x.defaults,t||{})).highlight,o=0;try{s=r.lex(e,t)}catch(e){return n(e)}i=s.length;var p=function(e){if(e)return t.highlight=l,n(e);var r;try{r=a.parse(s,t)}catch(t){e=t}return t.highlight=l,e?n(e):n(null,r)};if(!l||l.length<3)return p();if(delete t.highlight,!i)return p();for(;o<s.length;o++)!function(e){"code"!==e.type?--i||p():l(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--i||p():(e.text=n,e.escaped=!0,void(--i||p()))})}(s[o])}else try{return t&&(t=b({},x.defaults,t)),a.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||x.defaults).silent)return"<p>An error occurred:</p><pre>"+h(e.message+"",!0)+"</pre>";throw e}}d.exec=d,x.options=x.setOptions=function(e){return b(x.defaults,e),x},x.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new l,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},x.defaults=x.getDefaults(),x.Parser=a,x.parser=a.parse,x.Renderer=l,x.TextRenderer=o,x.Lexer=r,x.lexer=r.lex,x.InlineLexer=i,x.inlineLexer=i.output,x.parse=x,e.exports=x}(this||"undefined"!=typeof window&&window)}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);