"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _array = require("../../../utilities/array");

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
    value: function parse(context, callback) {
      var nodes;
      var part = this.getPart(),
          partsNodes = [];

      if (callback) {
        var parsed = callback();

        if (!parsed) {
          var partNodeOrNodes = part.parse(context, callback);

          if (partNodeOrNodes !== null) {
            (0, _array.unshift)(partsNodes, partNodeOrNodes);
          }
        }
      } else {
        var _partNodeOrNodes = part.parse(context);

        if (_partNodeOrNodes !== null) {
          (0, _array.push)(partsNodes, _partNodeOrNodes);
        }
      }

      nodes = partsNodes; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiY29udGV4dCIsImNhbGxiYWNrIiwibm9kZXMiLCJnZXRQYXJ0IiwicGFydHNOb2RlcyIsInBhcnNlZCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwib3BlcmF0b3JTdHJpbmciLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxZLEdBQWlCQywyQixDQUFqQkQsWTs7SUFFYUUsZ0I7Ozs7O0FBQ25CLDRCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0MsK0JBQWIsQ0FEZ0IsQ0FDbUI7O0FBRW5DLDhCQUFNRCxJQUFOO0FBRUEsVUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBTGdCO0FBTWpCOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTQyxRLEVBQVU7QUFDdkIsVUFBSUMsS0FBSjtBQUVBLFVBQU1MLElBQUksR0FBRyxLQUFLTSxPQUFMLEVBQWI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsRUFEbkI7O0FBR0EsVUFBSUgsUUFBSixFQUFjO0FBQ1osWUFBTUksTUFBTSxHQUFHSixRQUFRLEVBQXZCOztBQUVBLFlBQUksQ0FBQ0ksTUFBTCxFQUFhO0FBQ1gsY0FBTUMsZUFBZSxHQUFHVCxJQUFJLENBQUNVLEtBQUwsQ0FBV1AsT0FBWCxFQUFvQkMsUUFBcEIsQ0FBeEI7O0FBRUEsY0FBSUssZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLGdDQUFRRixVQUFSLEVBQW9CRSxlQUFwQjtBQUNEO0FBQ0Y7QUFDRixPQVZELE1BVU87QUFDTCxZQUFNQSxnQkFBZSxHQUFHVCxJQUFJLENBQUNVLEtBQUwsQ0FBV1AsT0FBWCxDQUF4Qjs7QUFFQSxZQUFJTSxnQkFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCLDJCQUFLRixVQUFMLEVBQWlCRSxnQkFBakI7QUFDRDtBQUNGOztBQUVESixNQUFBQSxLQUFLLEdBQUdFLFVBQVIsQ0F4QnVCLENBd0JIOztBQUVwQixhQUFPRixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLGNBQWMsR0FBR2QsWUFBdkI7QUFBQSxVQUFzQztBQUNoQ2UsTUFBQUEsVUFBVSxHQUFHLEtBQUtaLElBQUwsQ0FBVWEsUUFBVixFQURuQjtBQUFBLFVBRU1DLE1BQU0sYUFBTUYsVUFBTixTQUFtQkQsY0FBbkIsQ0FGWjtBQUlBLGFBQU9HLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUseUZBQW1CZixnQkFBbkIsRUFBcUMsS0FBS0MsSUFBMUM7QUFBa0Q7Ozs7RUFsRGhCZSx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoLCB1bnNoaWZ0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZXM7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgdW5zaGlmdChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgcHVzaChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVzID0gcGFydHNOb2RlczsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHF1ZXN0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9wdGlvbmFsUGFydFBhcnQsIHRoaXMucGFydCk7IH1cbn1cbiJdfQ==