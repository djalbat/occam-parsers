"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _sequenceOfParts = _interopRequireDefault(require("./sequenceOfParts"));

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

var asterisk = _occamLexers.specialSymbols.asterisk;

var ZeroOrMorePartsPart = /*#__PURE__*/function (_SequenceOfPartsPart) {
  _inherits(ZeroOrMorePartsPart, _SequenceOfPartsPart);

  var _super = _createSuper(ZeroOrMorePartsPart);

  function ZeroOrMorePartsPart(part) {
    _classCallCheck(this, ZeroOrMorePartsPart);

    var type = _partTypes.ZeroOrMorePartsPartType; ///

    return _super.call(this, type, part);
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: "parse",
    value: function parse(context) {
      var nodes = [];
      var part = this.getPart();

      for (;;) {
        var partNodeOrNodes = part.parse(context),
            parsed = partNodeOrNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodeOrNodes);
        } else {
          break;
        }
      }

      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = asterisk,
          ///
      string = _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "asString", this).call(this, operatorString);

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "clone", this).call(this, ZeroOrMorePartsPart);
    }
  }], [{
    key: "fromOneOrMorePartsPart",
    value: function fromOneOrMorePartsPart(oneOrMorePartsPart) {
      var part = oneOrMorePartsPart.getPart(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(_sequenceOfParts["default"]);

exports["default"] = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJjb250ZXh0Iiwibm9kZXMiLCJnZXRQYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJjb25jYXQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUSxHQUFhQywyQixDQUFiRCxROztJQUVhRSxtQjs7Ozs7QUFDbkIsK0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQyxrQ0FBYixDQURnQixDQUNzQjs7QUFEdEIsNkJBR1ZELElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0csTyxFQUFTO0FBQ2IsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFQSxVQUFNSixJQUFJLEdBQUcsS0FBS0ssT0FBTCxFQUFiOztBQUVBLGVBQVE7QUFDTixZQUFNQyxlQUFlLEdBQUdOLElBQUksQ0FBQ08sS0FBTCxDQUFXSixPQUFYLENBQXhCO0FBQUEsWUFDTUssTUFBTSxHQUFJRixlQUFlLEtBQUssSUFEcEM7O0FBR0EsWUFBSUUsTUFBSixFQUFZO0FBQ1ZKLFVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDSyxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLGNBQWMsR0FBR2IsUUFBdkI7QUFBQSxVQUFrQztBQUM1QmMsTUFBQUEsTUFBTSxxRkFBa0JELGNBQWxCLENBRFo7O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSw0RkFBbUJaLG1CQUFuQjtBQUEwQzs7OzJDQUV0QmEsa0IsRUFBb0I7QUFDaEQsVUFBTVosSUFBSSxHQUFHWSxrQkFBa0IsQ0FBQ1AsT0FBbkIsRUFBYjtBQUFBLFVBQ01RLG1CQUFtQixHQUFHLElBQUlkLG1CQUFKLENBQXdCQyxJQUF4QixDQUQ1QjtBQUdBLGFBQU9hLG1CQUFQO0FBQ0Q7Ozs7RUF4QzhDQywyQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZnJvbSBcIi4vc2VxdWVuY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUsIHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKTtcblxuICAgIGZvcig7Oykge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0KSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IGFzdGVyaXNrLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoWmVyb09yTW9yZVBhcnRzUGFydCk7IH1cblxuICBzdGF0aWMgZnJvbU9uZU9yTW9yZVBhcnRzUGFydChvbmVPck1vcmVQYXJ0c1BhcnQpIHtcbiAgICBjb25zdCBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuIl19