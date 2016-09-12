'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart(string) {
    _classCallCheck(this, TerminalPart);

    this.string = string;
  }

  _createClass(TerminalPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          index = context.index,
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            string = this.string,
            stringIndex = inputSubstring.indexOf(string);

        if (stringIndex === 0) {
          var stringLength = string.length;

          context.index += stringLength;

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, Parts) {
      var terminalPart = null,
          terminalRegExp = /'([^']+)'/,
          matches = symbol.match(terminalRegExp);

      if (matches !== null) {
        var string = matches[1];

        terminalPart = new TerminalPart(string);
      }

      return terminalPart;
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJzdHJpbmciLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsInN0cmluZ0luZGV4IiwiaW5kZXhPZiIsInN0cmluZ0xlbmd0aCIsInN5bWJvbCIsIlBhcnRzIiwidGVybWluYWxQYXJ0IiwidGVybWluYWxSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxRQUFRSCxRQUFRRyxLQURwQjtBQUFBLFVBRUlDLGNBQWNMLE1BQU1NLE1BRnhCOztBQUlBLFVBQUlGLFFBQVFDLFdBQVosRUFBeUI7QUFDdkIsWUFBSUUsaUJBQWlCUCxNQUFNUSxNQUFOLENBQWFKLEtBQWIsQ0FBckI7QUFBQSxZQUNJTCxTQUFTLEtBQUtBLE1BRGxCO0FBQUEsWUFFSVUsY0FBY0YsZUFBZUcsT0FBZixDQUF1QlgsTUFBdkIsQ0FGbEI7O0FBSUEsWUFBSVUsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGNBQUlFLGVBQWVaLE9BQU9PLE1BQTFCOztBQUVBTCxrQkFBUUcsS0FBUixJQUFpQk8sWUFBakI7O0FBRUFSLG1CQUFTLElBQVQ7QUFDRDtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7OytCQUVpQlMsTSxFQUFRQyxLLEVBQU87QUFDL0IsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLGlCQUFpQixXQURyQjtBQUFBLFVBRUlDLFVBQVVKLE9BQU9LLEtBQVAsQ0FBYUYsY0FBYixDQUZkOztBQUlBLFVBQUlDLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSWpCLFNBQVNpQixRQUFRLENBQVIsQ0FBYjs7QUFFQUYsdUJBQWUsSUFBSWhCLFlBQUosQ0FBaUJDLE1BQWpCLENBQWY7QUFDRDs7QUFFRCxhQUFPZSxZQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCckIsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgcGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKSB7XG4gICAgdmFyIHBhcnNlZCA9IGZhbHNlLFxuICAgICAgICBpbmRleCA9IGNvbnRleHQuaW5kZXgsXG4gICAgICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4IDwgaW5wdXRMZW5ndGgpIHtcbiAgICAgIHZhciBpbnB1dFN1YnN0cmluZyA9IGlucHV0LnN1YnN0cihpbmRleCksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgc3RyaW5nSW5kZXggPSBpbnB1dFN1YnN0cmluZy5pbmRleE9mKHN0cmluZyk7XG5cbiAgICAgIGlmIChzdHJpbmdJbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICAgICAgICBjb250ZXh0LmluZGV4ICs9IHN0cmluZ0xlbmd0aDtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIFBhcnRzKSB7XG4gICAgdmFyIHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgIHRlcm1pbmFsUmVnRXhwID0gLycoW14nXSspJy8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBtYXRjaGVzWzFdO1xuXG4gICAgICB0ZXJtaW5hbFBhcnQgPSBuZXcgVGVybWluYWxQYXJ0KHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydDtcbiJdfQ==