'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnfUtil = require('../../util/bnf'),
    arrayUtil = require('../../util/array'),
    GroupOfPartsPart = require('../part/groupOfParts'),
    ChoiceOfPartsPart = require('../part/choiceOfParts'),
    OptionalPartPart = require('../part/optionalPart'),
    ZeroOrMorePartsPart = require('../part/zeroOrMoreParts'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    NonTerminalNode = require('../../common/node/nonTerminal');

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
        var firstNode = arrayUtil.first(nodes),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbImJuZlV0aWwiLCJyZXF1aXJlIiwiYXJyYXlVdGlsIiwiR3JvdXBPZlBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbE5vZGUiLCJQYXJ0Tm9kZSIsIm5vV2hpdGVzcGFjZSIsInBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwicXVhbnRpZmllcnMiLCJxdWFudGlmaWVyc0Zyb21Ob2RlcyIsIm5vV2hpdGVzcGFjZUZyb21Ob2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIiwiZmlyc3QiLCJub2RlIiwicGFydEZyb21Ob2RlIiwicGFydEZyb21Ob2RlcyIsInBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzIiwicnVsZU5hbWUiLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImJlZ2luIiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJsYXN0Tm9kZSIsImxhc3QiLCJsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSIsImlzTm9kZVF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzTm9kZSIsInF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZSIsImdlbmVyYXRlUGFydCIsImZyb21Ob2RlcyIsInF1YW50aWZpZXJzTGVuZ3RoIiwicXVhbnRpZmllciIsInNoaWZ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXIiLCJvcHRpb25hbFBhcnRQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsIm9uZU9yTW9yZVBh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QkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJuZlV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2JuZicpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgR3JvdXBPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cblxuY2xhc3MgUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHBhcnQgPSBudWxsO1xuXG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgcXVhbnRpZmllcnMgPSBxdWFudGlmaWVyc0Zyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2VGcm9tTm9kZXMobm9kZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcbiAgICBcbiAgICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGFycmF5VXRpbC5maXJzdChub2RlcyksXG4gICAgICAgICAgICBub2RlID0gZmlyc3ROb2RlOyAgLy8vXG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGUobm9kZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgICBcbiAgICBwYXJ0ID0gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShQYXJ0Tm9kZSwgbm9kZXMsIHJ1bGVOYW1lKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBub1doaXRlc3BhY2VGcm9tTm9kZXMobm9kZXMsIG5vV2hpdGVzcGFjZSkge1xuICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlID0gYm5mVXRpbC5pc05vZGVOb1doaXRlc3BhY2VOb2RlKGZpcnN0Tm9kZSk7XG5cbiAgaWYgKGZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuXG4gICAgY29uc3QgYmVnaW4gPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIG5vZGVzLnNwbGljZShiZWdpbiwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmV0dXJuIG5vV2hpdGVzcGFjZTtcbn1cblxuZnVuY3Rpb24gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0ICBxdWFudGlmaWVycyA9IFtdO1xuXG4gIGNvbnN0IGxhc3ROb2RlID0gYXJyYXlVdGlsLmxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJzTm9kZSA9IGJuZlV0aWwuaXNOb2RlUXVhbnRpZmllcnNOb2RlKGxhc3ROb2RlKTtcblxuICBpZiAobGFzdE5vZGVRdWFudGlmaWVyc05vZGUpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyc05vZGUgPSBsYXN0Tm9kZTsgIC8vL1xuXG4gICAgcXVhbnRpZmllcnMgPSBibmZVdGlsLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgY29uc3QgYmVnaW4gPSAtMSxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBub2Rlcy5zcGxpY2UoYmVnaW4sIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJldHVybiBxdWFudGlmaWVycztcbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2RlKG5vZGUsIG5vV2hpdGVzcGFjZSkge1xuICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcykge1xuICBjb25zdCBwYXJ0ID0gQ2hvaWNlT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzKSB8fCBHcm91cE9mUGFydHNQYXJ0LmZyb21Ob2Rlcyhub2Rlcyk7IC8vLyBcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMpIHtcbiAgY29uc3QgcXVhbnRpZmllcnNMZW5ndGggPSBxdWFudGlmaWVycy5sZW5ndGg7XG5cbiAgaWYgKHF1YW50aWZpZXJzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVycy5zaGlmdCgpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIpO1xuXG4gICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuXG4gICAgcGFydCA9IHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKTtcbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyKHBhcnQsIHF1YW50aWZpZXIpIHtcbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChxdWFudGlmaWVyKSB7XG4gICAgY2FzZSAnPyc6XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnKic6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJysnOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xufVxuIl19