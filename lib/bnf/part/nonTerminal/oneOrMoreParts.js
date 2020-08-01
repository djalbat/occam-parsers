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
      var nodes = null;
      var part = this.getPart(),
          partsNodes = [];
      var terminate = false,
          count = 0;

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

          count++;
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

          count++;
          return terminate;
        });
      }

      if (count >= 1) {
        nodes = partsNodes; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsImNvbnRleHQiLCJjYWxsYmFjayIsIm5vZGVzIiwiZ2V0UGFydCIsInBhcnRzTm9kZXMiLCJ0ZXJtaW5hdGUiLCJjb3VudCIsInBhcnNlUGFydCIsInBhcnNlZCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxJLEdBQVNDLDJCLENBQVRELEk7O0lBRWFFLGtCOzs7OztBQUNuQiw4QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxJQUFJLEdBQUdDLGlDQUFiLENBRGdCLENBQ3FCOztBQURyQiw2QkFHVkQsSUFIVSxFQUdKRCxJQUhJO0FBSWpCOzs7OzBCQUVLRyxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUVBLFVBQU1MLElBQUksR0FBRyxLQUFLTSxPQUFMLEVBQWI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsRUFEbkI7QUFHQSxVQUFJQyxTQUFTLEdBQUcsS0FBaEI7QUFBQSxVQUNJQyxLQUFLLEdBQUcsQ0FEWjs7QUFHQSxVQUFJTCxRQUFKLEVBQWM7QUFBQSxZQUdITSxTQUhHLEdBR1osU0FBU0EsU0FBVCxDQUFtQlAsT0FBbkIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLGNBQUlPLE1BQUo7O0FBRUEsY0FBSUgsU0FBSixFQUFlO0FBQ2JHLFlBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLFlBQUFBLE1BQU0sR0FBR1AsUUFBUSxFQUFqQjs7QUFFQSxnQkFBSU8sTUFBSixFQUFZO0FBQ1ZILGNBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsa0JBQU1JLGVBQWUsR0FBR1osSUFBSSxDQUFDYSxLQUFMLENBQVdWLE9BQVgsRUFBb0I7QUFBQSx1QkFBTU8sU0FBUyxDQUFDUCxPQUFELEVBQVVDLFFBQVYsQ0FBZjtBQUFBLGVBQXBCLENBQXhCO0FBRUFPLGNBQUFBLE1BQU0sR0FBSUMsZUFBZSxLQUFLLElBQTlCOztBQUVBLGtCQUFJRCxNQUFKLEVBQVk7QUFDVixvQ0FBUUosVUFBUixFQUFvQkssZUFBcEI7QUFDRCxlQUZELE1BRU87QUFDTEosZ0JBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0Q7QUFDRjtBQUNGOztBQUVEQyxVQUFBQSxLQUFLO0FBRUwsaUJBQU9FLE1BQVA7QUFDRCxTQTdCVzs7QUFDWkQsUUFBQUEsU0FBUyxDQUFDUCxPQUFELEVBQVVDLFFBQVYsQ0FBVDtBQTZCRCxPQTlCRCxNQThCTztBQUNMLGlDQUFPLFlBQU07QUFDWCxjQUFJLENBQUNJLFNBQUwsRUFBZ0I7QUFDZCxnQkFBTUksZUFBZSxHQUFHWixJQUFJLENBQUNhLEtBQUwsQ0FBV1YsT0FBWCxDQUF4Qjs7QUFFQSxnQkFBSVMsZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCSixjQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNELGFBRkQsTUFFTztBQUNMLCtCQUFLRCxVQUFMLEVBQWlCSyxlQUFqQjtBQUNEO0FBQ0Y7O0FBRURILFVBQUFBLEtBQUs7QUFFTCxpQkFBT0QsU0FBUDtBQUNELFNBZEQ7QUFlRDs7QUFFRCxVQUFJQyxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNkSixRQUFBQSxLQUFLLEdBQUdFLFVBQVIsQ0FEYyxDQUNNO0FBQ3JCOztBQUVELGFBQU9GLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVMsY0FBYyxHQUFHakIsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QmtCLE1BQUFBLE1BQU0sb0ZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMkZBQW1CaEIsa0JBQW5CO0FBQXlDOzs7O0VBOUVMaUIsNkIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgZnJvbSBcIi4vY29sbGVjdGlvbk9mUGFydHNcIjtcblxuaW1wb3J0IHsgd2hpbHN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zeW5jaHJvbm91c1wiO1xuaW1wb3J0IHsgcHVzaCwgdW5zaGlmdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT25lT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IG5vZGVzID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2UsXG4gICAgICAgIGNvdW50ID0gMDtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICAgIHVuc2hpZnQocGFydHNOb2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY291bnQrKztcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsc3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXRlcm1pbmF0ZSkge1xuICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocGFydE5vZGVPck5vZGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoKHBhcnRzTm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY291bnQrKztcblxuICAgICAgICByZXR1cm4gdGVybWluYXRlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ID49IDEpIHtcbiAgICAgIG5vZGVzID0gcGFydHNOb2RlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBwbHVzLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT25lT3JNb3JlUGFydHNQYXJ0KTsgfVxufVxuIl19