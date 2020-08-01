"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));

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

var asterisk = _occamLexers.specialSymbols.asterisk;

var ZeroOrMorePartsPart = /*#__PURE__*/function (_CollectionOfPartsPar) {
  _inherits(ZeroOrMorePartsPart, _CollectionOfPartsPar);

  var _super = _createSuper(ZeroOrMorePartsPart);

  function ZeroOrMorePartsPart(part) {
    _classCallCheck(this, ZeroOrMorePartsPart);

    var type = _partTypes.ZeroOrMorePartsPartType; ///

    return _super.call(this, type, part);
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: "parse",
    value: function parse(context, callback) {
      var nodes;
      var part = this.getPart();

      if (callback) {
        var parsed = callback();

        if (parsed) {
          nodes = [];
        } else {
          var parseParts = function parseParts(callback) {
            var partNodeOrNodes = part.parse(context, function () {
              return callback() || parseParts(callback);
            }),
                ///
            parsed = partNodeOrNodes !== null;

            if (parsed) {
              (0, _array.unshift)(partsNodes, partNodeOrNodes);
            }

            return parsed;
          };

          var partsNodes = [],
              _parsed = parseParts(callback);

          nodes = _parsed ? partsNodes : null;
        }
      } else {
        var _partsNodes = [];

        for (;;) {
          var partNodeOrNodes = part.parse(context);

          if (partNodeOrNodes === null) {
            break;
          }

          (0, _array.push)(_partsNodes, partNodeOrNodes);
        }

        nodes = _partsNodes; ///
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
  }]);

  return ZeroOrMorePartsPart;
}(_collectionOfParts["default"]);

exports["default"] = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImdldFBhcnQiLCJwYXJzZWQiLCJwYXJzZVBhcnRzIiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0c05vZGVzIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxRLEdBQWFDLDJCLENBQWJELFE7O0lBRWFFLG1COzs7OztBQUNuQiwrQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxJQUFJLEdBQUdDLGtDQUFiLENBRGdCLENBQ3NCOztBQUR0Qiw2QkFHVkQsSUFIVSxFQUdKRCxJQUhJO0FBSWpCOzs7OzBCQUVLRyxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxLQUFKO0FBRUEsVUFBTUwsSUFBSSxHQUFHLEtBQUtNLE9BQUwsRUFBYjs7QUFFQSxVQUFJRixRQUFKLEVBQWM7QUFDWixZQUFNRyxNQUFNLEdBQUdILFFBQVEsRUFBdkI7O0FBRUEsWUFBSUcsTUFBSixFQUFZO0FBQ1ZGLFVBQUFBLEtBQUssR0FBRyxFQUFSO0FBQ0QsU0FGRCxNQUVPO0FBQUEsY0FRSUcsVUFSSixHQVFMLFNBQVNBLFVBQVQsQ0FBb0JKLFFBQXBCLEVBQThCO0FBQzVCLGdCQUFNSyxlQUFlLEdBQUdULElBQUksQ0FBQ1UsS0FBTCxDQUFXUCxPQUFYLEVBQW9CO0FBQUEscUJBQU1DLFFBQVEsTUFBTUksVUFBVSxDQUFDSixRQUFELENBQTlCO0FBQUEsYUFBcEIsQ0FBeEI7QUFBQSxnQkFBdUY7QUFDakZHLFlBQUFBLE1BQU0sR0FBSUUsZUFBZSxLQUFLLElBRHBDOztBQUdBLGdCQUFJRixNQUFKLEVBQVk7QUFDVixrQ0FBUUksVUFBUixFQUFvQkYsZUFBcEI7QUFDRDs7QUFFRCxtQkFBT0YsTUFBUDtBQUNELFdBakJJOztBQUNMLGNBQU1JLFVBQVUsR0FBRyxFQUFuQjtBQUFBLGNBQ01KLE9BQU0sR0FBR0MsVUFBVSxDQUFDSixRQUFELENBRHpCOztBQUdBQyxVQUFBQSxLQUFLLEdBQUdFLE9BQU0sR0FDSkksVUFESSxHQUVGLElBRlo7QUFjRDtBQUNGLE9BeEJELE1Bd0JPO0FBQ0wsWUFBTUEsV0FBVSxHQUFHLEVBQW5COztBQUVBLGlCQUFTO0FBQ1AsY0FBTUYsZUFBZSxHQUFHVCxJQUFJLENBQUNVLEtBQUwsQ0FBV1AsT0FBWCxDQUF4Qjs7QUFFQSxjQUFJTSxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUI7QUFDRDs7QUFFRCwyQkFBS0UsV0FBTCxFQUFpQkYsZUFBakI7QUFDRDs7QUFFREosUUFBQUEsS0FBSyxHQUFHTSxXQUFSLENBYkssQ0FhZTtBQUNyQjs7QUFFRCxhQUFPTixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1PLGNBQWMsR0FBR2YsUUFBdkI7QUFBQSxVQUFrQztBQUM1QmdCLE1BQUFBLE1BQU0scUZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsNEZBQW1CZCxtQkFBbkI7QUFBMEM7Ozs7RUE5RExlLDZCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGZyb20gXCIuL2NvbGxlY3Rpb25PZlBhcnRzXCI7XG5cbmltcG9ydCB7IHB1c2gsIHVuc2hpZnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUsIHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZXM7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXSxcbiAgICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhjYWxsYmFjayk7XG5cbiAgICAgICAgbm9kZXMgPSBwYXJzZWQgP1xuICAgICAgICAgICAgICAgICAgcGFydHNOb2RlcyA6XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VQYXJ0cyhjYWxsYmFjaykge1xuICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gY2FsbGJhY2soKSB8fCBwYXJzZVBhcnRzKGNhbGxiYWNrKSksIC8vL1xuICAgICAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgdW5zaGlmdChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyA9PT0gbnVsbCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVzaChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgfVxuXG4gICAgICBub2RlcyA9IHBhcnRzTm9kZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gYXN0ZXJpc2ssICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShaZXJvT3JNb3JlUGFydHNQYXJ0KTsgfVxufVxuIl19