'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var bnfUtilities = require('../../utilities/bnf'),
    OptionalPartPart = require('../part/nonTerminal/optionalPart'),
    ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
    GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
    ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var array = necessary.array,
    first = array.first,
    last = array.last;

var PartNode = function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, (PartNode.__proto__ || Object.getPrototypeOf(PartNode)).apply(this, arguments));
  }

  _createClass(PartNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace) {
      var part = null;

      var childNodes = this.getChildNodes(),
          nodes = childNodes,
          ///
      quantifiers = quantifiersFromNodes(nodes);

      noWhitespace = noWhitespaceFromNodes(nodes, noWhitespace);

      var nodesLength = nodes.length;

      if (nodesLength === 1) {
        var firstNode = first(nodes),
            node = firstNode; ///

        part = partFromNode(node, noWhitespace);
      } else {
        part = partFromNodes(nodes);
      }

      part = partFromPartAndQuantifiers(part, quantifiers);

      return part;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(PartNode, nodes, ruleName);
    }
  }]);

  return PartNode;
}(NonTerminalNode);

module.exports = PartNode;

function noWhitespaceFromNodes(nodes, noWhitespace) {
  var firstNode = first(nodes),
      firstNodeNoWhitespaceNode = bnfUtilities.isNodeNoWhitespaceNode(firstNode);

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

  var lastNode = last(nodes),
      lastNodeQuantifiersNode = bnfUtilities.isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    var quantifiersNode = lastNode; ///

    quantifiers = bnfUtilities.quantifiersFromQuantifiersNode(quantifiersNode);

    var begin = -1,
        deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return quantifiers;
}

function partFromNode(node, noWhitespace) {
  var part = node.generatePart(noWhitespace);

  return part;
}

function partFromNodes(nodes) {
  var part = ChoiceOfPartsPart.fromNodes(nodes) || GroupOfPartsPart.fromNodes(nodes); /// 

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers) {
  var quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    var quantifier = quantifiers.shift(),
        sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier);

    part = sequenceOfPartsPart; ///

    part = partFromPartAndQuantifiers(part, quantifiers);
  }

  return part;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier) {
  var sequenceOfPartsPart = void 0;

  switch (quantifier) {
    case '?':
      var optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart; ///
      break;

    case '*':
      var zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart; ///
      break;

    case '+':
      var oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart; ///
      break;
  }

  return sequenceOfPartsPart;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJPcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsImFycmF5IiwiZmlyc3QiLCJsYXN0IiwiUGFydE5vZGUiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllcnNGcm9tTm9kZXMiLCJub1doaXRlc3BhY2VGcm9tTm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsIm5vZGUiLCJwYXJ0RnJvbU5vZGUiLCJwYXJ0RnJvbU5vZGVzIiwicGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJydWxlTmFtZSIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVOb1doaXRlc3BhY2VOb2RlIiwiYmVnaW4iLCJkZWxldGVDb3VudCIsInNwbGljZSIsImxhc3ROb2RlIiwibGFzdE5vZGVRdWFudGlmaWVyc05vZGUiLCJpc05vZGVRdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUiLCJnZW5lcmF0ZVBhcnQiLCJmcm9tTm9kZXMiLCJxdWFudGlmaWVyc0xlbmd0aCIsInF1YW50aWZpZXIiLCJzaGlmdCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyIiwib3B0aW9uYWxQYXJ0UGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQi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STlDLGtCQUFKLENBQXVCUyxJQUF2QixDQUEzQjs7QUFFQWlDLDRCQUFzQkksa0JBQXRCLENBSEYsQ0FHNEM7QUFDMUM7QUFqQko7O0FBb0JBLFNBQU9KLG1CQUFQO0FBQ0QiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGJuZlV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9ibmYnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydCcpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBHcm91cE9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBsYXN0IH0gPSBhcnJheTtcblxuY2xhc3MgUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHBhcnQgPSBudWxsO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgcXVhbnRpZmllcnMgPSBxdWFudGlmaWVyc0Zyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2VGcm9tTm9kZXMobm9kZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgICAgIG5vZGUgPSBmaXJzdE5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZShub2RlLCBub1doaXRlc3BhY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgfVxuICAgIFxuICAgIHBhcnQgPSBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKFBhcnROb2RlLCBub2RlcywgcnVsZU5hbWUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydE5vZGU7XG5cbmZ1bmN0aW9uIG5vV2hpdGVzcGFjZUZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGJuZlV0aWxpdGllcy5pc05vZGVOb1doaXRlc3BhY2VOb2RlKGZpcnN0Tm9kZSk7XG5cbiAgaWYgKGZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuXG4gICAgY29uc3QgYmVnaW4gPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIG5vZGVzLnNwbGljZShiZWdpbiwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmV0dXJuIG5vV2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0ICBxdWFudGlmaWVycyA9IFtdO1xuXG4gIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgIGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlID0gYm5mVXRpbGl0aWVzLmlzTm9kZVF1YW50aWZpZXJzTm9kZShsYXN0Tm9kZSk7XG5cbiAgaWYgKGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlKSB7XG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlID0gbGFzdE5vZGU7ICAvLy9cblxuICAgIHF1YW50aWZpZXJzID0gYm5mVXRpbGl0aWVzLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgY29uc3QgYmVnaW4gPSAtMSxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBub2Rlcy5zcGxpY2UoYmVnaW4sIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJldHVybiBxdWFudGlmaWVycztcbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2RlKG5vZGUsIG5vV2hpdGVzcGFjZSkge1xuICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcykge1xuICBjb25zdCBwYXJ0ID0gQ2hvaWNlT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzKSB8fCBHcm91cE9mUGFydHNQYXJ0LmZyb21Ob2Rlcyhub2Rlcyk7IC8vLyBcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMpIHtcbiAgY29uc3QgcXVhbnRpZmllcnNMZW5ndGggPSBxdWFudGlmaWVycy5sZW5ndGg7XG5cbiAgaWYgKHF1YW50aWZpZXJzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVycy5zaGlmdCgpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIpO1xuXG4gICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuXG4gICAgcGFydCA9IHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKTtcbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIpIHtcbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChxdWFudGlmaWVyKSB7XG4gICAgY2FzZSAnPyc6XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnKic6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJysnOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xufVxuIl19