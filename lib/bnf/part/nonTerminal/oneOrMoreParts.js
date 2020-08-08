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
        var parsePart = function parsePart(nodes, callback) {
          var partNodes = part.parse(nodes, context, function (nodes) {
            var partNodes = callback(nodes);

            if (partNodes !== null) {
              nodes = partNodes; ///
            } else {
              nodes = parsePart(nodes, callback);
            }

            return nodes;
          });
          return partNodes;
        };

        nodes = parsePart(nodes, callback);
      } else {
        var count = 0;

        for (;;) {
          var partNodes = part.parse(nodes, context);

          if (partNodes === null) {
            break;
          }

          nodes = partNodes; ///

          count++;
        }

        if (count === 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwiZ2V0UGFydCIsInBhcnNlUGFydCIsInBhcnROb2RlcyIsInBhcnNlIiwiY291bnQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEksR0FBU0MsMkIsQ0FBVEQsSTs7SUFFYUUsa0I7Ozs7O0FBQ25CLDhCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0MsaUNBQWIsQ0FEZ0IsQ0FDcUI7O0FBRHJCLDZCQUdWRCxJQUhVLEVBR0pELElBSEk7QUFJakI7Ozs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFDOUIsVUFBTUwsSUFBSSxHQUFHLEtBQUtNLE9BQUwsRUFBYjs7QUFFQSxVQUFJRCxRQUFKLEVBQWM7QUFBQSxZQUdIRSxTQUhHLEdBR1osU0FBU0EsU0FBVCxDQUFtQkosS0FBbkIsRUFBMEJFLFFBQTFCLEVBQW9DO0FBQ2xDLGNBQU1HLFNBQVMsR0FBR1IsSUFBSSxDQUFDUyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLEVBQTJCLFVBQUNELEtBQUQsRUFBVztBQUN0RCxnQkFBTUssU0FBUyxHQUFHSCxRQUFRLENBQUNGLEtBQUQsQ0FBMUI7O0FBRUEsZ0JBQUlLLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkwsY0FBQUEsS0FBSyxHQUFHSyxTQUFSLENBRHNCLENBQ0Y7QUFDckIsYUFGRCxNQUVPO0FBQ0xMLGNBQUFBLEtBQUssR0FBR0ksU0FBUyxDQUFDSixLQUFELEVBQVFFLFFBQVIsQ0FBakI7QUFDRDs7QUFFRCxtQkFBT0YsS0FBUDtBQUNELFdBVmlCLENBQWxCO0FBWUEsaUJBQU9LLFNBQVA7QUFDRCxTQWpCVzs7QUFDWkwsUUFBQUEsS0FBSyxHQUFJSSxTQUFTLENBQUNKLEtBQUQsRUFBUUUsUUFBUixDQUFsQjtBQWlCRCxPQWxCRCxNQWtCTztBQUNMLFlBQUlLLEtBQUssR0FBRyxDQUFaOztBQUVBLGlCQUFTO0FBQ1AsY0FBTUYsU0FBUyxHQUFHUixJQUFJLENBQUNTLEtBQUwsQ0FBV04sS0FBWCxFQUFrQkMsT0FBbEIsQ0FBbEI7O0FBRUEsY0FBSUksU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRURMLFVBQUFBLEtBQUssR0FBR0ssU0FBUixDQVBPLENBT2E7O0FBRXBCRSxVQUFBQSxLQUFLO0FBQ047O0FBRUQsWUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZlAsVUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVEsY0FBYyxHQUFHZCxJQUF2QjtBQUFBLFVBQThCO0FBQ3hCZSxNQUFBQSxNQUFNLG9GQUFrQkQsY0FBbEIsQ0FEWjs7QUFHQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLDJGQUFtQmIsa0JBQW5CO0FBQXlDOzs7O0VBMURMYyw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbGxlY3Rpb25PZlBhcnRzUGFydCBmcm9tIFwiLi9jb2xsZWN0aW9uT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIG5vZGVzICA9IHBhcnNlUGFydChub2RlcywgY2FsbGJhY2spO1xuXG4gICAgICBmdW5jdGlvbiBwYXJzZVBhcnQobm9kZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlcyA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsIChub2RlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnROb2RlcyA9IGNhbGxiYWNrKG5vZGVzKTtcblxuICAgICAgICAgIGlmIChwYXJ0Tm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGVzID0gcGFydE5vZGVzOyAgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzID0gcGFyc2VQYXJ0KG5vZGVzLCBjYWxsYmFjayk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFydE5vZGVzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlcyA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwYXJ0Tm9kZXMgPT09IG51bGwpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzID0gcGFydE5vZGVzOyAgLy8vXG5cbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIG5vZGVzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHBsdXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG59XG4iXX0=