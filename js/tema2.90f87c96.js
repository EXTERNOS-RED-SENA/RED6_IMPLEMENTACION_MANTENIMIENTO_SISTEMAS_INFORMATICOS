(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema2"],{"03cc":function(s,e,a){s.exports=a.p+"img/22.f24bea30.png"},"117e":function(s,e,a){s.exports=a.p+"img/18.4d60b24d.png"},1185:function(s,e,a){s.exports=a.p+"img/26.56fba14e.png"},"20a4":function(s,e,a){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const s=this.elements.map(s=>s.id),e=s.indexOf(this.selected);if(e<0)return{};const a={};return 0===e?a.next=s[e+1]:(e+1===s.length||(a.next=s[e+1]),a.back=s[e-1]),a}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((s,e)=>{const a=s.data&&s.data.attrs?s.data.attrs:[];return{id:this.mainId+e+1,elm:s.elm,...a}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(s){return this.$refs[s][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(s=>s.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},2370:function(s,e,a){s.exports=a.p+"img/33.7fa5fb12.png"},"385b":function(s,e,a){s.exports=a.p+"img/27.1aeb8a5e.png"},"3f47":function(s,e,a){s.exports=a.p+"img/28.869d2570.png"},"5ea9":function(s,e,a){s.exports=a.p+"img/21.82a6a5d7.png"},"5f9d":function(s,e,a){s.exports=a.p+"img/23.3fdedd1a.svg"},8564:function(s,e,a){"use strict";var t=function(){var s=this,e=s._self._c;return e("div",{staticClass:"slyder-a"},["a"===s.tipo?e("div",{staticClass:"slyder-a__tipo-a"},[s.navObj.next?e("div",{staticClass:"slyder-a__btn--sigt",on:{click:function(e){s.selected=s.navObj.next},mouseover:function(e){s.mostrarIndicador=!1}}},[s.mostrarIndicador?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click"})]):s._e()]):s._e(),s.navObj.back?e("div",{staticClass:"slyder-a__btn--atrs",on:{click:function(e){s.selected=s.navObj.back}}}):s._e(),e("div",{staticClass:"slyder-a__bullets"},s._l(s.elements,(function(a){return e("div",{key:"sl-blt-key-"+a.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":s.selected===a.id},on:{click:function(e){s.selected=a.id}}})})),0)]):s._e(),s.elements.length&&s.rendered?e("ScrollHorizontal",{attrs:{selectedId:"sl-"+s.selected,"item-full-width":""}},s._l(s.elements,(function(s){return e("div",{directives:[{name:"child",rawName:"v-child",value:s.elm,expression:"item.elm"}],key:"sl-key-"+s.id,staticClass:"slyder-a__item",attrs:{id:"sl-"+s.id}})})),0):s._e(),"b"===s.tipo?e("div",{staticClass:"slyder-a__tipo-b mt-3"},[e("div",{staticClass:"slyder-a__btn--atrs",class:{hide:!s.navObj.back},on:{click:function(e){s.selected=s.navObj.back}}}),e("div",{staticClass:"slyder-a__bullets"},s._l(s.elements,(function(a){return e("div",{key:"sl-blt-key-"+a.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":s.selected===a.id},on:{click:function(e){s.selected=a.id}}})})),0),e("div",{staticClass:"slyder-a__btn--sigt",class:{hide:!s.navObj.next},on:{click:function(e){s.selected=s.navObj.next},mouseover:function(e){s.mostrarIndicador=!1}}},[s.mostrarIndicador?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click"})]):s._e()])]):s._e(),e("div",{staticClass:"hidden-slot"},[s._t("default")],2)],1)},i=[],o=function(){var s=this,e=s._self._c;return e("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[e("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":s.itemFullWidth},{row:s.row}],style:[{transform:`translate(${s.scrollVal}px,0px)`}]},[s._t("default")],2)])},n=[],c={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(s){s.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var s;const e=null===(s=this.ids.find(s=>s.id===this.selectedId))||void 0===s?void 0:s.id,a=document.getElementById(e);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===a)return;const t=this.$refs.hContainer,i=a.offsetWidth*this.ids.length;let o=a.offsetLeft;const n=t.offsetWidth/a.offsetWidth;n>1&&i-o<t.offsetWidth&&(o=i-t.offsetWidth),this.scrollVal=1===this.ids.length?0:-o},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(s=>({id:s.elm.id,key:s.key})))}}},r=c,d=(a("fff0"),a("2877")),l=Object(d["a"])(r,o,n,!1,null,"2a7d1721",null),u=l.exports,m=a("20a4"),p={name:"SlyderA",components:{ScrollHorizontal:u},mixins:[m["a"]],props:{tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0,secuencial:!0})},v=p,g=Object(d["a"])(v,t,i,!1,null,null,null);e["a"]=g.exports},a43b:function(s,e,a){s.exports=a.p+"img/24.7cd4c8dd.png"},a84e:function(s,e,a){"use strict";var t=function(){var s=this,e=s._self._c;return e("div",{staticClass:"acordion"},[s._l(s.elements,(function(a,t){return e("div",{key:a.id,staticClass:"p-3 pb-0 p-md-4 pb-md-0 mb-3",class:s.cardClass(a.id)},[e("div",{staticClass:"acordion__header mb-3 mb-md-4",on:{click:function(e){s.selected=s.selected!=a.id?a.id:0},mouseover:function(e){s.mostrarIndicador=(!s.mostrarIndicador||1!==t)&&s.mostrarIndicador}}},[e("div",{staticClass:"d-flex align-items-center"},["a"===s.tipo?e("div",{staticClass:"acordion__accion"},[e("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[s.selected===a.id?e("i",{staticClass:"fas fa-minus"}):e("i",{staticClass:"fas fa-plus"}),s.mostrarIndicador&&1===t?e("div",{staticClass:"indicador__container"},[e("div",{staticClass:"indicador--click indicador--sm"})]):s._e()])]):s._e(),e("div",{staticClass:"acordion__titulo"},[e("h3",{staticClass:"mb-0",domProps:{innerHTML:s._s(a.titulo)}})])]),"b"===s.tipo?e("div",{staticClass:"acordion__accion"},[e("div",{staticClass:"acordion__accion__btn--b h3 mb-0"},[s.selected===a.id?e("i",{staticClass:"fas fa-angle-up"}):e("i",{staticClass:"fas fa-angle-down"}),s.mostrarIndicador&&1===t?e("div",{staticClass:"indicador__container indicador--left"},[e("div",{staticClass:"indicador--click indicador--sm"})]):s._e()])]):s._e()]),e("div",{staticClass:"acordion__contenido",style:{height:s.rendered&&s.selected===a.id?s.getActiveHeight(a.id):0}},[e("div",{directives:[{name:"child",rawName:"v-child",value:a.elm,expression:"elm.elm"}],ref:a.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3 pb-md-4"})])])})),e("div",{staticClass:"hidden-slot"},[s._t("default")],2)],2)},i=[],o=(a("14d9"),a("20a4")),n={name:"AcordionA",mixins:[o["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0}),mounted(){this.$nextTick(()=>{setTimeout(()=>{this.domUpdated()},5e3)})},methods:{cardClass(s){const e=[];return this.claseTarjeta.length?e.push(this.claseTarjeta):e.push("tarjeta tarjeta--blanca"),this.selected===s&&e.push("acordion__activo"),e}}},c=n,r=a("2877"),d=Object(r["a"])(c,t,i,!1,null,null,null);e["a"]=d.exports},aac1:function(s,e,a){s.exports=a.p+"img/29.66508893.png"},b676:function(s,e,a){s.exports=a.p+"img/icon.946e4a83.svg"},bec2:function(s,e,a){},c521:function(s,e,a){s.exports=a.p+"img/19.21c0caf2.png"},c868:function(s,e,a){s.exports=a.p+"img/32.b2fd81eb.png"},ca0a:function(s,e,a){s.exports=a.p+"img/30.93ed35e9.png"},cd97:function(s,e,a){s.exports=a.p+"img/20.7e1e9223.png"},d4b3:function(s,e,a){s.exports=a.p+"img/31.3d871231.png"},e9af:function(s,e,a){s.exports=a.p+"img/33.c5a28cc1.svg"},fab4:function(s,e,a){s.exports=a.p+"img/25.6fb79808.png"},fd11:function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s._self._c;return e("div",{staticClass:"curso-main-container pb-3"},[e("BannerInterno"),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[s._m(0),s._m(1),e("Separador"),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),s._m(7),s._m(8),s._m(9),e("figcaption",[s._v("Fuente: OIT, 2024. ")]),e("Separador"),s._m(10),s._m(11),e("div",{staticClass:"row bg6 align-items-center"},[e("div",{staticClass:"px-lg-5 px-4"},[e("div",{staticClass:"bgw brad p-5 my-5"},[e("SlyderA",{attrs:{tipo:"b"}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("h5",{staticClass:"mb-4"},[s._v("Puntos de conexión")]),e("p",[s._v("Las áreas de trabajo deben contar con puntos de conexión adecuados, como tomas de red y conectores RJ-45. Estos puntos de conexión permiten a los usuarios finales conectar sus dispositivos, como computadoras, impresoras y teléfonos, a la red. Los puntos de conexión deben estar instalados de manera que sean accesibles y seguros, evitando riesgos de daño o desconexión accidental. ")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("fab4"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("h5",{staticClass:"mb-4"},[s._v("Cables de par trenzado")]),e("p",[s._v("Los cables de par trenzado, como Cat5e, Cat6 y Cat6a, son comúnmente utilizados en las áreas de trabajo debido a su capacidad para soportar altas velocidades de transmisión de datos y su resistencia a la interferencia. Estos cables deben estar correctamente instalados y terminados para asegurar una conexión de red eficiente y confiable.")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("1185"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("h5",{staticClass:"mb-4"},[s._v("Equipos de usuario final")]),e("p",[s._v("Los equipos de usuario final, como computadoras, impresoras y teléfonos, deben estar conectados a los puntos de conexión en las áreas de trabajo. Estos equipos deben ser compatibles con los estándares de red y deben estar configurados para asegurar una conexión segura y eficiente.")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("385b"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("h5",{staticClass:"mb-4"},[s._v("Mobiliario y organización ")]),e("p",[s._v("Las áreas de trabajo deben estar diseñadas de manera que el mobiliario y la organización del espacio faciliten el acceso a los puntos de conexión y a los equipos de red. Esto incluye la disposición de escritorios, estaciones de trabajo y otros elementos de mobiliario para asegurar una conexión de red eficiente y segura.")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("3f47"),alt:""}})])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6 my-2"},[e("h5",{staticClass:"mb-4"},[s._v("Cuartos Técnicos")]),e("p",[s._v("Los cuartos técnicos, también conocidos como cuartos de telecomunicaciones, albergan los equipos de red centralizados, como los switches, routers y paneles de parcheo. Estos cuartos deben estar diseñados para proporcionar un entorno seguro y controlado para los equipos de red, con sistemas de ventilación, control de temperatura y protección contra incendios.")])]),e("div",{staticClass:"col-lg-5 my-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("aac1"),alt:""}})])])])],1)])]),e("div",{staticClass:"row bg4 align-items-center"},[e("div",{staticClass:"px-lg-5 px-4"},[s._m(12),e("div",{staticClass:"row justify-content-center"},[s._m(13),e("div",{staticClass:"col-lg-9 my-lg-0 my-3"},[e("AcordionA",{attrs:{tipo:"a","clase-tarjeta":"tarjeta bg7"}},[e("div",{attrs:{titulo:"Equipos de red centralizados"}},[e("p",[s._v("Los cuartos técnicos mantienen equipos de red centralizados, como switches, routers y paneles de parcheo. Estos equipos se usan para la distribución y gestión de los servicios de red. Los switches y routers permiten la conexión y gestión de múltiples dispositivos de red, mientras que los paneles de parcheo facilitan la organización y reconfiguración de las conexiones de red. ")])]),e("div",{attrs:{titulo:"Sistemas de ventilación"}},[e("p",[s._v("Los cuartos técnicos deben estar equipados con sistemas de ventilación adecuados para asegurar una circulación de aire eficiente y mantener una temperatura óptima para los equipos de red. Los sistemas de ventilación deben estar diseñados para evitar la acumulación de calor y asegurar un funcionamiento eficiente de los equipos de red. ")])]),e("div",{attrs:{titulo:"Control de temperatura"}},[e("p",[s._v("El control de temperatura debe asegurar que los equipos de red funcionen de manera óptima. Los cuartos técnicos deben estar equipados con sistemas de control de temperatura, como aire acondicionado y sensores de temperatura, para mantener una temperatura constante y evitar sobrecalentamientos. ")])]),e("div",{attrs:{titulo:"Protección contra incendios"}},[e("p",[s._v("Los cuartos técnicos deben estar equipados con sistemas de protección contra incendios, como detectores de humo, extintores y sistemas de rociadores, para asegurar la seguridad de los equipos de red y del personal. Estos sistemas deben estar diseñados para detectar y extinguir incendios de manera rápida y eficiente. ")])]),e("div",{attrs:{titulo:"Seguridad física"}},[e("p",[s._v("Los cuartos técnicos están diseñados para proporcionar un entorno seguro para los equipos de red. Esto incluye medidas de seguridad física, como cerraduras, sistemas de control de acceso y cámaras de vigilancia, para evitar el acceso no autorizado y proteger los equipos de red contra robos y daños. ")])]),e("div",{attrs:{titulo:"Gestión de cables"}},[e("p",[s._v("Los cuartos técnicos deben facilitar la gestión de cables, incluyendo la organización y el etiquetado de los cables de red. Esto asegura que las conexiones de red sean fáciles de identificar y gestionar, facilitando el mantenimiento y la reconfiguración de la infraestructura de red. ")])]),e("div",{attrs:{titulo:"Importancia de la configuración adecuada"}},[e("p",[s._v("La configuración adecuada de las áreas de trabajo y los cuartos técnicos es para asegurar una infraestructura de red eficiente y confiable. Las áreas de trabajo deben estar equipadas con puntos de conexión adecuados y equipos de usuario final compatibles, mientras que los cuartos técnicos deben proporcionar un entorno seguro y controlado para los equipos de red. La adherencia a los estándares de rendimiento y calidad garantiza que la infraestructura de red cumpla con los requisitos necesarios para soportar las aplicaciones de red modernas y asegurar una conexión de red eficiente y confiable. ")])])])],1)])])]),e("Separador"),s._m(14),s._m(15),e("div",{staticClass:"row bg4 align-items-center mb-5"},[e("div",{staticClass:"px-lg-5 px-4"},[s._m(16),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"bg5 brad p-4"},[e("SlyderA",{attrs:{tipo:"b"}},[e("div",{staticClass:"bgw sha brad1 p-4 h-100"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("c868"),alt:""}})]),e("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[e("h5",[s._v("Demarcadores ")]),e("p",{staticClass:"mb-0"},[s._v("Los demarcadores son dispositivos que marcan el punto de responsabilidad entre el proveedor de servicios y el propietario del edificio. Estos dispositivos actúan como un punto de demarcación claro, donde la responsabilidad de la infraestructura de red se transfiere del proveedor de servicios al propietario del edificio. Los demarcadores facilitan la identificación y resolución de problemas, ya que permiten determinar si un problema de red se origina en la infraestructura del proveedor de servicios o en la infraestructura interna del edificio.")])])])]),e("div",{staticClass:"bgw sha brad1 p-4 h-100"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("c868"),alt:""}})]),e("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[e("h5",[s._v("Protectores de sobretensión")]),e("p",{staticClass:"mb-0"},[s._v("Los protectores de sobretensión son dispositivos diseñados para proteger los equipos de red contra daños eléctricos causados por sobretensiones y picos de voltaje. Estos dispositivos actúan como una barrera de protección, absorbiendo y disipando el exceso de energía que podría dañar los equipos de red. Los protectores de sobretensión son para asegurar la longevidad y el rendimiento de los equipos de red, especialmente en áreas donde las condiciones eléctricas pueden ser inestables. ")])])])]),e("div",{staticClass:"bgw sha brad1 p-4 h-100"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("c868"),alt:""}})]),e("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[e("h5",[s._v("Paneles de entrada")]),e("p",{staticClass:"mb-0"},[s._v("Los paneles de entrada son estructuras que albergan los puntos de conexión donde los servicios de red externos ingresan al edificio. Estos paneles deben estar diseñados para proporcionar una conexión segura y organizada para los cables y equipos de red. Los paneles de entrada deben estar ubicados en un área accesible y segura, facilitando el mantenimiento y la reconfiguración de las conexiones de red.")])])])]),e("div",{staticClass:"bgw sha brad1 p-4 h-100"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("c868"),alt:""}})]),e("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[e("h5",[s._v("Cables de entrada")]),e("p",{staticClass:"mb-0"},[s._v("Los cables de entrada son los cables que conectan los servicios de red externos con la infraestructura de red interna del edificio. Estos cables deben cumplir con los estándares de rendimiento y calidad establecidos por organizaciones como el Telecommunications Industry Association (TIA) y el American National Standards Institute (ANSI). Los cables de entrada deben estar correctamente instalados y protegidos para asegurar una conexión de red eficiente y confiable.")])])])]),e("div",{staticClass:"bgw sha brad1 p-4 h-100"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("c868"),alt:""}})]),e("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[e("h5",[s._v("Equipos de Terminación")]),e("p",{staticClass:"mb-0"},[s._v("Los equipos de terminación son dispositivos que permiten la conexión y terminación de los cables de entrada. Estos equipos incluyen conectores, adaptadores y otros componentes que facilitan la conexión de los cables de entrada a la infraestructura de red interna del edificio. Los equipos de terminación deben estar diseñados para proporcionar una conexión segura y eficiente, asegurando la integridad de las señales de red. ")])])])]),e("div",{staticClass:"bgw sha brad1 p-4 h-100"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("c868"),alt:""}})]),e("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[e("h5",[s._v("Diseño y configuración")]),e("p",{staticClass:"mb-0"},[s._v("El diseño y la configuración de la entrada de servicios deben cumplir con los estándares de rendimiento y calidad establecidos por organizaciones reconocidas. Estos estándares especifican las características y requisitos de los cables, conectores y otros componentes para asegurar una conexión de red eficiente y confiable.")])])])])])],1)]),s._m(17)])])]),e("p",[s._v("La siguiente figura enfatiza algunos requisitos que debe cumplir la entrada de servicios para garantizar un buen funcionamiento.")]),s._m(18),s._m(19),e("figcaption",[s._v("Fuente: OIT, 2024. ")])],1)],1)},i=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"titulo-principal color-acento-contenido"},[e("div",{staticClass:"titulo-principal__numero"},[e("span",[s._v("2")])]),e("h1",[s._v("Subsistemas de cableado")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-center mb-4"},[e("div",{staticClass:"col-lg-5"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("117e"),alt:""}})]),e("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[e("p",[s._v("Los subsistemas de cableado son componentes de la infraestructura de red estructurada. Estos subsistemas están diseñados para organizar y gestionar de manera eficiente el cableado que conecta los diversos dispositivos y equipos de red dentro de un edificio o campus. La implementación adecuada de estos subsistemas para garantizar una conexión de red confiable, eficiente y escalable. Este capítulo permite comprender la importancia de un subsistema de cableado dentro del proceso de instalación. ")])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-center mb-4"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_1"}},[e("h2",[s._v("2.1 Cableado horizontal y vertical")])]),e("div",{staticClass:"row justify-content-center bg1 p-4 brad"},[e("div",{staticClass:"col-lg-auto j1"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("c521"),alt:""}})]),e("div",{staticClass:"col pt-lg-0 pt-md-4"},[e("p",{staticClass:"mb-0"},[s._v("El cableado horizontal se refiere a la infraestructura de cableado que conecta los equipos de usuario final con los cuartos técnicos. Este cableado generalmente se extiende desde los paneles de parcheo en los cuartos técnicos hasta los puntos de conexión en las áreas de trabajo. El cableado vertical, por otro lado, conecta los cuartos técnicos con los equipos de entrada de servicios, como los routers y switches. Este cableado se utiliza para distribuir los servicios de red a lo largo del edificio. Ambos tipos de cableado deben cumplir con los estándares de rendimiento y calidad para asegurar una conexión de red eficiente y confiable. ")])])])]),e("div",{staticClass:"col-lg-3 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("cd97"),alt:""}})])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-start my-5"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"list"},[e("div",{staticClass:"list__item"},[e("div",{staticClass:"list__item__icon"},[e("img",{attrs:{src:a("b676"),alt:""}})])]),e("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[e("h3",{staticClass:"mb-1"},[s._v("Componentes del cableado horizontal")])])])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6 col-xl mb-4 mb-xl-0"},[e("div",{staticClass:"tarjeta-numerada color-secundario p-5 h-100"},[e("div",{staticClass:"tarjeta-numerada__numero"},[e("div",{staticClass:"h2"},[s._v("1")])]),e("p",{staticClass:"text-center"},[e("b",[s._v("Paneles de parcheo.")])]),e("p",{staticClass:"mb-0"},[s._v("Estos paneles, ubicados en los cuartos técnicos, actúan como puntos de terminación para los cables horizontales. Los paneles de parcheo permiten una gestión organizada y flexible de las conexiones de red, facilitando la reconfiguración y el mantenimiento de la infraestructura.")])])]),e("div",{staticClass:"col-md-6 col-xl mb-4 mb-xl-0"},[e("div",{staticClass:"tarjeta-numerada color-acento-contenido p-5 h-100"},[e("div",{staticClass:"tarjeta-numerada__numero"},[e("div",{staticClass:"h2"},[s._v("2")])]),e("p",{staticClass:"text-center"},[e("b",[s._v("Cables de par trenzado.")])]),e("p",{staticClass:"mb-0"},[s._v("Los cables de par trenzado, como Cat5e, Cat6 y Cat6a, son comúnmente utilizados en el cableado horizontal debido a su capacidad para soportar altas velocidades de transmisión de datos y su resistencia a la interferencia.")])])]),e("div",{staticClass:"col-md-6 col-xl mb-4 mb-xl-0"},[e("div",{staticClass:"tarjeta-numerada color-acento-botones p-5 h-100"},[e("div",{staticClass:"tarjeta-numerada__numero"},[e("div",{staticClass:"h2"},[s._v("3")])]),e("p",{staticClass:"text-center"},[e("b",[s._v("Puntos de conexión. ")])]),e("p",{staticClass:"mb-0"},[s._v("En las áreas de trabajo, los puntos de conexión, como tomas de red y conectores RJ-45, proporcionan a los usuarios finales acceso a la red. Estos puntos de conexión deben estar instalados de manera que sean accesibles y seguros. ")])])])])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-start my-5"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"list"},[e("div",{staticClass:"list__item"},[e("div",{staticClass:"list__item__icon"},[e("img",{attrs:{src:a("b676"),alt:""}})])]),e("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[e("h3",{staticClass:"mb-1"},[s._v("Componentes del cableado vertical ")])])])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-center mb-4"},[e("div",{staticClass:"col-lg-4 my-lg-0 my-3 j1"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("5ea9"),alt:""}})]),e("div",{staticClass:"col-lg-8 my-lg-0 my-3 j1"},[e("ol",{staticClass:"lista-ol--cuadro fa-ul"},[e("li",[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[s._v("1")])]),e("span",[e("b",[s._v("Cables de Fibra Óptica:")]),s._v(" Los cables de fibra óptica son comúnmente utilizados en el cableado vertical debido a su capacidad para soportar altas velocidades de transmisión de datos y su inmunidad a la interferencia electromagnética. Estos cables pueden transmitir datos a largas distancias sin degradación significativa de la señal.")])]),e("hr"),e("li",[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[s._v("2")])]),e("span",[e("b",[s._v("Cables de par trenzado de alta capacidad:")]),s._v(" En algunos casos, cables de par trenzado de alta capacidad, como Cat6a o Cat7, también se utilizan en el cableado vertical para proporcionar una conexión de red robusta y confiable.")])]),e("hr"),e("li",[e("div",{staticClass:"lista-ol--cuadro__vineta"},[e("span",[s._v("3")])]),e("span",[e("b",[s._v("Equipos de entrada de servicios:")]),s._v(" Los equipos de entrada de servicios, como routers y switches, actúan como puntos de distribución centralizados para los servicios de red. Estos equipos deben estar diseñados para soportar altas velocidades de transmisión de datos y múltiples conexiones simultáneas.")])]),e("hr")])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"row justify-content-center bg1 p-4 brad mb-5"},[e("div",{staticClass:"col-lg-auto j1"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("03cc"),alt:""}})]),e("div",{staticClass:"col pt-lg-0 pt-md-4"},[e("p",{staticClass:"mb-0"},[s._v("Para garantizar el buen funcionamiento del cableado tanto horizontal como vertical, estos de cumplir con ciertos estándares de rendimiento y calidad. La siguiente figura permite conocer cuáles son y sus principales requisitos establecidos por organizaciones reconocidas como el Telecommunications Industry Association (TIA) y el American National Standards Institute (ANSI) y así garantizar una conexión de red eficiente y confiable. ")])])])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"titulo-sexto color-acento-botones"},[e("h5",[s._v("Figura 1.")]),e("span",[s._v("Equipos de certificación y parámetros de medición")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"bgfig p-5 brad mb-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("5f9d"),alt:"La Figura 1 se denomina «Estándares internacionales de rendimiento y calidad del cableado horizontal y vertical» enseña los estándares establecidos polas organizaciones TIA y ANSI, lo cuales especifican los requisitos de cables, conectores y otros componentes."}})])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_2"}},[e("h2",[s._v("2.2 Área de trabajo y cuartos técnicos")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-center mb-5"},[e("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[e("p",[s._v("Las áreas de trabajo son los espacios donde los usuarios finales acceden a la red. Estas áreas deben estar equipadas con puntos de conexión adecuados, como tomas de red y conectores RJ-45, para asegurar una conexión de red eficiente y confiable. La configuración de las áreas de trabajo es importante para garantizar que los usuarios puedan conectarse a la red de manera segura y sin interrupciones.")])]),e("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("a43b"),alt:""}})])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-start my-5"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"list"},[e("div",{staticClass:"list__item"},[e("div",{staticClass:"list__item__icon"},[e("img",{attrs:{src:a("b676"),alt:""}})])]),e("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[e("h3",{staticClass:"mb-1"},[s._v("Componentes de los cuartos técnicos")])])])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"col-lg-3 my-lg-0 my-3"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("ca0a"),alt:""}})])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_3"}},[e("h2",[s._v("2.3 Entrada de servicios ")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-center align-items-end mb-4"},[e("div",{staticClass:"col-lg-auto"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("d4b3"),alt:""}})]),e("div",{staticClass:"col pt-lg-0 pt-md-4"},[e("div",{staticClass:"bg3 p-4 j1"},[e("p",{staticClass:"mb-0"},[s._v(" La entrada de servicios es el punto donde los servicios de red externos, como Internet y telefonía, ingresan al edificio. Este punto de entrada debe estar diseñado para proporcionar una conexión segura y protegida para los servicios de red, asegurando que los datos y las señales de comunicación se transmitan de manera eficiente y sin interrupciones. La correcta configuración y mantenimiento de la entrada de servicios son para garantizar la integridad y el rendimiento de la infraestructura de red.")])])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"row justify-content-start my-5"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"list"},[e("div",{staticClass:"list__item"},[e("div",{staticClass:"list__item__icon"},[e("img",{attrs:{src:a("b676"),alt:""}})])]),e("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[e("h3",{staticClass:"mb-1"},[s._v("Componentes de la entrada de servicios ")])])])])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"col-lg-3 d-none d-lg-block j1"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("2370"),alt:""}})])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"titulo-sexto color-acento-botones"},[e("h5",[s._v("Figura 2.")]),e("span",[s._v("Requisitos del diseño y configuración de la entrada de servicios.")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"bgfig p-5 brad mb-2"},[e("img",{staticClass:"img-a img-t",attrs:{src:a("e9af"),alt:"La figura 2 se denomina «Requisitos del diseño y configuración en la entrada de servicios» y desglosa los requerimientos a tener en cuenta para este elemento del cableado estructurado."}})])}],o=a("a84e"),n=a("8564"),c={name:"Tema2",components:{AcordionA:o["a"],SlyderA:n["a"]},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},r=c,d=a("2877"),l=Object(d["a"])(r,t,i,!1,null,null,null);e["default"]=l.exports},fff0:function(s,e,a){"use strict";a("bec2")}}]);
//# sourceMappingURL=tema2.90f87c96.js.map