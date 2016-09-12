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
    key: 'fromSymbol',
    value: function fromSymbol(symbol, Parts) {
      var part = null,
          AllParts = spliceParts(CommonParts, Parts);

      AllParts.some(function (Part) {
        part = Part.fromSymbol(symbol, Parts);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJyZXF1aXJlIiwiUHJvZHVjdGlvbk5hbWVQYXJ0IiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwiWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQiLCJDb21tb25QYXJ0cyIsIlBhcnQiLCJzeW1ib2wiLCJQYXJ0cyIsInBhcnQiLCJBbGxQYXJ0cyIsInNwbGljZVBhcnRzIiwic29tZSIsImZyb21TeW1ib2wiLCJwYXJzZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwic2xpY2UiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlQXJyYXkiLCJhcnJheSIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzcGxpY2UiLCJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsaUJBQVIsQ0FBbkI7QUFBQSxJQUNJQyxxQkFBcUJELFFBQVEsdUJBQVIsQ0FEekI7QUFBQSxJQUVJRSx3QkFBd0JGLFFBQVEsMEJBQVIsQ0FGNUI7QUFBQSxJQUdJRyxnQ0FBZ0NILFFBQVEsa0NBQVIsQ0FIcEM7O0FBS0EsSUFBSUksY0FBYyxDQUNaTCxZQURZLEVBRVpHLHFCQUZZLEVBR1pDLDZCQUhZLEVBSVpGLGtCQUpZLENBQWxCOztJQU9NSSxJOzs7Ozs7OytCQUNjQyxNLEVBQVFDLEssRUFBTztBQUMvQixVQUFJQyxPQUFPLElBQVg7QUFBQSxVQUNJQyxXQUFXQyxZQUFZTixXQUFaLEVBQXlCRyxLQUF6QixDQURmOztBQUdBRSxlQUFTRSxJQUFULENBQWMsVUFBU04sSUFBVCxFQUFlO0FBQzNCRyxlQUFPSCxLQUFLTyxVQUFMLENBQWdCTixNQUFoQixFQUF3QkMsS0FBeEIsQ0FBUDs7QUFFQSxZQUFJTSxTQUFVTCxTQUFTLElBQXZCOztBQUVBLGVBQU9LLE1BQVA7QUFDRCxPQU5EOztBQVFBLGFBQU9MLElBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJWLElBQWpCOztBQUVBLFNBQVNLLFdBQVQsQ0FBcUJOLFdBQXJCLEVBQWtDRyxLQUFsQyxFQUF5QztBQUN2QyxNQUFJRSxXQUFXTCxZQUFZWSxLQUFaLEVBQWY7QUFBQSxNQUNJQyxRQUFRLENBRFo7QUFBQSxNQUVJQyxjQUFjLENBRmxCOztBQUlBQyxjQUFZVixRQUFaLEVBQXNCUSxLQUF0QixFQUE2QkMsV0FBN0IsRUFBMENYLEtBQTFDOztBQUVBLFNBQU9FLFFBQVA7QUFDRDs7QUFFRCxTQUFTVSxXQUFULENBQXFCQyxLQUFyQixFQUE0QkgsS0FBNUIsRUFBbUNDLFdBQW5DLEVBQWdERyxVQUFoRCxFQUE0RDtBQUMxRCxNQUFJQyxPQUFPLENBQUNMLEtBQUQsRUFBUUMsV0FBUixFQUFxQkssTUFBckIsQ0FBNEJGLFVBQTVCLENBQVg7O0FBRUFHLFFBQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlAsS0FBN0IsRUFBb0NFLElBQXBDO0FBQ0QiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4vcGFydC90ZXJtaW5hbCcpLFxuICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcGFydC9wcm9kdWN0aW9uTmFtZScpLFxuICAgIFJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IHJlcXVpcmUoJy4vcGFydC9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgIFplcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXNQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3plcm9Pck1vcmVQcm9kdWN0aW9uTmFtZXMnKTtcblxudmFyIENvbW1vblBhcnRzID0gW1xuICAgICAgVGVybWluYWxQYXJ0LFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0LFxuICAgICAgWmVyb09yTW9yZVByb2R1Y3Rpb25OYW1lc1BhcnQsXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICBdO1xuXG5jbGFzcyBQYXJ0IHtcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBQYXJ0cykge1xuICAgIHZhciBwYXJ0ID0gbnVsbCxcbiAgICAgICAgQWxsUGFydHMgPSBzcGxpY2VQYXJ0cyhDb21tb25QYXJ0cywgUGFydHMpO1xuXG4gICAgQWxsUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgUGFydHMpO1xuXG4gICAgICB2YXIgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuXG5mdW5jdGlvbiBzcGxpY2VQYXJ0cyhDb21tb25QYXJ0cywgUGFydHMpIHtcbiAgdmFyIEFsbFBhcnRzID0gQ29tbW9uUGFydHMuc2xpY2UoKSxcbiAgICAgIHN0YXJ0ID0gNCxcbiAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2VBcnJheShBbGxQYXJ0cywgc3RhcnQsIGRlbGV0ZUNvdW50LCBQYXJ0cyk7XG5cbiAgcmV0dXJuIEFsbFBhcnRzO1xufVxuXG5mdW5jdGlvbiBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gIHZhciBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xufVxuIl19