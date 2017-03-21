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
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var epsilonPart = null;

      var found = symbol === 'ε';

      if (found) {
        epsilonPart = new EpsilonPart();
      }

      return epsilonPart;
    }
  }]);

  return EpsilonPart;
}();

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXBzaWxvblBhcnQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwiZXBzaWxvblRlcm1pbmFsTm9kZSIsInN5bWJvbCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImVwc2lsb25QYXJ0IiwiZm91bmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCQyxRQUFRLG9DQUFSLENBQTVCOztJQUVNQyxXOzs7Ozs7OzBCQUNFQyxPLEVBQVNDLFksRUFBYztBQUMzQixVQUFNQyxzQkFBc0IsSUFBSUwsbUJBQUosRUFBNUI7O0FBRUEsYUFBT0ssbUJBQVA7QUFDRDs7OytCQUVpQkMsTSxFQUFRQyxxQixFQUF1QkgsWSxFQUFjO0FBQzdELFVBQUtJLGNBQWMsSUFBbkI7O0FBRUEsVUFBTUMsUUFBU0gsV0FBVyxHQUExQjs7QUFFQSxVQUFJRyxLQUFKLEVBQVc7QUFDVEQsc0JBQWMsSUFBSU4sV0FBSixFQUFkO0FBQ0Q7O0FBRUQsYUFBT00sV0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQlQsV0FBakIiLCJmaWxlIjoiZXBzaWxvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24nKTtcblxuY2xhc3MgRXBzaWxvblBhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBlcHNpbG9uVGVybWluYWxOb2RlID0gbmV3IEVwc2lsb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJldHVybiBlcHNpbG9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCAgZXBzaWxvblBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25QYXJ0OyJdfQ==