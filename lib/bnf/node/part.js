'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var bnfUtilities = require('../../utilities/bnf'),
    GroupOfPartsPart = require('../part/groupOfParts'),
    ChoiceOfPartsPart = require('../part/choiceOfParts'),
    OptionalPartPart = require('../part/optionalPart'),
    ZeroOrMorePartsPart = require('../part/zeroOrMoreParts'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var array = necessary.array;

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
        var firstNode = array.first(nodes),
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
  var firstNode = array.first(nodes),
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

  var lastNode = array.last(nodes),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJHcm91cE9mUGFydHNQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJPcHRpb25hbFBhcnRQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsImFycmF5IiwiUGFydE5vZGUiLCJub1doaXRlc3BhY2UiLCJwYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInF1YW50aWZpZXJzIiwicXVhbnRpZmllcnNGcm9tTm9kZXMiLCJub1doaXRlc3BhY2VGcm9tTm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsImZpcnN0Iiwibm9kZSIsInBhcnRGcm9tTm9kZSIsInBhcnRGcm9tTm9kZXMiLCJwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyIsInJ1bGVOYW1lIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSIsImlzTm9kZU5vV2hpdGVzcGFjZU5vZGUiLCJiZWdpbiIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVRdWFudGlmaWVyc05vZGUiLCJpc05vZGVRdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc05vZGUiLCJxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUiLCJnZW5lcmF0ZVBhcnQiLCJmcm9tTm9kZXMiLCJxdWFudGlmaWVyc0xlbmd0aCIsInF1YW50aWZpZXIiLCJzaGlmdCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVyIiwib3B0aW9uYWxQYXJ0UGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQi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RzRDO0FBQzFDO0FBakJKOztBQW9CQSxTQUFPSixtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBHcm91cE9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ncm91cE9mUGFydHMnKSxcbiAgICAgIENob2ljZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9jaG9pY2VPZlBhcnRzJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5O1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgcGFydCA9IG51bGw7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBxdWFudGlmaWVycyA9IHF1YW50aWZpZXJzRnJvbU5vZGVzKG5vZGVzKTtcblxuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZUZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuICAgIFxuICAgIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXkuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2RlKG5vZGUsIG5vV2hpdGVzcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcbiAgICB9XG4gICAgXG4gICAgcGFydCA9IHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUoUGFydE5vZGUsIG5vZGVzLCBydWxlTmFtZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXkuZmlyc3Qobm9kZXMpLFxuICAgICAgICBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlID0gYm5mVXRpbGl0aWVzLmlzTm9kZU5vV2hpdGVzcGFjZU5vZGUoZmlyc3ROb2RlKTtcblxuICBpZiAoZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICBjb25zdCBiZWdpbiA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgbm9kZXMuc3BsaWNlKGJlZ2luLCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXR1cm4gbm9XaGl0ZXNwYWNlO1xufVxuXG5mdW5jdGlvbiBxdWFudGlmaWVyc0Zyb21Ob2Rlcyhub2Rlcykge1xuICBsZXQgIHF1YW50aWZpZXJzID0gW107XG5cbiAgY29uc3QgbGFzdE5vZGUgPSBhcnJheS5sYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyc05vZGUgPSBibmZVdGlsaXRpZXMuaXNOb2RlUXVhbnRpZmllcnNOb2RlKGxhc3ROb2RlKTtcblxuICBpZiAobGFzdE5vZGVRdWFudGlmaWVyc05vZGUpIHtcbiAgICBjb25zdCBxdWFudGlmaWVyc05vZGUgPSBsYXN0Tm9kZTsgIC8vL1xuXG4gICAgcXVhbnRpZmllcnMgPSBibmZVdGlsaXRpZXMucXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG5cbiAgICBjb25zdCBiZWdpbiA9IC0xLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIG5vZGVzLnNwbGljZShiZWdpbiwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgcmV0dXJuIHF1YW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGUobm9kZSwgbm9XaGl0ZXNwYWNlKSB7XG4gIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGNvbnN0IHBhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpIHx8IEdyb3VwT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzKTsgLy8vIFxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycykge1xuICBjb25zdCBxdWFudGlmaWVyc0xlbmd0aCA9IHF1YW50aWZpZXJzLmxlbmd0aDtcblxuICBpZiAocXVhbnRpZmllcnNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJzLnNoaWZ0KCksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXIocGFydCwgcXVhbnRpZmllcik7XG5cbiAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgICBwYXJ0ID0gcGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFF1YW50aWZpZXIocGFydCwgcXVhbnRpZmllcikge1xuICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHF1YW50aWZpZXIpIHtcbiAgICBjYXNlICc/JzpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9wdGlvbmFsUGFydFBhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICcqJzpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnKyc6XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG59XG4iXX0=