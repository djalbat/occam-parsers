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
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, PartNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3BhcnQuanMiXSwibmFtZXMiOlsiYm5mVXRpbCIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJHcm91cE9mUGFydHNQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsIlBhcnROb2RlIiwibm9XaGl0ZXNwYWNlIiwicGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJxdWFudGlmaWVycyIsInF1YW50aWZpZXJzRnJvbU5vZGVzIiwibm9XaGl0ZXNwYWNlRnJvbU5vZGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJmaXJzdCIsIm5vZGUiLCJwYXJ0RnJvbU5vZGUiLCJwYXJ0RnJvbU5vZGVzIiwicGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJydWxlTmFtZSIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJpc05vZGVOb1doaXRlc3BhY2VOb2RlIiwiYmVnaW4iLCJkZWxldGVDb3VudCIsInNwbGljZSIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlUXVhbnRpZmllcnNOb2RlIiwiaXNOb2RlUXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNOb2RlIiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwiZ2VuZXJhdGVQYXJ0IiwiZnJvbU5vZGVzIiwicXVhbnRpZmllcnNMZW5ndGgiLCJxdWFudGlmaWVyIiwic2hpZnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllciIsIm9wdGlvbmFsUGFydFBhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Iiwib25l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U0FBT0osbUJBQVA7QUFDRCIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmZVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9ibmYnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2dyb3VwT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBwYXJ0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHF1YW50aWZpZXJzID0gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2RlKG5vZGUsIG5vV2hpdGVzcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcbiAgICB9XG4gICAgXG4gICAgcGFydCA9IHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lLCBQYXJ0Tm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGJuZlV0aWwuaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShmaXJzdE5vZGUpO1xuXG4gIGlmIChmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGJlZ2luID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBub2Rlcy5zcGxpY2UoYmVnaW4sIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJldHVybiBub1doaXRlc3BhY2U7XG59XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJzRnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCAgcXVhbnRpZmllcnMgPSBbXTtcblxuICBjb25zdCBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyc05vZGUgPSBibmZVdGlsLmlzTm9kZVF1YW50aWZpZXJzTm9kZShsYXN0Tm9kZSk7XG5cbiAgaWYgKGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlKSB7XG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlID0gbGFzdE5vZGU7ICAvLy9cblxuICAgIHF1YW50aWZpZXJzID0gYm5mVXRpbC5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKTtcblxuICAgIGNvbnN0IGJlZ2luID0gLTEsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgbm9kZXMuc3BsaWNlKGJlZ2luLCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXR1cm4gcXVhbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZShub2RlLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMpIHtcbiAgY29uc3QgcGFydCA9IENob2ljZU9mUGFydHNQYXJ0LmZyb21Ob2Rlcyhub2RlcykgfHwgR3JvdXBPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpOyAvLy8gXG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKSB7XG4gIGNvbnN0IHF1YW50aWZpZXJzTGVuZ3RoID0gcXVhbnRpZmllcnMubGVuZ3RoO1xuXG4gIGlmIChxdWFudGlmaWVyc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBxdWFudGlmaWVyID0gcXVhbnRpZmllcnMuc2hpZnQoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyKTtcblxuICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cblxuICAgIHBhcnQgPSBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycyk7XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyKSB7XG4gIGxldCBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocXVhbnRpZmllcikge1xuICAgIGNhc2UgJz8nOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJyonOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICcrJzpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiJdfQ==