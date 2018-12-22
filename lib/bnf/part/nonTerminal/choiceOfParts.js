'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalPart = require('../../part/nonTerminal'),
    bnfUtilities = require('../../../utilities/bnf'),
    arrayUtilities = require('../../../utilities/array');

var isNodeChoiceNode = bnfUtilities.isNodeChoiceNode,
    second = arrayUtilities.second,
    discardOdd = arrayUtilities.discardOdd,
    discardLastThenFirst = arrayUtilities.discardLastThenFirst;


var type = 'ChoiceOfParts';

var ChoiceOfPartsPart = function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    var _this = _possibleConstructorReturn(this, (ChoiceOfPartsPart.__proto__ || Object.getPrototypeOf(ChoiceOfPartsPart)).call(this, type));

    _this.parts = parts;
    return _this;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(configuration, noWhitespace);

        if (partNodeOrNodes !== null) {
          nodes = partNodeOrNodes; ///

          return true;
        }
      });

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' | ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var choiceOfPartsPart = null;

      nodes = discardLastThenFirst(nodes);

      var secondNode = second(nodes),
          secondNodeChoiceNode = isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        nodes = discardOdd(nodes);

        var noWhitespace = false,
            parts = nodes.map(function (node) {
          var part = node.generatePart(noWhitespace);

          return part;
        });

        choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      }

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(NonTerminalPart);

Object.assign(ChoiceOfPartsPart, {
  type: type
});

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydCIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImlzTm9kZUNob2ljZU5vZGUiLCJzZWNvbmQiLCJkaXNjYXJkT2RkIiwiZGlzY2FyZExhc3RUaGVuRmlyc3QiLCJ0eXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImNob2ljZU9mUGFydHNQYXJ0Iiwic2Vjb25kTm9kZSIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLHdCQUFSLENBQXhCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2Qjs7QUFJTSxJQUFFRyxnQkFBRixHQUF1QkYsWUFBdkIsQ0FBRUUsZ0JBQUY7QUFBQSxJQUNFQyxNQURGLEdBQytDRixjQUQvQyxDQUNFRSxNQURGO0FBQUEsSUFDVUMsVUFEVixHQUMrQ0gsY0FEL0MsQ0FDVUcsVUFEVjtBQUFBLElBQ3NCQyxvQkFEdEIsR0FDK0NKLGNBRC9DLENBQ3NCSSxvQkFEdEI7OztBQUdOLElBQU1DLE9BQU8sZUFBYjs7SUFFTUMsaUI7OztBQUNKLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1hGLElBRFc7O0FBR2pCLFVBQUtFLEtBQUwsR0FBYUEsS0FBYjtBQUhpQjtBQUlsQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtDLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZSxLQUFmLENBRGlDLENBQ1g7O0FBRXRCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLSCxLQUFMLENBQVdJLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCLFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXTixhQUFYLEVBQTBCQyxZQUExQixDQUF4Qjs7QUFFQSxZQUFJSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJILGtCQUFRRyxlQUFSLENBRDRCLENBQ0Y7O0FBRTFCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSyxjQUFjLEtBQUtSLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCSCxJQUF0QixFQUE0QjtBQUMxRCxZQUFNSyxhQUFhTCxLQUFLTSxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixXQUFrQ0UsVUFBbEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzhCQUVnQlQsSyxFQUFPO0FBQ3RCLFVBQUlVLG9CQUFvQixJQUF4Qjs7QUFFQVYsY0FBUU4scUJBQXFCTSxLQUFyQixDQUFSOztBQUVBLFVBQU1XLGFBQWFuQixPQUFPUSxLQUFQLENBQW5CO0FBQUEsVUFDTVksdUJBQXVCckIsaUJBQWlCb0IsVUFBakIsQ0FEN0I7O0FBR0EsVUFBSUMsb0JBQUosRUFBMEI7QUFDeEJaLGdCQUFRUCxXQUFXTyxLQUFYLENBQVI7O0FBRUEsWUFBTUQsZUFBZSxLQUFyQjtBQUFBLFlBQ01GLFFBQVFHLE1BQU1hLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDL0IsY0FBTVosT0FBT1ksS0FBS0MsWUFBTCxDQUFrQmhCLFlBQWxCLENBQWI7O0FBRUEsaUJBQU9HLElBQVA7QUFDRCxTQUpPLENBRGQ7O0FBT0FRLDRCQUFvQixJQUFJZCxpQkFBSixDQUFzQkMsS0FBdEIsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPYSxpQkFBUDtBQUNEOzs7O0VBcEU2QnZCLGU7O0FBdUVoQzZCLE9BQU9DLE1BQVAsQ0FBY3JCLGlCQUFkLEVBQWlDO0FBQy9CRDtBQUQrQixDQUFqQzs7QUFJQXVCLE9BQU9DLE9BQVAsR0FBaUJ2QixpQkFBakIiLCJmaWxlIjoiY2hvaWNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpLFxuICAgICAgYm5mVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2JuZicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBpc05vZGVDaG9pY2VOb2RlIH0gPSBibmZVdGlsaXRpZXMsXG4gICAgICB7IHNlY29uZCwgZGlzY2FyZE9kZCwgZGlzY2FyZExhc3RUaGVuRmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB0eXBlID0gJ0Nob2ljZU9mUGFydHMnO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgc3VwZXIodHlwZSk7XG4gICAgXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cbiAgICBcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBudWxsO1xuICAgIFxuICAgIG5vZGVzID0gZGlzY2FyZExhc3RUaGVuRmlyc3Qobm9kZXMpO1xuICAgIFxuICAgIGNvbnN0IHNlY29uZE5vZGUgPSBzZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHNlY29uZE5vZGVDaG9pY2VOb2RlID0gaXNOb2RlQ2hvaWNlTm9kZShzZWNvbmROb2RlKTtcbiAgICBcbiAgICBpZiAoc2Vjb25kTm9kZUNob2ljZU5vZGUpIHtcbiAgICAgIG5vZGVzID0gZGlzY2FyZE9kZChub2Rlcyk7XG5cbiAgICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENob2ljZU9mUGFydHNQYXJ0LCB7XG4gIHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNQYXJ0O1xuIl19