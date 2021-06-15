// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/setting/FieldPicker.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableArea" class\x3d"esriCTLayerFieldSelector"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"btnAddField" class\x3d"esriCTBtnAddSection"\x3e\r\n      \x3cspan class\x3d"esriCTBtnAddIcon"\x3e\x3c/span\x3e\r\n      \x3cspan class\x3d"esriCTBtnAddLabel" data-dojo-attach-point\x3d"addFieldLabel"\x3e\r\n        ${nls.analysisTab.addFieldsLabel}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTGroupByFieldContainer"\x3e\r\n      \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"groupByFieldCheckBox"\r\n        class\x3d"esriCTGroupByFieldCheckBox" checked\x3d"true"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTGroupByFieldColumnLabel"\x3e\r\n        ${nls.analysisTab.allowGroupingLabel}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTHint"\x3e${nls.analysisTab.groupingHintDescription}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTHidden esriCTNoLayersOrFieldsForAnalysisLabel" data-dojo-attach-point\x3d"lblNoValidFields"\x3e\r\n      ${nls.analysisTab.noValidFieldsForAnalysis}\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fieldTable"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox dojo/_base/array dojo/_base/lang dojo/_base/html dojo/on jimu/BaseWidget dojo/text!./FieldPicker.html dojo/Evented jimu/dijit/SimpleTable dojo/query dojo/dom-class jimu/utils jimu/dijit/CheckBox".split(" "),function(k,l,m,n,f,e,p,g,q,r,t,u,v,h,w){return k([q,l,t],{templateString:r,baseClass:"jimu-widget-screening-setting",_fieldsTable:null,_entireFieldsArr:[],_selectedFieldsArr:[],_entireFieldObj:{},
_configuredField:null,_configuredLabel:null,constructor:function(a){this._fieldsTable=null;this._entireFieldsArr=[];this._selectedFieldsArr=[];this._entireFieldObj={};this._configuredLabel=this._configuredField=null;e.mixin(this,a)},postMixInProperties:function(){this.nls.common={};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this._init()},_init:function(){this._clearData();this._addValidFields();this._createFieldsTable();this._attachEventsToElement();
this._displayPreviousConfiguredFields();this._setPreviousGroupByFieldCheckboxStatus()},_clearData:function(){this._entireFieldsArr=[];this._selectedFieldsArr=[]},_displayPreviousConfiguredFields:function(){var a;if(this.selectedFields)for(a in this.selectedFields)this._configuredField=a,this._configuredLabel=this.selectedFields[a].label,this.btnAddField.click()},_addValidFields:function(){var a;var c="esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate".split(" ");
var d=["string","number","date"];f.forEach(this.featureLayer.fields,e.hitch(this,function(b){this._entireFieldObj[b.name]=b;-1<c.indexOf(b.type)&&(this._entireFieldsArr.push(b.name),this._entireFieldObj[b.name]=e.clone(b),this.selectedFields&&this.selectedFields[b.name]&&(this._entireFieldObj[b.name].label=this.selectedFields[b.name].label))}));this.layerInfo&&this.layerInfo.originOperLayer&&this.layerInfo.originOperLayer.popupInfo?a=this.layerInfo.originOperLayer.popupInfo:this.layerInfo&&this.layerInfo.getPopupInfo&&
this.layerInfo.getPopupInfo()&&(a=this.layerInfo.getPopupInfo());a&&a.expressionInfos&&f.forEach(a.expressionInfos,e.hitch(this,function(b){b=e.clone(b);b.name="expression/"+b.name;this._entireFieldObj[b.name]=b;-1<d.indexOf(b.returnType)&&(this._entireFieldsArr.push(b.name),this._entireFieldObj[b.name].alias=b.title+" {"+b.name+"}",this.selectedFields&&this.selectedFields[b.name]&&(this._entireFieldObj[b.name].label=this.selectedFields[b.name].label))}));0===this._entireFieldsArr.length&&this._disableAddFieldButton()},
_createFieldsTable:function(){this._fieldsTable=new u({fields:[{name:"layer",title:this.nls.analysisTab.addFieldsNameTitle,"class":"label",type:"empty",width:"40%"},{name:"field",title:this.nls.common.label,type:"empty",editable:"true",width:"40%"},{name:"actions",title:this.nls.common.actions,"class":"actions",type:"actions",actions:["up","down","delete"],width:"20%"}]});this._fieldsTable.placeAt(this.fieldTable);p.setStyle(this._fieldsTable.domNode,{height:"100%"});this._fieldsTable.startup()},
_attachEventsToElement:function(){this.own(g(this.btnAddField,"click",e.hitch(this,function(){if(!h.contains(this.btnAddField,"esriCTDisabled")){var a=this._getDistinctFields(this._entireFieldsArr,this._selectedFieldsArr);this._addFieldsRow(a)}})));this.own(g(this._fieldsTable,"row-delete",e.hitch(this,function(a){this._deleteFieldRow(a)})))},_addFieldsRow:function(a){var c=this._fieldsTable.addRow({});if(c.success&&c.tr){c=c.tr;var d=v(".simple-table-cell",c);var b=d[0];d=d[1];this._addFieldDropdown(a,
b,c);this._addLabelTextbox(d,c)}},_deleteFieldRow:function(a){h.remove(this.btnAddField,"esriCTDisabled");var c=this._selectedFieldsArr.indexOf(a.fieldDropdownInstance.value);-1<c&&this._selectedFieldsArr.splice(c,1);this._addSelectedFieldInOtherDropdown(a.fieldDropdownInstance.value,null)},_addFieldDropdown:function(a,c,d){a=this._getDistinctFieldsOptionsObj(a);a=new m({"class":"esriCTFieldChooserDropdown",options:a});a.placeAt(c);a.startup();this._configuredField&&a.set("value",this._configuredField);
d.fieldDropdownInstance=a;this.own(g(a,"change",e.hitch(this,function(b){var x=this._selectedFieldsArr[d.rowIndex];this._selectedFieldsArr[d.rowIndex]=b;this._addSelectedFieldInOtherDropdown(x,b);this._removeSelectedFieldFromOtherDropdown(b)})));this._selectedFieldsArr.push(a.value);this._removeSelectedFieldFromOtherDropdown(a.value);this._disableAddFieldButton()},_disableAddFieldButton:function(){this._selectedFieldsArr.length===this._entireFieldsArr.length&&h.add(this.btnAddField,"esriCTDisabled")},
_addLabelTextbox:function(a,c){var d=new n({"class":"esriCTFieldValidationTextBox"});d.placeAt(a);d.startup();this._configuredLabel&&(d.set("value",this._configuredLabel),this._configuredLabel=null);c.fieldLabelInstance=d},_getDistinctFieldsOptionsObj:function(a){var c=[];f.forEach(a,e.hitch(this,function(d){c.push({label:this._entireFieldObj[d].alias||this._entireFieldObj[d].name,value:d})}));return c},_removeSelectedFieldFromOtherDropdown:function(a){var c=this._fieldsTable.getRows();f.forEach(c,
e.hitch(this,function(d){a!==d.fieldDropdownInstance.value&&d.fieldDropdownInstance.removeOption(a)}))},_addSelectedFieldInOtherDropdown:function(a,c){var d=this._fieldsTable.getRows();f.forEach(d,e.hitch(this,function(b){c!==b.fieldDropdownInstance.value&&b.fieldDropdownInstance.addOption({label:this._entireFieldObj[a].alias,value:a})}))},okButtonClicked:function(){var a={};var c={};var d=this._fieldsTable.getRows();0===d.length?this.selectedFields=null:(f.forEach(d,e.hitch(this,function(b){this._entireFieldObj[b.fieldDropdownInstance.value].label=
w.stripHTML(e.trim(b.fieldLabelInstance.value));a[b.fieldDropdownInstance.value]=this._entireFieldObj[b.fieldDropdownInstance.value]})),this.selectedFields=a);c.selectedFields=this.selectedFields;c.groupbyfieldCheckBoxStatus=this.groupByFieldCheckBox.get("checked");return c},_getDistinctFields:function(a,c){return a.filter(function(d){return 0>c.indexOf(d)})},_setPreviousGroupByFieldCheckboxStatus:function(){""!==this.groupbyfieldCheckBoxStatus&&null!==this.groupbyfieldCheckBoxStatus&&void 0!==this.groupbyfieldCheckBoxStatus&&
this.groupByFieldCheckBox.setValue(this.groupbyfieldCheckBoxStatus)}})});