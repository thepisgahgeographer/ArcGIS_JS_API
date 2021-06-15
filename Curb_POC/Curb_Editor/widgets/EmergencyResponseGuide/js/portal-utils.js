// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["esri/request","dojo/json"],function(d,e){return{getFeatureServiceParams:function(b,a){return{name:b,serviceDescription:"",hasStaticData:!1,maxRecordCount:1E3,supportedQueryFormats:"JSON",capabilities:"Create,Delete,Query,Update,Editing",tags:"GRG",description:"",copyrightText:"",spatialReference:{wkid:102100},initialExtent:{xmin:a.extent.xmin,ymin:a.extent.ymin,xmax:a.extent.xmax,ymax:a.extent.ymax,spatialReference:{wkid:102100}},allowGeometryUpdates:!0,units:"esriMeters",xssPreventionInfo:{xssPreventionEnabled:!0,
xssPreventionRule:"InputOnly",xssInputRule:"rejectInvalid"}}},getLayerParams:function(b,a,c){return{layers:[{adminLayerInfo:{geometryField:{name:"Shape"},xssTrustedFields:""},id:0,name:b,type:"Feature Layer",displayField:"",description:"",tags:"GRG",copyrightText:"",defaultVisibility:!0,ownershipBasedAccessControlForFeatures:{allowOthersToQuery:!1,allowOthersToDelete:!1,allowOthersToUpdate:!1},relationships:[],isDataVersioned:!1,supportsCalculate:!0,supportsAttachmentsByUploadId:!0,supportsRollbackOnFailureParameter:!0,
supportsStatistics:!0,supportsAdvancedQueries:!0,supportsValidateSql:!0,supportsCoordinatesQuantization:!0,supportsApplyEditsWithGlobalIds:!0,advancedQueryCapabilities:{supportsPagination:!0,supportsQueryWithDistance:!0,supportsReturningQueryExtent:!0,supportsStatistics:!0,supportsOrderBy:!0,supportsDistinct:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsReturningGeometryCentroid:!0},useStandardizedQueries:!1,geometryType:"esriGeometryPolygon",minScale:0,maxScale:0,extent:a.extent,
drawingInfo:{renderer:c.toJson(),transparency:0},allowGeometryUpdates:!0,hasAttachments:!1,htmlPopupType:"esriServerHTMLPopupTypeNone",hasM:!1,hasZ:!1,objectIdField:"OBJECTID",globalIdField:"",typeIdField:"",fields:[{name:"OBJECTID",type:"esriFieldTypeOID",actualType:"int",alias:"OBJECTID",sqlType:"sqlTypeOther",nullable:!1,editable:!1,domain:null,defaultValue:null},{name:"type",type:"esriFieldTypeString",alias:"type",actualType:"nvarchar",nullable:!0,editable:!0,domain:null,defaultValue:null,sqlType:"sqlTypeNVarchar",
length:256}],indexes:[],types:[],templates:[{name:"New Feature",description:"",drawingTool:"esriFeatureEditToolPolygon",prototype:{attributes:{}}}],supportedQueryFormats:"JSON",hasStaticData:!1,maxRecordCount:1E4,standardMaxRecordCount:4E3,tileMaxRecordCount:4E3,maxRecordCountFactor:1,exceedsLimitFactor:1,capabilities:"Query,Editing,Create,Update,Delete"}]}},isNameAvailable:function(b,a,c){return d({url:b,content:{name:c,type:"Feature Service",token:a,f:"json"},handleAs:"json",callbackParamName:"callback"},
{usePost:!0})},createFeatureService:function(b,a,c){return d({url:b,content:{f:"json",token:a,typeKeywords:"ArcGIS Server,Data,Feature Access,Feature Service,Service,Hosted Service",createParameters:e.stringify(c),outputType:"featureService"},handleAs:"json",callbackParamName:"callback"},{usePost:!0})},addDefinitionToService:function(b,a,c){return d({url:b,content:{token:a,addToDefinition:e.stringify(c),f:"json"},handleAs:"json",callbackParamName:"callback"},{usePost:!0})}}});