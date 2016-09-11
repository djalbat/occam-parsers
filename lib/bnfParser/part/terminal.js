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
    key: 'fromSymbols',
    value: function fromSymbols(symbols, Parts) {
      var terminalPart = null,
          firstSymbol = first(symbols),
          symbol = firstSymbol,
          ///
      terminalRegExp = /'([^']+)'/,
          matches = symbol.match(terminalRegExp);

      if (matches !== null) {
        var string = matches[1];

        symbols.shift();

        terminalPart = new TerminalPart(string);
      }

      return terminalPart;
    }
  }]);

  return TerminalPart;
}();

module.exports = TerminalPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJzdHJpbmciLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsInN0cmluZ0luZGV4IiwiaW5kZXhPZiIsInN0cmluZ0xlbmd0aCIsInN5bWJvbHMiLCJQYXJ0cyIsInRlcm1pbmFsUGFydCIsImZpcnN0U3ltYm9sIiwiZmlyc3QiLCJzeW1ib2wiLCJ0ZXJtaW5hbFJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNoaWZ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQWI7QUFBQSxVQUNJQyxRQUFRSCxRQUFRRyxLQURwQjtBQUFBLFVBRUlDLGNBQWNMLE1BQU1NLE1BRnhCOztBQUlBLFVBQUlGLFFBQVFDLFdBQVosRUFBeUI7QUFDdkIsWUFBSUUsaUJBQWlCUCxNQUFNUSxNQUFOLENBQWFKLEtBQWIsQ0FBckI7QUFBQSxZQUNJTCxTQUFTLEtBQUtBLE1BRGxCO0FBQUEsWUFFSVUsY0FBY0YsZUFBZUcsT0FBZixDQUF1QlgsTUFBdkIsQ0FGbEI7O0FBSUEsWUFBSVUsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLGNBQUlFLGVBQWVaLE9BQU9PLE1BQTFCOztBQUVBTCxrQkFBUUcsS0FBUixJQUFpQk8sWUFBakI7O0FBRUFSLG1CQUFTLElBQVQ7QUFDRDtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVrQlMsTyxFQUFTQyxLLEVBQU87QUFDakMsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLGNBQWNDLE1BQU1KLE9BQU4sQ0FEbEI7QUFBQSxVQUVJSyxTQUFTRixXQUZiO0FBQUEsVUFFMEI7QUFDdEJHLHVCQUFpQixXQUhyQjtBQUFBLFVBSUlDLFVBQVVGLE9BQU9HLEtBQVAsQ0FBYUYsY0FBYixDQUpkOztBQU1BLFVBQUlDLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSXBCLFNBQVNvQixRQUFRLENBQVIsQ0FBYjs7QUFFQVAsZ0JBQVFTLEtBQVI7O0FBRUFQLHVCQUFlLElBQUloQixZQUFKLENBQWlCQyxNQUFqQixDQUFmO0FBQ0Q7O0FBRUQsYUFBT2UsWUFBUDtBQUNEOzs7Ozs7QUFHSFEsT0FBT0MsT0FBUCxHQUFpQnpCLFlBQWpCOztBQUVBLFNBQVNrQixLQUFULENBQWVRLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIGluZGV4ID0gY29udGV4dC5pbmRleCxcbiAgICAgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXggPCBpbnB1dExlbmd0aCkge1xuICAgICAgdmFyIGlucHV0U3Vic3RyaW5nID0gaW5wdXQuc3Vic3RyKGluZGV4KSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBzdHJpbmdJbmRleCA9IGlucHV0U3Vic3RyaW5nLmluZGV4T2Yoc3RyaW5nKTtcblxuICAgICAgaWYgKHN0cmluZ0luZGV4ID09PSAwKSB7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgICAgIGNvbnRleHQuaW5kZXggKz0gc3RyaW5nTGVuZ3RoO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9scyhzeW1ib2xzLCBQYXJ0cykge1xuICAgIHZhciB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICBmaXJzdFN5bWJvbCA9IGZpcnN0KHN5bWJvbHMpLFxuICAgICAgICBzeW1ib2wgPSBmaXJzdFN5bWJvbCwgLy8vXG4gICAgICAgIHRlcm1pbmFsUmVnRXhwID0gLycoW14nXSspJy8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBtYXRjaGVzWzFdO1xuXG4gICAgICBzeW1ib2xzLnNoaWZ0KCk7XG5cbiAgICAgIHRlcm1pbmFsUGFydCA9IG5ldyBUZXJtaW5hbFBhcnQoc3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxQYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==