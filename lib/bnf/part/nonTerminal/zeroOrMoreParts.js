"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));

var _synchronous = require("../../../utilities/synchronous");

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
      var part = this.getPart(),
          partsNodes = [];
      var terminate = false;

      if (callback) {
        var parsePart = function parsePart(context, callback) {
          var parsed;

          if (terminate) {
            parsed = true;
          } else {
            parsed = callback();

            if (parsed) {
              terminate = true;
            } else {
              var partNodeOrNodes = part.parse(context, function () {
                return parsePart(context, callback);
              });
              parsed = partNodeOrNodes !== null;

              if (parsed) {
                (0, _array.unshift)(partsNodes, partNodeOrNodes);
              } else {
                terminate = true;
              }
            }
          }

          return parsed;
        };

        parsePart(context, callback);
      } else {
        (0, _synchronous.whilst)(function () {
          if (!terminate) {
            var partNodeOrNodes = part.parse(context);

            if (partNodeOrNodes === null) {
              terminate = true;
            } else {
              (0, _array.push)(partsNodes, partNodeOrNodes);
            }
          }

          return terminate;
        });
      }

      nodes = partsNodes; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0c05vZGVzIiwidGVybWluYXRlIiwicGFyc2VQYXJ0IiwicGFyc2VkIiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFEsR0FBYUMsMkIsQ0FBYkQsUTs7SUFFYUUsbUI7Ozs7O0FBQ25CLCtCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0Msa0NBQWIsQ0FEZ0IsQ0FDc0I7O0FBRHRCLDZCQUdWRCxJQUhVLEVBR0pELElBSEk7QUFJakI7Ozs7MEJBRUtHLE8sRUFBU0MsUSxFQUFVO0FBQ3ZCLFVBQUlDLEtBQUo7QUFFQSxVQUFNTCxJQUFJLEdBQUcsS0FBS00sT0FBTCxFQUFiO0FBQUEsVUFDTUMsVUFBVSxHQUFHLEVBRG5CO0FBR0EsVUFBSUMsU0FBUyxHQUFHLEtBQWhCOztBQUVBLFVBQUlKLFFBQUosRUFBYztBQUFBLFlBR0hLLFNBSEcsR0FHWixTQUFTQSxTQUFULENBQW1CTixPQUFuQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsY0FBSU0sTUFBSjs7QUFFQSxjQUFJRixTQUFKLEVBQWU7QUFDYkUsWUFBQUEsTUFBTSxHQUFHLElBQVQ7QUFDRCxXQUZELE1BRU87QUFDTEEsWUFBQUEsTUFBTSxHQUFHTixRQUFRLEVBQWpCOztBQUVBLGdCQUFJTSxNQUFKLEVBQVk7QUFDVkYsY0FBQUEsU0FBUyxHQUFHLElBQVo7QUFDRCxhQUZELE1BRU87QUFDTCxrQkFBTUcsZUFBZSxHQUFHWCxJQUFJLENBQUNZLEtBQUwsQ0FBV1QsT0FBWCxFQUFvQjtBQUFBLHVCQUFNTSxTQUFTLENBQUNOLE9BQUQsRUFBVUMsUUFBVixDQUFmO0FBQUEsZUFBcEIsQ0FBeEI7QUFFQU0sY0FBQUEsTUFBTSxHQUFJQyxlQUFlLEtBQUssSUFBOUI7O0FBRUEsa0JBQUlELE1BQUosRUFBWTtBQUNWLG9DQUFRSCxVQUFSLEVBQW9CSSxlQUFwQjtBQUNELGVBRkQsTUFFTztBQUNMSCxnQkFBQUEsU0FBUyxHQUFHLElBQVo7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsaUJBQU9FLE1BQVA7QUFDRCxTQTNCVzs7QUFDWkQsUUFBQUEsU0FBUyxDQUFDTixPQUFELEVBQVVDLFFBQVYsQ0FBVDtBQTJCRCxPQTVCRCxNQTRCTztBQUNMLGlDQUFPLFlBQU07QUFDWCxjQUFJLENBQUNJLFNBQUwsRUFBZ0I7QUFDZCxnQkFBTUcsZUFBZSxHQUFHWCxJQUFJLENBQUNZLEtBQUwsQ0FBV1QsT0FBWCxDQUF4Qjs7QUFFQSxnQkFBSVEsZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCSCxjQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNELGFBRkQsTUFFTztBQUNMLCtCQUFLRCxVQUFMLEVBQWlCSSxlQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsaUJBQU9ILFNBQVA7QUFDRCxTQVpEO0FBYUQ7O0FBRURILE1BQUFBLEtBQUssR0FBR0UsVUFBUixDQXBEdUIsQ0FvREg7O0FBRXBCLGFBQU9GLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVEsY0FBYyxHQUFHaEIsUUFBdkI7QUFBQSxVQUFrQztBQUM1QmlCLE1BQUFBLE1BQU0scUZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsNEZBQW1CZixtQkFBbkI7QUFBMEM7Ozs7RUF2RUxnQiw2QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbGxlY3Rpb25PZlBhcnRzUGFydCBmcm9tIFwiLi9jb2xsZWN0aW9uT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyB3aGlsc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3N5bmNocm9ub3VzXCI7XG5pbXBvcnQgeyBwdXNoLCB1bnNoaWZ0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgYXN0ZXJpc2sgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IG5vZGVzO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICAgIHVuc2hpZnQocGFydHNOb2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbHN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBub2RlcyA9IHBhcnRzTm9kZXM7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBhc3RlcmlzaywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFplcm9Pck1vcmVQYXJ0c1BhcnQpOyB9XG59XG4iXX0=