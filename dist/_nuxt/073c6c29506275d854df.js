(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{586:function(e,t,n){"use strict";n.r(t);n(90),n(24);var r={layout:"refactor",data:function(){return{isConfirm:!1,activeIndex:0,active:"",selectName:"",nav:[{name:"CV",selectName:"cv",href:"/writ/cv/step1"},{name:"PS",selectName:"ps",href:"/writ/ps"},{name:"推荐信",selectName:"letter",href:"/writ/letter"},{name:"材料确认",selectName:"confirm",href:"/writ/confirm"},{name:"材料列表",selectName:"material",href:"/writ/material"},{name:"修改记录",selectName:"modify",href:"/writ/modify"}]}},mounted:function(){"/writ"==this.$route.path&&this.$router.push("/writ/cv/step1"),this.isConfirm=this.$store.state.isConfirm,this.getName()},methods:{changeNav:function(path,e){path&&(this.$router.push(path),this.getName())},getName:function(){var e=this,t=this.$route.name.split("-")[2]||"cv";e.selectName=t,e.$nextTick((function(){e.selectName=t}))}},watch:{$route:function(e,t){this.getName()}}},c=n(10),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"writ"},[n("div",{staticClass:"writ_nav"},e._l(e.nav,(function(t,r){return n("span",{key:r,class:{active:t.selectName==e.selectName,comfirmSelect:e.isConfirm&&"confirm"==t.selectName},on:{click:function(n){return e.changeNav(t.href,r)}}},[e._v(e._s(t.name))])})),0),e._v(" "),n("nuxt-child")],1)}),[],!1,null,null,null);t.default=component.exports}}]);