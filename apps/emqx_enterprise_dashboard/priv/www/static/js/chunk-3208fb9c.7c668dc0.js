(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3208fb9c"],{"01c8":function(e,t,a){"use strict";a.d(t,"a",function(){return r});var i=a("178b"),s=a("3953"),n=a("1df6");function r(e){return Object(i["a"])(e)||Object(s["a"])(e)||Object(n["a"])()}},4964:function(e,t,a){"use strict";var i=a("61e3"),s=a.n(i);s.a},5118:function(e,t,a){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,s=Function.prototype.apply;function n(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new n(s.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new n(s.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},a("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a("c8ba"))},5713:function(e,t,a){"use strict";var i=a("ebce"),s=a.n(i);s.a},6017:function(e,t,a){(function(e,t){(function(e,a){"use strict";if(!e.setImmediate){var i,s=1,n={},r=!1,c=e.document,o=Object.getPrototypeOf&&Object.getPrototypeOf(e);o=o&&o.setTimeout?o:e,"[object process]"==={}.toString.call(e.process)?f():m()?h():e.MessageChannel?v():c&&"onreadystatechange"in c.createElement("script")?g():b(),o.setImmediate=l,o.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var r={callback:e,args:t};return n[s]=r,i(s),s++}function u(e){delete n[e]}function d(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(a,i);break}}function p(e){if(r)setTimeout(p,0,e);else{var t=n[e];if(t){r=!0;try{d(t)}finally{u(e),r=!1}}}}function f(){i=function(e){t.nextTick(function(){p(e)})}}function m(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}function h(){var t="setImmediate$"+Math.random()+"$",a=function(a){a.source===e&&"string"===typeof a.data&&0===a.data.indexOf(t)&&p(+a.data.slice(t.length))};e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),i=function(a){e.postMessage(t+a,"*")}}function v(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;p(t)},i=function(t){e.port2.postMessage(t)}}function g(){var e=c.documentElement;i=function(t){var a=c.createElement("script");a.onreadystatechange=function(){p(t),a.onreadystatechange=null,e.removeChild(a),a=null},e.appendChild(a)}}function b(){i=function(e){setTimeout(p,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,a("c8ba"),a("f28c"))},"61e3":function(e,t,a){},6985:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",e._g(e._b({staticClass:"emq-select",attrs:{value:e.rawValue},on:{change:e.valueChange}},"el-select",e.$attrs,!1),e.$listeners),[e._t("default",e._l(e.options,function(t,i){return a("el-option",{key:i,attrs:{value:t[e.fieldName.value],label:t[e.fieldName.label],disabled:e.isDisabled(t)}},[e._t("option",null,{item:t})],2)}))],2)},s=[],n=(a("6762"),a("2fdb"),a("96cf"),a("3b8d")),r=(a("7514"),a("6b54"),a("1f75")),c={name:"ConfigSelect",components:{},props:{value:{required:!0},field:{type:Object,required:!0},fieldName:{type:Object,default:function(){return{label:"label",value:"value"}}},disabledItem:{type:Array,default:function(){return[]}},refresh:{type:Boolean},extraConfigs:{type:Object,defaule:function(){}}},data:function(){return{options:[],parserField:{}}},computed:{rawValue:{get:function(){return"boolean"===typeof this.value?this.value.toString():this.value},set:function(e){var t=null,a=this.fieldName.value,i=this.options.find(function(t){return t[a]===e});i&&this.parserField[a]&&(t="true"===e),this.$emit("update:value",t)}}},watch:{refresh:function(e){e&&this.loadData()},field:{handler:function(){this.loadData()},deep:!0}},created:function(){this.loadData(),this.$emit("updateConfig",this.extraConfigs[this.rawValue],this.rawValue,this.extraConfigs)},methods:{valueChange:function(e){e&&this.$emit("updateConfig",this.extraConfigs[e],e,this.extraConfigs)},loadData:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,a,i,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getOptions();case 2:t=e.sent,this.parserField={},a=this.fieldName.value,i=this.fieldName.label,this.options=t.map(function(e){var t=e[a],n=e[i];return"boolean"===typeof t&&(s.parserField[a]="boolean",e[a]=t.toString(),"boolean"===typeof n&&(e[i]=n.toString())),e}),this.$emit("update:refresh",!1);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),isDisabled:function(e){return this.disabledItem.includes(e[this.fieldName.value])},getOptions:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,a,i,s,n,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.field,a=t.api,i=t.url,s=t.options,n=t.list,c=[],!s){e.next=6;break}c=s,e.next=20;break;case 6:if(!n){e.next=10;break}c=n.map(function(e){return{label:e,value:e}}),e.next=20;break;case 10:if(!a){e.next=16;break}return e.next=13,a();case 13:c=e.sent,e.next=20;break;case 16:if(!i){e.next=20;break}return e.next=19,r["a"].get(i);case 19:c=e.sent;case 20:return e.abrupt("return",c);case 21:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},o=c,l=(a("4964"),a("2877")),u=Object(l["a"])(o,i,s,!1,null,null,null);t["a"]=u.exports},ad43:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rule-actions"},[e._l(e.rawValue,function(t,i){return a("div",{key:i,staticClass:"action-item"},[a("div",{staticClass:"action-item-head"},[a("div",{staticClass:"action-item-type"},[a("div",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.actionType")))]),a("div",{staticClass:"desc"},[e._v(e._s((t._config||{}).title)+" ("+e._s(t.name)+")")])]),e.disabled?a("div",{staticClass:"action-item-btn action-item-type"},[a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),a("span",{staticClass:"desc"},[e._v(e._s(t.success))]),a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),a("span",{staticClass:"desc"},[e._v(e._s(t.failed))])]):a("div",{staticClass:"action-item-btn"},[a("span",{staticClass:"btn",on:{click:function(a){return e.editAction(t,i)}}},[e._v("\n          "+e._s(e.$t("RuleEngine.edit"))+"\n        ")]),a("span",{staticClass:"btn",on:{click:function(t){return e.removeAction(i)}}},[e._v("\n          "+e._s(e.$t("RuleEngine.remove"))+"\n        ")]),t.fallbacks.length?e._e():a("div",{staticClass:"fallbacks"},[a("el-popover",{attrs:{placement:"top-start",trigger:"hover","open-delay":500,content:e.$t("RuleEngine.fallbackActionCreate")}},[a("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-plus"},on:{click:function(a){return e.handleAddFallbacks(t)}},slot:"reference"},[e._v("\n              "+e._s(e.$t("RuleEngine.fallbackAction"))+"\n            ")])],1)],1)])]),a("div",{staticClass:"action-item-description"},[e._v("\n      "+e._s((t._config||{}).description)+"\n    ")]),t._value?a("div",{staticClass:"action-item-params"},[e.disabled?a("div",{staticClass:"action-item-field"},[a("div",{staticClass:"title"},[e._v("\n          "+e._s(e.$t("RuleEngine.detailedMetrics"))+"\n        ")]),a("div",{staticClass:"value"},[a("span",{staticClass:"btn btn-default show-btn",on:{click:function(a){return e.toggleShowMetrics(t)}}},[e._v("\n            "+e._s(t.showList?e.$t("RuleEngine.hide"):e.$t("RuleEngine.view"))+"\n          ")])])]):e._e(),e._l(t._value,function(t,i){return a("div",{key:i,staticClass:"action-item-field"},[a("div",{staticClass:"title"},[e._v(e._s(t.label))]),a("div",{staticClass:"value"},[e._v(e._s(t.value))])])})],2):e._e(),e.disabled&&t.showList?a("div",{staticClass:"metrics-detail"},[a("div",{staticClass:"main-title"},[e._v("\n        "+e._s(e.$t("RuleEngine.actionMetricsTips"))+"\n      ")]),e._l(t.metrics,function(t,i){return a("div",{key:i,staticClass:"item"},[a("span",{staticClass:"title"},[e._v("\n          "+e._s(e.$t("RuleEngine.node"))+"\n        ")]),a("span",{staticClass:"value"},[e._v("\n          "+e._s(t.node)+"\n        ")]),a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),a("span",{staticClass:"value"},[e._v(e._s(t.success))]),a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),a("span",{staticClass:"value"},[e._v(e._s(t.failed))])])})],2):e._e(),t.fallbacks&&t.fallbacks.length?[a("el-divider"),e._l(t.fallbacks,function(s,n){return a("div",{key:n,staticClass:"action-item error-action"},[a("div",{staticClass:"action-item-head"},[a("div",{staticClass:"action-item-type"},[a("div",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.actionType")))]),a("div",{staticClass:"desc"},[e._v(e._s((s._config||{}).title)+" ("+e._s(s.name)+")")])]),e.disabled?a("div",{staticClass:"action-item-btn action-item-type"},[a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),a("span",{staticClass:"desc"},[e._v(e._s(e.showFallbacksMtrics(s,"success")))]),a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),a("span",{staticClass:"desc"},[e._v(e._s(e.showFallbacksMtrics(s,"failed"))+" ")])]):a("div",{staticClass:"action-item-btn"},[a("span",{staticClass:"btn",on:{click:function(a){return e.editFallback(t,s,i)}}},[e._v("\n              "+e._s(e.$t("RuleEngine.edit"))+"\n            ")]),a("span",{staticClass:"btn",on:{click:function(a){return e.removeFallback(t)}}},[e._v("\n              "+e._s(e.$t("RuleEngine.remove"))+"\n            ")]),a("div",{staticClass:"fallbacks"},[a("el-popover",{attrs:{placement:"top-start",trigger:"hover","open-delay":500,content:e.$t("RuleEngine.fallbackActionTip")}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                  "+e._s(e.$t("RuleEngine.fallbackAction"))+"\n                ")])])],1)])]),a("div",{staticClass:"action-item-description"},[e._v("\n          "+e._s((e.actionsMap[s.name]||{}).description)+"\n        ")]),s._value?a("div",{staticClass:"action-item-params"},[e.disabled?a("div",{staticClass:"action-item-field"},[a("div",{staticClass:"title"},[e._v("\n              "+e._s(e.$t("RuleEngine.detailedMetrics"))+"\n            ")]),a("div",{staticClass:"value"},[a("span",{staticClass:"btn btn-default show-btn",on:{click:function(t){return e.toggleShowMetrics(s)}}},[e._v("\n                "+e._s(s.showList?e.$t("RuleEngine.hide"):e.$t("RuleEngine.view"))+"\n              ")])])]):e._e(),e._l(s._value,function(t,i){return a("div",{key:i,staticClass:"action-item-field"},[a("div",{staticClass:"title"},[e._v(e._s(t.label))]),a("div",{staticClass:"value"},[e._v(e._s(t.value))])])})],2):e._e(),e.disabled&&s.showList?a("div",{staticClass:"metrics-detail"},[a("div",{staticClass:"main-title"},[e._v("\n            "+e._s(e.$t("RuleEngine.actionMetricsTips"))+"\n          ")]),e._l(s.metrics,function(t,i){return a("div",{key:i,staticClass:"item"},[a("span",{staticClass:"title"},[e._v("\n              "+e._s(e.$t("RuleEngine.node"))+"\n            ")]),a("span",{staticClass:"value"},[e._v("\n              "+e._s(t.node)+"\n            ")]),a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),a("span",{staticClass:"value"},[e._v(e._s(t.success))]),a("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),a("span",{staticClass:"value"},[e._v(e._s(t.failed))])])})],2):e._e()])})]:e._e()],2)}),e.disabled?e._e():a("el-button",{attrs:{size:"small",icon:"el-icon-plus"},on:{click:e.addAction}},[e._v("\n    "+e._s(e.$t("RuleEngine.addAction"))+"\n  ")]),a("el-dialog",{attrs:{visible:e.actionDialogVisible,title:e.actionDialogTitle,width:"520px"},on:{"update:visible":function(t){e.actionDialogVisible=t}}},[a("el-form",{ref:"record",attrs:{model:e.record,rules:e.rules,size:"small","label-position":"top"}},[a("el-form-item",{attrs:{prop:"name",label:e.$t("RuleEngine.actionType")}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:8}},[a("el-select",{staticClass:"reset-width",on:{change:e.actionCategoryChange},model:{value:e.actionCategory,callback:function(t){e.actionCategory=t},expression:"actionCategory"}},e._l(e.actionCategoryOptions,function(t,i){return a("el-option",{key:i,attrs:{label:e.$t("RuleEngine."+t),value:t}})}),1)],1),a("el-col",{attrs:{span:16}},[a("emq-select",{staticClass:"reset-width",staticStyle:{width:"240px"},attrs:{field:{options:e.availableActions[e.actionCategory]},"field-name":{label:"title",value:"name"}},on:{change:e.actionTypeChange},model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}})],1)],1)],1),e.selectedAction.title.length-e.selectedAction.description.length>18?a("div",{staticClass:"action-description"},[e._v("\n        "+e._s(e.selectedAction.description)+"\n      ")]):e._e(),e.selectedAction.params.$resource?a("el-form-item",{attrs:{prop:"params.$resource",label:""}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          "+e._s(e.$t("RuleEngine.useOfResources"))+"\n          "),a("el-popover",{attrs:{trigger:"hover",width:"220",placement:"top"}},[a("div",{staticClass:"emq-popover-content",domProps:{innerHTML:e._s(e.$t("RuleEngine.resourceSelectTip"))}}),a("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),a("emq-select",{staticClass:"reset-width",staticStyle:{width:"403px"},attrs:{field:{options:e.availableResources},"field-name":{label:"id",value:"id"}},on:{"visible-change":e.checkResource},scopedSlots:e._u([{key:"option",fn:function(t){var i=t.item;return a("div",{staticClass:"custom-option",attrs:{title:i.description}},[a("span",{staticClass:"key"},[e._v(e._s(i.description||i.id))]),a("span",{staticClass:"value"},[e._v(e._s(i.config.title))])])}}],null,!1,3965597931),model:{value:e.record.params.$resource,callback:function(t){e.$set(e.record.params,"$resource",t)},expression:"record.params.$resource"}}),a("span",{staticClass:"tips btn",attrs:{icon:"el-icon-plus"},on:{click:e.toCreateResource}},[e._v("\n          "+e._s(e.$t("RuleEngine.createNew"))+"\n        ")])],1):e._e(),e.selectedAction.params.$resource?a("div",{staticClass:"line"}):e._e(),e.paramsLoading||e.paramsList.length>0?a("el-row",{staticClass:"params-item-wrapper",attrs:{gutter:50}},[e.paramsLoading?a("div",{staticClass:"params-loading-wrapper"},[a("a-skeleton",{attrs:{active:""}})],1):e._l(e.paramsList,function(t,i){return a("el-col",{key:i,attrs:{span:"textarea"===t.type||"object"===t.type?24:12}},[a("el-form-item",e._b({class:"sql"===t.key?"code-editor__item":""},"el-form-item",t.formItemAttributes,!1),[t.formItemAttributes.description?a("template",{slot:"label"},[e._v("\n                "+e._s(t.formItemAttributes.label)+"\n                "),a("el-popover",{attrs:{trigger:"hover",width:"220",placement:"top"}},[a("div",{staticClass:"emq-popover-content",domProps:{innerHTML:e._s(t.formItemAttributes.description)}}),a("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1):e._e(),"object"===t.elType?[a("key-and-value-editor",{model:{value:e.record.params[t.key],callback:function(a){e.$set(e.record.params,t.key,a)},expression:"record.params[item.key]"}})]:"cfgselect"===t.elType?[a("config-select",e._b({staticClass:"reset-width",attrs:{extraConfigs:t.extraConfigs},on:{updateConfig:e.addConfigAccordingType},model:{value:e.record.params[t.key],callback:function(a){e.$set(e.record.params,t.key,a)},expression:"record.params[item.key]"}},"config-select",t.bindAttributes,!1))]:"select"!==t.elType?["number"===t.type?a("el-input",e._b({model:{value:e.record.params[t.key],callback:function(a){e.$set(e.record.params,t.key,e._n(a))},expression:"record.params[item.key]"}},"el-input",t.bindAttributes,!1)):"password"===t.type?a("el-input",e._b({attrs:{"show-password":""},model:{value:e.record.params[t.key],callback:function(a){e.$set(e.record.params,t.key,a)},expression:"record.params[item.key]"}},"el-input",t.bindAttributes,!1)):"sql"===t.key?a("div",{staticClass:"monaco-container monaco-action__sql"},[a("monaco",{attrs:{id:e.record.name+"-sql"+Math.random().toString(16).slice(3),lang:"sql"},model:{value:e.record.params.sql,callback:function(t){e.$set(e.record.params,"sql",t)},expression:"record.params.sql"}})],1):a("el-input",e._b({model:{value:e.record.params[t.key],callback:function(a){e.$set(e.record.params,t.key,a)},expression:"record.params[item.key]"}},"el-input",t.bindAttributes,!1))]:["number"===t.type?a("emq-select",e._b({model:{value:e.record.params[t.key],callback:function(a){e.$set(e.record.params,t.key,e._n(a))},expression:"record.params[item.key]"}},"emq-select",t.bindAttributes,!1)):a("emq-select",e._b({model:{value:e.record.params[t.key],callback:function(a){e.$set(e.record.params,t.key,a)},expression:"record.params[item.key]"}},"emq-select",t.bindAttributes,!1))]],2)],1)})],2):e._e()],1),a("div",{staticClass:"dialog-align-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:e.handleCancel}},[e._v("\n        "+e._s(e.$t("Base.cancel"))+"\n      ")]),a("el-button",{staticClass:"dialog-primary-btn",attrs:{type:"primary",size:"small"},on:{click:e.handleCreate}},[e._v("\n        "+e._s(e.$t("Base.confirm"))+"\n      ")])],1)],1),a("resource-dialog",{ref:"resource",on:{created:e.confirmResource,cache:function(t){return e.confirmResource(null)}}})],2)},s=[],n=a("768b"),r=(a("ffc1"),a("6b54"),a("01c8")),c=a("cebc"),o=(a("456d"),a("96cf"),a("3b8d")),l=(a("7f7f"),a("ac6a"),a("5df3"),a("4f7f"),a("75fc")),u=(a("6762"),a("2fdb"),a("55dd"),a("2ef0")),d=a.n(u),p=a("bd43"),f=a("90b9"),m=a("7d5c"),h=a("9146"),v=a("5118"),g=a("caba"),b=a("6985"),_={name:"RuleActions",components:{ResourceDialog:m["a"],Monaco:h["a"],KeyAndValueEditor:g["a"],ConfigSelect:b["a"]},props:{value:{type:Array,required:!0},disabled:{type:Boolean,default:!1},event:{type:String,default:"message.publish"}},data:function(){return{actionDialogTitle:this.$t("RuleEngine.addActions"),actionDialogVisible:!1,isFallbacks:!1,setRefresh:!1,actionsMap:{},paramsList:[],paramsLoading:!1,currentEditIndex:0,currentOper:"",currentAction:{},actionCategory:"",actionCategoryOptions:[],originParamsList:[],originRules:{name:{required:!0,message:this.$t("RuleEngine.pleaseChoose")},params:{$resource:{required:!0,message:this.$t("RuleEngine.pleaseChoose")}}},originRecord:{name:"",params:{$resource:""},fallbacks:[]},record:{name:"",params:{$resource:""},fallbacks:[]},rules:{name:{required:!0,message:this.$t("RuleEngine.pleaseChoose")},params:{$resource:{required:!0,message:this.$t("RuleEngine.pleaseChoose")}}},selectedAction:{title:"",description:"",params:{$resource:""},fallbacks:[]},actions:[],resources:[]}},computed:{rawValue:{get:function(){return this.value},set:function(e){this.$emit("update:value",e)}},availableActions:function(){var e=this,t=this.actions.filter(function(t){return["$any",e.event].includes(t.for)}).sort(function(e,t){return e.title.localeCompare(t.title)}),a=function(e){return Object(l["a"])(new Set(e))};this.actionCategoryOptions=a(t.map(function(e){return e.category}));var i={};return this.actionCategoryOptions.forEach(function(e){var a=[];t.forEach(function(t){t.category===e&&(a.push(t),i[e]=a)})}),!this.record.name&&t[0]&&(this.record.name=t[0].name,this.actionTypeChange(this.record.name),this.actionCategory=this.actionCategoryOptions[0]),i},availableResources:function(){var e=this.selectedAction.types;return e?this.resources.filter(function(t){return e.includes(t.type)}):[]}},watch:{actionDialogVisible:function(e){e||(this.initData(),this.isFallbacks=!1)}},created:function(){this.loadActions()},methods:{initData:function(){this.record={name:"",params:{$resource:""},fallbacks:[]},this.originRecord={name:"",params:{$resource:""},fallbacks:[]},this.currentAction={}},toggleShowMetrics:function(e){var t=e.showList,a=void 0!==t&&t;this.$set(e,"showList",!a)},atDialogClose:function(){var e=this;Object(v["setTimeout"])(function(){e.$refs.record.clearValidate()},10)},handleCreate:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,a,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.initRecordEnableBatch(),e.next=3,this.$refs.record.validate();case 3:if(t=e.sent,t){e.next=6;break}return e.abrupt("return");case 6:this.record.params&&Object.keys(this.record.params).forEach(function(e){var t=i.record.params[e];"true"!==t&&"false"!==t||(i.record.params[e]=JSON.parse(t))}),a={},this.isFallbacks?(a=Object(c["a"])({},this.record),"edit"===this.currentOper&&(this.currentAction.fallbacks=[]),this.currentAction.fallbacks.push(a),this.rawValue.splice(this.currentEditIndex,1,this.currentAction)):(a=Object(c["a"])({},this.record),"edit"===this.currentOper?this.rawValue.splice(this.currentEditIndex,1,a):"add"===this.currentOper&&this.rawValue.push(a)),a.params&&!a.params.$resource&&delete a.params.$resource,this.fillRawValue(),this.actionDialogVisible=!1,this.atDialogClose();case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCancel:function(){this.actionDialogVisible=!1,this.atDialogClose()},checkResource:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&0===this.availableResources.length&&this.loadResourceData()},toCreateResource:function(){var e=this.selectedAction.types,t=void 0===e?[]:e;this.$refs.resource.setup({types:t,action:"create"}),this.actionDialogVisible=!1,sessionStorage.setItem("currentAction",JSON.stringify({record:this.record,paramsList:this.paramsList,originRecord:this.originRecord,originParamsList:this.originParamsList,actionCategory:this.actionCategory,actionCategoryOptions:this.actionCategoryOptions,types:t,isFallbacks:this.isFallbacks,action:this.currentAction}))},confirmResource:function(e){var t=this;Object(v["setTimeout"])(function(){t.$refs.record&&t.$refs.record.clearValidate()},10),this.actionDialogVisible=!0;var a=sessionStorage.getItem("currentAction");if(a){var i=JSON.parse(a),s=i.record,n=i.paramsList,r=i.types,c=i.actionCategoryOptions,o=i.actionCategory,l=i.originParamsList,u=i.originRecord,d=i.isFallbacks,p=i.action;this.record=s,this.originRecord=u,this.originParamsList=l,this.paramsList=n,this.selectedAction.types=r,this.actionCategory=o,this.actionCategoryOptions=c,this.isFallbacks=d,this.currentAction=p,sessionStorage.removeItem("currentAction")}e&&(this.record.params.$resource=e),this.loadResourceData(),this.currentOper=this.actionDialogTitle===this.$t("RuleEngine.editActions")?"edit":"add"},loadResourceData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["i"])();case 2:this.resources=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadParamsList:function(e){var t=this;this.currentOper=e;var a=this.selectedAction.params,i=Object(f["l"])(a,"params"),s=i.form,n=i.rules;this.storeOriginData(i,e),"add"===e&&(this.record.params={},s.forEach(function(e){var a=e.key,i=e.value,s=a,n=i;"sql"===s&&void 0===n&&(n=""),t.$set(t.record.params,s,n)}),this.$set(this.record.params,"$resource",""),this.$refs.record&&Object(v["setTimeout"])(this.$refs.record.clearValidate,0)),this.paramsList=s,this.rules.params=Object(c["a"])({$resource:{required:!0,message:this.$t("RuleEngine.pleaseChoose")}},n),this.paramsLoading=!1},assignRecordParams:function(e){var t=this,a={};return e.forEach(function(e){var i=e.key,s=e.value,n=i,r=s;"sql"===n&&void 0===r&&(r=""),t.$set(a,n,r)}),a},storeOriginData:function(e,t){var a=e.form,i=e.rules;if(this.originParamsList=a,this.originRules.params=Object(c["a"])({$resource:{required:!0,message:this.$t("RuleEngine.pleaseChoose")}},i),"add"===t){var s=this.assignRecordParams(a),n=Object.assign({},s);this.originRecord.params=n}},addConfigAccordingType:function(e,t,a){var i="true"===t?"false":"true",s=a[i];this.deleteHideItems(s);var n=this.record.params.$resource,c=Object(r["a"])(this.originParamsList),o=c.slice(0),l=Object.assign({},this.originRules.params),u=Object.assign({},this.originRecord.params);if(Object.assign(u,{$resource:n}),Object.keys(e).length){var d=Object(f["l"])(e,"params"),p=d.form,m=d.rules;this.paramsList=o.concat(p),this.rules.params=Object.assign(l,m);var h=this.assignRecordParams(p),g=Object.assign({},h),b=g;this.record.params=Object.assign(u,b)}else this.paramsList=o,this.rules.params=l,this.record.params=u;this.paramsList.sort(function(e,t){return e.order-t.order}),this.record.params.enable_batch=t,this.$refs.record&&Object(v["setTimeout"])(this.$refs.record.clearValidate,10)},deleteHideItems:function(e){var t=this,a=Object.keys(e);a.forEach(function(e){delete t.originRecord.params[e]})},actionTypeChange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add";this.selectedAction=JSON.parse(JSON.stringify(this.actionsMap[e])),this.actionCategory=this.selectedAction.category,this.paramsList=[],this.paramsLoading=!0,Object(v["setTimeout"])(this.loadParamsList(t),200),this.loadResourceData()},actionCategoryChange:function(e){var t=this.availableActions[e];t[0]&&(this.record.name=t[0].name,this.actionTypeChange(this.record.name))},addAction:function(){this.actionDialogTitle=this.$t("RuleEngine.addActions"),this.actionTypeChange(this.record.name,"add"),this.actionDialogVisible=!0},editAction:function(e,t){var a=d.a.cloneDeep(e);this.actionDialogTitle=this.$t("RuleEngine.editActions"),this.currentEditIndex=t,this.actionTypeChange(a.name,"edit"),this.initEnableBatch(a),this.record=Object(c["a"])({},a),this.originRecord=Object(c["a"])({},a),this.actionDialogVisible=!0},initEnableBatch:function(e){var t=Object(c["a"])({},e),a=t._config,i=t.params,s=i.enable_batch;if(void 0!==s){var n=a.params.enable_batch.items,r=s.toString(),o=n,l=o[r];this.addConfigAccordingType(l,r,o)}},initRecordEnableBatch:function(){void 0!==this.record.params.enable_batch&&(this.record.params.enable_batch=this.record.params.enable_batch.toString())},removeAction:function(e){this.rawValue.splice(e,1)},loadActions:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["h"])();case 2:t=e.sent,this.actions=t,t.forEach(function(e){var t=e.name;a.actionsMap[t]=e}),this.fillRawValue();case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),fillRawValue:function(){var e=this,t=function(t){t.forEach(function(t){t._config=e.actionsMap[t.name];var a=t.params,i=t._config.params,s=t.fallbacks;t._value=Object.entries(a).map(function(e){var t=Object(n["a"])(e,2),a=t[0],r=t[1];return{label:(i[a]||{}).title,value:r,key:a,fallbacks:s}})})},a=this.rawValue;t(a),a.forEach(function(e){t(e.fallbacks)})},handleAddFallbacks:function(e){this.isFallbacks=!0,this.actionDialogTitle=this.$t("RuleEngine.addActions"),this.actionDialogVisible=!0,this.currentAction=e},editFallback:function(e,t,a){var i=d.a.cloneDeep(t);this.actionDialogTitle=this.$t("RuleEngine.editActions"),this.currentEditIndex=a,this.currentAction=e,this.isFallbacks=!0,this.actionTypeChange(i.name,"edit"),this.initEnableBatch(i),this.record=Object(c["a"])({},i),this.originRecord=Object(c["a"])({},i),this.actionDialogVisible=!0},removeFallback:function(e){e.fallbacks=[]},showFallbacksMtrics:function(e,t){var a=e.metrics,i=0,s=0;return a.forEach(function(e){i+=e.success,s+=e.failed}),"success"===t?i:s}}},C=_,y=(a("5713"),a("2877")),k=Object(y["a"])(C,i,s,!1,null,null,null);t["a"]=k.exports},ebce:function(e,t,a){}}]);