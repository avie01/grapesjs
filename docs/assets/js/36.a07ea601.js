(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{460:function(t,a,e){"use strict";e.r(a);var s=e(44),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"keymaps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keymaps"}},[t._v("#")]),t._v(" Keymaps")]),t._v(" "),e("p",[t._v("You can customize the initial state of the module from the editor initialization")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n keymaps"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object of keymaps")]),t._v("\n   defaults"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'your-namespace:keymap-name'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       keys"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'⌘+z, ctrl+z'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-command-id'")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" keymaps "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Keymaps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[e("a",{attrs:{href:"#getconfig"}},[t._v("getConfig")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#add"}},[t._v("add")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get"}},[t._v("get")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getAll"}},[t._v("getAll")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#remove"}},[t._v("remove")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#removeall"}},[t._v("removeAll")])])]),t._v(" "),e("h2",{attrs:{id:"getconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getconfig"}},[t._v("#")]),t._v(" getConfig")]),t._v(" "),e("p",[t._v("Get module configurations")]),t._v(" "),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Configuration object")]),t._v(" "),e("h2",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),e("p",[t._v("Add new keymap")]),t._v(" "),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("id")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1)]),t._v(" Keymap id")]),t._v(" "),e("li",[e("code",[t._v("keys")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1)]),t._v(" Keymap keys, eg. "),e("code",[t._v("ctrl+a")]),t._v(", "),e("code",[t._v("⌘+z, ctrl+z")])]),t._v(" "),e("li",[e("code",[t._v("handler")]),t._v(" "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1),t._v(")")]),t._v(" Keymap handler, might be a function")]),t._v(" "),e("li",[e("code",[t._v("opts")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Options (optional, default "),e("code",[t._v("{}")]),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'ns' is just a custom namespace")]),t._v("\nkeymaps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ns:my-keymap'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'⌘+j, ⌘+u, ctrl+j, alt+u'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("editor")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'do stuff'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\nkeymaps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ns:my-keymap'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'⌘+s, ctrl+s'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-gjs-command'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// listen to events")]),t._v("\neditor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keymap:emit'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shortcut"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Added keymap\nor just a command id as a string")]),t._v(" "),e("h2",{attrs:{id:"get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),e("p",[t._v("Get the keymap by id")]),t._v(" "),e("h3",{attrs:{id:"parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("id")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1)]),t._v(" Keymap id")])]),t._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("keymaps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ns:my-keymap'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> {keys, handler};")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Keymap object")]),t._v(" "),e("h2",{attrs:{id:"getall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getall"}},[t._v("#")]),t._v(" getAll")]),t._v(" "),e("p",[t._v("Get all keymaps")]),t._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("keymaps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> {id1: {}, id2: {}};")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"remove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[t._v("#")]),t._v(" remove")]),t._v(" "),e("p",[t._v("Remove the keymap by id")]),t._v(" "),e("h3",{attrs:{id:"parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("id")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1)]),t._v(" Keymap id")])]),t._v(" "),e("h3",{attrs:{id:"examples-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("keymaps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ns:my-keymap'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> {keys, handler};")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Removed keymap")]),t._v(" "),e("h2",{attrs:{id:"removeall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removeall"}},[t._v("#")]),t._v(" removeAll")]),t._v(" "),e("p",[t._v("Remove all binded keymaps")]),t._v(" "),e("p",[t._v("Returns "),e("strong",[t._v("this")])])])}),[],!1,null,null,null);a.default=r.exports}}]);