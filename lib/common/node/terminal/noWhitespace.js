"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _terminal = _interopRequireDefault(require("../terminal"));

var _noWhitespaceNode = _interopRequireDefault(require("../../parseTree/noWhitespaceNode"));

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

var NoWhitespaceNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(NoWhitespaceNode, _TerminalNode);

  var _super = _createSuper(NoWhitespaceNode);

  function NoWhitespaceNode() {
    _classCallCheck(this, NoWhitespaceNode);

    return _super.apply(this, arguments);
  }

  _createClass(NoWhitespaceNode, [{
    key: "getType",
    value: function getType() {
      var type = null; ///

      return type;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var content = ""; ///

      return content;
    }
  }, {
    key: "isNoWhitespaceNode",
    value: function isNoWhitespaceNode() {
      var noWhitespaceNode = true;
      return noWhitespaceNode;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var noWhitespaceNodeParseTree = _noWhitespaceNode["default"].fromNothing(),
          parseTree = noWhitespaceNodeParseTree; ///


      return parseTree;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var significantToken = null,
          noWhitespaceNode = _terminal["default"].fromSignificantToken(NoWhitespaceNode, significantToken);

      return noWhitespaceNode;
    }
  }]);

  return NoWhitespaceNode;
}(_terminal["default"]);

exports["default"] = NoWhitespaceNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJOb1doaXRlc3BhY2VOb2RlIiwidHlwZSIsImNvbnRlbnQiLCJub1doaXRlc3BhY2VOb2RlIiwidG9rZW5zIiwibm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsIk5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsInNpZ25pZmljYW50VG9rZW4iLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsVUFBTUMsSUFBSSxHQUFHLElBQWIsQ0FEUSxDQUNZOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1DLE9BQU8sR0FBRyxFQUFoQixDQURXLENBQ1U7O0FBRXJCLGFBQU9BLE9BQVA7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNQyxnQkFBZ0IsR0FBRyxJQUF6QjtBQUVBLGFBQU9BLGdCQUFQO0FBQ0Q7OztnQ0FFV0MsTSxFQUFRO0FBQ2xCLFVBQU1DLHlCQUF5QixHQUFHQyw2QkFBMEJDLFdBQTFCLEVBQWxDO0FBQUEsVUFDTUMsU0FBUyxHQUFHSCx5QkFEbEIsQ0FEa0IsQ0FFNEI7OztBQUU5QyxhQUFPRyxTQUFQO0FBQ0Q7OztrQ0FFb0I7QUFDbkIsVUFBTUMsZ0JBQWdCLEdBQUcsSUFBekI7QUFBQSxVQUNNTixnQkFBZ0IsR0FBR08scUJBQWFDLG9CQUFiLENBQWtDWCxnQkFBbEMsRUFBb0RTLGdCQUFwRCxDQUR6Qjs7QUFHQSxhQUFPTixnQkFBUDtBQUNEOzs7O0VBL0IyQ08sb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBcIlwiOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlzTm9XaGl0ZXNwYWNlTm9kZSgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSA9IE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZU5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oTm9XaGl0ZXNwYWNlTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxufVxuIl19