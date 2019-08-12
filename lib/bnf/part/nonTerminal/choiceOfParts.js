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

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbInBhcnRUeXBlcyIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsImlzTm9kZUNob2ljZU5vZGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJzZWNvbmQiLCJldmVuIiwiYWxsQnV0Rmlyc3RBbmRMYXN0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzb21lIiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJjaG9pY2VPZlBhcnRzUGFydCIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwic2Vjb25kTm9kZSIsInNlY29uZE5vZGVDaG9pY2VOb2RlIiwiZXZlbk5vZGVzIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSx3QkFBUixDQURyQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSwwQkFBUixDQUZ2QjtBQUFBLElBR01HLGtCQUFrQkgsUUFBUSx3QkFBUixDQUh4Qjs7QUFLTSxJQUFFSSxnQkFBRixHQUF1QkgsWUFBdkIsQ0FBRUcsZ0JBQUY7QUFBQSxJQUNFQyxxQkFERixHQUM0Qk4sU0FENUIsQ0FDRU0scUJBREY7QUFBQSxJQUVFQyxNQUZGLEdBRXVDSixjQUZ2QyxDQUVFSSxNQUZGO0FBQUEsSUFFVUMsSUFGVixHQUV1Q0wsY0FGdkMsQ0FFVUssSUFGVjtBQUFBLElBRWdCQyxrQkFGaEIsR0FFdUNOLGNBRnZDLENBRWdCTSxrQkFGaEI7O0lBSUFDLGlCOzs7QUFDSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixRQUFNQyxPQUFPTixxQkFBYixDQURpQixDQUNtQjs7QUFEbkIsc0lBR1hNLElBSFc7O0FBS2pCLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZSxLQUFmLENBRGlDLENBQ1g7O0FBRXRCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCLFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXTixhQUFYLEVBQTBCQyxZQUExQixDQUF4Qjs7QUFFQSxZQUFJSSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJILGtCQUFRRyxlQUFSLENBRDRCLENBQ0Y7O0FBRTFCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSyxjQUFjLEtBQUtULEtBQUwsQ0FBV1UsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCSCxJQUF0QixFQUE0QjtBQUMxRCxZQUFNSyxhQUFhTCxLQUFLTSxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixXQUFrQ0UsVUFBbEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUseUlBQW1CZCxpQkFBbkIsRUFBc0MsS0FBS0MsS0FBM0M7QUFBb0Q7Ozs4QkFFN0NJLEssRUFBTztBQUN0QixVQUFJVSxvQkFBb0IsSUFBeEI7O0FBRUEsVUFBTUMsMEJBQTBCakIsbUJBQW1CTSxLQUFuQixDQUFoQzs7QUFFQUEsY0FBUVcsdUJBQVIsQ0FMc0IsQ0FLWTs7QUFFbEMsVUFBTUMsYUFBYXBCLE9BQU9RLEtBQVAsQ0FBbkI7QUFBQSxVQUNNYSx1QkFBdUJ2QixpQkFBaUJzQixVQUFqQixDQUQ3Qjs7QUFHQSxVQUFJQyxvQkFBSixFQUEwQjtBQUN4QixZQUFNQyxZQUFZckIsS0FBS08sS0FBTCxDQUFsQjs7QUFFQUEsZ0JBQVFjLFNBQVIsQ0FId0IsQ0FHSjs7QUFFcEIsWUFBTWYsZUFBZSxLQUFyQjtBQUFBLFlBQ01ILFFBQVFJLE1BQU1lLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDL0IsY0FBTWQsT0FBT2MsS0FBS0MsWUFBTCxDQUFrQmxCLFlBQWxCLENBQWI7O0FBRUEsaUJBQU9HLElBQVA7QUFDRCxTQUpPLENBRGQ7O0FBT0FRLDRCQUFvQixJQUFJZixpQkFBSixDQUFzQkMsS0FBdEIsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPYyxpQkFBUDtBQUNEOzs7O0VBNUU2QnJCLGU7O0FBK0VoQzZCLE9BQU9DLE9BQVAsR0FBaUJ4QixpQkFBakIiLCJmaWxlIjoiY2hvaWNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFydFR5cGVzID0gcmVxdWlyZSgnLi4vLi4vcGFydFR5cGVzJyksXG4gICAgICBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IGlzTm9kZUNob2ljZU5vZGUgfSA9IGJuZlV0aWxpdGllcyxcbiAgICAgIHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXMsXG4gICAgICB7IHNlY29uZCwgZXZlbiwgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBDaG9pY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG4gICAgXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cbiAgICBcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2hvaWNlT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGxldCBjaG9pY2VPZlBhcnRzUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuICAgIFxuICAgIGNvbnN0IHNlY29uZE5vZGUgPSBzZWNvbmQobm9kZXMpLFxuICAgICAgICAgIHNlY29uZE5vZGVDaG9pY2VOb2RlID0gaXNOb2RlQ2hvaWNlTm9kZShzZWNvbmROb2RlKTtcbiAgICBcbiAgICBpZiAoc2Vjb25kTm9kZUNob2ljZU5vZGUpIHtcbiAgICAgIGNvbnN0IGV2ZW5Ob2RlcyA9IGV2ZW4obm9kZXMpO1xuXG4gICAgICBub2RlcyA9IGV2ZW5Ob2RlczsgIC8vL1xuXG4gICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG4gICAgfSAgICBcbiAgICBcbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUGFydDtcbiJdfQ==