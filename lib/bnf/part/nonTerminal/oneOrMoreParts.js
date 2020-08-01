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
                count++;
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
              count++;
            }
          }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsImNvbnRleHQiLCJjYWxsYmFjayIsIm5vZGVzIiwiZ2V0UGFydCIsInBhcnRzTm9kZXMiLCJ0ZXJtaW5hdGUiLCJjb3VudCIsInBhcnNlUGFydCIsInBhcnNlZCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxJLEdBQVNDLDJCLENBQVRELEk7O0lBRWFFLGtCOzs7OztBQUNuQiw4QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxJQUFJLEdBQUdDLGlDQUFiLENBRGdCLENBQ3FCOztBQURyQiw2QkFHVkQsSUFIVSxFQUdKRCxJQUhJO0FBSWpCOzs7OzBCQUVLRyxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUVBLFVBQU1MLElBQUksR0FBRyxLQUFLTSxPQUFMLEVBQWI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsRUFEbkI7QUFHQSxVQUFJQyxTQUFTLEdBQUcsS0FBaEI7QUFBQSxVQUNJQyxLQUFLLEdBQUcsQ0FEWjs7QUFHQSxVQUFJTCxRQUFKLEVBQWM7QUFBQSxZQUdITSxTQUhHLEdBR1osU0FBU0EsU0FBVCxDQUFtQlAsT0FBbkIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLGNBQUlPLE1BQUo7O0FBRUEsY0FBSUgsU0FBSixFQUFlO0FBQ2JHLFlBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLFlBQUFBLE1BQU0sR0FBR1AsUUFBUSxFQUFqQjs7QUFFQSxnQkFBSU8sTUFBSixFQUFZO0FBQ1ZILGNBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsa0JBQU1JLGVBQWUsR0FBR1osSUFBSSxDQUFDYSxLQUFMLENBQVdWLE9BQVgsRUFBb0I7QUFBQSx1QkFBTU8sU0FBUyxDQUFDUCxPQUFELEVBQVVDLFFBQVYsQ0FBZjtBQUFBLGVBQXBCLENBQXhCO0FBRUFPLGNBQUFBLE1BQU0sR0FBSUMsZUFBZSxLQUFLLElBQTlCOztBQUVBLGtCQUFJRCxNQUFKLEVBQVk7QUFDVixvQ0FBUUosVUFBUixFQUFvQkssZUFBcEI7QUFFQUgsZ0JBQUFBLEtBQUs7QUFDTixlQUpELE1BSU87QUFDTEQsZ0JBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGlCQUFPRyxNQUFQO0FBQ0QsU0E3Qlc7O0FBQ1pELFFBQUFBLFNBQVMsQ0FBQ1AsT0FBRCxFQUFVQyxRQUFWLENBQVQ7QUE2QkQsT0E5QkQsTUE4Qk87QUFDTCxpQ0FBTyxZQUFNO0FBQ1gsY0FBSSxDQUFDSSxTQUFMLEVBQWdCO0FBQ2QsZ0JBQU1JLGVBQWUsR0FBR1osSUFBSSxDQUFDYSxLQUFMLENBQVdWLE9BQVgsQ0FBeEI7O0FBRUEsZ0JBQUlTLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QkosY0FBQUEsU0FBUyxHQUFHLElBQVo7QUFDRCxhQUZELE1BRU87QUFDTCwrQkFBS0QsVUFBTCxFQUFpQkssZUFBakI7QUFFQUgsY0FBQUEsS0FBSztBQUNOO0FBQ0Y7O0FBRUQsaUJBQU9ELFNBQVA7QUFDRCxTQWREO0FBZUQ7O0FBRUQsVUFBSUMsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZEosUUFBQUEsS0FBSyxHQUFHRSxVQUFSLENBRGMsQ0FDTTtBQUNyQjs7QUFFRCxhQUFPRixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1TLGNBQWMsR0FBR2pCLElBQXZCO0FBQUEsVUFBOEI7QUFDeEJrQixNQUFBQSxNQUFNLG9GQUFrQkQsY0FBbEIsQ0FEWjs7QUFHQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLDJGQUFtQmhCLGtCQUFuQjtBQUF5Qzs7OztFQTlFTGlCLDZCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGZyb20gXCIuL2NvbGxlY3Rpb25PZlBhcnRzXCI7XG5cbmltcG9ydCB7IHdoaWxzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvc3luY2hyb25vdXNcIjtcbmltcG9ydCB7IHB1c2gsIHVuc2hpZnQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBub2RlcyA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlLFxuICAgICAgICBjb3VudCA9IDA7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHBhcnNlUGFydChjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlUGFydChjb250ZXh0LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsICgpID0+IHBhcnNlUGFydChjb250ZXh0LCBjYWxsYmFjaykpO1xuXG4gICAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgICB1bnNoaWZ0KHBhcnRzTm9kZXMsIHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbHN0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtaW5hdGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY291bnQgPj0gMSkge1xuICAgICAgbm9kZXMgPSBwYXJ0c05vZGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHBsdXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG59XG4iXX0=