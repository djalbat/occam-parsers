"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _noWhitespace = _interopRequireDefault(require("../../../common/node/terminal/noWhitespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;

var NoWhitespacePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(NoWhitespacePart, _TerminalPart);

  var _super = _createSuper(NoWhitespacePart);

  function NoWhitespacePart() {
    _classCallCheck(this, NoWhitespacePart);

    return _super.apply(this, arguments);
  }

  _createClass(NoWhitespacePart, [{
    key: "isNoWhitespacePart",
    value: function isNoWhitespacePart() {
      var noWhitespacePart = true;
      return noWhitespacePart;
    }
  }, {
    key: "parse",
    value: function parse(context, callback) {
      var parsed;
      var noWhitespaceNode = null;
      var savedIndex = context.getSavedIndex(),
          nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

      if (!nextTokenWhitespaceToken) {
        noWhitespaceNode = _noWhitespace["default"].fromNothing();
      }

      parsed = noWhitespaceNode !== null;

      if (parsed) {
        if (callback) {
          parsed = callback();
        }
      }

      if (!parsed) {
        context.backtrack(savedIndex);
        noWhitespaceNode = null;
      }

      return noWhitespaceNode;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = NO_WHITESPACE; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(NoWhitespacePart.prototype), "clone", this).call(this, NoWhitespacePart);
    }
  }]);

  return NoWhitespacePart;
}(_terminal["default"]);

exports["default"] = NoWhitespacePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJOT19XSElURVNQQUNFIiwic3BlY2lhbFN5bWJvbHMiLCJOb1doaXRlc3BhY2VQYXJ0Iiwibm9XaGl0ZXNwYWNlUGFydCIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsIm5vV2hpdGVzcGFjZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiTm9XaGl0ZXNwYWNlTm9kZSIsImZyb21Ob3RoaW5nIiwiYmFja3RyYWNrIiwic3RyaW5nIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsYSxHQUFrQkMsMkIsQ0FBbEJELGE7O0lBRWFFLGdCOzs7Ozs7Ozs7Ozs7O3lDQUNFO0FBQ25CLFVBQU1DLGdCQUFnQixHQUFHLElBQXpCO0FBRUEsYUFBT0EsZ0JBQVA7QUFDRDs7OzBCQUVLQyxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxNQUFKO0FBRUEsVUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFFQSxVQUFNQyxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixFQUFuQjtBQUFBLFVBQ01DLHdCQUF3QixHQUFHTixPQUFPLENBQUNPLDBCQUFSLEVBRGpDOztBQUdBLFVBQUksQ0FBQ0Qsd0JBQUwsRUFBK0I7QUFDN0JILFFBQUFBLGdCQUFnQixHQUFHSyx5QkFBaUJDLFdBQWpCLEVBQW5CO0FBQ0Q7O0FBRURQLE1BQUFBLE1BQU0sR0FBSUMsZ0JBQWdCLEtBQUssSUFBL0I7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1YsWUFBSUQsUUFBSixFQUFjO0FBQ1pDLFVBQUFBLE1BQU0sR0FBR0QsUUFBUSxFQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEYsUUFBQUEsT0FBTyxDQUFDVSxTQUFSLENBQWtCTixVQUFsQjtBQUVBRCxRQUFBQSxnQkFBZ0IsR0FBRyxJQUFuQjtBQUNEOztBQUVELGFBQU9BLGdCQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1RLE1BQU0sR0FBR2YsYUFBZixDQURTLENBQ3FCOztBQUU5QixhQUFPZSxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHlGQUFtQmIsZ0JBQW5CO0FBQXVDOzs7O0VBMUNMYyxvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZU5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuXG5jb25zdCB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgaXNOb1doaXRlc3BhY2VQYXJ0KCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgbm9XaGl0ZXNwYWNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5pc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgaWYgKCFuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgIG5vV2hpdGVzcGFjZU5vZGUgPSBOb1doaXRlc3BhY2VOb2RlLmZyb21Ob3RoaW5nKCk7XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKG5vV2hpdGVzcGFjZU5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub1doaXRlc3BhY2VOb2RlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IE5PX1dISVRFU1BBQ0U7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoTm9XaGl0ZXNwYWNlUGFydCk7IH1cbn1cbiJdfQ==