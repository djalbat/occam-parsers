'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var SpecialPart = function () {
  function SpecialPart(symbol) {
    _classCallCheck(this, SpecialPart);

    this.symbol = symbol;
  }

  _createClass(SpecialPart, [{
    key: 'parse',
    value: function parse(context, productions) {
      var nodes = null,
          nextNonWhitespaceToken = context.getNextNonWhitespaceToken(),
          token = nextNonWhitespaceToken; ///

      if (token !== undefined) {
        var str = token.getString(),
            parsed = str === this.symbol;

        if (parsed) {
          var terminalNode = new TerminalNode(str);

          nodes = [terminalNode];

          context.advanceJustPastToken(token);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, specialSymbolsRegExp) {
      var specialPart = null,
          matches = symbol.match(specialSymbolsRegExp);

      if (matches !== null) {
        specialPart = new SpecialPart(symbol);
      }

      return specialPart;
    }
  }]);

  return SpecialPart;
}();

module.exports = SpecialPart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJ0L3NwZWNpYWwuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIlNwZWNpYWxQYXJ0Iiwic3ltYm9sIiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwibm9kZXMiLCJuZXh0Tm9uV2hpdGVzcGFjZVRva2VuIiwiZ2V0TmV4dE5vbldoaXRlc3BhY2VUb2tlbiIsInRva2VuIiwidW5kZWZpbmVkIiwic3RyIiwiZ2V0U3RyaW5nIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwiYWR2YW5jZUp1c3RQYXN0VG9rZW4iLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsInNwZWNpYWxQYXJ0IiwibWF0Y2hlcyIsIm1hdGNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsa0JBQVIsQ0FBbkI7O0lBRU1DLFc7QUFDSix1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWE7QUFDMUIsVUFBSUMsUUFBUSxJQUFaO0FBQUEsVUFDSUMseUJBQXlCSCxRQUFRSSx5QkFBUixFQUQ3QjtBQUFBLFVBRUlDLFFBQVFGLHNCQUZaLENBRDBCLENBR1U7O0FBRXBDLFVBQUlFLFVBQVVDLFNBQWQsRUFBeUI7QUFDdkIsWUFBSUMsTUFBTUYsTUFBTUcsU0FBTixFQUFWO0FBQUEsWUFDSUMsU0FBVUYsUUFBUSxLQUFLUixNQUQzQjs7QUFHQSxZQUFJVSxNQUFKLEVBQVk7QUFDVixjQUFJQyxlQUFlLElBQUlkLFlBQUosQ0FBaUJXLEdBQWpCLENBQW5COztBQUVBTCxrQkFBUSxDQUFDUSxZQUFELENBQVI7O0FBRUFWLGtCQUFRVyxvQkFBUixDQUE2Qk4sS0FBN0I7QUFDRDtBQUNGOztBQUVELGFBQU9ILEtBQVA7QUFDRDs7OytCQUVpQkgsTSxFQUFRYSxvQixFQUFzQjtBQUM5QyxVQUFJQyxjQUFjLElBQWxCO0FBQUEsVUFDSUMsVUFBVWYsT0FBT2dCLEtBQVAsQ0FBYUgsb0JBQWIsQ0FEZDs7QUFHQSxVQUFJRSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCRCxzQkFBYyxJQUFJZixXQUFKLENBQWdCQyxNQUFoQixDQUFkO0FBQ0Q7O0FBRUQsYUFBT2MsV0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQm5CLFdBQWpCIiwiZmlsZSI6InNwZWNpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFNwZWNpYWxQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc3ltYm9sKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBub2RlcyA9IG51bGwsXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlVG9rZW4oKSxcbiAgICAgICAgdG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVRva2VuOyAvLy9cblxuICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc3RyID0gdG9rZW4uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyc2VkID0gKHN0ciA9PT0gdGhpcy5zeW1ib2wpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHZhciB0ZXJtaW5hbE5vZGUgPSBuZXcgVGVybWluYWxOb2RlKHN0cik7XG5cbiAgICAgICAgbm9kZXMgPSBbdGVybWluYWxOb2RlXTtcblxuICAgICAgICBjb250ZXh0LmFkdmFuY2VKdXN0UGFzdFRva2VuKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHNwZWNpYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChzcGVjaWFsU3ltYm9sc1JlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgc3BlY2lhbFBhcnQgPSBuZXcgU3BlY2lhbFBhcnQoc3ltYm9sKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BlY2lhbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGVjaWFsUGFydDtcbiJdfQ==