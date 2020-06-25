"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _sequenceOfParts = _interopRequireDefault(require("./sequenceOfParts"));

var _zeroOrMoreParts = _interopRequireDefault(require("./zeroOrMoreParts"));

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

var plus = _occamLexers.specialSymbols.plus;

var OneOrMorePartsPart = /*#__PURE__*/function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  var _super = _createSuper(OneOrMorePartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    var type = _partTypes.OneOrMorePartsPartType; ///

    return _super.call(this, type, part);
  }

  _createClass(OneOrMorePartsPart, [{
    key: "parse",
    value: function parse(context) {
      var nodes = null;
      var part = this.getPart(),
          partNodeOrNodes = part.parse(context),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
        nodes = partNodeOrNodes instanceof Array ? partNodeOrNodes : [partNodeOrNodes];

        var oneOrMorePartsPart = this,
            ///
        zeroOrMorePartsPart = _zeroOrMoreParts["default"].fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context);

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

exports["default"] = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsImNvbnRleHQiLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsIkFycmF5Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJmcm9tT25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzIiwiY29uY2F0Iiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJTZXF1ZW5jZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsSSxHQUFTQywyQixDQUFURCxJOztJQUVhRSxrQjs7Ozs7QUFDbkIsOEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQyxpQ0FBYixDQURnQixDQUNxQjs7QUFEckIsNkJBR1ZELElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0csTyxFQUFTO0FBQ2IsVUFBSUMsS0FBSyxHQUFHLElBQVo7QUFFQSxVQUFNSixJQUFJLEdBQUcsS0FBS0ssT0FBTCxFQUFiO0FBQUEsVUFDTUMsZUFBZSxHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBV0osT0FBWCxDQUR4QjtBQUFBLFVBRU1LLE1BQU0sR0FBSUYsZUFBZSxLQUFLLElBRnBDOztBQUlBLFVBQUlFLE1BQUosRUFBWTtBQUNWSixRQUFBQSxLQUFLLEdBQUlFLGVBQWUsWUFBWUcsS0FBNUIsR0FDRUgsZUFERixHQUVJLENBQUNBLGVBQUQsQ0FGWjs7QUFJQSxZQUFNSSxrQkFBa0IsR0FBRyxJQUEzQjtBQUFBLFlBQWtDO0FBQzVCQyxRQUFBQSxtQkFBbUIsR0FBR0MsNEJBQW9CQyxzQkFBcEIsQ0FBMkNILGtCQUEzQyxDQUQ1QjtBQUFBLFlBRU1JLDhCQUE4QixHQUFHSCxtQkFBbUIsQ0FBQ0osS0FBcEIsQ0FBMEJKLE9BQTFCLENBRnZDOztBQUlBQyxRQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ1csTUFBTixDQUFhRCw4QkFBYixDQUFSO0FBQ0Q7O0FBRUQsYUFBT1YsS0FBUDtBQUNEOzs7NEJBRU87QUFBRSwyRkFBbUJMLGtCQUFuQjtBQUF5Qzs7OytCQUV4QztBQUNULFVBQU1pQixjQUFjLEdBQUduQixJQUF2QjtBQUFBLFVBQThCO0FBQ3hCb0IsTUFBQUEsTUFBTSxvRkFBa0JELGNBQWxCLENBRFo7O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7O0VBcEM2Q0MsMkIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFplcm9Pck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4vemVyb09yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQpLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMgPSAocGFydE5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgW3BhcnROb2RlT3JOb2Rlc107XG5cbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2RlcyA9IHplcm9Pck1vcmVQYXJ0c1BhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBwbHVzLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIl19