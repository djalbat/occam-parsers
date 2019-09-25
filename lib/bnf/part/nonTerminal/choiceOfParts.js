'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var partTypes = require('../../partTypes'),
    bnfUtilities = require('../../../utilities/bnf'),
    arrayUtilities = require('../../../utilities/array'),
    NonTerminalPart = require('../../part/nonTerminal');

var isNodeChoiceNode = bnfUtilities.isNodeChoiceNode,
    ChoiceOfPartsPartType = partTypes.ChoiceOfPartsPartType,
    second = arrayUtilities.second,
    even = arrayUtilities.even,
    allButFirstAndLast = arrayUtilities.allButFirstAndLast;

var ChoiceOfPartsPart = function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    var type = ChoiceOfPartsPartType; ///

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
    value: function parse(configuration) {
      var nodes = null;

      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(configuration);

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
  }, {
    key: 'clone',
    value: function clone() {
      return _get(ChoiceOfPartsPart.prototype.__proto__ || Object.getPrototypeOf(ChoiceOfPartsPart.prototype), 'clone', this).call(this, ChoiceOfPartsPart, this.parts);
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var choiceOfPartsPart = null;

      var allButFirstAndLastNodes = allButFirstAndLast(nodes);

      nodes = allButFirstAndLastNodes; ///

      var secondNode = second(nodes),
          secondNodeChoiceNode = isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        var evenNodes = even(nodes);

        nodes = evenNodes; ///

        var noWhitespace = false,
            lookAhead = false,
            parts = nodes.map(function (node) {
          var part = node.generatePart(noWhitespace, lookAhead);

          return part;
        });

        choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      }

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(NonTerminalPart);

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbInBhcnRUeXBlcyIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsImlzTm9kZUNob2ljZU5vZGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJzZWNvbmQiLCJldmVuIiwiYWxsQnV0Rmlyc3RBbmRMYXN0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJzb21lIiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJjaG9pY2VPZlBhcnRzUGFydCIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwic2Vjb25kTm9kZSIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwiZXZlbk5vZGVzIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSx3QkFBUixDQUh4Qjs7QUFLTSxJQUFFSSxnQkFBRixHQUF1QkgsWUFBdkIsQ0FBRUcsZ0JBQUY7QUFBQSxJQUNFQyxxQkFERixHQUM0Qk4sU0FENUIsQ0FDRU0scUJBREY7QUFBQSxJQUVFQyxNQUZGLEdBRXVDSixjQUZ2QyxDQUVFSSxNQUZGO0FBQUEsSUFFVUMsSUFGVixHQUV1Q0wsY0FGdkMsQ0FFVUssSUFGVjtBQUFBLElBRWdCQyxrQkFGaEIsR0FFdUNOLGNBRnZDLENBRWdCTSxrQkFGaEI7O0lBSUFDLGlCOzs7QUFDSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixRQUFNQyxPQUFPTixxQkFBYixDQURpQixDQUNtQjs7QUFEbkIsc0lBR1hNLElBSFc7O0FBS2pCLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZTtBQUNuQixVQUFJQyxRQUFRLElBQVo7O0FBRUEsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCLFVBQVNDLElBQVQsRUFBZTtBQUM3QixZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV0wsYUFBWCxDQUF4Qjs7QUFFQSxZQUFJSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJILGtCQUFRRyxlQUFSLENBRDRCLENBQ0Y7O0FBRTFCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSyxjQUFjLEtBQUtSLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCSCxJQUF0QixFQUE0QjtBQUMxRCxZQUFNSyxhQUFhTCxLQUFLTSxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixXQUFrQ0UsVUFBbEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUseUlBQW1CYixpQkFBbkIsRUFBc0MsS0FBS0MsS0FBM0M7QUFBb0Q7Ozs4QkFFN0NHLEssRUFBTztBQUN0QixVQUFJVSxvQkFBb0IsSUFBeEI7O0FBRUEsVUFBTUMsMEJBQTBCaEIsbUJBQW1CSyxLQUFuQixDQUFoQzs7QUFFQUEsY0FBUVcsdUJBQVIsQ0FMc0IsQ0FLWTs7QUFFbEMsVUFBTUMsYUFBYW5CLE9BQU9PLEtBQVAsQ0FBbkI7QUFBQSxVQUNNYSx1QkFBdUJ0QixpQkFBaUJxQixVQUFqQixDQUQ3Qjs7QUFHQSxVQUFJQyxvQkFBSixFQUEwQjtBQUN4QixZQUFNQyxZQUFZcEIsS0FBS00sS0FBTCxDQUFsQjs7QUFFQUEsZ0JBQVFjLFNBQVIsQ0FId0IsQ0FHSjs7QUFFcEIsWUFBTUMsZUFBZSxLQUFyQjtBQUFBLFlBQ01DLFlBQVksS0FEbEI7QUFBQSxZQUVNbkIsUUFBUUcsTUFBTWlCLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDL0IsY0FBTWhCLE9BQU9nQixLQUFLQyxZQUFMLENBQWtCSixZQUFsQixFQUFnQ0MsU0FBaEMsQ0FBYjs7QUFFQSxpQkFBT2QsSUFBUDtBQUNELFNBSk8sQ0FGZDs7QUFRQVEsNEJBQW9CLElBQUlkLGlCQUFKLENBQXNCQyxLQUF0QixDQUFwQjtBQUNEOztBQUVELGFBQU9hLGlCQUFQO0FBQ0Q7Ozs7RUEzRTZCcEIsZTs7QUE4RWhDOEIsT0FBT0MsT0FBUCxHQUFpQnpCLGlCQUFqQiIsImZpbGUiOiJjaG9pY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIGJuZlV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9ibmYnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgaXNOb2RlQ2hvaWNlTm9kZSB9ID0gYm5mVXRpbGl0aWVzLFxuICAgICAgeyBDaG9pY2VPZlBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcyxcbiAgICAgIHsgc2Vjb25kLCBldmVuLCBhbGxCdXRGaXJzdEFuZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IENob2ljZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcbiAgICBcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5wYXJ0cy5zb21lKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbik7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2hvaWNlT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGxldCBjaG9pY2VPZlBhcnRzUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHNlY29uZE5vZGUgPSBzZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHNlY29uZE5vZGVDaG9pY2VOb2RlID0gaXNOb2RlQ2hvaWNlTm9kZShzZWNvbmROb2RlKTtcbiAgICBcbiAgICBpZiAoc2Vjb25kTm9kZUNob2ljZU5vZGUpIHtcbiAgICAgIGNvbnN0IGV2ZW5Ob2RlcyA9IGV2ZW4obm9kZXMpO1xuXG4gICAgICBub2RlcyA9IGV2ZW5Ob2RlczsgIC8vL1xuXG4gICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuICBcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuICAgIH0gICAgXG4gICAgXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c1BhcnQ7XG4iXX0=