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
    value: function parse(context, callback) {
      var nodes;
      var part = this.getPart();

      if (callback) {
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
            parsed = parseParts(callback);
        nodes = parsed ? partsNodes : null;
      } else {
        var count = 0;
        var _partsNodes = [];

        for (;;) {
          var partNodeOrNodes = part.parse(context);

          if (partNodeOrNodes === null) {
            break;
          }

          (0, _array.push)(_partsNodes, partNodeOrNodes);
          count++;
        }

        var _parsed = count >= 1;

        nodes = _parsed ? _partsNodes : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsImNvbnRleHQiLCJjYWxsYmFjayIsIm5vZGVzIiwiZ2V0UGFydCIsInBhcnNlUGFydHMiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsInBhcnRzTm9kZXMiLCJjb3VudCIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiQ29sbGVjdGlvbk9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsSSxHQUFTQywyQixDQUFURCxJOztJQUVhRSxrQjs7Ozs7QUFDbkIsOEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQyxpQ0FBYixDQURnQixDQUNxQjs7QUFEckIsNkJBR1ZELElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0csTyxFQUFTQyxRLEVBQVU7QUFDdkIsVUFBSUMsS0FBSjtBQUVBLFVBQU1MLElBQUksR0FBRyxLQUFLTSxPQUFMLEVBQWI7O0FBRUEsVUFBSUYsUUFBSixFQUFjO0FBQUEsWUFRSEcsVUFSRyxHQVFaLFNBQVNBLFVBQVQsQ0FBb0JILFFBQXBCLEVBQThCO0FBQzVCLGNBQU1JLGVBQWUsR0FBR1IsSUFBSSxDQUFDUyxLQUFMLENBQVdOLE9BQVgsRUFBb0I7QUFBQSxtQkFBTUMsUUFBUSxNQUFNRyxVQUFVLENBQUNILFFBQUQsQ0FBOUI7QUFBQSxXQUFwQixDQUF4QjtBQUFBLGNBQXVGO0FBQ2pGTSxVQUFBQSxNQUFNLEdBQUlGLGVBQWUsS0FBSyxJQURwQzs7QUFHQSxjQUFJRSxNQUFKLEVBQVk7QUFDVixnQ0FBUUMsVUFBUixFQUFvQkgsZUFBcEI7QUFDRDs7QUFFRCxpQkFBT0UsTUFBUDtBQUNELFNBakJXOztBQUNaLFlBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUFBLFlBQ01ELE1BQU0sR0FBR0gsVUFBVSxDQUFDSCxRQUFELENBRHpCO0FBR0FDLFFBQUFBLEtBQUssR0FBR0ssTUFBTSxHQUNKQyxVQURJLEdBRUYsSUFGWjtBQWNELE9BbEJELE1Ba0JPO0FBQ0wsWUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQSxZQUFNRCxXQUFVLEdBQUcsRUFBbkI7O0FBRUEsaUJBQVM7QUFDUCxjQUFNSCxlQUFlLEdBQUdSLElBQUksQ0FBQ1MsS0FBTCxDQUFXTixPQUFYLENBQXhCOztBQUVBLGNBQUlLLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QjtBQUNEOztBQUVELDJCQUFLRyxXQUFMLEVBQWlCSCxlQUFqQjtBQUVBSSxVQUFBQSxLQUFLO0FBQ047O0FBRUQsWUFBTUYsT0FBTSxHQUFJRSxLQUFLLElBQUksQ0FBekI7O0FBRUFQLFFBQUFBLEtBQUssR0FBR0ssT0FBTSxHQUNKQyxXQURJLEdBRUYsSUFGWjtBQUdEOztBQUVELGFBQU9OLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVEsY0FBYyxHQUFHaEIsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QmlCLE1BQUFBLE1BQU0sb0ZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMkZBQW1CZixrQkFBbkI7QUFBeUM7Ozs7RUFoRUxnQiw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbGxlY3Rpb25PZlBhcnRzUGFydCBmcm9tIFwiLi9jb2xsZWN0aW9uT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBwdXNoLCB1bnNoaWZ0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUsIHBhcnQpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZXM7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXSxcbiAgICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMoY2FsbGJhY2spO1xuXG4gICAgICBub2RlcyA9IHBhcnNlZCA/XG4gICAgICAgICAgICAgICAgcGFydHNOb2RlcyA6XG4gICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICBmdW5jdGlvbiBwYXJzZVBhcnRzKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gY2FsbGJhY2soKSB8fCBwYXJzZVBhcnRzKGNhbGxiYWNrKSksIC8vL1xuICAgICAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdW5zaGlmdChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyA9PT0gbnVsbCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVzaChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IChjb3VudCA+PSAxKTtcblxuICAgICAgbm9kZXMgPSBwYXJzZWQgP1xuICAgICAgICAgICAgICAgIHBhcnRzTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHBsdXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG59XG4iXX0=