!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.schedular=t():e.schedular=t()}(this,(function(){return e={579:e=>{function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.schedularIds={}}var o,r;return o=e,(r=[{key:"shedule",value:function(e,t,o){console.log("Hey I am scheduled");var r=setTimeout((function(){e.apply(this,t)}),o);return this.schedularIds[r]=r,console.log("schedule",this.schedularIds),r}},{key:"delete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e)throw Error("Id not defined");clearTimeout(e),delete this.schedularIds[e]}},{key:"showSchedule",value:function(){return this.schedularIds}}])&&t(o.prototype,r),e}();e.exports=o}},t={},function o(r){var n=t[r];if(void 0!==n)return n.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,o),u.exports}(579);var e,t}));