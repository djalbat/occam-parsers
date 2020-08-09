"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));

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

var plus = _occamLexers.specialSymbols.plus;

var OneOrMorePartsPart = /*#__PURE__*/function (_CollectionOfPartsPar) {
  _inherits(OneOrMorePartsPart, _CollectionOfPartsPar);

  var _super = _createSuper(OneOrMorePartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    var type = _partTypes.OneOrMorePartsPartType; ///

    return _super.call(this, type, part);
  }

  _createClass(OneOrMorePartsPart, [{
    key: "parse",
    value: function parse(nodes, context, callback) {
      var part = this.getPart();

      if (callback) {
        var parsePart = function parsePart() {
          var partNodes = [];
          partNodes = part.parse(partNodes, context, function () {
            var parsed = callback();

            if (!parsed) {
              parsed = parsePart();
            }

            return parsed;
          });
          var parsed = partNodes !== null;

          if (parsed) {
            count++;
            nodes = [].concat(_toConsumableArray(partNodes), _toConsumableArray(nodes));
          }

          return parsed;
        };

        var count = 0;
        parsePart();

        if (count === 0) {
          nodes = null;
        }
      } else {
        var _count = 0;

        for (;;) {
          var partNodes = part.parse(nodes, context);

          if (partNodes === null) {
            break;
          }

          nodes = partNodes; ///

          _count++;
        }

        if (_count === 0) {
          nodes = null;
        }
      }

      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = plus,
          ///
      string = _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "asString", this).call(this, operatorString);

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "clone", this).call(this, OneOrMorePartsPart);
    }
  }]);

  return OneOrMorePartsPart;
}(_collectionOfParts["default"]);

exports["default"] = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwiZ2V0UGFydCIsInBhcnNlUGFydCIsInBhcnROb2RlcyIsInBhcnNlIiwicGFyc2VkIiwiY291bnQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEksR0FBU0MsMkIsQ0FBVEQsSTs7SUFFYUUsa0I7Ozs7O0FBQ25CLDhCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0MsaUNBQWIsQ0FEZ0IsQ0FDcUI7O0FBRHJCLDZCQUdWRCxJQUhVLEVBR0pELElBSEk7QUFJakI7Ozs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFDOUIsVUFBTUwsSUFBSSxHQUFHLEtBQUtNLE9BQUwsRUFBYjs7QUFFQSxVQUFJRCxRQUFKLEVBQWM7QUFBQSxZQUtIRSxTQUxHLEdBS1osU0FBU0EsU0FBVCxHQUFxQjtBQUNuQixjQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFFQUEsVUFBQUEsU0FBUyxHQUFHUixJQUFJLENBQUNTLEtBQUwsQ0FBV0QsU0FBWCxFQUFzQkosT0FBdEIsRUFBK0IsWUFBTTtBQUMvQyxnQkFBSU0sTUFBTSxHQUFHTCxRQUFRLEVBQXJCOztBQUVBLGdCQUFJLENBQUNLLE1BQUwsRUFBYTtBQUNYQSxjQUFBQSxNQUFNLEdBQUdILFNBQVMsRUFBbEI7QUFDRDs7QUFFRCxtQkFBT0csTUFBUDtBQUNELFdBUlcsQ0FBWjtBQVVBLGNBQU1BLE1BQU0sR0FBSUYsU0FBUyxLQUFLLElBQTlCOztBQUVBLGNBQUlFLE1BQUosRUFBWTtBQUNWQyxZQUFBQSxLQUFLO0FBRUxSLFlBQUFBLEtBQUssZ0NBQVFLLFNBQVIsc0JBQXNCTCxLQUF0QixFQUFMO0FBQ0Q7O0FBRUQsaUJBQU9PLE1BQVA7QUFDRCxTQTNCVzs7QUFDWixZQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUVBSixRQUFBQSxTQUFTOztBQTBCVCxZQUFJSSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmUixVQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNEO0FBQ0YsT0FoQ0QsTUFnQ087QUFDTCxZQUFJUSxNQUFLLEdBQUcsQ0FBWjs7QUFFQSxpQkFBUztBQUNQLGNBQU1ILFNBQVMsR0FBR1IsSUFBSSxDQUFDUyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLENBQWxCOztBQUVBLGNBQUlJLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QjtBQUNEOztBQUVETCxVQUFBQSxLQUFLLEdBQUdLLFNBQVIsQ0FQTyxDQU9hOztBQUVwQkcsVUFBQUEsTUFBSztBQUNOOztBQUVELFlBQUlBLE1BQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZSLFVBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1TLGNBQWMsR0FBR2YsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QmdCLE1BQUFBLE1BQU0sb0ZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMkZBQW1CZCxrQkFBbkI7QUFBeUM7Ozs7RUF4RUxlLDZCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGZyb20gXCIuL2NvbGxlY3Rpb25PZlBhcnRzXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT25lT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgcGFyc2VQYXJ0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlUGFydCgpIHtcbiAgICAgICAgbGV0IHBhcnROb2RlcyA9IFtdO1xuXG4gICAgICAgIHBhcnROb2RlcyA9IHBhcnQucGFyc2UocGFydE5vZGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gKHBhcnROb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvdW50Kys7XG5cbiAgICAgICAgICBub2RlcyA9IFsgLi4ucGFydE5vZGVzLCAuLi5ub2RlcyBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIG5vZGVzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgZm9yICg7Oykge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocGFydE5vZGVzID09PSBudWxsKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuXG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICBub2RlcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBwbHVzLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT25lT3JNb3JlUGFydHNQYXJ0KTsgfVxufVxuIl19