"use strict";

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _optionalPart = _interopRequireDefault(require("../part/nonTerminal/optionalPart"));

var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));

var _zeroOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/zeroOrMoreParts"));

var _array = require("../../utilities/array");

var _bnf = require("../../utilities/bnf");

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      return _nonTerminal["default"].fromRuleNameAndChildNodes(PartNode, ruleName, childNodes);
    }
  }]);

  return PartNode;
}(_nonTerminal["default"]);

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
      var ruleName = (0, _bnf.ruleNameFromQuantifierNode)(quantifierNode),
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
  var lastNode = (0, _array.last)(nodes),
      lastNodeQuantifierNode = (0, _bnf.isNodeQuantifierNode)(lastNode);
  return lastNodeQuantifierNode;
}

function sequenceOfPartsPartFromPartAndRuleName(part, ruleName) {
  var sequenceOfPartsPart;

  switch (ruleName) {
    case _ruleNames.OptionalQuantifierRuleName:
      var optionalPartPart = new _optionalPart["default"](part);
      sequenceOfPartsPart = optionalPartPart; ///

      break;

    case _ruleNames.OneOrMoreQuantifierRuleName:
      var oneOrMorePartsPart = new _oneOrMoreParts["default"](part);
      sequenceOfPartsPart = oneOrMorePartsPart; ///

      break;

    case _ruleNames.ZeroOrMoreQuantifierRuleName:
      var zeroOrMorePartsPart = new _zeroOrMoreParts["default"](part);
      sequenceOfPartsPart = zeroOrMorePartsPart; ///

      break;
  }

  return sequenceOfPartsPart;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiUGFydE5vZGUiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJnZW5lcmF0ZVBhcnQiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxLQUFYLEVBRGQ7QUFBQSxVQUVNQyxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0gsS0FBRCxDQUYxQjtBQUlBLGFBQU9FLElBQVA7QUFDRDs7OzhDQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSxhQUFPTyx3QkFBZ0JDLHlCQUFoQixDQUEwQ1YsUUFBMUMsRUFBb0RRLFFBQXBELEVBQThETixVQUE5RCxDQUFQO0FBQW1GOzs7O0VBVHZITyx1Qjs7QUFZdkJFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosUUFBakI7O0FBRUEsU0FBU08sYUFBVCxDQUF1QkgsS0FBdkIsRUFBOEI7QUFDNUIsTUFBSUUsSUFBSSxHQUFHLElBQVg7QUFFQSxNQUFNTyxXQUFXLEdBQUdULEtBQUssQ0FBQ1UsTUFBMUI7O0FBRUEsTUFBSUQsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ3JCLFFBQU1FLElBQUksR0FBR1gsS0FBSyxDQUFDWSxHQUFOLEVBQWI7QUFBQSxRQUNNZixTQUFTLEdBQUcsS0FEbEI7QUFHQUssSUFBQUEsSUFBSSxHQUFHUyxJQUFJLENBQUNFLFlBQUwsQ0FBa0JoQixTQUFsQixDQUFQO0FBQ0QsR0FMRCxNQUtPO0FBQ0wsUUFBTWlCLHNCQUFzQixHQUFHQyx3QkFBd0IsQ0FBQ2YsS0FBRCxDQUF2RDs7QUFFQSxRQUFJYyxzQkFBSixFQUE0QjtBQUMxQixVQUFNSCxLQUFJLEdBQUdYLEtBQUssQ0FBQ1ksR0FBTixFQUFiO0FBQUEsVUFDTUksY0FBYyxHQUFHTCxLQUR2QixDQUQwQixDQUVJOzs7QUFFOUJULE1BQUFBLElBQUksR0FBR0MsYUFBYSxDQUFDSCxLQUFELENBQXBCO0FBRUEsVUFBTUksUUFBUSxHQUFHLHFDQUEyQlksY0FBM0IsQ0FBakI7QUFBQSxVQUNNQyxtQkFBbUIsR0FBR0Msc0NBQXNDLENBQUNoQixJQUFELEVBQU9FLFFBQVAsQ0FEbEU7QUFHQUYsTUFBQUEsSUFBSSxHQUFHZSxtQkFBUCxDQVQwQixDQVNFO0FBQzdCLEtBVkQsTUFVTztBQUNMakIsTUFBQUEsS0FBSyxDQUFDbUIsS0FBTjtBQUVBakIsTUFBQUEsSUFBSSxHQUFHQyxhQUFhLENBQUNILEtBQUQsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFNBQU9FLElBQVA7QUFDRDs7QUFFRCxTQUFTYSx3QkFBVCxDQUFrQ2YsS0FBbEMsRUFBeUM7QUFDdkMsTUFBTW9CLFFBQVEsR0FBRyxpQkFBS3BCLEtBQUwsQ0FBakI7QUFBQSxNQUNNYyxzQkFBc0IsR0FBRywrQkFBcUJNLFFBQXJCLENBRC9CO0FBR0EsU0FBT04sc0JBQVA7QUFDRDs7QUFFRCxTQUFTSSxzQ0FBVCxDQUFnRGhCLElBQWhELEVBQXNERSxRQUF0RCxFQUFnRTtBQUM5RCxNQUFJYSxtQkFBSjs7QUFFQSxVQUFRYixRQUFSO0FBQ0UsU0FBS2lCLHFDQUFMO0FBQ0UsVUFBTUMsZ0JBQWdCLEdBQUcsSUFBSUMsd0JBQUosQ0FBcUJyQixJQUFyQixDQUF6QjtBQUVBZSxNQUFBQSxtQkFBbUIsR0FBR0ssZ0JBQXRCLENBSEYsQ0FHMEM7O0FBQ3hDOztBQUVGLFNBQUtFLHNDQUFMO0FBQ0UsVUFBTUMsa0JBQWtCLEdBQUcsSUFBSUMsMEJBQUosQ0FBdUJ4QixJQUF2QixDQUEzQjtBQUVBZSxNQUFBQSxtQkFBbUIsR0FBR1Esa0JBQXRCLENBSEYsQ0FHNEM7O0FBQzFDOztBQUVGLFNBQUtFLHVDQUFMO0FBQ0UsVUFBTUMsbUJBQW1CLEdBQUcsSUFBSUMsMkJBQUosQ0FBd0IzQixJQUF4QixDQUE1QjtBQUVBZSxNQUFBQSxtQkFBbUIsR0FBR1csbUJBQXRCLENBSEYsQ0FHOEM7O0FBQzVDO0FBakJKOztBQW9CQSxTQUFPWCxtQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgT3B0aW9uYWxQYXJ0UGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnRcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcbmltcG9ydCBaZXJvT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNOb2RlUXVhbnRpZmllck5vZGUsIHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lLCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhQYXJ0Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydE5vZGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMpIHtcbiAgbGV0IHBhcnQgPSBudWxsO1xuXG4gIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gIGlmIChub2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZTtcblxuICAgIHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxhc3ROb2RlUXVhbnRpZmllck5vZGUgPSBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpO1xuXG4gICAgaWYgKGxhc3ROb2RlUXVhbnRpZmllck5vZGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5wb3AoKSxcbiAgICAgICAgICAgIHF1YW50aWZpZXJOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZU5hbWVGcm9tUXVhbnRpZmllck5vZGUocXVhbnRpZmllck5vZGUpLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnRGcm9tUGFydEFuZFJ1bGVOYW1lKHBhcnQsIHJ1bGVOYW1lKTtcblxuICAgICAgcGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBub2Rlcy5zaGlmdCgpO1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIGlzTGFzdE5vZGVRdWFudGlmaWVyTm9kZShub2Rlcykge1xuICBjb25zdCBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNOb2RlUXVhbnRpZmllck5vZGUobGFzdE5vZGUpO1xuXG4gIHJldHVybiBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlO1xufVxuXG5mdW5jdGlvbiBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcblxuICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgY2FzZSBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0OyAvLy9cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0KTtcblxuICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xufVxuIl19