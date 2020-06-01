"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _terminal = _interopRequireDefault(require("../terminal"));

var _endOfLineNode = _interopRequireDefault(require("../../parseTree/endOfLineNode"));

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

var EndOfLineNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(EndOfLineNode, _TerminalNode);

  var _super = _createSuper(EndOfLineNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _super.apply(this, arguments);
  }

  _createClass(EndOfLineNode, [{
    key: "getContent",
    value: function getContent() {
      var content = ""; ///

      return content;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var endOfLineNodeParseTree = _endOfLineNode["default"].fromNothing(),
          parseTree = endOfLineNodeParseTree; ///


      return parseTree;
    }
  }], [{
    key: "fromSignificantToken",
    value: function fromSignificantToken(significantToken) {
      return _terminal["default"].fromSignificantToken(EndOfLineNode, significantToken);
    }
  }]);

  return EndOfLineNode;
}(_terminal["default"]);

exports["default"] = EndOfLineNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJFbmRPZkxpbmVOb2RlIiwiY29udGVudCIsInRva2VucyIsImVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJzaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7O2lDQUNOO0FBQ1gsVUFBTUMsT0FBTyxHQUFHLEVBQWhCLENBRFcsQ0FDVTs7QUFFckIsYUFBT0EsT0FBUDtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixVQUFNQyxzQkFBc0IsR0FBR0MsMEJBQXVCQyxXQUF2QixFQUEvQjtBQUFBLFVBQ01DLFNBQVMsR0FBR0gsc0JBRGxCLENBRGtCLENBRXlCOzs7QUFFM0MsYUFBT0csU0FBUDtBQUNEOzs7eUNBRTJCQyxnQixFQUFrQjtBQUFFLGFBQU9DLHFCQUFhQyxvQkFBYixDQUFrQ1QsYUFBbEMsRUFBaURPLGdCQUFqRCxDQUFQO0FBQTRFOzs7O0VBZG5GQyxvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IEVuZE9mTGluZU5vZGVQYXJzZVRyZWUgZnJvbSBcIi4uLy4uL3BhcnNlVHJlZS9lbmRPZkxpbmVOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBcIlwiOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVuZE9mTGluZU5vZGVQYXJzZVRyZWUgPSBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7IHJldHVybiBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRW5kT2ZMaW5lTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7IH1cbn1cbiJdfQ==