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
        var GroupOfPartsPart = Parts['GroupOfPartsPart'],
            groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes, Parts);

        part = groupOfPartsPart; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5vZGVVdGlsIiwicmVxdWlyZSIsImFycmF5VXRpbCIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsImZpcnN0Tm9kZSIsImZpcnN0IiwiZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImlzTm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJkaXNjYXJkRmlyc3QiLCJxdWFudGlmaWVycyIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwiZGlzY2FyZExhc3QiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJncm91cE9mUGFydHNQYXJ0IiwiZnJvbU5vZGVzIiwicmVtYWluaW5nTm9kZSIsImdlbmVyYXRlUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiZnJvbVBhcnRBbmRRdWFudGlmaWVycyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsaUJBQVIsQ0FBakI7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGtCQUFSLENBRGxCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxROzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBSUMsYUFBSjtBQUFBLFVBQ0lDLGFBQWEsS0FBS0MsYUFBTCxFQURqQjtBQUFBLFVBRUlDLFFBQVFGLFVBRlosQ0FEZ0MsQ0FHUjs7QUFFeEIsVUFBTUcsWUFBWVQsVUFBVVUsS0FBVixDQUFnQkYsS0FBaEIsQ0FBbEI7QUFBQSxVQUNNRyw0QkFBNEJiLFNBQVNjLHNCQUFULENBQWdDSCxTQUFoQyxDQURsQzs7QUFHQSxVQUFJRSx5QkFBSixFQUErQjtBQUM3QlAsdUJBQWUsSUFBZjs7QUFFQUksZ0JBQVFSLFVBQVVhLFlBQVYsQ0FBdUJMLEtBQXZCLENBQVI7QUFDRDs7QUFFRCxVQUFLTSxjQUFjLElBQW5COztBQUVBLFVBQU1DLFdBQVdmLFVBQVVnQixJQUFWLENBQWVSLEtBQWYsQ0FBakI7QUFBQSxVQUNNUywwQkFBMEJuQixTQUFTb0IscUJBQVQsQ0FBK0JILFFBQS9CLENBRGhDOztBQUdBLFVBQUlFLHVCQUFKLEVBQTZCO0FBQzNCLFlBQU1FLGtCQUFrQkosUUFBeEIsQ0FEMkIsQ0FDUTs7QUFFbkNELHNCQUFjaEIsU0FBU3NCLDhCQUFULENBQXdDRCxlQUF4QyxDQUFkOztBQUVBWCxnQkFBUVIsVUFBVXFCLFdBQVYsQ0FBc0JiLEtBQXRCLENBQVI7QUFDRDs7QUFFRCxVQUFNYyxjQUFjZCxNQUFNZSxNQUExQjs7QUFFQSxVQUFJRCxjQUFjLENBQWxCLEVBQXFCO0FBQ25CLFlBQU1FLG1CQUFtQnJCLE1BQU0sa0JBQU4sQ0FBekI7QUFBQSxZQUNNc0IsbUJBQW1CRCxpQkFBaUJFLFNBQWpCLENBQTJCbEIsS0FBM0IsRUFBa0NMLEtBQWxDLENBRHpCOztBQUdBRSxlQUFPb0IsZ0JBQVAsQ0FKbUIsQ0FJTztBQUMzQixPQUxELE1BS087QUFDTCxZQUFNaEIsYUFBWVQsVUFBVVUsS0FBVixDQUFnQkYsS0FBaEIsQ0FBbEI7QUFBQSxZQUNNbUIsZ0JBQWdCbEIsVUFEdEIsQ0FESyxDQUU2Qjs7QUFFbENKLGVBQU9zQixjQUFjQyxZQUFkLENBQTJCekIsS0FBM0IsRUFBa0NDLFlBQWxDLENBQVA7QUFDRDs7QUFFRCxVQUFJVSxnQkFBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsWUFBTWUsc0JBQXNCMUIsTUFBTSxxQkFBTixDQUE1QjtBQUFBLFlBQ00yQixzQkFBc0JELG9CQUFvQkUsc0JBQXBCLENBQTJDMUIsSUFBM0MsRUFBaURTLFdBQWpELEVBQThEWCxLQUE5RCxDQUQ1Qjs7QUFHQUUsZUFBT3lCLG1CQUFQLENBSndCLENBSUk7QUFDN0I7O0FBRUQsYUFBT3pCLElBQVA7QUFDRDs7OytDQUVpQ0csSyxFQUFPd0IsYyxFQUFnQjtBQUFFLGFBQU8vQixnQkFBZ0JnQywwQkFBaEIsQ0FBMkN6QixLQUEzQyxFQUFrRHdCLGNBQWxELEVBQWtFOUIsUUFBbEUsQ0FBUDtBQUFxRjs7OztFQXBEM0hELGU7O0FBdUR2QmlDLE9BQU9DLE9BQVAsR0FBaUJqQyxRQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBub2RlVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvbm9kZScpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBwYXJ0LFxuICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG4gICAgXG4gICAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgICBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlID0gbm9kZVV0aWwuaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShmaXJzdE5vZGUpO1xuXG4gICAgaWYgKGZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaXJzdChub2Rlcyk7XG4gICAgfVxuXG4gICAgbGV0ICBxdWFudGlmaWVycyA9IG51bGw7XG5cbiAgICBjb25zdCBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSA9IG5vZGVVdGlsLmlzTm9kZVF1YW50aWZpZXJzTm9kZShsYXN0Tm9kZSk7XG4gICAgXG4gICAgaWYgKGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlKSB7XG4gICAgICBjb25zdCBxdWFudGlmaWVyc05vZGUgPSBsYXN0Tm9kZTsgIC8vL1xuICAgICAgXG4gICAgICBxdWFudGlmaWVycyA9IG5vZGVVdGlsLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgICBub2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkTGFzdChub2Rlcyk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChub2Rlc0xlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IEdyb3VwT2ZQYXJ0c1BhcnQgPSBQYXJ0c1snR3JvdXBPZlBhcnRzUGFydCddLFxuICAgICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzLCBQYXJ0cyk7XG4gICAgICBcbiAgICAgIHBhcnQgPSBncm91cE9mUGFydHNQYXJ0OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGFycmF5VXRpbC5maXJzdChub2RlcyksXG4gICAgICAgICAgICByZW1haW5pbmdOb2RlID0gZmlyc3ROb2RlOyAgLy8vXG4gICAgICBcbiAgICAgIHBhcnQgPSByZW1haW5pbmdOb2RlLmdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHF1YW50aWZpZXJzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gUGFydHNbJ1NlcXVlbmNlT2ZQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKTtcbiAgICAgIFxuICAgICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBQYXJ0Tm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcbiJdfQ==