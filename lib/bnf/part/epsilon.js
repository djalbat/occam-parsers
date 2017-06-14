'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

var EpsilonPart = function () {
  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);
  }

  _createClass(EpsilonPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var epsilonTerminalNode = new EpsilonTerminalNode();

      return epsilonTerminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = 'ε';

      return string;
    }
  }]);

  return EpsilonPart;
}();

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXBzaWxvblBhcnQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwiZXBzaWxvblRlcm1pbmFsTm9kZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxzQkFBc0JDLFFBQVEsb0NBQVIsQ0FBNUI7O0lBRU1DLFc7Ozs7Ozs7MEJBQ0VDLE8sRUFBU0MsWSxFQUFjO0FBQzNCLFVBQU1DLHNCQUFzQixJQUFJTCxtQkFBSixFQUE1Qjs7QUFFQSxhQUFPSyxtQkFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxTQUFTLEdBQWY7O0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQk4sV0FBakIiLCJmaWxlIjoiZXBzaWxvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24nKTtcblxuY2xhc3MgRXBzaWxvblBhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBlcHNpbG9uVGVybWluYWxOb2RlID0gbmV3IEVwc2lsb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJldHVybiBlcHNpbG9uVGVybWluYWxOb2RlO1xuICB9XG4gIFxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSAnzrUnO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUGFydDtcbiJdfQ==