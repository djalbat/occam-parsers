"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var SequenceOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(SequenceOfPartsPart, _NonTerminalPart);

  var _super = _createSuper(SequenceOfPartsPart);

  function SequenceOfPartsPart(parts) {
    var _this;

    _classCallCheck(this, SequenceOfPartsPart);

    var type = _partTypes.SequenceOfPartsPartType; ///

    _this = _super.call(this, type);
    _this.parts = parts;
    return _this;
  }

  _createClass(SequenceOfPartsPart, [{
    key: "getParts",
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: "parse",
    value: function parse(nodes, context, callback) {
      var savedIndex = context.getSavedIndex();
      var partNodes = nodes; ///

      if (callback) {
        debugger;
      } else {
        this.parts.every(function (part) {
          partNodes = part.parse(partNodes, context, callback);

          if (partNodes !== null) {
            return true;
          }
        });
      }

      nodes = partNodes !== null ? partNodes : ///
      null;

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = "".concat(partsString, " ").concat(partString);
        }

        return partsString;
      }, null),
          string = "( ".concat(partsString, " )");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(SequenceOfPartsPart.prototype), "clone", this).call(this, SequenceOfPartsPart, this.parts);
    }
  }], [{
    key: "fromNodes",
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = (0, _array.allButFirstAndLast)(nodes);
      nodes = allButFirstAndLastNodes; ///

      var lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(lookAhead);
        return part;
      }),
          sequenceOfPartsPart = new SequenceOfPartsPart(parts);
      return sequenceOfPartsPart;
    }
  }]);

  return SequenceOfPartsPart;
}(_nonTerminal["default"]);

exports["default"] = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydE5vZGVzIiwiZXZlcnkiLCJwYXJ0IiwicGFyc2UiLCJiYWNrdHJhY2siLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7O0FBQ25CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLFFBQU1DLElBQUksR0FBR0Msa0NBQWIsQ0FEaUIsQ0FDcUI7O0FBRXRDLDhCQUFNRCxJQUFOO0FBRUEsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBTGlCO0FBTWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUM5QixVQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ0csYUFBUixFQUFuQjtBQUVBLFVBQUlDLFNBQVMsR0FBR0wsS0FBaEIsQ0FIOEIsQ0FHTjs7QUFFeEIsVUFBSUUsUUFBSixFQUFjO0FBQ1o7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLTCxLQUFMLENBQVdTLEtBQVgsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pCRixVQUFBQSxTQUFTLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxTQUFYLEVBQXNCSixPQUF0QixFQUErQkMsUUFBL0IsQ0FBWjs7QUFFQSxjQUFJRyxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsbUJBQU8sSUFBUDtBQUNEO0FBQ0YsU0FORDtBQU9EOztBQUVETCxNQUFBQSxLQUFLLEdBQUlLLFNBQVMsS0FBSyxJQUFmLEdBQ0VBLFNBREYsR0FDYztBQUNWLFVBRlo7O0FBSUEsVUFBSUwsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJDLFFBQUFBLE9BQU8sQ0FBQ1EsU0FBUixDQUFrQk4sVUFBbEI7QUFDRDs7QUFFRCxhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1VLFdBQVcsR0FBRyxLQUFLYixLQUFMLENBQVdjLE1BQVgsQ0FBa0IsVUFBQ0QsV0FBRCxFQUFjSCxJQUFkLEVBQXVCO0FBQ3JELFlBQU1LLFVBQVUsR0FBR0wsSUFBSSxDQUFDTSxRQUFMLEVBQW5COztBQUVBLFlBQUlILFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QkEsVUFBQUEsV0FBVyxHQUFHRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLFVBQUFBLFdBQVcsYUFBTUEsV0FBTixjQUFxQkUsVUFBckIsQ0FBWDtBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLE1BQU0sZUFBUUosV0FBUixPQVhaO0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSw0RkFBbUJsQixtQkFBbkIsRUFBd0MsS0FBS0MsS0FBN0M7QUFBc0Q7Ozs4QkFFL0NHLEssRUFBTztBQUN0QixVQUFNZSx1QkFBdUIsR0FBRywrQkFBbUJmLEtBQW5CLENBQWhDO0FBRUFBLE1BQUFBLEtBQUssR0FBR2UsdUJBQVIsQ0FIc0IsQ0FHWTs7QUFFbEMsVUFBTUMsU0FBUyxHQUFHLEtBQWxCO0FBQUEsVUFDTW5CLEtBQUssR0FBR0csS0FBSyxDQUFDaUIsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUMxQixZQUFNWCxJQUFJLEdBQUdXLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBYjtBQUVBLGVBQU9ULElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NYSxtQkFBbUIsR0FBRyxJQUFJeEIsbUJBQUosQ0FBd0JDLEtBQXhCLENBTjVCO0FBUUEsYUFBT3VCLG1CQUFQO0FBQ0Q7Ozs7RUExRThDQyx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIGxldCBwYXJ0Tm9kZXMgPSBub2RlczsgIC8vL1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgIHBhcnROb2RlcyA9IHBhcnQucGFyc2UocGFydE5vZGVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBub2RlcyA9IChwYXJ0Tm9kZXMgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgcGFydE5vZGVzIDogLy8vXG4gICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2VxdWVuY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiJdfQ==