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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      var part = this.getPart();

      if (callback) {
        var parsed = callback();

        if (!parsed) {
          var partNodes = [];
          partNodes = part.parse(partNodes, context, callback);

          var _parsed = partNodes !== null;

          if (_parsed) {
            nodes = [].concat(_toConsumableArray(partNodes), _toConsumableArray(nodes));
          }
        }
      } else {
        var _partNodes = part.parse(nodes, context);

        if (_partNodes !== null) {
          nodes = _partNodes; ///
        }
      }

      return nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwibm9kZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJnZXRQYXJ0IiwicGFyc2VkIiwicGFydE5vZGVzIiwicGFyc2UiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFksR0FBaUJDLDJCLENBQWpCRCxZOztJQUVhRSxnQjs7Ozs7QUFDbkIsNEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQywrQkFBYixDQURnQixDQUNtQjs7QUFFbkMsOEJBQU1ELElBQU47QUFFQSxVQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFMZ0I7QUFNakI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzBCQUVLRyxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQU1MLElBQUksR0FBRyxLQUFLTSxPQUFMLEVBQWI7O0FBRUEsVUFBSUQsUUFBSixFQUFjO0FBQ1osWUFBTUUsTUFBTSxHQUFHRixRQUFRLEVBQXZCOztBQUVBLFlBQUksQ0FBQ0UsTUFBTCxFQUFhO0FBQ1gsY0FBSUMsU0FBUyxHQUFHLEVBQWhCO0FBRUFBLFVBQUFBLFNBQVMsR0FBR1IsSUFBSSxDQUFDUyxLQUFMLENBQVdELFNBQVgsRUFBc0JKLE9BQXRCLEVBQStCQyxRQUEvQixDQUFaOztBQUVBLGNBQU1FLE9BQU0sR0FBSUMsU0FBUyxLQUFLLElBQTlCOztBQUVBLGNBQUlELE9BQUosRUFBWTtBQUNWSixZQUFBQSxLQUFLLGdDQUFRSyxTQUFSLHNCQUFzQkwsS0FBdEIsRUFBTDtBQUNEO0FBQ0Y7QUFDRixPQWRELE1BY087QUFDTCxZQUFNSyxVQUFTLEdBQUdSLElBQUksQ0FBQ1MsS0FBTCxDQUFXTixLQUFYLEVBQWtCQyxPQUFsQixDQUFsQjs7QUFFQSxZQUFJSSxVQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJMLFVBQUFBLEtBQUssR0FBR0ssVUFBUixDQURzQixDQUNGO0FBQ3JCO0FBQ0Y7O0FBRUQsYUFBT0wsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTyxjQUFjLEdBQUdiLFlBQXZCO0FBQUEsVUFBc0M7QUFDaENjLE1BQUFBLFVBQVUsR0FBRyxLQUFLWCxJQUFMLENBQVVZLFFBQVYsRUFEbkI7QUFBQSxVQUVNQyxNQUFNLGFBQU1GLFVBQU4sU0FBbUJELGNBQW5CLENBRlo7QUFJQSxhQUFPRyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHlGQUFtQmQsZ0JBQW5CLEVBQXFDLEtBQUtDLElBQTFDO0FBQWtEOzs7O0VBakRoQmMsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBsZXQgcGFydE5vZGVzID0gW107XG5cbiAgICAgICAgcGFydE5vZGVzID0gcGFydC5wYXJzZShwYXJ0Tm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMgPSBbIC4uLnBhcnROb2RlcywgLi4ubm9kZXMgXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHBhcnROb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcXVlc3Rpb25NYXJrLCAgLy8vXG4gICAgICAgICAgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT3B0aW9uYWxQYXJ0UGFydCwgdGhpcy5wYXJ0KTsgfVxufVxuIl19