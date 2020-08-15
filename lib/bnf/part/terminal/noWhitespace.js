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
    value: function parse(nodes, context, callback) {
      var parsed;
      var noWhitespaceNode = null;
      var savedIndex = context.getSavedIndex(),
          nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();

      if (!nextTokenWhitespaceToken) {
        noWhitespaceNode = _noWhitespace["default"].fromNothing();
      }

      parsed = noWhitespaceNode !== null;

      if (parsed) {
        nodes.push(noWhitespaceNode);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZS5qcyJdLCJuYW1lcyI6WyJOT19XSElURVNQQUNFIiwic3BlY2lhbFN5bWJvbHMiLCJOb1doaXRlc3BhY2VQYXJ0Iiwibm9XaGl0ZXNwYWNlUGFydCIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwibm9XaGl0ZXNwYWNlTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJOb1doaXRlc3BhY2VOb2RlIiwiZnJvbU5vdGhpbmciLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwic3RyaW5nIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsYSxHQUFrQkMsMkIsQ0FBbEJELGE7O0lBRWFFLGdCOzs7Ozs7Ozs7Ozs7O3lDQUNFO0FBQ25CLFVBQU1DLGdCQUFnQixHQUFHLElBQXpCO0FBRUEsYUFBT0EsZ0JBQVA7QUFDRDs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQUlDLE1BQUo7QUFFQSxVQUFJQyxnQkFBZ0IsR0FBRyxJQUF2QjtBQUVBLFVBQU1DLFVBQVUsR0FBR0osT0FBTyxDQUFDSyxhQUFSLEVBQW5CO0FBQUEsVUFDTUMsd0JBQXdCLEdBQUdOLE9BQU8sQ0FBQ08sMEJBQVIsRUFEakM7O0FBR0EsVUFBSSxDQUFDRCx3QkFBTCxFQUErQjtBQUM3QkgsUUFBQUEsZ0JBQWdCLEdBQUdLLHlCQUFpQkMsV0FBakIsRUFBbkI7QUFDRDs7QUFFRFAsTUFBQUEsTUFBTSxHQUFJQyxnQkFBZ0IsS0FBSyxJQUEvQjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVkgsUUFBQUEsS0FBSyxDQUFDVyxJQUFOLENBQVdQLGdCQUFYOztBQUVBLFlBQUlGLFFBQUosRUFBYztBQUNaQyxVQUFBQSxNQUFNLEdBQUdELFFBQVEsRUFBakI7O0FBRUEsY0FBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEgsWUFBQUEsS0FBSyxDQUFDWSxHQUFOO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUksQ0FBQ1QsTUFBTCxFQUFhO0FBQ1hGLFFBQUFBLE9BQU8sQ0FBQ1ksU0FBUixDQUFrQlIsVUFBbEI7QUFDRDs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1XLE1BQU0sR0FBR2xCLGFBQWYsQ0FEUyxDQUNxQjs7QUFFOUIsYUFBT2tCLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUseUZBQW1CaEIsZ0JBQW5CO0FBQXVDOzs7O0VBOUNMaUIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9ub1doaXRlc3BhY2VcIjtcblxuY29uc3QgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9XaGl0ZXNwYWNlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGlzTm9XaGl0ZXNwYWNlUGFydCgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCBub1doaXRlc3BhY2VOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBjb250ZXh0LmlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICBpZiAoIW5leHRUb2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IE5vV2hpdGVzcGFjZU5vZGUuZnJvbU5vdGhpbmcoKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSAobm9XaGl0ZXNwYWNlTm9kZSAhPT0gbnVsbClcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2gobm9XaGl0ZXNwYWNlTm9kZSk7XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IE5PX1dISVRFU1BBQ0U7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoTm9XaGl0ZXNwYWNlUGFydCk7IH1cbn1cbiJdfQ==