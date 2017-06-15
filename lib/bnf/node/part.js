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
          quantifiers = null,
          firstChildNode = arrayUtil.first(childNodes);

      var firstChildNodeNoWhitespaceNode = nodeUtil.isNodeNoWhitespaceNode(firstChildNode);

      if (firstChildNodeNoWhitespaceNode) {
        noWhitespace = true;

        childNodes = arrayUtil.discardFirst(childNodes);

        firstChildNode = arrayUtil.first(childNodes);
      }

      var lastChildNode = arrayUtil.last(childNodes),
          lastChildNodeQuantifiersNode = nodeUtil.isNodeQuantifiersNode(lastChildNode);

      if (lastChildNodeQuantifiersNode) {
        var quantifiersNode = lastChildNode; ///

        quantifiers = nodeUtil.quantifiersFromQuantifiersNode(quantifiersNode);

        arrayUtil.discardLast(childNodes);
      }

      var remainingChildNode = firstChildNode; ///

      part = remainingChildNode.generatePart(Parts, noWhitespace);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5vZGVVdGlsIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJxdWFudGlmaWVycyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdENoaWxkTm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVOb1doaXRlc3BhY2VOb2RlIiwiZGlzY2FyZEZpcnN0IiwibGFzdENoaWxkTm9kZSIsImxhc3QiLCJsYXN0Q2hpbGROb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwiZGlzY2FyZExhc3QiLCJyZW1haW5pbmdDaGlsZE5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsaUJBQVIsQ0FBakI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGtCQUFSLENBRGxCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxROzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBSUMsYUFBSjtBQUFBLFVBQ0lDLGFBQWEsS0FBS0MsYUFBTCxFQURqQjtBQUFBLFVBRUlDLGNBQWMsSUFGbEI7QUFBQSxVQUdJQyxpQkFBaUJULFVBQVVVLEtBQVYsQ0FBZ0JKLFVBQWhCLENBSHJCOztBQUtBLFVBQU1LLGlDQUFpQ2IsU0FBU2Msc0JBQVQsQ0FBZ0NILGNBQWhDLENBQXZDOztBQUVBLFVBQUlFLDhCQUFKLEVBQW9DO0FBQ2xDUCx1QkFBZSxJQUFmOztBQUVBRSxxQkFBYU4sVUFBVWEsWUFBVixDQUF1QlAsVUFBdkIsQ0FBYjs7QUFFQUcseUJBQWlCVCxVQUFVVSxLQUFWLENBQWdCSixVQUFoQixDQUFqQjtBQUNEOztBQUVELFVBQU1RLGdCQUFnQmQsVUFBVWUsSUFBVixDQUFlVCxVQUFmLENBQXRCO0FBQUEsVUFDTVUsK0JBQStCbEIsU0FBU21CLHFCQUFULENBQStCSCxhQUEvQixDQURyQzs7QUFHQSxVQUFJRSw0QkFBSixFQUFrQztBQUNoQyxZQUFNRSxrQkFBa0JKLGFBQXhCLENBRGdDLENBQ1E7O0FBRXhDTixzQkFBY1YsU0FBU3FCLDhCQUFULENBQXdDRCxlQUF4QyxDQUFkOztBQUVBbEIsa0JBQVVvQixXQUFWLENBQXNCZCxVQUF0QjtBQUNEOztBQUVELFVBQU1lLHFCQUFxQlosY0FBM0IsQ0EzQmdDLENBMkJXOztBQUUzQ0osYUFBT2dCLG1CQUFtQkMsWUFBbkIsQ0FBZ0NuQixLQUFoQyxFQUF1Q0MsWUFBdkMsQ0FBUDs7QUFFQSxVQUFJSSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsWUFBTWUsc0JBQXNCcEIsTUFBTSxxQkFBTixDQUE1QjtBQUFBLFlBQ01xQixzQkFBc0JELG9CQUFvQkUsc0JBQXBCLENBQTJDcEIsSUFBM0MsRUFBaURHLFdBQWpELEVBQThETCxLQUE5RCxDQUQ1Qjs7QUFHQUUsZUFBT21CLG1CQUFQLENBSndCLENBSUk7QUFDN0I7O0FBRUQsYUFBT25CLElBQVA7QUFDRDs7OytDQUVpQ3FCLEssRUFBT0MsYyxFQUFnQjtBQUFFLGFBQU8xQixnQkFBZ0IyQiwwQkFBaEIsQ0FBMkNGLEtBQTNDLEVBQWtEQyxjQUFsRCxFQUFrRXpCLFFBQWxFLENBQVA7QUFBcUY7Ozs7RUExQzNIRCxlOztBQTZDdkI0QixPQUFPQyxPQUFQLEdBQWlCNUIsUUFBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgbm9kZVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL25vZGUnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydCxcbiAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBxdWFudGlmaWVycyA9IG51bGwsXG4gICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IG5vZGVVdGlsLmlzTm9kZU5vV2hpdGVzcGFjZU5vZGUoZmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgaWYgKGZpcnN0Q2hpbGROb2RlTm9XaGl0ZXNwYWNlTm9kZSkge1xuICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgICAgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkRmlyc3QoY2hpbGROb2Rlcyk7XG4gICAgICBcbiAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsYXN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZVF1YW50aWZpZXJzTm9kZSA9IG5vZGVVdGlsLmlzTm9kZVF1YW50aWZpZXJzTm9kZShsYXN0Q2hpbGROb2RlKTtcblxuICAgIGlmIChsYXN0Q2hpbGROb2RlUXVhbnRpZmllcnNOb2RlKSB7XG4gICAgICBjb25zdCBxdWFudGlmaWVyc05vZGUgPSBsYXN0Q2hpbGROb2RlOyAgLy8vXG4gICAgICBcbiAgICAgIHF1YW50aWZpZXJzID0gbm9kZVV0aWwucXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG4gICAgICBcbiAgICAgIGFycmF5VXRpbC5kaXNjYXJkTGFzdChjaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVtYWluaW5nQ2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGU7IC8vL1xuXG4gICAgcGFydCA9IHJlbWFpbmluZ0NoaWxkTm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSk7XG4gICAgXG4gICAgaWYgKHF1YW50aWZpZXJzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gUGFydHNbJ1NlcXVlbmNlT2ZQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKTtcbiAgICAgIFxuICAgICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBQYXJ0Tm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcbiJdfQ==