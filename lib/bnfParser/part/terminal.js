'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = function () {
  function TerminalPart(string) {
    _classCallCheck(this, TerminalPart);

    this.string = string;
  }

  _createClass(TerminalPart, null, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJzdHJpbmciLCJzeW1ib2xzIiwiUGFydHMiLCJ0ZXJtaW5hbFBhcnQiLCJmaXJzdFN5bWJvbCIsImZpcnN0Iiwic3ltYm9sIiwidGVybWluYWxSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzaGlmdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxZO0FBQ0osd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7Z0NBRWtCQyxPLEVBQVNDLEssRUFBTztBQUNqQyxVQUFJQyxlQUFlLElBQW5CO0FBQUEsVUFDSUMsY0FBY0MsTUFBTUosT0FBTixDQURsQjtBQUFBLFVBRUlLLFNBQVNGLFdBRmI7QUFBQSxVQUUwQjtBQUN0QkcsdUJBQWlCLFdBSHJCO0FBQUEsVUFJSUMsVUFBVUYsT0FBT0csS0FBUCxDQUFhRixjQUFiLENBSmQ7O0FBTUEsVUFBSUMsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixZQUFJUixTQUFTUSxRQUFRLENBQVIsQ0FBYjs7QUFFQVAsZ0JBQVFTLEtBQVI7O0FBRUFQLHVCQUFlLElBQUlKLFlBQUosQ0FBaUJDLE1BQWpCLENBQWY7QUFDRDs7QUFFRCxhQUFPRyxZQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCYixZQUFqQjs7QUFFQSxTQUFTTSxLQUFULENBQWVRLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbHMoc3ltYm9scywgUGFydHMpIHtcbiAgICB2YXIgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgZmlyc3RTeW1ib2wgPSBmaXJzdChzeW1ib2xzKSxcbiAgICAgICAgc3ltYm9sID0gZmlyc3RTeW1ib2wsIC8vL1xuICAgICAgICB0ZXJtaW5hbFJlZ0V4cCA9IC8nKFteJ10rKScvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB2YXIgc3RyaW5nID0gbWF0Y2hlc1sxXTtcblxuICAgICAgc3ltYm9scy5zaGlmdCgpO1xuXG4gICAgICB0ZXJtaW5hbFBhcnQgPSBuZXcgVGVybWluYWxQYXJ0KHN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=