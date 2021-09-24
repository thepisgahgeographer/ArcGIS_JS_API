// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/Stream/setting/utils":function(){define(["dojo/_base/array"],function(k){return{getStreamLayers:function(d){var f=[],h;k.forEach(d.graphicsLayerIds,function(e){h=d.getLayer(e);"esri.layers.StreamLayer"===h.declaredClass&&f.push(h)});f.reverse();return f},getStreamLayerName:function(d){d=/\/([^\/]+)\/StreamServer/.exec(d);return 1<d.length?d[1]:""}}})},"widgets/Stream/setting/StreamSetting":function(){define("dojo/_base/declare dojo/_base/lang dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./StreamSetting.html dojo/dom-class dojo/dom-style dojo/Evented esri/symbols/jsonUtils jimu/dijit/CheckBox jimu/dijit/SymbolPicker ./FilterConfigPopup ../FilterUtil jimu/dijit/LoadingShelter".split(" "),
function(k,d,f,h,e,g,q,l,m,u,r,p,v,c,a){return k([h,e,g,u],{baseClass:"jimu-widget-stream-setting",templateString:q,map:null,nls:null,layerName:null,streamLayer:null,_filterList:[],_started:!1,postCreate:function(){this.inherited(arguments);var b=null;this._filterList=[];this.startStopCheckBox=new p({checked:!0,label:this.nls.startStopStream});this.startStopCheckBox.placeAt(this.startStopCheckBoxDiv);this.clearPreviousCheckBox=new p({checked:!0,label:this.nls.clearStream});this.clearPreviousCheckBox.placeAt(this.clearPreviousCheckBoxDiv);
this.drawPreviousCheckBox=new p({checked:!1,label:this.nls.drawPrevious});this.drawPreviousCheckBox.placeAt(this.drawPreviousCheckBoxDiv);this.streamLayer&&(1===this.streamLayer.maximumTrackPoints?this.drawPreviousCheckBox.setStatus(!1):1<this.streamLayer.maximumTrackPoints&&this.drawPreviousCheckBox.setValue(!0));this.spatialFilterCheckBox=new p({checked:!0,label:this.nls.spatialFilter,onChange:d.hitch(this,this._spatialStatusChange)});this.spatialFilterCheckBox.placeAt(this.spatialFilterCheckBoxDiv);
this.mapExtentCheckBox=new p({checked:!1,label:this.nls.limitMapExtent});this.mapExtentCheckBox.placeAt(this.mapExtentCheckBoxDiv);this.drawExtentCheckBox=new p({checked:!1,label:this.nls.limitDrawExtent,onChange:d.hitch(this,function(n){n?m.set(this.symbolPickerNode,"display","inline"):m.set(this.symbolPickerNode,"display","none")})});m.set(this.drawExtentCheckBox.domNode,"vertical-align","top");this.drawExtentCheckBox.placeAt(this.drawExtentCheckBoxDiv);this.config&&this.config.drawSymbol&&(b=r.fromJson(this.config.drawSymbol));
this.symbolPicker=new v({symbol:b,type:"fill"});m.set(this.symbolPicker.domNode,"margin-top","-16px");this.symbolPicker.placeAt(this.symbolPickerNode);this.symbolPicker.startup();this.filterCheckBox=new p({checked:!1,label:this.nls.attributeFilter,onChange:d.hitch(this,this._filterStatusChange)});this.filterCheckBox.placeAt(this.filterCheckBoxDiv);this.config?this.setConfig(this.config):this.streamLayer&&this.streamLayer.getDefinitionExpression()&&(this.shelter.show(),a.buildFilterInfoFromString(this.streamLayer,
this.streamLayer.getDefinitionExpression(),this.nls.newFilter).then(d.hitch(this,function(n){null!==n&&(this._filterList.push(n),this.filterCheckBox.setValue(!0),this.filterCheckBox.setStatus(!1));this.shelter.hide()})))},setConfig:function(b){this.config=b;this.layerName=this.config.layerName;this._filterList=this.config.filterList;this.startStopCheckBox.setValue(this.config.startStop);this.clearPreviousCheckBox.setValue(this.config.clear);this.drawPreviousCheckBox.setValue(this.config.drawPrevious);
this.spatialFilterCheckBox.setValue(this.config.spatialFilter);this.mapExtentCheckBox.setValue(!!this.config.mapExtentFilter);this.drawExtentCheckBox.setValue(!!this.config.drawExtentFilter);this.config.drawExtentFilter?m.set(this.symbolPickerNode,"display","inline"):m.set(this.symbolPickerNode,"display","none");this.filterCheckBox.setValue(this.config.attrFilter)},getConfig:function(){var b={layerId:this.streamLayer.id,layerName:this.layerName||"",startStop:this.startStopCheckBox.getValue(),clear:this.clearPreviousCheckBox.getValue(),
drawPrevious:this.drawPreviousCheckBox.getValue(),spatialFilter:this.spatialFilterCheckBox.getValue(),mapExtentFilter:this.mapExtentCheckBox.getValue(),drawExtentFilter:this.drawExtentCheckBox.getValue(),attrFilter:this.filterCheckBox.getValue(),filterList:this._filterList};b.mapExtentFilter||b.drawExtentFilter||(b.spatialFilter=!1);b.drawExtentFilter&&(b.drawSymbol=this.symbolPicker.getSymbol().toJson());return b},_filterStatusChange:function(b){b?l.remove(this.filterIcon,"disabled"):l.add(this.filterIcon,
"disabled")},_spatialStatusChange:function(b){b?m.set(this.spatialChoices,"display","block"):m.set(this.spatialChoices,"display","none")},_showFilter:function(){if(this.filterCheckBox.getValue()){var b=new c({titleLabel:this.nls.configFilter,filterList:this._filterList,streamLayer:this.streamLayer,nls:this.nls});this.own(f(b,"ok",d.hitch(this,function(n){this._filterList=n;b.close()})));this.own(f(b,"cancel",d.hitch(this,function(){b.close()})));b.startup()}}})})},"jimu/dijit/SymbolPicker":function(){define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dijit/TooltipDialog dijit/popup dijit/registry jimu/dijit/SymbolChooser jimu/symbolUtils".split(" "),
function(k,d,f,h,e,g,q,l,m,u,r,p,v,c){return k([d,f,h],{baseClass:"jimu-symbol-picker",declaredClass:"jimu.dijit.SymbolPicker",templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"symbolNode" class\x3d"symbol-node jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"separator jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 jimu-float-leading"\x3e\x3c/div\x3e\x3c/div\x3e',tooltipDialog:null,_isTooltipDialogOpened:!1,symbol:null,type:null,cropImage:!1,
customZIndex:null,postCreate:function(){this.inherited(arguments);this._createTooltipDialog();this._hideTooltipDialog();var a=this.symbolChooser.getSymbol();a&&this._drawSymbol(a)},destroy:function(){this._hideTooltipDialog();this.symbolChooser&&this.symbolChooser.destroy();this.symbolChooser=null;this.inherited(arguments)},_createTooltipDialog:function(){var a=g.create("div");this.tooltipDialog=new u({content:a});this.symbolChooser=new v({cropImage:this.cropImage,customZIndex:this.customZIndex,symbol:this.symbol,
type:this.type});this.symbolChooser.placeAt(a);this.symbolChooser.startup();this.own(l(this.symbolChooser,"change",e.hitch(this,function(b){this._drawSymbol(b);this.emit("change",b)})));this.own(l(this.domNode,"click",e.hitch(this,function(b){b.stopPropagation();b.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(l(document.body,"click",e.hitch(this,function(b){var n=b.target||b.srcElement;b=this._getColorPickers();if(!(0<b.length&&q.some(b,
function(x){return x.isPartOfPopup(n)})))if(b=this.tooltipDialog.domNode,b=n===b||g.isDescendant(n,b),this.cropImage&&this.symbolChooser._isCustomImageOptionSelected()){var t=this.symbolChooser.imageChooser,w=t.msgPopupOpen;t.cropPopupOpen||w||b||this._hideTooltipDialog();t.cropPopup&&t.cropPopup.domNode||(t.cropPopupOpen=!1);t.msgPopup&&t.msgPopup.domNode||(t.msgPopupOpen=!1)}else b||this._hideTooltipDialog()})));this.own(l(this.symbolChooser,"resize",e.hitch(this,function(){this._isTooltipDialogOpened&&
(this._hideTooltipDialog(),this._showTooltipDialog())})))},_getColorPickers:function(){var a=m(".jimu-color-picker",this.symbolChooser.domNode);return q.map(a,e.hitch(this,function(b){return p.byNode(b)}))},reset:function(){this.symbol=this.type=null;g.empty(this.symbolNode);this.symbolChooser.reset()},showBySymbol:function(a){this.reset();a&&(this._drawSymbol(a),this.symbolChooser.showBySymbol(a))},showByType:function(a){this.reset();this.symbolChooser.showByType(a);(a=this.symbolChooser.getSymbol())&&
this._drawSymbol(a)},getSymbol:function(){return this.symbolChooser.getSymbol()},_drawSymbol:function(a){g.empty(this.symbolNode);a&&(a=c.createSymbolNode(a,{width:16,height:16}))&&g.place(a,this.symbolNode)},_showTooltipDialog:function(){this.tooltipDialog&&(r.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.domNode}),this._isTooltipDialogOpened=!0)},_hideTooltipDialog:function(){this.tooltipDialog&&(r.close(this.tooltipDialog),this._isTooltipDialogOpened=!1)}})})},"widgets/Stream/setting/FilterConfigPopup":function(){define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/html jimu/dijit/Popup jimu/dijit/LoadingIndicator ./FilterConfig".split(" "),
function(k,d,f,h,e,g,q){return k([e,d],{width:1024,height:600,titleLabel:"",filterList:null,streamLayer:null,nls:null,constructor:function(){this.inherited(arguments);this.nls=f.clone(window.jimuNls.common);this.buttons=[{label:this.nls.ok,onClick:f.hitch(this,this._accept)},{label:this.nls.cancel,onClick:f.hitch(this,this._reject)}]},postCreate:function(){this.inherited(arguments);h.addClass(this.domNode,"stream-filter-popup");this._initLoading();this._initFilter()},_initFilter:function(){this.filter=
new q({streamLayer:this.streamLayer,config:this.filterList,nls:this.nls});this.filter.placeAt(this.contentContainerNode)},_reject:function(){this.emit("cancel")},_accept:function(){var l=this.filter.getConfig();l?this.emit("ok",l):this.emit(null)},_initLoading:function(){this.loading=new g({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()}})})},"widgets/Stream/setting/FilterConfig":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-style dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./FilterConfig.html ./SingleFilter jimu/dijit/Message jimu/dijit/SimpleTable jimu/dijit/LoadingShelter".split(" "),
function(k,d,f,h,e,g,q,l,m,u,r,p,v){return k([q,l,m],{baseClass:"jimu-widget-stream-filter",templateString:u,streamLayer:null,config:null,postCreate:function(){this.inherited(arguments);this.filterList=new v({autoHeight:!1,selectable:!0,fields:[{name:"name",title:this.nls.name,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"70px",type:"actions",actions:["up","down","delete"]}]},this.filterList);g.add(this.filterList.domNode,"stream-filter-table");e.set(this.filterList.domNode,
"height","100%");this.own(h(this.filterList,"row-select",d.hitch(this,this._onFilterSelected)));this.own(h(this.filterList,"row-delete",d.hitch(this,this._onFilterRemoved)));this.filterList.startup();this.config&&0<this.config.length&&this._applyConfig()},_applyConfig:function(){this.filterList.clear();f.forEach(this.config,d.hitch(this,function(c,a){var b=this.filterList.addRow({name:c.name||this.nls.newFilter}).tr;this._createFilter(b,c);0===a&&this.filterList.selectRow(b)}))},getConfig:function(){var c,
a=[];f.forEach(this.filterList.getRows(),function(b){c=b.filter;a.push(c.getConfig())});return a},_addFilter:function(){var c=this.filterList.addRow({name:this.nls.newFilter});c.success?(c=c.tr,this._createFilter(c,{name:this.nls.newFilter}),this.filterList.selectRow(c)):new p({message:this.nls.addFilterFailed})},_onFilterSelected:function(c){var a;this.currentTR?this.currentTR!==c&&((a=this.currentTR.filter)&&e.set(a.domNode,"display","none"),this.currentTR=c,(a=this.currentTR.filter)&&e.set(a.domNode,
"display","block")):(this.currentTR=c,(a=this.currentTR.filter)&&e.set(a.domNode,"display","block"))},_onFilterRemoved:function(c){var a=c.filter;a&&(a.destroy(),c.filter=null)},_createFilter:function(c,a){a=new r({config:a,streamLayer:this.streamLayer,nls:this.nls});a.placeAt(this.singleFilterContainer);c.filter=a;this.own(h(a,"filterNameChanged",d.hitch(this,function(b){this.filterList.editRow(c,{name:b})})));e.set(a.domNode,"display","none")}})})},"widgets/Stream/setting/SingleFilter":function(){define("dojo/_base/declare dojo/_base/lang dojo/json dojo/on dojo/Evented dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleFilter.html jimu/dijit/Filter jimu/dijit/SimpleTable jimu/dijit/LoadingShelter dijit/form/ValidationTextBox".split(" "),
function(k,d,f,h,e,g,q,l,m,u,r){return k([q,l,m,e],{baseClass:"jimu-widget-stream-filter",templateString:u,streamLayer:null,config:null,_inherited:null,_definitionExpression:null,postCreate:function(){this.inherited(arguments);this._inherited=!1;this._definitionExpression="";this._init()},_init:function(){this.filterNameEditor.set("value",this.config.name||this.nls.newFilter);"inherited"in this.config&&(this._inherited=this.config.inherited);"definitionExpression"in this.config&&(this._definitionExpression=
this.config.definitionExpression);this.own(h(this.filterNameEditor,"change",d.hitch(this,function(v){this.emit("filterNameChanged",v)})));this.filter=new r({enableAskForValues:!0,noFilterTip:this.nls.noFilterTip,style:"width:100%;margin-top:22px;"});this.filter.placeAt(this.singleFilterContent);this._inherited?(g.set(this.filterMask,"display","block"),g.set(this.filterMaskTip,"display","block")):(g.set(this.filterMask,"display","none"),g.set(this.filterMaskTip,"display","none"));if(this.streamLayer&&
this.config){this.shelter.show();var p=f.parse(this.streamLayer._json);"object"===typeof this.config&&"object"===typeof this.config.filterInfo?this.filter.buildByFilterObj(this.streamLayer.url,this.config.filterInfo,this.streamLayer).then(d.hitch(this,function(){this.shelter.hide()})):this.filter.buildByExpr(this.streamLayer.url,"1\x3d1",p).then(d.hitch(this,function(){this.shelter.hide()}))}},getConfig:function(){return{inherited:this._inherited,definitionExpression:this._definitionExpression,name:this.filterNameEditor.get("value"),
filterInfo:this.filter.toJson()}}})})},"widgets/Stream/FilterUtil":function(){define(["jimu/dijit/Filter","dojo/dom-construct"],function(k,d){return{buildFilterInfoFromString:function(f,h,e){var g=new k,q=d.create("div");g.placeAt(q);g.startup();return g.buildByExpr(f.url,h,f).then(function(){return{inherited:!0,definitionExpression:h,name:e,filterInfo:g.toJson()}},function(){return null})}}})},"widgets/Stream/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css",
"dojo/i18n!./nls/strings"],function(){})},"url:widgets/Stream/setting/Setting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"stream-list"\x3e\r\n    \x3cdiv class\x3d"stream-list-head" style\x3d"overflow:hidden;"\x3e\r\n      \x3cdiv class\x3d"jimu-float-leading jimu-widget-title"\x3e${nls.streamLayers}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"stream-list-content"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"streamList"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"single-stream-container" data-dojo-attach-point\x3d"singleStreamContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Stream/setting/StreamSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"detailSection" class\x3d"detail"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"titleContainer"\x3e\r\n        \x3clabel class\x3d"jimu-widget-title"\x3e${nls.streamControls}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"startStopCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"clearPreviousCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"drawPreviousCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"titleContainer"\x3e\r\n        \x3clabel class\x3d"jimu-widget-title"\x3e${nls.streamFilter}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"spatialFilterCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"spatialChoices"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"mapExtentCheckBoxDiv" class\x3d"subCheckboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"subCheckboxContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"drawExtentCheckBoxDiv" class\x3d"jimu-widget-tooltip" style\x3d"display:inline"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"symbolPickerNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterCheckBoxDiv" class\x3d"jimu-widget-tooltip"\r\n             class\x3d"checkboxContainer" style\x3d"display: inline-block"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterIcon" class\x3d"filterIcon disabled jimu-leading-margin05"\r\n          data-dojo-attach-event\x3d"onClick: _showFilter"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Stream/setting/FilterConfig.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"stream-filter-head" style\x3d"overflow:hidden;"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading"\x3e\r\n      \x3cdiv class\x3d"add-with-icon" data-dojo-attach-event\x3d"onclick:_addFilter"\x3e\r\n        \x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"add-label jimu-widget-normal"\x3e${nls.addNew}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"stream-filterList"\x3e\r\n    \x3cdiv class\x3d"stream-filterList-content"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"filterList"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"single-filter-container" data-dojo-attach-point\x3d"singleFilterContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Stream/setting/SingleFilter.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"single-filter-container"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cspan class\x3d"jimu-widget-normal"\x3e${nls.filterName}\x3c/span\x3e\r\n      \x3cinput data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n        data-dojo-props\x3d"required:true"\r\n        data-dojo-attach-point\x3d"filterNameEditor"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"position:relative;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"singleFilterContent"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"filterMask" class\x3d"mask"\x3e\x3c/div\x3e\r\n      \x3cspan class\x3d"jimu-widget-normal mask-tip" data-dojo-attach-point\x3d"filterMaskTip"\x3e\r\n        ${nls.filterReadOnly}\r\n      \x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter"\r\n       data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Stream/setting/css/style.css":".jimu-widget-stream-setting{height: 90%; margin-top: 20px;}.jimu-widget-stream-setting .titleContainer{margin-bottom: 12px;}.jimu-widget-stream-setting .checkboxContainer{margin-bottom: 15px;}.jimu-widget-stream-setting .subCheckboxContainer{margin-bottom: 15px; margin-left: 30px;}.jimu-rtl .jimu-widget-stream-setting .subCheckboxContainer{margin-right: 30px; margin-left: auto;}.jimu-widget-stream-setting .filterIcon{background-image: url(images/edit_icon02.png); width: 16px; height: 16px; cursor: pointer; background-repeat: no-repeat; display: inline-block;}.jimu-widget-stream-setting .filterIcon.disabled{background-image: url(images/edit_icon01.png); cursor: default;}.jimu-widget-stream-setting .stream-list{position: absolute; top: 0; left: 0; width: 235px; height: 100%;}.jimu-rtl .jimu-widget-stream-setting .stream-list{left: auto; right: 0;}.jimu-widget-stream-setting .stream-list-content{position: absolute; width: 100%; top: 30px; bottom: 5px; overflow-y: auto;}.jimu-widget-stream-setting .single-stream-container{position: absolute; left: 265px; right: 0; height: 100%; overflow-y: auto;}.jimu-rtl .jimu-widget-stream-setting .single-stream-container{right: 265px; left: 0;}.stream-filter-head{width: 100%; height: 30px;}.stream-filterList{width: 100%; height: 100%;}.stream-filterList-content{position: absolute; width: 250px; top: 40px; bottom: 5px; overflow-y: auto;}.single-filter-container{margin-left: 140px; margin-top: 5px; overflow-y: auto;}.jimu-rtl .single-filter-container{margin-right: 140px; margin-left: auto;}.jimu-widget-stream-filter .mask{position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #FFFFFF; opacity: 0;}.jimu-widget-stream-filter .mask-tip{color: #FF0000;}",
"*now":function(k){k(['dojo/i18n!*preload*widgets/Stream/setting/nls/Setting*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-style dojo/dom-class dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./Setting.html jimu/BaseWidgetSetting ./utils ./StreamSetting jimu/dijit/SimpleTable jimu/dijit/LoadingShelter".split(" "),function(k,d,f,h,e,g,q,l,m,u,r,p,v){return k([u,q,l],{baseClass:"jimu-widget-stream-setting",templateString:m,postMixInProperties:function(){this.inherited(arguments);d.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);
this.streamList=new v({autoHeight:!1,selectable:!0,fields:[{name:"name",title:this.nls.name,width:"auto",type:"text",editable:!1}]},this.streamList);g.add(this.streamList.domNode,"stream-list-table");e.set(this.streamList.domNode,"height","100%");this.own(h(this.streamList,"row-select",d.hitch(this,this._onStreamLayerSelected)));this.streamList.startup();this.layerList=r.getStreamLayers(this.map);f.forEach(this.layerList,d.hitch(this,function(c,a){var b=null;var n=this.streamList.addRow({name:r.getStreamLayerName(c.url)});
if(n.success){var t=n.tr;this.config&&this.config.streamLayers&&0<this.config.streamLayers.length&&f.some(this.config.streamLayers,d.hitch(this,function(w){if(w.layerId===c.id)return b=w,!0}));this._createSingleStreamSetting(t,c,b)}0===a&&this.streamList.selectRow(t)}))},getConfig:function(){var c,a={streamLayers:[]};f.forEach(this.streamList.getRows(),function(b){c=b.streamLayerSetting;a.streamLayers.push(c.getConfig())});return a},_onStreamLayerSelected:function(c){var a;this.currentTR?this.currentTR!==
c&&((a=this.currentTR.streamLayerSetting)&&e.set(a.domNode,"display","none"),this.currentTR=c,(a=this.currentTR.streamLayerSetting)&&e.set(a.domNode,"display","block")):(this.currentTR=c,(a=this.currentTR.streamLayerSetting)&&e.set(a.domNode,"display","block"))},_createSingleStreamSetting:function(c,a,b){var n=this.streamList.getRowData(c);a=new p({map:this.map,nls:this.nls,config:b,layerName:n?n.name:"",streamLayer:a});a.placeAt(this.singleStreamContainer);c.streamLayerSetting=a;e.set(a.domNode,
"display","none")}})});