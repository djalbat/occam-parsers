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
    value: function parse(nodes, context, callback) {
      var parsed;
      var part = this.getPart();

      if (callback) {
        parsed = callback();

        if (!parsed) {
          var parsePart = function parsePart() {
            var parsed = part.parse(nodes, context, function () {
              var parsed = callback();

              if (!parsed) {
                parsed = parsePart();
              }

              return parsed;
            });
            return parsed;
          };

          parsePart();
        }
      } else {
        for (;;) {
          parsed = part.parse(nodes, context);

          if (!parsed) {
            break;
          }
        }
      }

      parsed = true;
      return parsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsImdldFBhcnQiLCJwYXJzZVBhcnQiLCJwYXJzZSIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiQ29sbGVjdGlvbk9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUSxHQUFhQywyQixDQUFiRCxROztJQUVhRSxtQjs7Ozs7QUFDbkIsK0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQyxrQ0FBYixDQURnQixDQUNzQjs7QUFEdEIsNkJBR1ZELElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUM5QixVQUFJQyxNQUFKO0FBRUEsVUFBTU4sSUFBSSxHQUFHLEtBQUtPLE9BQUwsRUFBYjs7QUFFQSxVQUFJRixRQUFKLEVBQWM7QUFDWkMsUUFBQUEsTUFBTSxHQUFHRCxRQUFRLEVBQWpCOztBQUVBLFlBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQUEsY0FHRkUsU0FIRSxHQUdYLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsZ0JBQU1GLE1BQU0sR0FBR04sSUFBSSxDQUFDUyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCLFlBQU07QUFDOUMsa0JBQUlFLE1BQU0sR0FBR0QsUUFBUSxFQUFyQjs7QUFFQSxrQkFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEEsZ0JBQUFBLE1BQU0sR0FBR0UsU0FBUyxFQUFsQjtBQUNEOztBQUVELHFCQUFPRixNQUFQO0FBQ0QsYUFSYyxDQUFmO0FBVUEsbUJBQU9BLE1BQVA7QUFDRCxXQWZVOztBQUNYRSxVQUFBQSxTQUFTO0FBZVY7QUFDRixPQXBCRCxNQW9CTztBQUNMLGlCQUFTO0FBQ1BGLFVBQUFBLE1BQU0sR0FBR04sSUFBSSxDQUFDUyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLENBQVQ7O0FBRUEsY0FBSSxDQUFDRSxNQUFMLEVBQWE7QUFDWDtBQUNEO0FBQ0Y7QUFDRjs7QUFFREEsTUFBQUEsTUFBTSxHQUFHLElBQVQ7QUFFQSxhQUFPQSxNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1JLGNBQWMsR0FBR2IsUUFBdkI7QUFBQSxVQUFrQztBQUM1QmMsTUFBQUEsTUFBTSxxRkFBa0JELGNBQWxCLENBRFo7O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSw0RkFBbUJaLG1CQUFuQjtBQUEwQzs7OztFQXRETGEsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgZnJvbSBcIi4vY29sbGVjdGlvbk9mUGFydHNcIjtcblxuaW1wb3J0IHsgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgYXN0ZXJpc2sgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHBhcnNlUGFydCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlUGFydCgpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoOzspIHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBhc3RlcmlzaywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFplcm9Pck1vcmVQYXJ0c1BhcnQpOyB9XG59XG4iXX0=