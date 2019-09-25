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
    value: function generatePart(noWhitespace, lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, noWhitespace);

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

function partFromNodes(nodes, noWhitespace) {
  var part = null;

  var nodesLength = nodes.length;

  if (nodesLength === 1) {
    var node = nodes.pop(),
        lookAhead = false;

    part = node.generatePart(noWhitespace, lookAhead);
  } else {
    var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);

    if (lastNodeQuantifierNode) {
      var _node = nodes.pop(),
          quantifierNode = _node; ///

      part = partFromNodes(nodes, noWhitespace);

      var ruleName = ruleNameFromQuantifierNode(quantifierNode),
          sequenceOfPartsPart = sequenceOfPartsPartFromPartAndRuleName(part, ruleName);

      part = sequenceOfPartsPart; ///
    } else {
      nodes.shift();

      noWhitespace = true;

      part = partFromNodes(nodes, noWhitespace);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGFzdCIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJQYXJ0Tm9kZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJzbGljZSIsInBhcnQiLCJwYXJ0RnJvbU5vZGVzIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInBvcCIsImdlbmVyYXRlUGFydCIsImxhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJxdWFudGlmaWVyTm9kZSIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZSIsInNoaWZ0IiwibGFzdE5vZGUiLCJvcHRpb25hbFBhcnRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLHFCQUFSLENBRHJCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLHVCQUFS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SixDQUF1QmUsSUFBdkIsQ0FBM0I7O0FBRUFjLDRCQUFzQkssa0JBQXRCLENBSEYsQ0FHNEM7QUFDMUM7O0FBRUYsU0FBSzNCLDRCQUFMO0FBQ0UsVUFBTTRCLHNCQUFzQixJQUFJbEMsbUJBQUosQ0FBd0JjLElBQXhCLENBQTVCOztBQUVBYyw0QkFBc0JNLG1CQUF0QixDQUhGLENBRzhDO0FBQzVDO0FBakJKOztBQW9CQSxTQUFPTixtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgYm5mVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2JuZicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc05vZGVRdWFudGlmaWVyTm9kZSwgcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUgfSA9IGJuZlV0aWxpdGllcyxcbiAgICAgIHsgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpO1xuXG4gICAgaWYgKGxhc3ROb2RlUXVhbnRpZmllck5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICAgIHF1YW50aWZpZXJOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZShxdWFudGlmaWVyTm9kZSksXG4gICAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzLnNoaWZ0KCk7XG5cbiAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpIHtcbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiJdfQ==