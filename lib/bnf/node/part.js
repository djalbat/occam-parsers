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
    value: function generatePart(nonWhitespace, lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, nonWhitespace);

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

function partFromNodes(nodes, nonWhitespace) {
  var part = null;

  var nodesLength = nodes.length;

  if (nodesLength === 1) {
    var node = nodes.pop(),
        lookAhead = false;

    part = node.generatePart(nonWhitespace, lookAhead);
  } else {
    var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);

    if (lastNodeQuantifierNode) {
      var _node = nodes.pop(),
          quantifierNode = _node; ///

      part = partFromNodes(nodes, nonWhitespace);

      var ruleName = ruleNameFromQuantifierNode(quantifierNode),
          sequenceOfPartsPart = sequenceOfPartsPartFromPartAndRuleName(part, ruleName);

      part = sequenceOfPartsPart; ///
    } else {
      nodes.shift();

      nonWhitespace = true;

      part = partFromNodes(nodes, nonWhitespace);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwibGFzdCIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwicnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJQYXJ0Tm9kZSIsIm5vbldoaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJnZW5lcmF0ZVBhcnQiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwib3B0aW9uYWxQYXJ0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxxQkFBUixDQURyQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSx1QkFB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QkFBSixDQUF1QmUsSUFBdkIsQ0FBM0I7O0FBRUFjLDRCQUFzQkssa0JBQXRCLENBSEYsQ0FHNEM7QUFDMUM7O0FBRUYsU0FBSzNCLDRCQUFMO0FBQ0UsVUFBTTRCLHNCQUFzQixJQUFJbEMsbUJBQUosQ0FBd0JjLElBQXhCLENBQTVCOztBQUVBYyw0QkFBc0JNLG1CQUF0QixDQUhGLENBRzhDO0FBQzVDO0FBakJKOztBQW9CQSxTQUFPTixtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgYm5mVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2JuZicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc05vZGVRdWFudGlmaWVyTm9kZSwgcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUgfSA9IGJuZlV0aWxpdGllcyxcbiAgICAgIHsgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9ID0gcnVsZU5hbWVzO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub25XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIG5vbldoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBub25XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9uV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIG5vbldoaXRlc3BhY2UpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSk7XG5cbiAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgbm9uV2hpdGVzcGFjZSA9IHRydWU7XG5cbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBub25XaGl0ZXNwYWNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKSB7XG4gIGNvbnN0IGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgIGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc05vZGVRdWFudGlmaWVyTm9kZShsYXN0Tm9kZSk7XG5cbiAgcmV0dXJuIGxhc3ROb2RlUXVhbnRpZmllck5vZGU7XG59XG5cbmZ1bmN0aW9uIHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lKHBhcnQsIHJ1bGVOYW1lKSB7XG4gIGxldCBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9wdGlvbmFsUGFydFBhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG59XG4iXX0=