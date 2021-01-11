"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../../common/node/nonTerminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var NonTerminalPartNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(NonTerminalPartNode, _NonTerminalNode);

  var _super = _createSuper(NonTerminalPartNode);

  function NonTerminalPartNode() {
    _classCallCheck(this, NonTerminalPartNode);

    return _super.apply(this, arguments);
  }

  _createClass(NonTerminalPartNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = partFromNodes(nodes, lookAhead);
      return part;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(NonTerminalPartNode, ruleName, childNodes);
    }
  }]);

  return NonTerminalPartNode;
}(_nonTerminal["default"]);

exports["default"] = NonTerminalPartNode;

function partFromNodes(nodes, lookAhead) {
  var part = null;
  var nodesLength = nodes.length;

  if (nodesLength === 1) {
    var node = nodes.pop();
    part = node.generatePart(lookAhead);
  } else {
    nodes.pop();
    lookAhead = true;
    part = partFromNodes(nodes, lookAhead);
  }

  return part;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydE5vZGUiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwicGFydEZyb21Ob2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibm9kZSIsInBvcCIsImdlbmVyYXRlUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7O2lDQUNOQyxTLEVBQVc7QUFDdEIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csS0FBWCxFQURkO0FBQUEsVUFFTUMsSUFBSSxHQUFHQyxhQUFhLENBQUNILEtBQUQsRUFBUUgsU0FBUixDQUYxQjtBQUlBLGFBQU9LLElBQVA7QUFDRDs7OzhDQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSxhQUFPTyx3QkFBZ0JDLHlCQUFoQixDQUEwQ1YsbUJBQTFDLEVBQStEUSxRQUEvRCxFQUF5RU4sVUFBekUsQ0FBUDtBQUE4Rjs7OztFQVR4R08sdUI7Ozs7QUFZakQsU0FBU0YsYUFBVCxDQUF1QkgsS0FBdkIsRUFBOEJILFNBQTlCLEVBQXlDO0FBQ3ZDLE1BQUlLLElBQUksR0FBRyxJQUFYO0FBRUEsTUFBTUssV0FBVyxHQUFHUCxLQUFLLENBQUNRLE1BQTFCOztBQUVBLE1BQUlELFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNyQixRQUFNRSxJQUFJLEdBQUdULEtBQUssQ0FBQ1UsR0FBTixFQUFiO0FBRUFSLElBQUFBLElBQUksR0FBR08sSUFBSSxDQUFDRSxZQUFMLENBQWtCZCxTQUFsQixDQUFQO0FBQ0QsR0FKRCxNQUlPO0FBQ0xHLElBQUFBLEtBQUssQ0FBQ1UsR0FBTjtBQUVBYixJQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUVBSyxJQUFBQSxJQUFJLEdBQUdDLGFBQWEsQ0FBQ0gsS0FBRCxFQUFRSCxTQUFSLENBQXBCO0FBQ0Q7O0FBRUQsU0FBT0ssSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLFxuICAgICAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoTm9uVGVybWluYWxQYXJ0Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCkge1xuICBsZXQgcGFydCA9IG51bGw7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLnBvcCgpO1xuXG4gICAgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZXMucG9wKCk7XG5cbiAgICBsb29rQWhlYWQgPSB0cnVlO1xuXG4gICAgcGFydCA9IHBhcnRGcm9tTm9kZXMobm9kZXMsIGxvb2tBaGVhZCk7XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cbiJdfQ==