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
      var parsed;
      var part = this.getPart();
      var savedIndex = context.getSavedIndex();
      var partsNodes = [];
      var count = 0;

      if (callback) {
        var parsePart = function parsePart() {
          var parsed = part.parse(partsNodes, context, function () {
            var parsed = callback();

            if (!parsed) {
              parsed = parsePart();
            }

            return parsed;
          });

          if (parsed) {
            count++;
          }

          return parsed;
        };

        parsePart();
      } else {
        for (;;) {
          var _parsed = part.parse(partsNodes, context);

          if (!_parsed) {
            break;
          }

          count++;
        }
      }

      parsed = count !== 0;

      if (parsed) {
        (0, _array.push)(nodes, partsNodes);
      }

      if (!parsed) {
        context.backtrack(savedIndex);
      }

      return parsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImNvdW50IiwicGFyc2VQYXJ0IiwicGFyc2UiLCJiYWNrdHJhY2siLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEksR0FBU0MsMkIsQ0FBVEQsSTs7SUFFYUUsa0I7Ozs7O0FBQ25CLDhCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0MsaUNBQWIsQ0FEZ0IsQ0FDcUI7O0FBRHJCLDZCQUdWRCxJQUhVLEVBR0pELElBSEk7QUFJakI7Ozs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFDOUIsVUFBSUMsTUFBSjtBQUVBLFVBQU1OLElBQUksR0FBRyxLQUFLTyxPQUFMLEVBQWI7QUFFQSxVQUFNQyxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixFQUFuQjtBQUVBLFVBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUVBLFVBQUlDLEtBQUssR0FBRyxDQUFaOztBQUVBLFVBQUlOLFFBQUosRUFBYztBQUFBLFlBR0hPLFNBSEcsR0FHWixTQUFTQSxTQUFULEdBQXFCO0FBQ25CLGNBQU1OLE1BQU0sR0FBR04sSUFBSSxDQUFDYSxLQUFMLENBQVdILFVBQVgsRUFBdUJOLE9BQXZCLEVBQWdDLFlBQU07QUFDbkQsZ0JBQUlFLE1BQU0sR0FBR0QsUUFBUSxFQUFyQjs7QUFFQSxnQkFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEEsY0FBQUEsTUFBTSxHQUFHTSxTQUFTLEVBQWxCO0FBQ0Q7O0FBRUQsbUJBQU9OLE1BQVA7QUFDRCxXQVJjLENBQWY7O0FBVUEsY0FBSUEsTUFBSixFQUFZO0FBQ1ZLLFlBQUFBLEtBQUs7QUFDTjs7QUFFRCxpQkFBT0wsTUFBUDtBQUNELFNBbkJXOztBQUNaTSxRQUFBQSxTQUFTO0FBbUJWLE9BcEJELE1Bb0JPO0FBQ0wsaUJBQVM7QUFDUCxjQUFNTixPQUFNLEdBQUdOLElBQUksQ0FBQ2EsS0FBTCxDQUFXSCxVQUFYLEVBQXVCTixPQUF2QixDQUFmOztBQUVBLGNBQUksQ0FBQ0UsT0FBTCxFQUFhO0FBQ1g7QUFDRDs7QUFFREssVUFBQUEsS0FBSztBQUNOO0FBQ0Y7O0FBRURMLE1BQUFBLE1BQU0sR0FBSUssS0FBSyxLQUFLLENBQXBCOztBQUVBLFVBQUlMLE1BQUosRUFBWTtBQUNWLHlCQUFLSCxLQUFMLEVBQVlPLFVBQVo7QUFDRDs7QUFFRCxVQUFJLENBQUNKLE1BQUwsRUFBYTtBQUNYRixRQUFBQSxPQUFPLENBQUNVLFNBQVIsQ0FBa0JOLFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0YsTUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNUyxjQUFjLEdBQUdsQixJQUF2QjtBQUFBLFVBQThCO0FBQ3hCbUIsTUFBQUEsTUFBTSxvRkFBa0JELGNBQWxCLENBRFo7O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSwyRkFBbUJqQixrQkFBbkI7QUFBeUM7Ozs7RUF0RUxrQiw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbGxlY3Rpb25PZlBhcnRzUGFydCBmcm9tIFwiLi9jb2xsZWN0aW9uT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUsIHBhcnQpO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKTtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHBhcnNlUGFydCgpO1xuXG4gICAgICBmdW5jdGlvbiBwYXJzZVBhcnQoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnQucGFyc2UocGFydHNOb2RlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICg7Oykge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9IChjb3VudCAhPT0gMCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcGx1cywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9uZU9yTW9yZVBhcnRzUGFydCk7IH1cbn1cbiJdfQ==