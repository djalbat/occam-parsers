"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var partTypes = require("../../partTypes"),
    NonTerminalPart = require("../../part/nonTerminal");

var specialSymbols = lexers.specialSymbols,
    questionMark = specialSymbols.questionMark,
    OptionalPartPartType = partTypes.OptionalPartPartType;

var OptionalPartPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(OptionalPartPart, _NonTerminalPart);

  function OptionalPartPart(part) {
    var _this;

    _classCallCheck(this, OptionalPartPart);

    var type = OptionalPartPartType; ///

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionalPartPart).call(this, type));
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
    value: function parse(configuration) {
      var nodes = [];
      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
        nodes = partNodeOrNodes;
      }

      return nodes;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(OptionalPartPart.prototype), "clone", this).call(this, OptionalPartPart, this.part);
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
  }]);

  return OptionalPartPart;
}(NonTerminalPart);

module.exports = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFydFR5cGVzIiwiTm9uVGVybWluYWxQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJxdWVzdGlvbk1hcmsiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsIm9wZXJhdG9yU3RyaW5nIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsaUJBQUQsQ0FBekI7QUFBQSxJQUNNRSxlQUFlLEdBQUdGLE9BQU8sQ0FBQyx3QkFBRCxDQUQvQjs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsWUFERixHQUNtQkQsY0FEbkIsQ0FDRUMsWUFERjtBQUFBLElBRUVDLG9CQUZGLEdBRTJCSixTQUYzQixDQUVFSSxvQkFGRjs7SUFJQUMsZ0I7OztBQUNKLDRCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0gsb0JBQWIsQ0FEZ0IsQ0FDbUI7O0FBRW5DLDBGQUFNRyxJQUFOO0FBRUEsVUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBTGdCO0FBTWpCOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0UsYSxFQUFlO0FBQ25CLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBRUEsVUFBTUgsSUFBSSxHQUFHLEtBQUtJLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGVBQWUsR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVdKLGFBQVgsQ0FEeEI7QUFBQSxVQUVNSyxNQUFNLEdBQUlGLGVBQWUsS0FBSyxJQUZwQzs7QUFJQSxVQUFJRSxNQUFKLEVBQVk7QUFDVkosUUFBQUEsS0FBSyxHQUFHRSxlQUFSO0FBQ0Q7O0FBRUQsYUFBT0YsS0FBUDtBQUNEOzs7NEJBRU87QUFBRSx5RkFBbUJKLGdCQUFuQixFQUFxQyxLQUFLQyxJQUExQztBQUFrRDs7OytCQUVqRDtBQUNULFVBQU1RLGNBQWMsR0FBR1gsWUFBdkI7QUFBQSxVQUFzQztBQUNoQ1ksTUFBQUEsVUFBVSxHQUFHLEtBQUtULElBQUwsQ0FBVVUsUUFBVixFQURuQjtBQUFBLFVBRU1DLE1BQU0sYUFBTUYsVUFBTixTQUFtQkQsY0FBbkIsQ0FGWjtBQUlBLGFBQU9HLE1BQVA7QUFDRDs7OztFQW5DNEJoQixlOztBQXNDL0JpQixNQUFNLENBQUNDLE9BQVAsR0FBaUJkLGdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKFwiLi4vLi4vcGFydFR5cGVzXCIpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZShcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIik7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPcHRpb25hbFBhcnRQYXJ0LCB0aGlzLnBhcnQpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBxdWVzdGlvbk1hcmssICAvLy9cbiAgICAgICAgICBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UGFydDtcbiJdfQ==