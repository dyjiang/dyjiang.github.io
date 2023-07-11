(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{310:function(n,e,s){"use strict";s.r(e);var t=s(10),a=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"react-挂载dom-没挂载上问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-挂载dom-没挂载上问题"}},[n._v("#")]),n._v(" react 挂载dom 没挂载上问题；")]),n._v(" "),e("blockquote",[e("p",[n._v("bug： react 在函数组件 挂载dom第一次拿不到；")])]),n._v(" "),e("p",[e("img",{attrs:{src:"/code/220914.png",alt:""}})]),n._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('export default function Project() {\n    // 模型展示。\n    let scene, camera, renderer, control;\n    const cont3d = useRef();\n\n    const init = () => {\n        renderer = new THREE.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        let cont3dDom = cont3d.current;\n        console.log(cont3dDom, "cont3dDom");  //拿不到dom。。。\n        // cont3dDom.appendChild(renderer.domElement);\n        //环境光\n        let ambient = new THREE.AmbientLight(0xffffff, 0.6);\n        scene.add(ambient);\n        \n    }\n    }\n\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])]),e("blockquote",[e("p",[n._v("解决方案： 因为第一次拿不到，反而后面几次可以拿到，可以直接做一个非空判断；")]),n._v(" "),e("p",[n._v("拿到dom之后再做下一步操作")])]),n._v(" "),e("div",{staticClass:"language-react line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('let cont3dDom = cont3d.current;\nif (typeof cont3dDom == "undefined") {\n    return;\n} else {\n    // console.log(cont3dDom, "cont3dDom");\n    cont3dDom.appendChild(renderer.domElement);\n}\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);