'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ruleNames = require('../ruleNames'),
    bnfUtilities = require('../../utilities/bnf'),
    partUtilities = require('../../utilities/part'),
    arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    OptionalPartPart = require('../part/nonTerminal/optionalPart'),
    GroupOfPartsPart = require('../part/nonTerminal/groupOfParts'),
    ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts'),
    OneOrMorePartsPart = require('../part/nonTerminal/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('../part/nonTerminal/zeroOrMoreParts');

var first = arrayUtilities.first,
    last = arrayUtilities.last,
    isPartRuleNamePart = partUtilities.isPartRuleNamePart,
    isNodeQuantifierNode = bnfUtilities.isNodeQuantifierNode,
    isNodeNoWhitespaceNode = bnfUtilities.isNodeNoWhitespaceNode,
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
    value: function generatePart(noWhitespace) {
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
    var node = nodes.pop();

    part = node.generatePart(noWhitespace);
  } else {
    var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);

    if (lastNodeQuantifierNode) {
      var _node = nodes.pop();

      noWhitespace = false;

      part = partFromNodes(nodes, noWhitespace);

      var quantifierNode = _node,
          ///
      ruleName = ruleNameFromQuantifierNode(quantifierNode),
          sequenceOfPartsPart = sequenceOfPartsPartFromPartAndRuleName(part, ruleName);

      part = sequenceOfPartsPart; ///
    } else {
      var firstNodeNoWhitespaceNode = isFirstNodeNoWhitespaceNode(nodes);

      if (firstNodeNoWhitespaceNode) {
        nodes.shift();

        noWhitespace = true;
      }

      part = partFromNodes(nodes, noWhitespace);
    }
  }

  return part;
}

function _partFromNodes(nodes) {
  var part = null;

  if (part === null) {
    var choiceOfPartsPart = ChoiceOfPartsPart.fromNodes(nodes);

    part = choiceOfPartsPart; ///
  }

  if (part === null) {
    var groupOfPartsPart = GroupOfPartsPart.fromNodes(nodes);

    part = groupOfPartsPart; ///
  }

  return part;
}

function isLastNodeQuantifierNode(nodes) {
  var lastNode = last(nodes),
      lastNodeQuantifierNode = isNodeQuantifierNode(lastNode);

  return lastNodeQuantifierNode;
}

function isFirstNodeNoWhitespaceNode(nodes) {
  var firstNode = first(nodes),
      firstNodeNoWhitespaceNode = isNodeNoWhitespaceNode(firstNode);

  return firstNodeNoWhitespaceNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9wYXJ0LmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJibmZVdGlsaXRpZXMiLCJwYXJ0VXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJPcHRpb25hbFBhcnRQYXJ0IiwiR3JvdXBPZlBhcnRzUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsImZpcnN0IiwibGFzdCIsImlzUGFydFJ1bGVOYW1lUGFydCIsImlzTm9kZVF1YW50aWZpZXJOb2RlIiwiaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZSIsInJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiUGFydE5vZGUiLCJub1doaXRlc3BhY2UiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJnZW5lcmF0ZVBhcnQiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiaXNGaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlIiwic2hpZnQiLCJfcGFydEZyb21Ob2RlcyIsImNob2ljZU9mUGFydHNQYXJ0IiwiZnJvbU5vZGVzIiwiZ3JvdXBPZlBhcnRzUGFydCIsImxhc3ROb2RlIiwiZmlyc3ROb2RlIiwib3B0aW9uYWxQYXJ0UGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCO0FBQUEsSUFDTUMsZUFBZUQsUUFBUSxxQkFBUixDQURyQjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxzQkFBUixDQUZ0QjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSx1QkFBUixDQUh2QjtBQUFBLElBSU1JLGtCQUFrQkosUUFBUSwrQkFBUixDQUp4QjtBQUFBLElBS01LLG1CQUFtQkwsUUFBUSxrQ0FBUixDQUx6QjtBQUFBLElBTU1NLG1CQUFtQk4sUUFBUSxrQ0FBUixDQU56QjtBQUFBLElBT01PLG9CQUFvQlAsUUFBUSxtQ0FBUixDQVAxQjtBQUFBLElBUU1RLHFCQUFxQlIsUUFBUSxvQ0FBUixDQVIzQjtBQUFBLElBU01TLHNCQUFzQlQsUUFBUSxxQ0FBUixDQVQ1Qjs7SUFXUVUsSyxHQUFnQlAsYyxDQUFoQk8sSztJQUFPQyxJLEdBQVNSLGMsQ0FBVFEsSTtJQUNQQyxrQixHQUF1QlYsYSxDQUF2QlUsa0I7SUFDQUMsb0IsR0FBNkVaLFksQ0FBN0VZLG9CO0lBQXNCQyxzQixHQUF1RGIsWSxDQUF2RGEsc0I7SUFBd0JDLDBCLEdBQStCZCxZLENBQS9CYywwQjtJQUM5Q0MsMEIsR0FBMEZqQixTLENBQTFGaUIsMEI7SUFBNEJDLDJCLEdBQThEbEIsUyxDQUE5RGtCLDJCO0lBQTZCQyw0QixHQUFpQ25CLFMsQ0FBakNtQiw0Qjs7SUFFM0RDLFE7Ozs7Ozs7Ozs7O2lDQUNTQyxZLEVBQWM7QUFDekIsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsUUFBUUYsV0FBV0csS0FBWCxFQURkO0FBQUEsVUFFTUMsT0FBT0MsY0FBY0gsS0FBZCxFQUFxQkgsWUFBckIsQ0FGYjs7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RixDQUc0QztBQUMxQzs7QUFFRixTQUFLakMsNEJBQUw7QUFDRSxVQUFNa0Msc0JBQXNCLElBQUkzQyxtQkFBSixDQUF3QmdCLElBQXhCLENBQTVCOztBQUVBYyw0QkFBc0JhLG1CQUF0QixDQUhGLENBRzhDO0FBQzVDO0FBakJKOztBQW9CQSxTQUFPYixtQkFBUDtBQUNEIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgYm5mVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2JuZicpLFxuICAgICAgcGFydFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9wYXJ0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydCcpLFxuICAgICAgR3JvdXBPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBDaG9pY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvY2hvaWNlT2ZQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzJyk7XG5cbmNvbnN0IHsgZmlyc3QsIGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc1BhcnRSdWxlTmFtZVBhcnQgfSA9IHBhcnRVdGlsaXRpZXMsXG4gICAgICB7IGlzTm9kZVF1YW50aWZpZXJOb2RlLCBpc05vZGVOb1doaXRlc3BhY2VOb2RlLCBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSB9ID0gYm5mVXRpbGl0aWVzLFxuICAgICAgeyBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gcGFydEZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCk7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCk7XG5cbiAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgcXVhbnRpZmllck5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSk7XG5cbiAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGlzRmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZShub2Rlcyk7XG5cbiAgICAgIGlmIChmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgICAgIG5vZGVzLnNoaWZ0KCk7XG5cbiAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIF9wYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBpZiAocGFydCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGNob2ljZU9mUGFydHNQYXJ0ID0gQ2hvaWNlT2ZQYXJ0c1BhcnQuZnJvbU5vZGVzKG5vZGVzKTtcblxuICAgIHBhcnQgPSBjaG9pY2VPZlBhcnRzUGFydDsgLy8vXG4gIH1cblxuICBpZiAocGFydCA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGdyb3VwT2ZQYXJ0c1BhcnQgPSBHcm91cE9mUGFydHNQYXJ0LmZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICBwYXJ0ID0gZ3JvdXBPZlBhcnRzUGFydDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZShub2Rlcykge1xuICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNOb2RlUXVhbnRpZmllck5vZGUobGFzdE5vZGUpO1xuXG4gIHJldHVybiBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlO1xufVxuXG5mdW5jdGlvbiBpc0ZpcnN0Tm9kZU5vV2hpdGVzcGFjZU5vZGUobm9kZXMpIHtcbiAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlID0gaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShmaXJzdE5vZGUpO1xuXG4gIHJldHVybiBmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlO1xufVxuXG5mdW5jdGlvbiBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xufVxuIl19