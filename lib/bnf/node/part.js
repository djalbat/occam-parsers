'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nodeUtil = require('../../util/node'),
    arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartNode = function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, (PartNode.__proto__ || Object.getPrototypeOf(PartNode)).apply(this, arguments));
  }

  _createClass(PartNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var part = void 0,
          childNodes = this.getChildNodes(),
          nodes = childNodes; ///

      var firstNode = arrayUtil.first(nodes),
          firstNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstNode);

      if (firstNodeNoWhitespaceNode) {
        noWhitespace = true;

        nodes = arrayUtil.discardFirst(nodes);
      }

      var quantifiers = null;

      var lastNode = arrayUtil.last(nodes),
          lastNodeQuantifiersNode = nodeUtil.isNodeQuantifiersNode(lastNode);

      if (lastNodeQuantifiersNode) {
        var quantifiersNode = lastNode; ///

        quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode);

        nodes = arrayUtil.discardLast(nodes);
      }

      var nodesLength = nodes.length;

      if (nodesLength > 1) {
        var ChoiceOfPartsPart = Parts['ChoiceOfPartsPart'],
            choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes, Parts);

        if (choiceOfPartsPart !== null) {
          part = choiceOfPartsPart; ///
        } else {
          var GroupOfPartsPart = Parts['GroupOfPartsPart'],
              groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes, Parts);

          part = groupOfPartsPart; ///
        }
      } else {
        var _firstNode = arrayUtil.first(nodes),
            remainingNode = _firstNode; ///

        part = remainingNode.generatePart(Parts, noWhitespace);
      }

      if (quantifiers !== null) {
        var SequenceOfPartsPart = Parts['SequenceOfPartsPart'],
            sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);

        part = sequenceOfPartsPart; ///
      }

      return part;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, PartNode);
    }
  }]);

  return PartNode;
}(NonTerminalNode);

module.exports = PartNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5vZGVVdGlsIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsImZpcnN0Tm9kZSIsImZpcnN0IiwiZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImlzTm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJkaXNjYXJkRmlyc3QiLCJxdWFudGlmaWVycyIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwiZGlzY2FyZExhc3QiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJmcm9tTm9kZXMiLCJHcm91cE9mUGFydHNQYXJ0IiwiZ3JvdXBPZlBhcnRzUGFydCIsInJlbWFpbmluZ05vZGUiLCJnZW5lcmF0ZVBhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGlCQUFSLENBQWpCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxrQkFBUixDQURsQjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsUTs7Ozs7Ozs7Ozs7aUNBQ1NDLEssRUFBT0MsWSxFQUFjO0FBQ2hDLFVBQUlDLGFBQUo7QUFBQSxVQUNJQyxhQUFhLEtBQUtDLGFBQUwsRUFEakI7QUFBQSxVQUVJQyxRQUFRRixVQUZaLENBRGdDLENBR1I7O0FBRXhCLFVBQU1HLFlBQVlULFVBQVVVLEtBQVYsQ0FBZ0JGLEtBQWhCLENBQWxCO0FBQUEsVUFDTUcsNEJBQTRCYixTQUFTYyxzQkFBVCxDQUFnQ0gsU0FBaEMsQ0FEbEM7O0FBR0EsVUFBSUUseUJBQUosRUFBK0I7QUFDN0JQLHVCQUFlLElBQWY7O0FBRUFJLGdCQUFRUixVQUFVYSxZQUFWLENBQXVCTCxLQUF2QixDQUFSO0FBQ0Q7O0FBRUQsVUFBS00sY0FBYyxJQUFuQjs7QUFFQSxVQUFNQyxXQUFXZixVQUFVZ0IsSUFBVixDQUFlUixLQUFmLENBQWpCO0FBQUEsVUFDTVMsMEJBQTBCbkIsU0FBU29CLHFCQUFULENBQStCSCxRQUEvQixDQURoQzs7QUFHQSxVQUFJRSx1QkFBSixFQUE2QjtBQUMzQixZQUFNRSxrQkFBa0JKLFFBQXhCLENBRDJCLENBQ1E7O0FBRW5DRCxzQkFBY2hCLFNBQVNzQiw4QkFBVCxDQUF3Q0QsZUFBeEMsQ0FBZDs7QUFFQVgsZ0JBQVFSLFVBQVVxQixXQUFWLENBQXNCYixLQUF0QixDQUFSO0FBQ0Q7O0FBRUQsVUFBTWMsY0FBY2QsTUFBTWUsTUFBMUI7O0FBRUEsVUFBSUQsY0FBYyxDQUFsQixFQUFxQjtBQUNuQixZQUFNRSxvQkFBb0JyQixNQUFNLG1CQUFOLENBQTFCO0FBQUEsWUFDTXNCLG9CQUFvQkQsa0JBQWtCRSxTQUFsQixDQUE0QmxCLEtBQTVCLEVBQW1DTCxLQUFuQyxDQUQxQjs7QUFHQSxZQUFJc0Isc0JBQXNCLElBQTFCLEVBQWdDO0FBQzlCcEIsaUJBQU9vQixpQkFBUCxDQUQ4QixDQUNKO0FBQzNCLFNBRkQsTUFFTztBQUNMLGNBQU1FLG1CQUFtQnhCLE1BQU0sa0JBQU4sQ0FBekI7QUFBQSxjQUNNeUIsbUJBQW1CRCxpQkFBaUJELFNBQWpCLENBQTJCbEIsS0FBM0IsRUFBa0NMLEtBQWxDLENBRHpCOztBQUdBRSxpQkFBT3VCLGdCQUFQLENBSkssQ0FJcUI7QUFDM0I7QUFDRixPQVpELE1BWU87QUFDTCxZQUFNbkIsYUFBWVQsVUFBVVUsS0FBVixDQUFnQkYsS0FBaEIsQ0FBbEI7QUFBQSxZQUNNcUIsZ0JBQWdCcEIsVUFEdEIsQ0FESyxDQUU2Qjs7QUFFbENKLGVBQU93QixjQUFjQyxZQUFkLENBQTJCM0IsS0FBM0IsRUFBa0NDLFlBQWxDLENBQVA7QUFDRDs7QUFFRCxVQUFJVSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsWUFBTWlCLHNCQUFzQjVCLE1BQU0scUJBQU4sQ0FBNUI7QUFBQSxZQUNNNkIsc0JBQXNCRCxvQkFBb0JFLHNCQUFwQixDQUEyQzVCLElBQTNDLEVBQWlEUyxXQUFqRCxFQUE4RFgsS0FBOUQsQ0FENUI7O0FBR0FFLGVBQU8yQixtQkFBUCxDQUp3QixDQUlJO0FBQzdCOztBQUVELGFBQU8zQixJQUFQO0FBQ0Q7OzsrQ0FFaUNHLEssRUFBTzBCLGMsRUFBZ0I7QUFBRSxhQUFPakMsZ0JBQWdCa0MsMEJBQWhCLENBQTJDM0IsS0FBM0MsRUFBa0QwQixjQUFsRCxFQUFrRWhDLFFBQWxFLENBQVA7QUFBcUY7Ozs7RUEzRDNIRCxlOztBQThEdkJtQyxPQUFPQyxPQUFQLEdBQWlCbkMsUUFBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9kZVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL25vZGUnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydCxcbiAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuICAgIFxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGFycmF5VXRpbC5maXJzdChub2RlcyksXG4gICAgICAgICAgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IG5vZGVVdGlsLmlzTm9kZU5vV2hpdGVzcGFjZU5vZGUoZmlyc3ROb2RlKTtcblxuICAgIGlmIChmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuXG4gICAgICBub2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkRmlyc3Qobm9kZXMpO1xuICAgIH1cblxuICAgIGxldCAgcXVhbnRpZmllcnMgPSBudWxsO1xuXG4gICAgY29uc3QgbGFzdE5vZGUgPSBhcnJheVV0aWwubGFzdChub2RlcyksXG4gICAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyc05vZGUgPSBub2RlVXRpbC5pc05vZGVRdWFudGlmaWVyc05vZGUobGFzdE5vZGUpO1xuICAgIFxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSkge1xuICAgICAgY29uc3QgcXVhbnRpZmllcnNOb2RlID0gbGFzdE5vZGU7ICAvLy9cbiAgICAgIFxuICAgICAgcXVhbnRpZmllcnMgPSBub2RlVXRpbC5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKTtcblxuICAgICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZExhc3Qobm9kZXMpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAobm9kZXNMZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBDaG9pY2VPZlBhcnRzUGFydCA9IFBhcnRzWydDaG9pY2VPZlBhcnRzUGFydCddLFxuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMsIFBhcnRzKTtcbiAgICAgIFxuICAgICAgaWYgKGNob2ljZU9mUGFydHNQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnQgPSBjaG9pY2VPZlBhcnRzUGFydDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBHcm91cE9mUGFydHNQYXJ0ID0gUGFydHNbJ0dyb3VwT2ZQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzLCBQYXJ0cyk7XG5cbiAgICAgICAgcGFydCA9IGdyb3VwT2ZQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgICAgIHJlbWFpbmluZ05vZGUgPSBmaXJzdE5vZGU7ICAvLy9cbiAgICAgIFxuICAgICAgcGFydCA9IHJlbWFpbmluZ05vZGUuZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpO1xuICAgIH1cbiAgICBcbiAgICBpZiAocXVhbnRpZmllcnMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBQYXJ0c1snU2VxdWVuY2VPZlBhcnRzUGFydCddLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQuZnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycywgUGFydHMpO1xuICAgICAgXG4gICAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuIl19