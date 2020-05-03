"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ruleNames = require("../ruleNames"),
    bnfUtilities = require("../../utilities/bnf"),
    arrayUtilities = require("../../utilities/array"),
    NonTerminalNode = require("../../common/node/nonTerminal"),
    OptionalPartPart = require("../part/nonTerminal/optionalPart"),
    OneOrMorePartsPart = require("../part/nonTerminal/oneOrMoreParts"),
    ZeroOrMorePartsPart = require("../part/nonTerminal/zeroOrMoreParts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsicnVsZU5hbWVzIiwicmVxdWlyZSIsImJuZlV0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiTm9uVGVybWluYWxOb2RlIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJsYXN0IiwiaXNOb2RlUXVhbnRpZmllck5vZGUiLCJydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlBhcnROb2RlIiwibG9va0FoZWFkIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInNsaWNlIiwicGFydCIsInBhcnRGcm9tTm9kZXMiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlIiwicG9wIiwiZ2VuZXJhdGVQYXJ0IiwibGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsImlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZSIsInF1YW50aWZpZXJOb2RlIiwic2VxdWVuY2VPZlBhcnRzUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lIiwic2hpZnQiLCJsYXN0Tm9kZSIsIm9wdGlvbmFsUGFydFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMscUJBQUQsQ0FENUI7QUFBQSxJQUVNRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyx1QkFB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RSxVQUFNMkIsZ0JBQWdCLEdBQUcsSUFBSWpDLGdCQUFKLENBQXFCZSxJQUFyQixDQUF6QjtBQUVBYyxNQUFBQSxtQkFBbUIsR0FBR0ksZ0JBQXRCLENBSEYsQ0FHMEM7O0FBQ3hDOztBQUVGLFNBQUsxQiwyQkFBTDtBQUNFLFVBQU0yQixrQkFBa0IsR0FBRyxJQUFJakMsa0JBQUosQ0FBdUJjLElBQXZCLENBQTNCO0FBRUFjLE1BQUFBLG1CQUFtQixHQUFHSyxrQkFBdEIsQ0FIRixDQUc0Qzs7QUFDMUM7O0FBRUYsU0FBSzFCLDRCQUFMO0FBQ0UsVUFBTTJCLG1CQUFtQixHQUFHLElBQUlqQyxtQkFBSixDQUF3QmEsSUFBeEIsQ0FBNUI7QUFFQWMsTUFBQUEsbUJBQW1CLEdBQUdNLG1CQUF0QixDQUhGLENBRzhDOztBQUM1QztBQWpCSjs7QUFvQkEsU0FBT04sbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKFwiLi4vcnVsZU5hbWVzXCIpLFxuICAgICAgYm5mVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9ibmZcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIiksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZShcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCIpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZShcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIiksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZShcIi4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCIpO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc05vZGVRdWFudGlmaWVyTm9kZSwgcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUgfSA9IGJuZlV0aWxpdGllcyxcbiAgICAgIHsgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSk7XG5cbiAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpIHtcbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiJdfQ==