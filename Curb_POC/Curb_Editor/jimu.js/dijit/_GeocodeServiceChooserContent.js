// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","./_BasicServiceChooserContent","./GeocodeServiceBrowser"],function(a,b,c){return a([b],{baseClass:"jimu-geocode-service-chooser-content",_examples:["http://myserver/arcgis/rest/services","http://myserver/arcgis/rest/services/folder","http://myserver/arcgis/rest/services/myservice/GeocodeServer"],_createServiceBrowser:function(d){return new c(d)}})});