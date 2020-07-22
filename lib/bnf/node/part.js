"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PartNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  var _super = _createSuper(PartNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _super.apply(this, arguments);
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

exports["default"] = PartNode;

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
          collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);
      part = collectionOfPartsPart; ///
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

function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
  var collectionOfPartsPart;

  switch (ruleName) {
    case _ruleNames.OptionalQuantifierRuleName:
      var optionalPartPart = new _optionalPart["default"](part);
      collectionOfPartsPart = optionalPartPart; ///

      break;

    case _ruleNames.OneOrMoreQuantifierRuleName:
      var oneOrMorePartsPart = new _oneOrMoreParts["default"](part);
      collectionOfPartsPart = oneOrMorePartsPart; ///

      break;

    case _ruleNames.ZeroOrMoreQuantifierRuleName:
      var zeroOrMorePartsPart = new _zeroOrMoreParts["default"](part);
      collectionOfPartsPart = zeroOrMorePartsPart; ///

      break;
  }

  return collectionOfPartsPart;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiUGFydE5vZGUiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInBvcCIsImdlbmVyYXRlUGFydCIsImxhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUiLCJxdWFudGlmaWVyTm9kZSIsImNvbGxlY3Rpb25PZlBhcnRzUGFydCIsImNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUiLCJzaGlmdCIsImxhc3ROb2RlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFBhcnRQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7aUNBQ05DLFMsRUFBVztBQUN0QixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxLQUFYLEVBRGQ7QUFBQSxVQUVNQyxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0gsS0FBRCxDQUYxQjtBQUlBLGFBQU9FLElBQVA7QUFDRDs7OzhDQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSxhQUFPTyx3QkFBZ0JDLHlCQUFoQixDQUEwQ1YsUUFBMUMsRUFBb0RRLFFBQXBELEVBQThETixVQUE5RCxDQUFQO0FBQW1GOzs7O0VBVHhHTyx1Qjs7OztBQVl0QyxTQUFTRixhQUFULENBQXVCSCxLQUF2QixFQUE4QjtBQUM1QixNQUFJRSxJQUFJLEdBQUcsSUFBWDtBQUVBLE1BQU1LLFdBQVcsR0FBR1AsS0FBSyxDQUFDUSxNQUExQjs7QUFFQSxNQUFJRCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsUUFBTUUsSUFBSSxHQUFHVCxLQUFLLENBQUNVLEdBQU4sRUFBYjtBQUFBLFFBQ01iLFNBQVMsR0FBRyxLQURsQjtBQUdBSyxJQUFBQSxJQUFJLEdBQUdPLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmQsU0FBbEIsQ0FBUDtBQUNELEdBTEQsTUFLTztBQUNMLFFBQU1lLHNCQUFzQixHQUFHQyx3QkFBd0IsQ0FBQ2IsS0FBRCxDQUF2RDs7QUFFQSxRQUFJWSxzQkFBSixFQUE0QjtBQUMxQixVQUFNSCxLQUFJLEdBQUdULEtBQUssQ0FBQ1UsR0FBTixFQUFiO0FBQUEsVUFDTUksY0FBYyxHQUFHTCxLQUR2QixDQUQwQixDQUVJOzs7QUFFOUJQLE1BQUFBLElBQUksR0FBR0MsYUFBYSxDQUFDSCxLQUFELENBQXBCO0FBRUEsVUFBTUksUUFBUSxHQUFHLHFDQUEyQlUsY0FBM0IsQ0FBakI7QUFBQSxVQUNNQyxxQkFBcUIsR0FBR0Msd0NBQXdDLENBQUNkLElBQUQsRUFBT0UsUUFBUCxDQUR0RTtBQUdBRixNQUFBQSxJQUFJLEdBQUdhLHFCQUFQLENBVDBCLENBU0k7QUFDL0IsS0FWRCxNQVVPO0FBQ0xmLE1BQUFBLEtBQUssQ0FBQ2lCLEtBQU47QUFFQWYsTUFBQUEsSUFBSSxHQUFHQyxhQUFhLENBQUNILEtBQUQsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFNBQU9FLElBQVA7QUFDRDs7QUFFRCxTQUFTVyx3QkFBVCxDQUFrQ2IsS0FBbEMsRUFBeUM7QUFDdkMsTUFBTWtCLFFBQVEsR0FBRyxpQkFBS2xCLEtBQUwsQ0FBakI7QUFBQSxNQUNNWSxzQkFBc0IsR0FBRywrQkFBcUJNLFFBQXJCLENBRC9CO0FBR0EsU0FBT04sc0JBQVA7QUFDRDs7QUFFRCxTQUFTSSx3Q0FBVCxDQUFrRGQsSUFBbEQsRUFBd0RFLFFBQXhELEVBQWtFO0FBQ2hFLE1BQUlXLHFCQUFKOztBQUVBLFVBQVFYLFFBQVI7QUFDRSxTQUFLZSxxQ0FBTDtBQUNFLFVBQU1DLGdCQUFnQixHQUFHLElBQUlDLHdCQUFKLENBQXFCbkIsSUFBckIsQ0FBekI7QUFFQWEsTUFBQUEscUJBQXFCLEdBQUdLLGdCQUF4QixDQUhGLENBRzRDOztBQUMxQzs7QUFFRixTQUFLRSxzQ0FBTDtBQUNFLFVBQU1DLGtCQUFrQixHQUFHLElBQUlDLDBCQUFKLENBQXVCdEIsSUFBdkIsQ0FBM0I7QUFFQWEsTUFBQUEscUJBQXFCLEdBQUdRLGtCQUF4QixDQUhGLENBRzhDOztBQUM1Qzs7QUFFRixTQUFLRSx1Q0FBTDtBQUNFLFVBQU1DLG1CQUFtQixHQUFHLElBQUlDLDJCQUFKLENBQXdCekIsSUFBeEIsQ0FBNUI7QUFFQWEsTUFBQUEscUJBQXFCLEdBQUdXLG1CQUF4QixDQUhGLENBR2dEOztBQUM5QztBQWpCSjs7QUFvQkEsU0FBT1gscUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE9wdGlvbmFsUGFydFBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb3B0aW9uYWxQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5pbXBvcnQgWmVyb09yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzTm9kZVF1YW50aWZpZXJOb2RlLCBydWxlTmFtZUZyb21RdWFudGlmaWVyTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYm5mXCI7XG5pbXBvcnQgeyBPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnNsaWNlKCksXG4gICAgICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5mdW5jdGlvbiBwYXJ0RnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCBwYXJ0ID0gbnVsbDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBpZiAobm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXN0Tm9kZVF1YW50aWZpZXJOb2RlID0gaXNMYXN0Tm9kZVF1YW50aWZpZXJOb2RlKG5vZGVzKTtcblxuICAgIGlmIChsYXN0Tm9kZVF1YW50aWZpZXJOb2RlKSB7XG4gICAgICBjb25zdCBub2RlID0gbm9kZXMucG9wKCksXG4gICAgICAgICAgICBxdWFudGlmaWVyTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lRnJvbVF1YW50aWZpZXJOb2RlKHF1YW50aWZpZXJOb2RlKSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IGNvbGxlY3Rpb25PZlBhcnRzUGFydEZyb21QYXJ0QW5kUnVsZU5hbWUocGFydCwgcnVsZU5hbWUpO1xuXG4gICAgICBwYXJ0ID0gY29sbGVjdGlvbk9mUGFydHNQYXJ0OyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZXMuc2hpZnQoKTtcblxuICAgICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBpc0xhc3ROb2RlUXVhbnRpZmllck5vZGUobm9kZXMpIHtcbiAgY29uc3QgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyTm9kZSA9IGlzTm9kZVF1YW50aWZpZXJOb2RlKGxhc3ROb2RlKTtcblxuICByZXR1cm4gbGFzdE5vZGVRdWFudGlmaWVyTm9kZTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbk9mUGFydHNQYXJ0RnJvbVBhcnRBbmRSdWxlTmFtZShwYXJ0LCBydWxlTmFtZSkge1xuICBsZXQgY29sbGVjdGlvbk9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICBjYXNlIE9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcblxuICAgICAgY29sbGVjdGlvbk9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIDpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA6XG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIGNvbGxlY3Rpb25PZlBhcnRzUGFydCA9IHplcm9Pck1vcmVQYXJ0c1BhcnQ7ICAvLy9cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25PZlBhcnRzUGFydDtcbn1cbiJdfQ==