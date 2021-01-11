"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));

var _array = require("../../../utilities/array");

var _partTypes = require("../../partTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var part = this.getPart(),
          savedIndex = context.getSavedIndex(),
          partsNodes = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImNvdW50IiwicGFyc2VQYXJ0IiwicGFyc2UiLCJiYWNrdHJhY2siLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEksR0FBU0MsMkIsQ0FBVEQsSTs7SUFFYUUsa0I7Ozs7O0FBQ25CLDhCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0MsaUNBQWIsQ0FEZ0IsQ0FDcUI7O0FBRHJCLDZCQUdWRCxJQUhVLEVBR0pELElBSEk7QUFJakI7Ozs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFDOUIsVUFBSUMsTUFBSjtBQUVBLFVBQU1OLElBQUksR0FBRyxLQUFLTyxPQUFMLEVBQWI7QUFBQSxVQUNNQyxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixFQURuQjtBQUFBLFVBRU1DLFVBQVUsR0FBRyxFQUZuQjtBQUlBLFVBQUlDLEtBQUssR0FBRyxDQUFaOztBQUVBLFVBQUlOLFFBQUosRUFBYztBQUNaLFlBQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsY0FBTU4sTUFBTSxHQUFHTixJQUFJLENBQUNhLEtBQUwsQ0FBV0gsVUFBWCxFQUF1Qk4sT0FBdkIsRUFBZ0MsWUFBTTtBQUNuRCxnQkFBSUUsTUFBTSxHQUFHRCxRQUFRLEVBQXJCOztBQUVBLGdCQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNYQSxjQUFBQSxNQUFNLEdBQUdNLFNBQVMsRUFBbEI7QUFDRDs7QUFFRCxtQkFBT04sTUFBUDtBQUNELFdBUmMsQ0FBZjs7QUFVQSxjQUFJQSxNQUFKLEVBQVk7QUFDVkssWUFBQUEsS0FBSztBQUNOOztBQUVELGlCQUFPTCxNQUFQO0FBQ0QsU0FoQkQ7O0FBa0JBTSxRQUFBQSxTQUFTO0FBQ1YsT0FwQkQsTUFvQk87QUFDTCxpQkFBUztBQUNQLGNBQU1OLE9BQU0sR0FBR04sSUFBSSxDQUFDYSxLQUFMLENBQVdILFVBQVgsRUFBdUJOLE9BQXZCLENBQWY7O0FBRUEsY0FBSSxDQUFDRSxPQUFMLEVBQWE7QUFDWDtBQUNEOztBQUVESyxVQUFBQSxLQUFLO0FBQ047QUFDRjs7QUFFREwsTUFBQUEsTUFBTSxHQUFJSyxLQUFLLEtBQUssQ0FBcEI7O0FBRUEsVUFBSUwsTUFBSixFQUFZO0FBQ1YseUJBQUtILEtBQUwsRUFBWU8sVUFBWjtBQUNEOztBQUVELFVBQUksQ0FBQ0osTUFBTCxFQUFhO0FBQ1hGLFFBQUFBLE9BQU8sQ0FBQ1UsU0FBUixDQUFrQk4sVUFBbEI7QUFDRDs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1TLGNBQWMsR0FBR2xCLElBQXZCO0FBQUEsVUFBOEI7QUFDeEJtQixNQUFBQSxNQUFNLG9GQUFrQkQsY0FBbEIsQ0FEWjs7QUFHQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLDJGQUFtQmpCLGtCQUFuQjtBQUF5Qzs7OztFQXBFTGtCLDZCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGZyb20gXCIuL2NvbGxlY3Rpb25PZlBhcnRzXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBwYXJzZVBhcnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnQucGFyc2UocGFydHNOb2RlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgcGFyc2VQYXJ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoOzspIHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFydC5wYXJzZShwYXJ0c05vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAoY291bnQgIT09IDApO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHBsdXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG59XG4iXX0=