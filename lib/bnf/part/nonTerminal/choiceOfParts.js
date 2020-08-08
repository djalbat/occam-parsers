"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _partTypes = require("../../partTypes");

var _array = require("../../../utilities/array");

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

var ChoiceOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  var _super = _createSuper(ChoiceOfPartsPart);

  function ChoiceOfPartsPart(parts) {
    var _this;

    _classCallCheck(this, ChoiceOfPartsPart);

    var type = _partTypes.ChoiceOfPartsPartType; ///

    _this = _super.call(this, type);
    _this.parts = parts;
    return _this;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: "getParts",
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: "parse",
    value: function parse(nodes, context, callback) {
      var partNodes;
      this.parts.some(function (part) {
        partNodes = part.parse(nodes, context, callback);

        if (partNodes !== null) {
          return true;
        }
      });
      nodes = partNodes; ///

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
          partsString = "".concat(partsString, " | ").concat(partString);
        }

        return partsString;
      }, null),
          string = "( ".concat(partsString, " )");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(ChoiceOfPartsPart.prototype), "clone", this).call(this, ChoiceOfPartsPart, this.parts);
    }
  }], [{
    key: "fromNodes",
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = (0, _array.allButFirstAndLast)(nodes);
      nodes = allButFirstAndLastNodes; ///

      var evenNodes = (0, _array.even)(nodes);
      nodes = evenNodes; ///

      var lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(lookAhead);
        return part;
      }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(_nonTerminal["default"]);

exports["default"] = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnROb2RlcyIsInNvbWUiLCJwYXJ0IiwicGFyc2UiLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwiZXZlbk5vZGVzIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsImNob2ljZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7OztBQUNuQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixRQUFNQyxJQUFJLEdBQUdDLGdDQUFiLENBRGlCLENBQ21COztBQUVwQyw4QkFBTUQsSUFBTjtBQUVBLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFDOUIsVUFBSUMsU0FBSjtBQUVBLFdBQUtOLEtBQUwsQ0FBV08sSUFBWCxDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDeEJGLFFBQUFBLFNBQVMsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCQyxRQUEzQixDQUFaOztBQUVBLFlBQUlDLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQU5EO0FBUUFILE1BQUFBLEtBQUssR0FBR0csU0FBUixDQVg4QixDQVdWOztBQUVwQixhQUFPSCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1PLFdBQVcsR0FBRyxLQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0IsVUFBQ0QsV0FBRCxFQUFjRixJQUFkLEVBQXVCO0FBQ3JELFlBQU1JLFVBQVUsR0FBR0osSUFBSSxDQUFDSyxRQUFMLEVBQW5COztBQUVBLFlBQUlILFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QkEsVUFBQUEsV0FBVyxHQUFHRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLFVBQUFBLFdBQVcsYUFBTUEsV0FBTixnQkFBdUJFLFVBQXZCLENBQVg7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxNQUFNLGVBQVFKLFdBQVIsT0FYWjtBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMEZBQW1CZixpQkFBbkIsRUFBc0MsS0FBS0MsS0FBM0M7QUFBb0Q7Ozs4QkFFN0NHLEssRUFBTztBQUN0QixVQUFNWSx1QkFBdUIsR0FBRywrQkFBbUJaLEtBQW5CLENBQWhDO0FBRUFBLE1BQUFBLEtBQUssR0FBR1ksdUJBQVIsQ0FIc0IsQ0FHWTs7QUFFbEMsVUFBTUMsU0FBUyxHQUFHLGlCQUFLYixLQUFMLENBQWxCO0FBRUFBLE1BQUFBLEtBQUssR0FBR2EsU0FBUixDQVBzQixDQU9GOztBQUVwQixVQUFNQyxTQUFTLEdBQUcsS0FBbEI7QUFBQSxVQUNNakIsS0FBSyxHQUFHRyxLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDMUIsWUFBTVgsSUFBSSxHQUFHVyxJQUFJLENBQUNDLFlBQUwsQ0FBa0JILFNBQWxCLENBQWI7QUFFQSxlQUFPVCxJQUFQO0FBQ0QsT0FKTyxDQURkO0FBQUEsVUFNTWEsaUJBQWlCLEdBQUcsSUFBSXRCLGlCQUFKLENBQXNCQyxLQUF0QixDQU4xQjtBQVFBLGFBQU9xQixpQkFBUDtBQUNEOzs7O0VBbEU0Q0MsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBDaG9pY2VPZlBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5pbXBvcnQgeyBldmVuLCBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob2ljZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuICAgIFxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuICBcbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFydE5vZGVzO1xuXG4gICAgdGhpcy5wYXJ0cy5zb21lKChwYXJ0KSA9PiB7XG4gICAgICBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJ0Tm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gfCAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShDaG9pY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuICAgIFxuICAgIGNvbnN0IGV2ZW5Ob2RlcyA9IGV2ZW4obm9kZXMpO1xuXG4gICAgbm9kZXMgPSBldmVuTm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iXX0=