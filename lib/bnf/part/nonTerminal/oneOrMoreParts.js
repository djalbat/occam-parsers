"use strict";

var _occamLexers = require("occam-lexers");

var _sequenceOfParts = _interopRequireDefault(require("./sequenceOfParts"));

var _zeroOrMoreParts = _interopRequireDefault(require("./zeroOrMoreParts"));

var _partTypes = require("../../partTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var plus = _occamLexers.specialSymbols.plus;

var OneOrMorePartsPart = /*#__PURE__*/function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    var type = _partTypes.OneOrMorePartsPartType; ///

    return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMorePartsPart).call(this, type, part));
  }

  _createClass(OneOrMorePartsPart, [{
    key: "parse",
    value: function parse(configuration) {
      var nodes = null;
      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
        nodes = partNodeOrNodes instanceof Array ? partNodeOrNodes : [partNodeOrNodes];

        var oneOrMorePartsPart = this,
            ///
        zeroOrMorePartsPart = _zeroOrMoreParts["default"].fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(configuration);

        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
      }

      return nodes;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "clone", this).call(this, OneOrMorePartsPart);
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = plus,
          ///
      string = _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "asString", this).call(this, operatorString);

      return string;
    }
  }]);

  return OneOrMorePartsPart;
}(_sequenceOfParts["default"]);

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsIkFycmF5Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJmcm9tT25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzIiwiY29uY2F0Iiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEksR0FBU0MsMkIsQ0FBVEQsSTs7SUFFRkUsa0I7OztBQUNKLDhCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0MsaUNBQWIsQ0FEZ0IsQ0FDcUI7O0FBRHJCLDJGQUdWRCxJQUhVLEVBR0pELElBSEk7QUFJakI7Ozs7MEJBRUtHLGEsRUFBZTtBQUNuQixVQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUVBLFVBQU1KLElBQUksR0FBRyxLQUFLSyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxlQUFlLEdBQUdOLElBQUksQ0FBQ08sS0FBTCxDQUFXSixhQUFYLENBRHhCO0FBQUEsVUFFTUssTUFBTSxHQUFJRixlQUFlLEtBQUssSUFGcEM7O0FBSUEsVUFBSUUsTUFBSixFQUFZO0FBQ1ZKLFFBQUFBLEtBQUssR0FBSUUsZUFBZSxZQUFZRyxLQUE1QixHQUNFSCxlQURGLEdBRUksQ0FBQ0EsZUFBRCxDQUZaOztBQUlBLFlBQU1JLGtCQUFrQixHQUFHLElBQTNCO0FBQUEsWUFBa0M7QUFDNUJDLFFBQUFBLG1CQUFtQixHQUFHQyw0QkFBb0JDLHNCQUFwQixDQUEyQ0gsa0JBQTNDLENBRDVCO0FBQUEsWUFFTUksOEJBQThCLEdBQUdILG1CQUFtQixDQUFDSixLQUFwQixDQUEwQkosYUFBMUIsQ0FGdkM7O0FBSUFDLFFBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDVyxNQUFOLENBQWFELDhCQUFiLENBQVI7QUFDRDs7QUFFRCxhQUFPVixLQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLDJGQUFtQkwsa0JBQW5CO0FBQXlDOzs7K0JBRXhDO0FBQ1QsVUFBTWlCLGNBQWMsR0FBR25CLElBQXZCO0FBQUEsVUFBOEI7QUFDeEJvQixNQUFBQSxNQUFNLG9GQUFrQkQsY0FBbEIsQ0FEWjs7QUFHQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs7RUFwQzhCQywyQjs7QUF1Q2pDQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJyQixrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4vemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMgPSAocGFydE5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgW3BhcnROb2RlT3JOb2Rlc107XG5cbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2RlcyA9IHplcm9Pck1vcmVQYXJ0c1BhcnQucGFyc2UoY29uZmlndXJhdGlvbik7XG5cbiAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBwbHVzLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzUGFydDtcbiJdfQ==