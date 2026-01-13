System.register("chunks:///_virtual/MultiNumberTexture.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Common.ts"],(function(e){var t,n,r,i,a,u,o,s,c,l,p,f,h,b,d,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.asyncToGenerator,u=e.regeneratorRuntime},function(e){o=e.cclegacy,s=e._decorator,c=e.resources,l=e.Prefab,p=e.Texture2D,f=e.Material,h=e.Component,b=e.instantiate,d=e.MeshRenderer},function(e){m=e.Common}],execute:function(){var g,P,x,y,M,v;o._RF.push({},"cb0f7x0nJVPe6WrIQW1hDep","MultiNumberTexture",void 0);var N=s.ccclass,w=s.property;e("MultiNumberTexture",N("MultiNumberTexture")((x=t((P=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a))||this,r(t,"number",x,i(t)),r(t,"digitSpacing",y,i(t)),r(t,"texturePath",M,i(t)),r(t,"matPath",v,i(t)),t.prefabPath="3dfont/Plane",t.planePrefab=null,t.numDept=.002,t.digitNodes=[],t}n(t,e);var o=t.prototype;return o.start=function(){this.updateMultiNumber()},o.setNum=function(e){this.number=m.ChangeMoneyFormat(e,3),this.updateMultiNumber()},o.updateMultiNumber=function(){var e=a(u().mark((function e(){var t,n,r,i,a,o,s,c,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadPlanePrefab(this.prefabPath);case 2:if(this.planePrefab=e.sent,null!=this.planePrefab){e.next=6;break}return console.error("Plane 加载失败"),e.abrupt("return");case 6:if(this.digitNodes.forEach((function(e){return e.destroy()})),this.digitNodes.length=0,0!==(t=this.number.toString().split("")).length){e.next=11;break}return e.abrupt("return");case 11:n=-(t.length-1)*this.digitSpacing/2,r=0;case 13:if(!(r<t.length)){e.next=40;break}return"."==(i=t[r])&&(i="JUHAO"),a=i,(o=b(this.planePrefab)).name="digit_"+a,o.parent=this.node,o.setPosition(n+r*this.digitSpacing,0,this.numDept),(s=o.getComponent(d))||(s=o.addComponent(d)),e.prev=23,e.next=26,this.loadTextureAsync(""+this.texturePath+a+"/texture");case 26:return c=e.sent,e.next=29,this.loadMaterialAsync(c);case 29:l=e.sent,s.materials=[l],e.next=36;break;case 33:e.prev=33,e.t0=e.catch(23),console.error("数字 "+a+" 加载失败",e.t0);case 36:this.digitNodes.push(o);case 37:r++,e.next=13;break;case 40:case"end":return e.stop()}}),e,this,[[23,33]])})));return function(){return e.apply(this,arguments)}}(),o.loadPlanePrefab=function(e){return new Promise((function(t,n){c.load(e,l,(function(e,r){e?n(e):t(r)}))}))},o.loadTextureAsync=function(e){return new Promise((function(t,n){c.load(e,p,(function(e,r){e?n(e):t(r)}))}))},o.loadMaterialAsync=function(e){var t=this;return new Promise((function(n,r){c.load(t.matPath,f,(function(t,i){if(t)r(t);else{var a=new f;a.copy(i),a.setProperty("mainTexture",e),n(a)}}))}))},o.onPropertyChanged=function(){this.updateMultiNumber()},t}(h)).prototype,"number",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"1"}}),y=t(P.prototype,"digitSpacing",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.008}}),M=t(P.prototype,"texturePath",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"3dfont/number/"}}),v=t(P.prototype,"matPath",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"3dfont/NumberMat"}}),g=P))||g);o._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./MultiNumberTexture.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});