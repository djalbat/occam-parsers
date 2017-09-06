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

var ChoiceOfPartsPart = function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    var type = ChoiceOfPartsPart.type;

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
        var partNodeOrNodes = part.parse(configuration, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = partNodeOrNodes;
        }

        return partParsed;
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

ChoiceOfPartsPart.type = 'ChoiceOfParts';

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydCIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsImlzTm9kZUNob2ljZU5vZGUiLCJzZWNvbmQiLCJkaXNjYXJkT2RkIiwiZGlzY2FyZExhc3RUaGVuRmlyc3QiLCJDaG9pY2VPZlBhcnRzUGFydCIsInBhcnRzIiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub1doaXRlc3BhY2UiLCJub2RlcyIsInNvbWUiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJjaG9pY2VPZlBhcnRzUGFydCIsInNlY29uZE5vZGUiLCJzZWNvbmROb2RlQ2hvaWNlTm9kZSIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSx3QkFBUixDQUF4QjtBQUFBLElBQ01DLGVBQWVELFFBQVEsd0JBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsMEJBQVIsQ0FGdkI7O0FBSU0sSUFBRUcsZ0JBQUYsR0FBdUJGLFlBQXZCLENBQUVFLGdCQUFGO0FBQUEsSUFDRUMsTUFERixHQUMrQ0YsY0FEL0MsQ0FDRUUsTUFERjtBQUFBLElBQ1VDLFVBRFYsR0FDK0NILGNBRC9DLENBQ1VHLFVBRFY7QUFBQSxJQUNzQkMsb0JBRHRCLEdBQytDSixjQUQvQyxDQUNzQkksb0JBRHRCOztJQUdBQyxpQjs7O0FBQ0osNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsUUFBTUMsT0FBT0Ysa0JBQWtCRSxJQUEvQjs7QUFEaUIsc0lBR1hBLElBSFc7O0FBS2pCLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZSxLQUFmLENBRGlDLENBQ1g7O0FBRXRCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsVUFBU0MsSUFBVCxFQUFlO0FBQzdCLFlBQU1DLGtCQUFrQkQsS0FBS0UsS0FBTCxDQUFXTixhQUFYLEVBQTBCQyxZQUExQixDQUF4QjtBQUFBLFlBQ01NLGFBQWNGLG9CQUFvQixJQUR4Qzs7QUFHQSxZQUFJRSxVQUFKLEVBQWdCO0FBQ2RMLGtCQUFRRyxlQUFSO0FBQ0Q7O0FBRUQsZUFBT0UsVUFBUDtBQUNELE9BVEQ7O0FBV0EsYUFBT0wsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTSxjQUFjLEtBQUtWLEtBQUwsQ0FBV1csTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCSixJQUF0QixFQUE0QjtBQUMxRCxZQUFNTSxhQUFhTixLQUFLTyxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixXQUFrQ0UsVUFBbEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzhCQUVnQlYsSyxFQUFPO0FBQ3RCLFVBQUlXLG9CQUFvQixJQUF4Qjs7QUFFQVgsY0FBUU4scUJBQXFCTSxLQUFyQixDQUFSOztBQUVBLFVBQU1ZLGFBQWFwQixPQUFPUSxLQUFQLENBQW5CO0FBQUEsVUFDTWEsdUJBQXVCdEIsaUJBQWlCcUIsVUFBakIsQ0FEN0I7O0FBR0EsVUFBSUMsb0JBQUosRUFBMEI7QUFDeEJiLGdCQUFRUCxXQUFXTyxLQUFYLENBQVI7O0FBRUEsWUFBTUQsZUFBZSxLQUFyQjtBQUFBLFlBQ01ILFFBQVFJLE1BQU1jLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDL0IsY0FBTWIsT0FBT2EsS0FBS0MsWUFBTCxDQUFrQmpCLFlBQWxCLENBQWI7O0FBRUEsaUJBQU9HLElBQVA7QUFDRCxTQUpPLENBRGQ7O0FBT0FTLDRCQUFvQixJQUFJaEIsaUJBQUosQ0FBc0JDLEtBQXRCLENBQXBCO0FBQ0Q7O0FBRUQsYUFBT2UsaUJBQVA7QUFDRDs7OztFQXZFNkJ4QixlOztBQTBFaENRLGtCQUFrQkUsSUFBbEIsR0FBeUIsZUFBekI7O0FBRUFvQixPQUFPQyxPQUFQLEdBQWlCdkIsaUJBQWpCIiwiZmlsZSI6ImNob2ljZU9mUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwnKSxcbiAgICAgIGJuZlV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9ibmYnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgaXNOb2RlQ2hvaWNlTm9kZSB9ID0gYm5mVXRpbGl0aWVzLFxuICAgICAgeyBzZWNvbmQsIGRpc2NhcmRPZGQsIGRpc2NhcmRMYXN0VGhlbkZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBDaG9pY2VPZlBhcnRzUGFydC50eXBlO1xuICAgIFxuICAgIHN1cGVyKHR5cGUpO1xuICAgIFxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG4gICAgXG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnBhcnRzLnNvbWUoZnVuY3Rpb24ocGFydCkge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSB8ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IGNob2ljZU9mUGFydHNQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBub2RlcyA9IGRpc2NhcmRMYXN0VGhlbkZpcnN0KG5vZGVzKTtcbiAgICBcbiAgICBjb25zdCBzZWNvbmROb2RlID0gc2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBzZWNvbmROb2RlQ2hvaWNlTm9kZSA9IGlzTm9kZUNob2ljZU5vZGUoc2Vjb25kTm9kZSk7XG4gICAgXG4gICAgaWYgKHNlY29uZE5vZGVDaG9pY2VOb2RlKSB7XG4gICAgICBub2RlcyA9IGRpc2NhcmRPZGQobm9kZXMpO1xuXG4gICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG4gICAgfSAgICBcbiAgICBcbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuQ2hvaWNlT2ZQYXJ0c1BhcnQudHlwZSA9ICdDaG9pY2VPZlBhcnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUGFydDtcbiJdfQ==