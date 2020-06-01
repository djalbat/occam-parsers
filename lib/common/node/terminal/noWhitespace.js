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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJOb1doaXRlc3BhY2VOb2RlIiwidHlwZSIsImNvbnRlbnQiLCJ0b2tlbnMiLCJub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIiwiTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwic2lnbmlmaWNhbnRUb2tlbiIsIm5vV2hpdGVzcGFjZU5vZGUiLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsVUFBTUMsSUFBSSxHQUFHLElBQWIsQ0FEUSxDQUNZOztBQUVwQixhQUFPQSxJQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1DLE9BQU8sR0FBRyxFQUFoQixDQURXLENBQ1U7O0FBRXJCLGFBQU9BLE9BQVA7QUFDRDs7O2dDQUVXQyxNLEVBQVE7QUFDbEIsVUFBTUMseUJBQXlCLEdBQUdDLDZCQUEwQkMsV0FBMUIsRUFBbEM7QUFBQSxVQUNNQyxTQUFTLEdBQUdILHlCQURsQixDQURrQixDQUU0Qjs7O0FBRTlDLGFBQU9HLFNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQyxnQkFBZ0IsR0FBRyxJQUF6QjtBQUFBLFVBQ01DLGdCQUFnQixHQUFHQyxxQkFBYUMsb0JBQWIsQ0FBa0NYLGdCQUFsQyxFQUFvRFEsZ0JBQXBELENBRHpCOztBQUdBLGFBQU9DLGdCQUFQO0FBQ0Q7Ozs7RUF6QjJDQyxvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgZnJvbSBcIi4uLy4uL3BhcnNlVHJlZS9ub1doaXRlc3BhY2VOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IFwiXCI7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSA9IE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZU5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oTm9XaGl0ZXNwYWNlTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxufVxuIl19