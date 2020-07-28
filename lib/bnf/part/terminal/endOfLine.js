"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _endOfLine = _interopRequireDefault(require("../../../common/node/terminal/endOfLine"));

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

var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;

var EndOfLinePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(EndOfLinePart, _TerminalPart);

  var _super = _createSuper(EndOfLinePart);

  function EndOfLinePart() {
    _classCallCheck(this, EndOfLinePart);

    return _super.apply(this, arguments);
  }

  _createClass(EndOfLinePart, [{
    key: "parse",
    value: function parse(context, callback) {
      var parsed;
      var endOfLineNode = null;
      var savedIndex = context.getSavedIndex(),
          nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          endOfLineNode = _endOfLine["default"].fromSignificantToken(significantToken);
        }
      }

      parsed = endOfLineNode !== null;

      if (parsed) {
        if (callback) {
          parsed = callback();
        }
      }

      if (!parsed) {
        context.backtrack(savedIndex);
        endOfLineNode = null;
      }

      return endOfLineNode;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = END_OF_LINE; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(EndOfLinePart.prototype), "clone", this).call(this, EndOfLinePart);
    }
  }]);

  return EndOfLinePart;
}(_terminal["default"]);

exports["default"] = EndOfLinePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJFTkRfT0ZfTElORSIsInNwZWNpYWxTeW1ib2xzIiwiRW5kT2ZMaW5lUGFydCIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsImVuZE9mTGluZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsImJhY2t0cmFjayIsInN0cmluZyIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFcsR0FBZ0JDLDJCLENBQWhCRCxXOztJQUVhRSxhOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxNQUFKO0FBRUEsVUFBSUMsYUFBYSxHQUFHLElBQXBCO0FBRUEsVUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNLLGFBQVIsRUFBbkI7QUFBQSxVQUNJQyxvQkFBb0IsR0FBR04sT0FBTyxDQUFDTyx1QkFBUixFQUQzQjtBQUFBLFVBRU1DLGdCQUFnQixHQUFHRixvQkFGekIsQ0FMdUIsQ0FPd0I7O0FBRS9DLFVBQUlFLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQU1DLDhCQUE4QixHQUFHRCxnQkFBZ0IsQ0FBQ0UsZ0JBQWpCLEVBQXZDOztBQUVBLFlBQUlELDhCQUFKLEVBQW9DO0FBQ2xDTixVQUFBQSxhQUFhLEdBQUdRLHNCQUFjQyxvQkFBZCxDQUFtQ0osZ0JBQW5DLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRE4sTUFBQUEsTUFBTSxHQUFJQyxhQUFhLEtBQUssSUFBNUI7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1YsWUFBSUQsUUFBSixFQUFjO0FBQ1pDLFVBQUFBLE1BQU0sR0FBR0QsUUFBUSxFQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEYsUUFBQUEsT0FBTyxDQUFDYSxTQUFSLENBQWtCVCxVQUFsQjtBQUVBRCxRQUFBQSxhQUFhLEdBQUcsSUFBaEI7QUFDRDs7QUFFRCxhQUFPQSxhQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1XLE1BQU0sR0FBR2pCLFdBQWYsQ0FEUyxDQUNtQjs7QUFFNUIsYUFBT2lCLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsc0ZBQW1CZixhQUFuQjtBQUFvQzs7OztFQXpDTGdCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgRW5kT2ZMaW5lTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZW5kT2ZMaW5lXCI7XG5cbmNvbnN0IHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IGVuZE9mTGluZU5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKSxcblx0XHQgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgIGVuZE9mTGluZU5vZGUgPSBFbmRPZkxpbmVOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9IChlbmRPZkxpbmVOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgZW5kT2ZMaW5lTm9kZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTkRfT0ZfTElORTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVQYXJ0KTsgfVxufVxuIl19