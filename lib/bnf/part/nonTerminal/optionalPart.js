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
      var part = this.getPart();

      if (callback) {
        var partNodes = callback(nodes);

        if (partNodes !== null) {
          nodes = partNodes; ///
        } else {
          var _partNodes = part.parse(nodes, context, callback);

          if (_partNodes !== null) {
            nodes = _partNodes; ///
          }
        }
      } else {
        var _partNodes2 = part.parse(nodes, context);

        if (_partNodes2 !== null) {
          nodes = _partNodes2; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwibm9kZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJnZXRQYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFksR0FBaUJDLDJCLENBQWpCRCxZOztJQUVhRSxnQjs7Ozs7QUFDbkIsNEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQywrQkFBYixDQURnQixDQUNtQjs7QUFFbkMsOEJBQU1ELElBQU47QUFFQSxVQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFMZ0I7QUFNakI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzBCQUVLRyxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQU1MLElBQUksR0FBRyxLQUFLTSxPQUFMLEVBQWI7O0FBRUEsVUFBSUQsUUFBSixFQUFjO0FBQ1osWUFBTUUsU0FBUyxHQUFHRixRQUFRLENBQUNGLEtBQUQsQ0FBMUI7O0FBRUEsWUFBSUksU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCSixVQUFBQSxLQUFLLEdBQUdJLFNBQVIsQ0FEc0IsQ0FDRjtBQUNyQixTQUZELE1BRU87QUFDTCxjQUFNQSxVQUFTLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUFXTCxLQUFYLEVBQWtCQyxPQUFsQixFQUEyQkMsUUFBM0IsQ0FBbEI7O0FBRUEsY0FBSUUsVUFBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCSixZQUFBQSxLQUFLLEdBQUdJLFVBQVIsQ0FEc0IsQ0FDRjtBQUNyQjtBQUNGO0FBQ0YsT0FaRCxNQVlPO0FBQ0wsWUFBTUEsV0FBUyxHQUFHUCxJQUFJLENBQUNRLEtBQUwsQ0FBV0wsS0FBWCxFQUFrQkMsT0FBbEIsQ0FBbEI7O0FBRUEsWUFBSUcsV0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCSixVQUFBQSxLQUFLLEdBQUdJLFdBQVIsQ0FEc0IsQ0FDRjtBQUNyQjtBQUNGOztBQUVELGFBQU9KLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU0sY0FBYyxHQUFHWixZQUF2QjtBQUFBLFVBQXNDO0FBQ2hDYSxNQUFBQSxVQUFVLEdBQUcsS0FBS1YsSUFBTCxDQUFVVyxRQUFWLEVBRG5CO0FBQUEsVUFFTUMsTUFBTSxhQUFNRixVQUFOLFNBQW1CRCxjQUFuQixDQUZaO0FBSUEsYUFBT0csTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx5RkFBbUJiLGdCQUFuQixFQUFxQyxLQUFLQyxJQUExQztBQUFrRDs7OztFQS9DaEJhLHVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IE9wdGlvbmFsUGFydFBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9wdGlvbmFsUGFydFBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY29uc3QgcGFydE5vZGVzID0gY2FsbGJhY2sobm9kZXMpO1xuXG4gICAgICBpZiAocGFydE5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGVzID0gcGFydE5vZGVzOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIG5vZGVzID0gcGFydE5vZGVzOyAgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydE5vZGVzID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHF1ZXN0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9wdGlvbmFsUGFydFBhcnQsIHRoaXMucGFydCk7IH1cbn1cbiJdfQ==