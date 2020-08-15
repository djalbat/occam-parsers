"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _partTypes = require("../../partTypes");

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

var questionMark = _occamLexers.specialSymbols.questionMark;

var OptionalPartPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(OptionalPartPart, _NonTerminalPart);

  var _super = _createSuper(OptionalPartPart);

  function OptionalPartPart(part) {
    var _this;

    _classCallCheck(this, OptionalPartPart);

    var type = _partTypes.OptionalPartPartType; ///

    _this = _super.call(this, type);
    _this.part = part;
    return _this;
  }

  _createClass(OptionalPartPart, [{
    key: "getPart",
    value: function getPart() {
      return this.part;
    }
  }, {
    key: "parse",
    value: function parse(nodes, context, callback) {
      var parsed;
      var part = this.getPart();

      if (callback) {
        parsed = callback();

        if (!parsed) {
          parsed = part.parse(nodes, context, callback);
        }
      } else {
        parsed = part.parse(nodes, context);
      }

      parsed = true;
      return parsed;
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = questionMark,
          ///
      partString = this.part.asString(),
          string = "".concat(partString).concat(operatorString);
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(OptionalPartPart.prototype), "clone", this).call(this, OptionalPartPart, this.part);
    }
  }]);

  return OptionalPartPart;
}(_nonTerminal["default"]);

exports["default"] = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwibm9kZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJwYXJzZWQiLCJnZXRQYXJ0IiwicGFyc2UiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFksR0FBaUJDLDJCLENBQWpCRCxZOztJQUVhRSxnQjs7Ozs7QUFDbkIsNEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQywrQkFBYixDQURnQixDQUNtQjs7QUFFbkMsOEJBQU1ELElBQU47QUFFQSxVQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFMZ0I7QUFNakI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzBCQUVLRyxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQUlDLE1BQUo7QUFFQSxVQUFNTixJQUFJLEdBQUcsS0FBS08sT0FBTCxFQUFiOztBQUVBLFVBQUlGLFFBQUosRUFBYztBQUNaQyxRQUFBQSxNQUFNLEdBQUdELFFBQVEsRUFBakI7O0FBRUEsWUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEEsVUFBQUEsTUFBTSxHQUFHTixJQUFJLENBQUNRLEtBQUwsQ0FBV0wsS0FBWCxFQUFrQkMsT0FBbEIsRUFBMkJDLFFBQTNCLENBQVQ7QUFDRDtBQUNGLE9BTkQsTUFNTztBQUNMQyxRQUFBQSxNQUFNLEdBQUdOLElBQUksQ0FBQ1EsS0FBTCxDQUFXTCxLQUFYLEVBQWtCQyxPQUFsQixDQUFUO0FBQ0Q7O0FBRURFLE1BQUFBLE1BQU0sR0FBRyxJQUFUO0FBRUEsYUFBT0EsTUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRyxjQUFjLEdBQUdaLFlBQXZCO0FBQUEsVUFBc0M7QUFDaENhLE1BQUFBLFVBQVUsR0FBRyxLQUFLVixJQUFMLENBQVVXLFFBQVYsRUFEbkI7QUFBQSxVQUVNQyxNQUFNLGFBQU1GLFVBQU4sU0FBbUJELGNBQW5CLENBRlo7QUFJQSxhQUFPRyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHlGQUFtQmIsZ0JBQW5CLEVBQXFDLEtBQUtDLElBQTFDO0FBQWtEOzs7O0VBekNoQmEsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcXVlc3Rpb25NYXJrLCAgLy8vXG4gICAgICAgICAgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT3B0aW9uYWxQYXJ0UGFydCwgdGhpcy5wYXJ0KTsgfVxufVxuIl19