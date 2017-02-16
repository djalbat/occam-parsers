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
    value: function parse(context, productions, noWhitespace) {
      var epsilonTerminalNode = new EpsilonTerminalNode(),
          nodes = [epsilonTerminalNode];

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var epsilonPart = null,
          found = symbol === 'ε';

      if (found) {
        epsilonPart = new EpsilonPart();
      }

      return epsilonPart;
    }
  }]);

  return EpsilonPart;
}();

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXBzaWxvblBhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJlcHNpbG9uVGVybWluYWxOb2RlIiwibm9kZXMiLCJzeW1ib2wiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJlcHNpbG9uUGFydCIsImZvdW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHNCQUFzQkMsUUFBUSxvQ0FBUixDQUExQjs7SUFFTUMsVzs7Ozs7OzswQkFDRUMsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxzQkFBc0IsSUFBSU4sbUJBQUosRUFBMUI7QUFBQSxVQUNJTyxRQUFRLENBQUNELG1CQUFELENBRFo7O0FBR0EsYUFBT0MsS0FBUDtBQUNEOzs7K0JBRWlCQyxNLEVBQVFDLHFCLEVBQXVCSixZLEVBQWM7QUFDN0QsVUFBSUssY0FBYyxJQUFsQjtBQUFBLFVBQ0lDLFFBQVNILFdBQVcsR0FEeEI7O0FBR0EsVUFBSUcsS0FBSixFQUFXO0FBQ1RELHNCQUFjLElBQUlSLFdBQUosRUFBZDtBQUNEOztBQUVELGFBQU9RLFdBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJYLFdBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBFcHNpbG9uUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgZXBzaWxvblRlcm1pbmFsTm9kZSA9IG5ldyBFcHNpbG9uVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVzID0gW2Vwc2lsb25UZXJtaW5hbE5vZGVdO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciBlcHNpbG9uUGFydCA9IG51bGwsXG4gICAgICAgIGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25QYXJ0OyJdfQ==