'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnfUtil = require('../../util/bnf'),
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
      var part = null;

      var childNodes = this.getChildNodes(),
          nodes = childNodes,
          ///
      quantifiers = quantifiersFromNodes(nodes);

      noWhitespace = noWhitespaceFromNodes(nodes, noWhitespace);

      var nodesLength = nodes.length;

      if (nodesLength === 1) {
        var firstNode = arrayUtil.first(nodes),
            node = firstNode; ///

        part = partFromNode(node, Parts, noWhitespace);
      } else {
        part = partFromNodes(nodes, Parts);
      }

      part = partFromPartAndQuantifiers(part, quantifiers, Parts);

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

function noWhitespaceFromNodes(nodes, noWhitespace) {
  var firstNode = arrayUtil.first(nodes),
      firstNodeNoWhitespaceNode = bnfUtil.isNodeNoWhitespaceNode(firstNode);

  if (firstNodeNoWhitespaceNode) {
    noWhitespace = true;

    var begin = 0,
        deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return noWhitespace;
}

function quantifiersFromNodes(nodes) {
  var quantifiers = [];

  var lastNode = arrayUtil.last(nodes),
      lastNodeQuantifiersNode = bnfUtil.isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    var quantifiersNode = lastNode; ///

    quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode);

    var begin = -1,
        deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return quantifiers;
}

function partFromNode(node, Parts, noWhitespace) {
  var part = node.generatePart(Parts, noWhitespace);

  return part;
}

function partFromNodes(nodes, Parts) {
  var part = null;

  if (part === null) {
    var ChoiceOfPartsPart = Parts['ChoiceOfPartsPart'],
        choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes, Parts);

    if (choiceOfPartsPart !== null) {
      part = choiceOfPartsPart; ///
    }
  }

  if (part === null) {
    var GroupOfPartsPart = Parts['GroupOfPartsPart'],
        groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes, Parts);

    if (groupOfPartsPart !== null) {
      part = groupOfPartsPart; ///
    }
  }

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers, Parts) {
  var quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    var quantifier = quantifiers.shift(),
        sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts);

    part = sequenceOfPartsPart; ///

    part = partFromPartAndQuantifiers(part, quantifiers, Parts);
  }

  return part;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier, Parts) {
  var sequenceOfPartsPart = void 0;

  switch (quantifier) {
    case '?':
      var OptionalPartPart = Parts['OptionalPartPart'],
          optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart;
      break;

    case '*':
      var ZeroOrMorePartsPart = Parts['ZeroOrMorePartsPart'],
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart;
      break;

    case '+':
      var OneOrMorePartsPart = Parts['OneOrMorePartsPart'],
          oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart;
      break;
  }

  return sequenceOfPartsPart;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3BhcnQuanMiXSwibmFtZXMiOlsiYm5mVXRpbCIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0Tm9kZSIsIlBhcnRzIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJxdWFudGlmaWVycyIsInF1YW50aWZpZXJzRnJvbU5vZGVzIiwibm9XaGl0ZXNwYWNlRnJvbU5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJmaXJzdCIsIm5vZGUiLCJwYXJ0RnJvbU5vZGUiLCJwYXJ0RnJvbU5vZGVzIiwicGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJwcm9kdWN0aW9uTmFtZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVOb1doaXRlc3BhY2VOb2RlIiwiYmVnaW4iLCJkZWxldGVDb3VudCIsInNwbGljZSIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsImZyb21Ob2RlcyIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJncm91cE9mUGFydHNQYXJ0IiwicXVhbnRpZmllcnNMZW5ndGgiLCJxdWFudGlmaWVyIiwic2hpZnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllciIsIk9wdGlvbmFsUGFydFBhcnQiLCJvcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxnQkFBUixDQUFoQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsa0JBQVIsQ0FEbEI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLFE7Ozs7Ozs7Ozs7O2lDQUNTQyxLLEVBQU9DLFksRUFBYztBQUNoQyxVQUFJQyxPQUFPLElBQVg7O0FBRUEsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsUUFBUUYsVUFEZDtBQUFBLFVBQzBCO0FBQ3BCRyxvQkFBY0MscUJBQXFCRixLQUFyQixDQUZwQjs7QUFJQUoscUJBQWVPLHNCQUFzQkgsS0FBdEIsRUFBNkJKLFlBQTdCLENBQWY7O0FBRUEsVUFBTVEsY0FBY0osTUFBTUssTUFBMUI7O0FBRUEsVUFBSUQsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLFlBQU1FLFlBQVlkLFVBQVVlLEtBQVYsQ0FBZ0JQLEtBQWhCLENBQWxCO0FBQUEsWUFDTVEsT0FBT0YsU0FEYixDQURxQixDQUVJOztBQUV6QlQsZUFBT1ksYUFBYUQsSUFBYixFQUFtQmIsS0FBbkIsRUFBMEJDLFlBQTFCLENBQVA7QUFDRCxPQUxELE1BS087QUFDTEMsZUFBT2EsY0FBY1YsS0FBZCxFQUFxQkwsS0FBckIsQ0FBUDtBQUNEOztBQUVERSxhQUFPYywyQkFBMkJkLElBQTNCLEVBQWlDSSxXQUFqQyxFQUE4Q04sS0FBOUMsQ0FBUDs7QUFFQSxhQUFPRSxJQUFQO0FBQ0Q7OzsrQ0FFaUNHLEssRUFBT1ksYyxFQUFnQjtBQUFFLGFBQU9uQixnQkFBZ0JvQiwwQkFBaEIsQ0FBMkNiLEtBQTNDLEVBQWtEWSxjQUFsRCxFQUFrRWxCLFFBQWxFLENBQVA7QUFBcUY7Ozs7RUExQjNIRCxlOztBQTZCdkJxQixPQUFPQyxPQUFQLEdBQWlCckIsUUFBakI7O0FBRUEsU0FBU1MscUJBQVQsQ0FBK0JILEtBQS9CLEVBQXNDSixZQUF0QyxFQUFvRDtBQUNsRCxNQUFNVSxZQUFZZCxVQUFVZSxLQUFWLENBQWdCUCxLQUFoQixDQUFsQjtBQUFBLE1BQ01nQiw0QkFBNEIxQixRQUFRMkIsc0JBQVIsQ0FBK0JYLFNBQS9CLENBRGxDOztBQUdBLE1BQUlVLHlCQUFKLEVBQStCO0FBQzdCcEIsbUJBQWUsSUFBZjs7QUFFQSxRQUFNc0IsUUFBUSxDQUFkO0FBQUEsUUFDTUMsY0FBYyxDQURwQjs7QUFHQW5CLFVBQU1vQixNQUFOLENBQWFGLEtBQWIsRUFBb0JDLFdBQXBCO0FBQ0Q7O0FBRUQsU0FBT3ZCLFlBQVA7QUFDRDs7QUFFRCxTQUFTTSxvQkFBVCxDQUE4QkYsS0FBOUIsRUFBcUM7QUFDbkMsTUFBS0MsY0FBYyxFQUFuQjs7QUFFQSxNQUFNb0IsV0FBVzdCLFVBQVU4QixJQUFWLENBQWV0QixLQUFmLENBQWpCO0FBQUEsTUFDTXVCLDBCQUEwQmpDLFFBQVFrQyxxQkFBUixDQUE4QkgsUUFBOUIsQ0FEaEM7O0FBR0EsTUFBSUUsdUJBQUosRUFBNkI7QUFDM0IsUUFBTUUsa0JBQWtCSixRQUF4QixDQUQyQixDQUNROztBQUVuQ3BCLGtCQUFjWCxRQUFRb0MsOEJBQVIsQ0FBdUNELGVBQXZDLENBQWQ7O0FBRUEsUUFBTVAsUUFBUSxDQUFDLENBQWY7QUFBQSxRQUNNQyxjQUFjLENBRHBCOztBQUdBbkIsVUFBTW9CLE1BQU4sQ0FBYUYsS0FBYixFQUFvQkMsV0FBcEI7QUFDRDs7QUFFRCxTQUFPbEIsV0FBUDtBQUNEOztBQUVELFNBQVNRLFlBQVQsQ0FBc0JELElBQXRCLEVBQTRCYixLQUE1QixFQUFtQ0MsWUFBbkMsRUFBaUQ7QUFDL0MsTUFBTUMsT0FBT1csS0FBS21CLFlBQUwsQ0FBa0JoQyxLQUFsQixFQUF5QkMsWUFBekIsQ0FBYjs7QUFFQSxTQUFPQyxJQUFQO0FBQ0Q7O0FBRUQsU0FBU2EsYUFBVCxDQUF1QlYsS0FBdkIsRUFBOEJMLEtBQTlCLEVBQXFDO0FBQ25DLE1BQUlFLE9BQU8sSUFBWDs7QUFFQSxNQUFJQSxTQUFTLElBQWIsRUFBbUI7QUFDakIsUUFBTStCLG9CQUFvQmpDLE1BQU0sbUJBQU4sQ0FBMUI7QUFBQSxRQUNJa0Msb0JBQW9CRCxrQkFBa0JFLFNBQWxCLENBQTRCOUIsS0FBNUIsRUFBbUNMLEtBQW5DLENBRHhCOztBQUdBLFFBQUlrQyxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJoQyxhQUFPZ0MsaUJBQVAsQ0FEOEIsQ0FDSjtBQUMzQjtBQUNGOztBQUVELE1BQUloQyxTQUFTLElBQWIsRUFBbUI7QUFDakIsUUFBTWtDLG1CQUFtQnBDLE1BQU0sa0JBQU4sQ0FBekI7QUFBQSxRQUNJcUMsbUJBQW1CRCxpQkFBaUJELFNBQWpCLENBQTJCOUIsS0FBM0IsRUFBa0NMLEtBQWxDLENBRHZCOztBQUdBLFFBQUlxQyxxQkFBcUIsSUFBekIsRUFBK0I7QUFDN0JuQyxhQUFPbUMsZ0JBQVAsQ0FENkIsQ0FDSDtBQUMzQjtBQUNGOztBQUVELFNBQU9uQyxJQUFQO0FBQ0Q7O0FBRUQsU0FBU2MsMEJBQVQsQ0FBb0NkLElBQXBDLEVBQTBDSSxXQUExQyxFQUF1RE4sS0FBdkQsRUFBOEQ7QUFDNUQsTUFBTXNDLG9CQUFvQmhDLFlBQVlJLE1BQXRDOztBQUVBLE1BQUk0QixvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsUUFBTUMsYUFBYWpDLFlBQVlrQyxLQUFaLEVBQW5CO0FBQUEsUUFDTUMsc0JBQXNCQyx5Q0FBeUN4QyxJQUF6QyxFQUErQ3FDLFVBQS9DLEVBQTJEdkMsS0FBM0QsQ0FENUI7O0FBR0FFLFdBQU91QyxtQkFBUCxDQUp5QixDQUlHOztBQUU1QnZDLFdBQU9jLDJCQUEyQmQsSUFBM0IsRUFBaUNJLFdBQWpDLEVBQThDTixLQUE5QyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT0UsSUFBUDtBQUNEOztBQUVELFNBQVN3Qyx3Q0FBVCxDQUFrRHhDLElBQWxELEVBQXdEcUMsVUFBeEQsRUFBb0V2QyxLQUFwRSxFQUEyRTtBQUN6RSxNQUFJeUMsNEJBQUo7O0FBRUEsVUFBUUYsVUFBUjtBQUNFLFNBQUssR0FBTDtBQUNFLFVBQU1JLG1CQUFtQjNDLE1BQU0sa0JBQU4sQ0FBekI7QUFBQSxVQUNNNEMsbUJBQW1CLElBQUlELGdCQUFKLENBQXFCekMsSUFBckIsQ0FEekI7O0FBR0F1Qyw0QkFBc0JHLGdCQUF0QjtBQUNBOztBQUVGLFNBQUssR0FBTDtBQUNFLFVBQU1DLHNCQUFzQjdDLE1BQU0scUJBQU4sQ0FBNUI7QUFBQSxVQUNNOEMsc0JBQXNCLElBQUlELG1CQUFKLENBQXdCM0MsSUFBeEIsQ0FENUI7O0FBR0F1Qyw0QkFBc0JLLG1CQUF0QjtBQUNBOztBQUVGLFNBQUssR0FBTDtBQUNFLFVBQU1DLHFCQUFxQi9DLE1BQU0sb0JBQU4sQ0FBM0I7QUFBQSxVQUNNZ0QscUJBQXFCLElBQUlELGtCQUFKLENBQXVCN0MsSUFBdkIsQ0FEM0I7O0FBR0F1Qyw0QkFBc0JPLGtCQUF0QjtBQUNBO0FBcEJKOztBQXVCQSxTQUFPUCxtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJuZlV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2JuZicpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBwYXJ0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHF1YW50aWZpZXJzID0gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2RlKG5vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2RlcywgUGFydHMpO1xuICAgIH1cbiAgICBcbiAgICBwYXJ0ID0gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBQYXJ0Tm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGJuZlV0aWwuaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShmaXJzdE5vZGUpO1xuXG4gIGlmIChmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGJlZ2luID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBub2Rlcy5zcGxpY2UoYmVnaW4sIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJldHVybiBub1doaXRlc3BhY2U7XG59XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJzRnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCAgcXVhbnRpZmllcnMgPSBbXTtcblxuICBjb25zdCBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyc05vZGUgPSBibmZVdGlsLmlzTm9kZVF1YW50aWZpZXJzTm9kZShsYXN0Tm9kZSk7XG5cbiAgaWYgKGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlKSB7XG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlID0gbGFzdE5vZGU7ICAvLy9cblxuICAgIHF1YW50aWZpZXJzID0gYm5mVXRpbC5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKTtcblxuICAgIGNvbnN0IGJlZ2luID0gLTEsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgbm9kZXMuc3BsaWNlKGJlZ2luLCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXR1cm4gcXVhbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZShub2RlLCBQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2RlcywgUGFydHMpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGlmIChwYXJ0ID09PSBudWxsKSB7XG4gICAgY29uc3QgQ2hvaWNlT2ZQYXJ0c1BhcnQgPSBQYXJ0c1snQ2hvaWNlT2ZQYXJ0c1BhcnQnXSxcbiAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMsIFBhcnRzKTtcblxuICAgIGlmIChjaG9pY2VPZlBhcnRzUGFydCAhPT0gbnVsbCkge1xuICAgICAgcGFydCA9IGNob2ljZU9mUGFydHNQYXJ0OyAvLy9cbiAgICB9XG4gIH1cblxuICBpZiAocGFydCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IEdyb3VwT2ZQYXJ0c1BhcnQgPSBQYXJ0c1snR3JvdXBPZlBhcnRzUGFydCddLFxuICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gR3JvdXBPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMsIFBhcnRzKTtcblxuICAgIGlmIChncm91cE9mUGFydHNQYXJ0ICE9PSBudWxsKSB7XG4gICAgICBwYXJ0ID0gZ3JvdXBPZlBhcnRzUGFydDsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycywgUGFydHMpIHtcbiAgY29uc3QgcXVhbnRpZmllcnNMZW5ndGggPSBxdWFudGlmaWVycy5sZW5ndGg7XG5cbiAgaWYgKHF1YW50aWZpZXJzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVycy5zaGlmdCgpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIsIFBhcnRzKTtcblxuICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cblxuICAgIHBhcnQgPSBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycywgUGFydHMpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXIocGFydCwgcXVhbnRpZmllciwgUGFydHMpIHtcbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChxdWFudGlmaWVyKSB7XG4gICAgY2FzZSAnPyc6XG4gICAgICBjb25zdCBPcHRpb25hbFBhcnRQYXJ0ID0gUGFydHNbJ09wdGlvbmFsUGFydFBhcnQnXSxcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9wdGlvbmFsUGFydFBhcnQ7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJyonOlxuICAgICAgY29uc3QgWmVyb09yTW9yZVBhcnRzUGFydCA9IFBhcnRzWydaZXJvT3JNb3JlUGFydHNQYXJ0J10sXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICcrJzpcbiAgICAgIGNvbnN0IE9uZU9yTW9yZVBhcnRzUGFydCA9IFBhcnRzWydPbmVPck1vcmVQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xufVxuIl19