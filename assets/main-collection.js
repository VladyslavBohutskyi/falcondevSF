"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _callSuper(t,e,r){return e=_getPrototypeOf(e),_possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(e,r||[],_getPrototypeOf(t).constructor):e.apply(t,r))}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){var o;return _isNativeReflectConstruct()?Reflect.construct.apply(null,arguments):((o=[null]).push.apply(o,e),e=new(t.bind.apply(t,o)),r&&_setPrototypeOf(e,r.prototype),e)}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function o(n,i,u){function c(e,t){if(!i[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(f)return f(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},n[e][0].call(r.exports,function(t){return c(n[e][1][t]||t)},r,r.exports,o,n,i,u)}return i[e].exports}for(var f="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,r){customElements.get("main-collection")||customElements.define("main-collection",function(){function t(){return _classCallCheck(this,t),_callSuper(this,t)}return _inherits(t,_wrapNativeSuper(HTMLElement)),_createClass(t)}())},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi1jb2xsZWN0aW9uLmpzIiwibWFpbi1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsImN1c3RvbUVsZW1lbnRzIiwiZ2V0IiwiZGVmaW5lIiwiTWFpbkNvbGxlY3Rpb24iLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl93cmFwTmF0aXZlU3VwZXIiLCJIVE1MRWxlbWVudCIsIl9jcmVhdGVDbGFzcyJdLCJtYXBwaW5ncyI6Imt0R0FBQSxDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxHQUFBLENBQUFKLEVBQUFHLEdBQUEsQ0FBQSxHQUFBLENBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLFlBQUEsT0FBQUMsU0FBQUEsUUFBQSxHQUFBLENBQUFGLEdBQUFDLEVBQUEsT0FBQUEsRUFBQUYsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBSSxFQUFBLE9BQUFBLEVBQUFKLEVBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQUssRUFBQSxJQUFBQyxNQUFBLHVCQUFBTixFQUFBLEdBQUEsR0FBQU8sS0FBQSxtQkFBQUYsQ0FBQSxDQUFBRyxFQUFBWCxFQUFBRyxHQUFBLENBQUFTLFFBQUEsRUFBQSxFQUFBYixFQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVBQUFDLFFBQUEsU0FBQWQsR0FBQSxPQUFBSSxFQUFBSCxFQUFBSSxHQUFBLEdBQUFMLElBQUFBLENBQUEsQ0FBQSxFQUFBYSxFQUFBQSxFQUFBQyxRQUFBZCxFQUFBQyxFQUFBQyxFQUFBQyxDQUFBLENBQUEsQ0FBQSxPQUFBRCxFQUFBRyxHQUFBUyxPQUFBLENBQUEsSUFBQSxJQUFBTCxFQUFBLFlBQUEsT0FBQUQsU0FBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxDQUFBLEdBQUFELEVBQUFELEVBQUFFLEVBQUEsRUFBQSxPQUFBRCxDQUFBLEVBQUEsQ0FBQWEsRUFBQSxDQUFBLFNBQUFULEVBQUFVLEVBQUFKLEdDQUFLLGVBQUFDLElBQUEsaUJBQUEsR0FDQUQsZUFBQUUsT0FBQSxrQkFBQSxXQUNBLFNBQUFDLElBQUEsT0FBQUMsZ0JBQUFDLEtBQUFGLENBQUEsRUFBQUcsV0FBQUQsS0FBQUYsQ0FBQSxDQUVBLENBS0EsT0FBQUksVUFBQUosRUFBQUssaUJBUkFDLFdBQUEsQ0FRQSxFQUFBQyxhQUFBUCxDQUFBLENBQUEsRUFSQSxDQVNBLENDR0EsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUiLCJmaWxlIjoibWFpbi1jb2xsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdtYWluLWNvbGxlY3Rpb24nKSkge1xyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYWluLWNvbGxlY3Rpb24nLCBjbGFzcyBNYWluQ29sbGVjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICBcclxuICAgIC8vICAgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxyXG4gICAgfSlcclxuICB9IiwiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnbWFpbi1jb2xsZWN0aW9uJykpIHtcclxuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWFpbi1jb2xsZWN0aW9uJywgY2xhc3MgTWFpbkNvbGxlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgXHJcbiAgICAvLyAgIHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcclxuICAgIH0pXHJcbiAgfVxufSx7fV19LHt9LFsxXSlcblxuIl19