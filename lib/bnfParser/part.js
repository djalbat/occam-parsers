'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalPart = require('./part/terminal'),
    ProductionNamePart = require('./part/productionName'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionNamesPart = require('./part/zeroOrMoreProductionNames');

var CommonParts = [TerminalPart, RegularExpressionPart, ZeroOrMoreProductionNamesPart, ProductionNamePart];

var Part = function () {
  function Part() {
    _classCallCheck(this, Part);
  }

  _createClass(Part, null, [{
    key: 'fromSymbols',
    value: function fromSymbols(symbols, Parts) {
      var part = null,
          AllParts = spliceParts(CommonParts, Parts);

      AllParts.some(function (Part) {
        part = Part.fromSymbols(symbols, Parts);

        var parsed = part !== null;

        return parsed;
      });

      return part;
    }
  }]);

  return Part;
}();

module.exports = Part;

function spliceParts(CommonParts, Parts) {
  var AllParts = CommonParts.slice(),
      start = 4,
      deleteCount = 0;

  spliceArray(AllParts, start, deleteCount, Parts);

  return AllParts;
}

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwiWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQiLCJDb21tb25QYXJ0cyIsIlBhcnQiLCJzeW1ib2xzIiwiUGFydHMiLCJwYXJ0IiwiQWxsUGFydHMiLCJzcGxpY2VQYXJ0cyIsInNvbWUiLCJmcm9tU3ltYm9scyIsInBhcnNlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJzbGljZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2VBcnJheSIsImFycmF5IiwiaXRlbXNBcnJheSIsImFyZ3MiLCJjb25jYXQiLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsZUFBZUMsUUFBUSxpQkFBUixDQUFuQjtBQUFBLElBQ0lDLHFCQUFxQkQsUUFBUSx1QkFBUixDQUR6QjtBQUFBLElBRUlFLHdCQUF3QkYsUUFBUSwwQkFBUixDQUY1QjtBQUFBLElBR0lHLGdDQUFnQ0gsUUFBUSxrQ0FBUixDQUhwQzs7QUFLQSxJQUFJSSxjQUFjLENBQ1pMLFlBRFksRUFFWkcscUJBRlksRUFHWkMsNkJBSFksRUFJWkYsa0JBSlksQ0FBbEI7O0lBT01JLEk7Ozs7Ozs7Z0NBQ2VDLE8sRUFBU0MsSyxFQUFPO0FBQ2pDLFVBQUlDLE9BQU8sSUFBWDtBQUFBLFVBQ0lDLFdBQVdDLFlBQVlOLFdBQVosRUFBeUJHLEtBQXpCLENBRGY7O0FBR0FFLGVBQVNFLElBQVQsQ0FBYyxVQUFTTixJQUFULEVBQWU7QUFDM0JHLGVBQU9ILEtBQUtPLFdBQUwsQ0FBaUJOLE9BQWpCLEVBQTBCQyxLQUExQixDQUFQOztBQUVBLFlBQUlNLFNBQVVMLFNBQVMsSUFBdkI7O0FBRUEsZUFBT0ssTUFBUDtBQUNELE9BTkQ7O0FBUUEsYUFBT0wsSUFBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQlYsSUFBakI7O0FBRUEsU0FBU0ssV0FBVCxDQUFxQk4sV0FBckIsRUFBa0NHLEtBQWxDLEVBQXlDO0FBQ3ZDLE1BQUlFLFdBQVdMLFlBQVlZLEtBQVosRUFBZjtBQUFBLE1BQ0lDLFFBQVEsQ0FEWjtBQUFBLE1BRUlDLGNBQWMsQ0FGbEI7O0FBSUFDLGNBQVlWLFFBQVosRUFBc0JRLEtBQXRCLEVBQTZCQyxXQUE3QixFQUEwQ1gsS0FBMUM7O0FBRUEsU0FBT0UsUUFBUDtBQUNEOztBQUVELFNBQVNVLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCSCxLQUE1QixFQUFtQ0MsV0FBbkMsRUFBZ0RHLFVBQWhELEVBQTREO0FBQzFELE1BQUlDLE9BQU8sQ0FBQ0wsS0FBRCxFQUFRQyxXQUFSLEVBQXFCSyxNQUFyQixDQUE0QkYsVUFBNUIsQ0FBWDs7QUFFQUcsUUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCUCxLQUE3QixFQUFvQ0UsSUFBcEM7QUFDRCIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Rlcm1pbmFsJyksXG4gICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQgPSByZXF1aXJlKCcuL3BhcnQvemVyb09yTW9yZVByb2R1Y3Rpb25OYW1lcycpO1xuXG52YXIgQ29tbW9uUGFydHMgPSBbXG4gICAgICBUZXJtaW5hbFBhcnQsXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblBhcnQsXG4gICAgICBaZXJvT3JNb3JlUHJvZHVjdGlvbk5hbWVzUGFydCxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydFxuICAgIF07XG5cbmNsYXNzIFBhcnQge1xuICBzdGF0aWMgZnJvbVN5bWJvbHMoc3ltYm9scywgUGFydHMpIHtcbiAgICB2YXIgcGFydCA9IG51bGwsXG4gICAgICAgIEFsbFBhcnRzID0gc3BsaWNlUGFydHMoQ29tbW9uUGFydHMsIFBhcnRzKTtcblxuICAgIEFsbFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbHMoc3ltYm9scywgUGFydHMpO1xuXG4gICAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuXG5mdW5jdGlvbiBzcGxpY2VQYXJ0cyhDb21tb25QYXJ0cywgUGFydHMpIHtcbiAgdmFyIEFsbFBhcnRzID0gQ29tbW9uUGFydHMuc2xpY2UoKSxcbiAgICAgIHN0YXJ0ID0gNCxcbiAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2VBcnJheShBbGxQYXJ0cywgc3RhcnQsIGRlbGV0ZUNvdW50LCBQYXJ0cyk7XG5cbiAgcmV0dXJuIEFsbFBhcnRzO1xufVxuXG5mdW5jdGlvbiBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gIHZhciBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xufVxuIl19