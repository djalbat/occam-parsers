'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ruleNames = require('../ruleNames'),
    bnfUtilities = require('../../utilities/bnf'),
    arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    OptionalPartPart = require('../part/nonTerminal/optionalPart'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts');

var last = arrayUtilities.last,
    isNodeQuantifierNode = bnfUtilities.isNodeQuantifierNode,
    ruleNameFromQuantifierNode = bnfUtilities.ruleNameFromQuantifierNode,
    OptionalQuantifierRuleName = ruleNames.OptionalQuantifierRuleName,
    OneOrMoreQuantifierRuleName = ruleNames.OneOrMoreQuantifierRuleName,
    ZeroOrMoreQuantifierRuleName = ruleNames.ZeroOrMoreQuantifierRuleName;

var PartNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartNode).apply(this, arguments));
  }

  _createClass(PartNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes);
      return part;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(PartNode, ruleName, childNodes);
    }
  }]);

  return PartNode;
}(NonTerminalNode);

module.exports = PartNode;

function partFromNodes(nodes) {
  var part = null;
  var nodesLength = nodes.length;

  if (nodesLength === 1) {
    var node = nodes.pop(),
        lookAhead = false;
    part = node.generatePart(lookAhead);
  } else {
    var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);

    if (lastNodeQuantifierNode) {
      var _node = nodes.pop(),
          quantifierNode = _node; ///


      part = partFromNodes(nodes);
      var ruleName = ruleNameFromQuantifierNode(quantifierNode),
          sequenceOfPartsPart = sequenceOfPartsPartFromPartAndRuleName(part, ruleName);
      part = sequenceOfPartsPart; ///
    } else {
      nodes.shift();
      part = partFromNodes(nodes);
    }
  }

  return part;
}

function isLastNodeQuantifierNode(nodes) {
  var lastNode = last(nodes),
      lastNodeQuantifierNode = isNodeQuantifierNode(lastNode);
  return lastNodeQuantifierNode;
}

function sequenceOfPartsPartFromPartAndRuleName(part, ruleName) {
  var sequenceOfPartsPart;

  switch (ruleName) {
    case OptionalQuantifierRuleName:
      var optionalPartPart = new OptionalPartPart(part);
      sequenceOfPartsPart = optionalPartPart; ///

      break;

    case OneOrMoreQuantifierRuleName:
      var oneOrMorePartsPart = new OneOrMorePartsPart(part);
      sequenceOfPartsPart = oneOrMorePartsPart; ///

      break;

    case ZeroOrMoreQuantifierRuleName:
      var zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
      sequenceOfPartsPart = zeroOrMorePartsPart; ///

      break;
  }

  return sequenceOfPartsPart;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsImJuZlV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiTm9uVGVybWluYWxOb2RlIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJsYXN0IiwiaXNOb2RlUXVhbnRpZmllck5vZGUiLCJydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlBhcnROb2RlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwiZ2VuZXJhdGVQYXJ0IiwibGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsImlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXJOb2RlIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0Tm9kZSIsIm9wdGlvbmFsUGFydFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FENUI7QUFBQSxJQUVNRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyx1QkFB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RSxVQUFNMkIsZ0JBQWdCLEdBQUcsSUFBSWpDLGdCQUFKLENBQXFCZSxJQUFyQixDQUF6QjtBQUVBYyxNQUFBQSxtQkFBbUIsR0FBR0ksZ0JBQXRCLENBSEYsQ0FHMEM7O0FBQ3hDOztBQUVGLFNBQUsxQiwyQkFBTDtBQUNFLFVBQU0yQixrQkFBa0IsR0FBRyxJQUFJakMsa0JBQUosQ0FBdUJjLElBQXZCLENBQTNCO0FBRUFjLE1BQUFBLG1CQUFtQixHQUFHSyxrQkFBdEIsQ0FIRixDQUc0Qzs7QUFDMUM7O0FBRUYsU0FBSzFCLDRCQUFMO0FBQ0UsVUFBTTJCLG1CQUFtQixHQUFHLElBQUlqQyxtQkFBSixDQUF3QmEsSUFBeEIsQ0FBNUI7QUFFQWMsTUFBQUEsbUJBQW1CLEdBQUdNLG1CQUF0QixDQUhGLENBRzhDOztBQUM1QztBQWpCSjs7QUFvQkEsU0FBT04sbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBibmZVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYm5mJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzJyk7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzTm9kZVF1YW50aWZpZXJOb2RlLCBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSB9ID0gYm5mVXRpbGl0aWVzLFxuICAgICAgeyBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhQYXJ0Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydE5vZGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZTtcblxuICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpO1xuXG4gICAgaWYgKGxhc3ROb2RlUXVhbnRpZmllck5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICAgIHF1YW50aWZpZXJOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUocXVhbnRpZmllck5vZGUpLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lKHBhcnQsIHJ1bGVOYW1lKTtcblxuICAgICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBub2Rlcy5zaGlmdCgpO1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZShub2Rlcykge1xuICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNOb2RlUXVhbnRpZmllck5vZGUobGFzdE5vZGUpO1xuXG4gIHJldHVybiBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlO1xufVxuXG5mdW5jdGlvbiBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xufVxuIl19