"use strict";

var _array = _interopRequireDefault(require("../../utilities/array"));

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _optionalPart = _interopRequireDefault(require("../part/nonTerminal/optionalPart"));

var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));

var _zeroOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/zeroOrMoreParts"));

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

var last = _array["default"].last;

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
  var lastNode = last(nodes),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiUGFydE5vZGUiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGUiLCJwb3AiLCJnZW5lcmF0ZVBhcnQiLCJsYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwiaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlIiwicXVhbnRpZmllck5vZGUiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsSSxHQUFTQyxpQixDQUFURCxJOztJQUVGRSxROzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsS0FBSyxHQUFHRixVQUFVLENBQUNHLEtBQVgsRUFEZDtBQUFBLFVBRU1DLElBQUksR0FBR0MsYUFBYSxDQUFDSCxLQUFELENBRjFCO0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7OENBRWdDRSxRLEVBQVVOLFUsRUFBWTtBQUFFLGFBQU9PLHdCQUFnQkMseUJBQWhCLENBQTBDVixRQUExQyxFQUFvRFEsUUFBcEQsRUFBOEROLFVBQTlELENBQVA7QUFBbUY7Ozs7RUFUdkhPLHVCOztBQVl2QkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixRQUFqQjs7QUFFQSxTQUFTTyxhQUFULENBQXVCSCxLQUF2QixFQUE4QjtBQUM1QixNQUFJRSxJQUFJLEdBQUcsSUFBWDtBQUVBLE1BQU1PLFdBQVcsR0FBR1QsS0FBSyxDQUFDVSxNQUExQjs7QUFFQSxNQUFJRCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsUUFBTUUsSUFBSSxHQUFHWCxLQUFLLENBQUNZLEdBQU4sRUFBYjtBQUFBLFFBQ01mLFNBQVMsR0FBRyxLQURsQjtBQUdBSyxJQUFBQSxJQUFJLEdBQUdTLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmhCLFNBQWxCLENBQVA7QUFDRCxHQUxELE1BS087QUFDTCxRQUFNaUIsc0JBQXNCLEdBQUdDLHdCQUF3QixDQUFDZixLQUFELENBQXZEOztBQUVBLFFBQUljLHNCQUFKLEVBQTRCO0FBQzFCLFVBQU1ILEtBQUksR0FBR1gsS0FBSyxDQUFDWSxHQUFOLEVBQWI7QUFBQSxVQUNNSSxjQUFjLEdBQUdMLEtBRHZCLENBRDBCLENBRUk7OztBQUU5QlQsTUFBQUEsSUFBSSxHQUFHQyxhQUFhLENBQUNILEtBQUQsQ0FBcEI7QUFFQSxVQUFNSSxRQUFRLEdBQUcscUNBQTJCWSxjQUEzQixDQUFqQjtBQUFBLFVBQ01DLG1CQUFtQixHQUFHQyxzQ0FBc0MsQ0FBQ2hCLElBQUQsRUFBT0UsUUFBUCxDQURsRTtBQUdBRixNQUFBQSxJQUFJLEdBQUdlLG1CQUFQLENBVDBCLENBU0U7QUFDN0IsS0FWRCxNQVVPO0FBQ0xqQixNQUFBQSxLQUFLLENBQUNtQixLQUFOO0FBRUFqQixNQUFBQSxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0gsS0FBRCxDQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0UsSUFBUDtBQUNEOztBQUVELFNBQVNhLHdCQUFULENBQWtDZixLQUFsQyxFQUF5QztBQUN2QyxNQUFNb0IsUUFBUSxHQUFHMUIsSUFBSSxDQUFDTSxLQUFELENBQXJCO0FBQUEsTUFDTWMsc0JBQXNCLEdBQUcsK0JBQXFCTSxRQUFyQixDQUQvQjtBQUdBLFNBQU9OLHNCQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksc0NBQVQsQ0FBZ0RoQixJQUFoRCxFQUFzREUsUUFBdEQsRUFBZ0U7QUFDOUQsTUFBSWEsbUJBQUo7O0FBRUEsVUFBUWIsUUFBUjtBQUNFLFNBQUtpQixxQ0FBTDtBQUNFLFVBQU1DLGdCQUFnQixHQUFHLElBQUlDLHdCQUFKLENBQXFCckIsSUFBckIsQ0FBekI7QUFFQWUsTUFBQUEsbUJBQW1CLEdBQUdLLGdCQUF0QixDQUhGLENBRzBDOztBQUN4Qzs7QUFFRixTQUFLRSxzQ0FBTDtBQUNFLFVBQU1DLGtCQUFrQixHQUFHLElBQUlDLDBCQUFKLENBQXVCeEIsSUFBdkIsQ0FBM0I7QUFFQWUsTUFBQUEsbUJBQW1CLEdBQUdRLGtCQUF0QixDQUhGLENBRzRDOztBQUMxQzs7QUFFRixTQUFLRSx1Q0FBTDtBQUNFLFVBQU1DLG1CQUFtQixHQUFHLElBQUlDLDJCQUFKLENBQXdCM0IsSUFBeEIsQ0FBNUI7QUFFQWUsTUFBQUEsbUJBQW1CLEdBQUdXLG1CQUF0QixDQUhGLENBRzhDOztBQUM1QztBQWpCSjs7QUFvQkEsU0FBT1gsbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYXJyYXlVdGlsaXRpZXMgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBPcHRpb25hbFBhcnRQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydFwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IGlzTm9kZVF1YW50aWZpZXJOb2RlLCBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYm5mXCI7XG5pbXBvcnQgeyBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnROb2RlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSk7XG5cbiAgICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpIHtcbiAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbiAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgIGNhc2UgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiJdfQ==