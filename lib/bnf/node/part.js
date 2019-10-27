'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var PartNode = function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, (PartNode.__proto__ || Object.getPrototypeOf(PartNode)).apply(this, arguments));
  }

  _createClass(PartNode, [{
    key: 'generatePart',
    value: function generatePart(lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes);

      return part;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
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
  var sequenceOfPartsPart = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGFzdCIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJQYXJ0Tm9kZSIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInBvcCIsImdlbmVyYXRlUGFydCIsImxhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJxdWFudGlmaWVyTm9kZSIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZSIsInNoaWZ0IiwibGFzdE5vZGUiLCJvcHRpb25hbFBhcnRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLHFCQUFSLENBRHJCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFSLENBRnZCO0FBQUEsSUFH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QUosQ0FBd0JhLElBQXhCLENBQTVCOztBQUVBYyw0QkFBc0JNLG1CQUF0QixDQUhGLENBRzhDO0FBQzVDO0FBakJKOztBQW9CQSxTQUFPTixtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgYm5mVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2JuZicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc05vZGVRdWFudGlmaWVyTm9kZSwgcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUgfSA9IGJuZlV0aWxpdGllcyxcbiAgICAgIHsgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSk7XG5cbiAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpIHtcbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiJdfQ==