// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/array","jimu/PanelManager"],function(e,d,f){return e(null,{constructor:function(){this.panelManager=f.getInstance()},postCreate:function(){this.controlledWidgets||(this.controlledWidgets="all");this.controlledGroups||(this.controlledGroups="all")},getOpenedIds:function(){},setOpenedIds:function(a){},getConfigById:function(a){for(var b=this.getAllConfigs(),c=0;c<b.length;c++)if(b[c].id===a)return b[c]},getAllConfigs:function(){var a=[];a=a.concat(this.getWidgetConfigs(),
this.getGroupConfigs());a=d.filter(a,function(b){return b.visible});return a.sort(function(b,c){return b.index-c.index})},getAllConfigsIncludeInvisible:function(){var a=[];a=a.concat(this.getWidgetConfigs(),this.getGroupConfigs());return a.sort(function(b,c){return b.index-c.index})},isControlled:function(a){return d.some(this.getAllConfigsIncludeInvisible(),function(b){return b.id===a})},widgetIsControlled:function(a){return d.some(this.getAllConfigsIncludeInvisible(),function(b){return b.id===a?
!0:d.some(b.widgets,function(c){return c.id===a})})},getGroupConfigs:function(){var a=[];if(!this.appConfig.widgetPool)return a;this.appConfig.widgetPool.groups&&d.forEach(this.appConfig.widgetPool.groups,function(b){this.controlledGroups&&(Array.isArray(this.controlledGroups)?-1<this.controlledGroups.indexOf(b.id)&&a.push(b):"all"===this.controlledGroups&&a.push(b))},this);return a},getWidgetConfigs:function(){var a=[];if(!this.appConfig.widgetPool)return a;this.appConfig.widgetPool.widgets&&d.forEach(this.appConfig.widgetPool.widgets,
function(b){this.controlledWidgets&&(Array.isArray(this.controlledWidgets)?-1<this.controlledWidgets.indexOf(b.id)&&a.push(b):"all"===this.controlledWidgets&&a.push(b))},this);return a}})});