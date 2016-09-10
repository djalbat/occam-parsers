(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  CommonParserExample: require('./lib/commonParserExample'),
  GallinaParserExample: require('./lib/gallinaParserExample'),
  FlorenceParserExample: require('./lib/florenceParserExample')
};

},{"./lib/commonParserExample":2,"./lib/florenceParserExample":3,"./lib/gallinaParserExample":4}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonParserExample = function () {
  function CommonParserExample() {
    _classCallCheck(this, CommonParserExample);
  }

  _createClass(CommonParserExample, null, [{
    key: 'run',
    value: function run() {
      console.log('run');
    }
  }]);

  return CommonParserExample;
}();

module.exports = CommonParserExample;

},{}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlorenceParserEExample = function FlorenceParserEExample() {
  _classCallCheck(this, FlorenceParserEExample);
};

module.exports = FlorenceParserEExample;

},{}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GallinaParserExample = function GallinaParserExample() {
  _classCallCheck(this, GallinaParserExample);
};

module.exports = GallinaParserExample;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9pbmRleC5qcyIsImV4YW1wbGVzL2VzNi9jb21tb25QYXJzZXJFeGFtcGxlLmpzIiwiZXhhbXBsZXMvZXM2L2Zsb3JlbmNlUGFyc2VyRXhhbXBsZS5qcyIsImV4YW1wbGVzL2VzNi9nYWxsaW5hUGFyc2VyRXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7Ozs7OztJQUVNLG1COzs7Ozs7OzBCQUNTO0FBQ1gsY0FBUSxHQUFSLENBQVksS0FBWjtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsbUJBQWpCOzs7QUNSQTs7OztJQUVNLHNCOzs7O0FBSU4sT0FBTyxPQUFQLEdBQWlCLHNCQUFqQjs7O0FDTkE7Ozs7SUFFTSxvQjs7OztBQUlOLE9BQU8sT0FBUCxHQUFpQixvQkFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ29tbW9uUGFyc2VyRXhhbXBsZTogcmVxdWlyZSgnLi9saWIvY29tbW9uUGFyc2VyRXhhbXBsZScpLFxuICBHYWxsaW5hUGFyc2VyRXhhbXBsZTogcmVxdWlyZSgnLi9saWIvZ2FsbGluYVBhcnNlckV4YW1wbGUnKSxcbiAgRmxvcmVuY2VQYXJzZXJFeGFtcGxlOiByZXF1aXJlKCcuL2xpYi9mbG9yZW5jZVBhcnNlckV4YW1wbGUnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29tbW9uUGFyc2VyRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc29sZS5sb2coJ3J1bicpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXJFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlckVFeGFtcGxlIHtcbiAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXJFRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR2FsbGluYVBhcnNlckV4YW1wbGUge1xuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hUGFyc2VyRXhhbXBsZTtcbiJdfQ==
