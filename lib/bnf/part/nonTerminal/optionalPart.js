"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

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

var questionMark = _occamLexers.specialSymbols.questionMark;

var OptionalPartPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(OptionalPartPart, _NonTerminalPart);

  var _super = _createSuper(OptionalPartPart);

  function OptionalPartPart(part) {
    var _this;

    _classCallCheck(this, OptionalPartPart);

    var type = _partTypes.OptionalPartPartType; ///

    _this = _super.call(this, type);
    _this.part = part;
    return _this;
  }

  _createClass(OptionalPartPart, [{
    key: "getPart",
    value: function getPart() {
      return this.part;
    }
  }, {
    key: "parse",
    value: function parse(context, callback) {
      var nodes = [];
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
          if (count === 1) {
            terminate = true;
          }

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

      (0, _array.concat)(nodes, partsNodes);
      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = questionMark,
          ///
      partString = this.part.asString(),
          string = "".concat(partString).concat(operatorString);
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(OptionalPartPart.prototype), "clone", this).call(this, OptionalPartPart, this.part);
    }
  }]);

  return OptionalPartPart;
}(_nonTerminal["default"]);

exports["default"] = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiY29udGV4dCIsImNhbGxiYWNrIiwibm9kZXMiLCJnZXRQYXJ0IiwicGFydHNOb2RlcyIsInRlcm1pbmF0ZSIsImNvdW50IiwicGFyc2VQYXJ0IiwicGFyc2VkIiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFksR0FBaUJDLDJCLENBQWpCRCxZOztJQUVhRSxnQjs7Ozs7QUFDbkIsNEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQywrQkFBYixDQURnQixDQUNtQjs7QUFFbkMsOEJBQU1ELElBQU47QUFFQSxVQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFMZ0I7QUFNakI7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzBCQUVLRyxPLEVBQVNDLFEsRUFBVTtBQUN2QixVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFVBQU1MLElBQUksR0FBRyxLQUFLTSxPQUFMLEVBQWI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsRUFEbkI7QUFHQSxVQUFJQyxTQUFTLEdBQUcsS0FBaEI7QUFBQSxVQUNJQyxLQUFLLEdBQUcsQ0FEWjs7QUFHQSxVQUFJTCxRQUFKLEVBQWM7QUFBQSxZQUdITSxTQUhHLEdBR1osU0FBU0EsU0FBVCxDQUFtQlAsT0FBbkIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLGNBQUlPLE1BQUo7O0FBRUEsY0FBSUgsU0FBSixFQUFlO0FBQ2JHLFlBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLFlBQUFBLE1BQU0sR0FBR1AsUUFBUSxFQUFqQjs7QUFFQSxnQkFBSU8sTUFBSixFQUFZO0FBQ1ZILGNBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsa0JBQU1JLGVBQWUsR0FBR1osSUFBSSxDQUFDYSxLQUFMLENBQVdWLE9BQVgsRUFBb0I7QUFBQSx1QkFBTU8sU0FBUyxDQUFDUCxPQUFELEVBQVVDLFFBQVYsQ0FBZjtBQUFBLGVBQXBCLENBQXhCO0FBRUFPLGNBQUFBLE1BQU0sR0FBSUMsZUFBZSxLQUFLLElBQTlCOztBQUVBLGtCQUFJRCxNQUFKLEVBQVk7QUFDVixvQ0FBUUosVUFBUixFQUFvQkssZUFBcEI7QUFDRCxlQUZELE1BRU87QUFDTEosZ0JBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0Q7QUFDRjtBQUNGOztBQUVEQyxVQUFBQSxLQUFLO0FBRUwsaUJBQU9FLE1BQVA7QUFDRCxTQTdCVzs7QUFDWkQsUUFBQUEsU0FBUyxDQUFDUCxPQUFELEVBQVVDLFFBQVYsQ0FBVDtBQTZCRCxPQTlCRCxNQThCTztBQUNMLGlDQUFPLFlBQU07QUFDWCxjQUFJSyxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmRCxZQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNEOztBQUVELGNBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNkLGdCQUFNSSxlQUFlLEdBQUdaLElBQUksQ0FBQ2EsS0FBTCxDQUFXVixPQUFYLENBQXhCOztBQUVBLGdCQUFJUyxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJKLGNBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsK0JBQUtELFVBQUwsRUFBaUJLLGVBQWpCO0FBQ0Q7QUFDRjs7QUFFREgsVUFBQUEsS0FBSztBQUVMLGlCQUFPRCxTQUFQO0FBQ0QsU0FsQkQ7QUFtQkQ7O0FBRUQseUJBQU9ILEtBQVAsRUFBY0UsVUFBZDtBQUVBLGFBQU9GLEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTVMsY0FBYyxHQUFHakIsWUFBdkI7QUFBQSxVQUFzQztBQUNoQ2tCLE1BQUFBLFVBQVUsR0FBRyxLQUFLZixJQUFMLENBQVVnQixRQUFWLEVBRG5CO0FBQUEsVUFFTUMsTUFBTSxhQUFNRixVQUFOLFNBQW1CRCxjQUFuQixDQUZaO0FBSUEsYUFBT0csTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx5RkFBbUJsQixnQkFBbkIsRUFBcUMsS0FBS0MsSUFBMUM7QUFBa0Q7Ozs7RUF2RmhCa0IsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgd2hpbHN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zeW5jaHJvbm91c1wiO1xuaW1wb3J0IHsgcHVzaCwgdW5zaGlmdCwgY29uY2F0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICBsZXQgdGVybWluYXRlID0gZmFsc2UsXG4gICAgICAgIGNvdW50ID0gMDtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0KGNvbnRleHQsIGNhbGxiYWNrKSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICAgIHVuc2hpZnQocGFydHNOb2RlcywgcGFydE5vZGVPck5vZGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY291bnQrKztcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsc3QoKCkgPT4ge1xuICAgICAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0ZXJtaW5hdGUpIHtcbiAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVzaChwYXJ0c05vZGVzLCBwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50Kys7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1pbmF0ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbmNhdChub2RlcywgcGFydHNOb2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHF1ZXN0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9wdGlvbmFsUGFydFBhcnQsIHRoaXMucGFydCk7IH1cbn1cbiJdfQ==