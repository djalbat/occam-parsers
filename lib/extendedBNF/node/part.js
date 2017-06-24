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
            remainingNode = firstNode; ///

        part = remainingNode.generatePart(Parts, noWhitespace);
      } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3BhcnQuanMiXSwibmFtZXMiOlsiYm5mVXRpbCIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0Tm9kZSIsIlBhcnRzIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJxdWFudGlmaWVycyIsInF1YW50aWZpZXJzRnJvbU5vZGVzIiwibm9XaGl0ZXNwYWNlRnJvbU5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJmaXJzdCIsInJlbWFpbmluZ05vZGUiLCJnZW5lcmF0ZVBhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwiZnJvbU5vZGVzIiwiR3JvdXBPZlBhcnRzUGFydCIsImdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyIsInByb2R1Y3Rpb25OYW1lIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImlzTm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJiZWdpbiIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVRdWFudGlmaWVyc05vZGUiLCJpc05vZGVRdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc0xlbmd0aCIsInF1YW50aWZpZXIiLCJzaGlmdCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyIiwiT3B0aW9uYWxQYXJ0UGFydCIsIm9wdGlvbmFsUGFydFBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9y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QUssR0FBTDtBQUNFLFVBQU1DLHFCQUFxQjdDLE1BQU0sb0JBQU4sQ0FBM0I7QUFBQSxVQUNNOEMscUJBQXFCLElBQUlELGtCQUFKLENBQXVCM0MsSUFBdkIsQ0FEM0I7O0FBR0FxQyw0QkFBc0JPLGtCQUF0QjtBQUNBO0FBcEJKOztBQXVCQSxTQUFPUCxtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJuZlV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2JuZicpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBwYXJ0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHF1YW50aWZpZXJzID0gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgICAgcmVtYWluaW5nTm9kZSA9IGZpcnN0Tm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcmVtYWluaW5nTm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJ0ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IENob2ljZU9mUGFydHNQYXJ0ID0gUGFydHNbJ0Nob2ljZU9mUGFydHNQYXJ0J10sXG4gICAgICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gQ2hvaWNlT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzLCBQYXJ0cyk7XG5cbiAgICAgICAgaWYgKGNob2ljZU9mUGFydHNQYXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFydCA9IGNob2ljZU9mUGFydHNQYXJ0OyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFydCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBHcm91cE9mUGFydHNQYXJ0ID0gUGFydHNbJ0dyb3VwT2ZQYXJ0c1BhcnQnXSxcbiAgICAgICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzLCBQYXJ0cyk7XG5cbiAgICAgICAgaWYgKGdyb3VwT2ZQYXJ0c1BhcnQgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJ0ID0gZ3JvdXBPZlBhcnRzUGFydDsgIC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHBhcnQgPSBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycywgUGFydHMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBub1doaXRlc3BhY2VGcm9tTm9kZXMobm9kZXMsIG5vV2hpdGVzcGFjZSkge1xuICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlID0gYm5mVXRpbC5pc05vZGVOb1doaXRlc3BhY2VOb2RlKGZpcnN0Tm9kZSk7XG5cbiAgaWYgKGZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuXG4gICAgY29uc3QgYmVnaW4gPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIG5vZGVzLnNwbGljZShiZWdpbiwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmV0dXJuIG5vV2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0ICBxdWFudGlmaWVycyA9IFtdO1xuXG4gIGNvbnN0IGxhc3ROb2RlID0gYXJyYXlVdGlsLmxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSA9IGJuZlV0aWwuaXNOb2RlUXVhbnRpZmllcnNOb2RlKGxhc3ROb2RlKTtcblxuICBpZiAobGFzdE5vZGVRdWFudGlmaWVyc05vZGUpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyc05vZGUgPSBsYXN0Tm9kZTsgIC8vL1xuXG4gICAgcXVhbnRpZmllcnMgPSBibmZVdGlsLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgY29uc3QgYmVnaW4gPSAtMSxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBub2Rlcy5zcGxpY2UoYmVnaW4sIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJldHVybiBxdWFudGlmaWVycztcbn1cblxuZnVuY3Rpb24gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKSB7XG4gIGNvbnN0IHF1YW50aWZpZXJzTGVuZ3RoID0gcXVhbnRpZmllcnMubGVuZ3RoO1xuXG4gIGlmIChxdWFudGlmaWVyc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBxdWFudGlmaWVyID0gcXVhbnRpZmllcnMuc2hpZnQoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyLCBQYXJ0cyk7XG5cbiAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgICBwYXJ0ID0gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIsIFBhcnRzKSB7XG4gIGxldCBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocXVhbnRpZmllcikge1xuICAgIGNhc2UgJz8nOlxuICAgICAgY29uc3QgT3B0aW9uYWxQYXJ0UGFydCA9IFBhcnRzWydPcHRpb25hbFBhcnRQYXJ0J10sXG4gICAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICcqJzpcbiAgICAgIGNvbnN0IFplcm9Pck1vcmVQYXJ0c1BhcnQgPSBQYXJ0c1snWmVyb09yTW9yZVBhcnRzUGFydCddLFxuICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnKyc6XG4gICAgICBjb25zdCBPbmVPck1vcmVQYXJ0c1BhcnQgPSBQYXJ0c1snT25lT3JNb3JlUGFydHNQYXJ0J10sXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiJdfQ==