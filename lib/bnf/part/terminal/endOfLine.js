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
    value: function parse(nodes, context, callback) {
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
        nodes.push(endOfLineNode);

        if (callback) {
          parsed = callback();

          if (!parsed) {
            nodes.pop();
          }
        }
      }

      if (!parsed) {
        context.backtrack(savedIndex);
      }

      return parsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJFTkRfT0ZfTElORSIsInNwZWNpYWxTeW1ib2xzIiwiRW5kT2ZMaW5lUGFydCIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZW5kT2ZMaW5lTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsInBvcCIsImJhY2t0cmFjayIsInN0cmluZyIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFcsR0FBZ0JDLDJCLENBQWhCRCxXOztJQUVhRSxhOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQUlDLE1BQUo7QUFFQSxVQUFJQyxhQUFhLEdBQUcsSUFBcEI7QUFFQSxVQUFNQyxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixFQUFuQjtBQUFBLFVBQ0lDLG9CQUFvQixHQUFHTixPQUFPLENBQUNPLHVCQUFSLEVBRDNCO0FBQUEsVUFFTUMsZ0JBQWdCLEdBQUdGLG9CQUZ6QixDQUw4QixDQU9pQjs7QUFFL0MsVUFBSUUsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDN0IsWUFBTUMsOEJBQThCLEdBQUdELGdCQUFnQixDQUFDRSxnQkFBakIsRUFBdkM7O0FBRUEsWUFBSUQsOEJBQUosRUFBb0M7QUFDbENOLFVBQUFBLGFBQWEsR0FBR1Esc0JBQWNDLG9CQUFkLENBQW1DSixnQkFBbkMsQ0FBaEI7QUFDRDtBQUNGOztBQUVETixNQUFBQSxNQUFNLEdBQUlDLGFBQWEsS0FBSyxJQUE1Qjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVkgsUUFBQUEsS0FBSyxDQUFDYyxJQUFOLENBQVdWLGFBQVg7O0FBRUEsWUFBSUYsUUFBSixFQUFjO0FBQ1pDLFVBQUFBLE1BQU0sR0FBR0QsUUFBUSxFQUFqQjs7QUFFQSxjQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYSCxZQUFBQSxLQUFLLENBQUNlLEdBQU47QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDWixNQUFMLEVBQWE7QUFDWEYsUUFBQUEsT0FBTyxDQUFDZSxTQUFSLENBQWtCWCxVQUFsQjtBQUNEOztBQUVELGFBQU9GLE1BQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTWMsTUFBTSxHQUFHcEIsV0FBZixDQURTLENBQ21COztBQUU1QixhQUFPb0IsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSxzRkFBbUJsQixhQUFuQjtBQUFvQzs7OztFQTdDTG1CLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgRW5kT2ZMaW5lTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZW5kT2ZMaW5lXCI7XG5cbmNvbnN0IHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCBlbmRPZkxpbmVOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICBlbmRPZkxpbmVOb2RlID0gRW5kT2ZMaW5lTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAoZW5kT2ZMaW5lTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKGVuZE9mTGluZU5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTkRfT0ZfTElORTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVQYXJ0KTsgfVxufVxuIl19