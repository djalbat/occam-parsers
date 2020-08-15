"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

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

var SequenceOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(SequenceOfPartsPart, _NonTerminalPart);

  var _super = _createSuper(SequenceOfPartsPart);

  function SequenceOfPartsPart(parts) {
    var _this;

    _classCallCheck(this, SequenceOfPartsPart);

    var type = _partTypes.SequenceOfPartsPartType; ///

    _this = _super.call(this, type);
    _this.parts = parts;
    return _this;
  }

  _createClass(SequenceOfPartsPart, [{
    key: "getParts",
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: "parse",
    value: function parse(nodes, context, callback) {
      var _this2 = this;

      var parsed;
      var savedIndex = context.getSavedIndex();
      var partsNodes = [],
          partsLength = this.parts.length;

      if (callback) {
        var index = 0.;

        var parseParts = function parseParts(nodes) {
          var parsed;

          if (index === partsLength) {
            parsed = callback();
          } else {
            var part = _this2.parts[index++];
            parsed = parsePart(part, nodes);
          }

          return parsed;
        };

        var parsePart = function parsePart(part, nodes) {
          var partNodes = [];
          var parsed = part.parse(nodes, context, function () {
            return parseParts(partNodes);
          });

          if (parsed) {
            (0, _array.push)(nodes, partNodes);
          }

          return parsed;
        };

        parsed = parseParts(partsNodes);
      } else {
        var _index = 0;

        var _parseParts = function _parseParts(nodes) {
          var parsed;

          if (_index === partsLength) {
            parsed = true;
          } else {
            var part = _this2.parts[_index++];
            parsed = _parsePart(part, nodes);
          }

          return parsed;
        };

        var _parsePart = function _parsePart(part, nodes) {
          var parsed = part.parse(nodes, context);

          if (parsed) {
            parsed = _parseParts(nodes);
          }

          return parsed;
        };

        parsed = _parseParts(partsNodes);
      }

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
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = "".concat(partsString, " ").concat(partString);
        }

        return partsString;
      }, null),
          string = "( ".concat(partsString, " )");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(SequenceOfPartsPart.prototype), "clone", this).call(this, SequenceOfPartsPart, this.parts);
    }
  }], [{
    key: "fromNodes",
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = (0, _array.allButFirstAndLast)(nodes);
      nodes = allButFirstAndLastNodes; ///

      var lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(lookAhead);
        return part;
      }),
          sequenceOfPartsPart = new SequenceOfPartsPart(parts);
      return sequenceOfPartsPart;
    }
  }]);

  return SequenceOfPartsPart;
}(_nonTerminal["default"]);

exports["default"] = SequenceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJwYXJzZVBhcnRzIiwicGFydCIsInBhcnNlUGFydCIsInBhcnROb2RlcyIsInBhcnNlIiwiYmFja3RyYWNrIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7OztBQUNuQiwrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixRQUFNQyxJQUFJLEdBQUdDLGtDQUFiLENBRGlCLENBQ3FCOztBQUV0Qyw4QkFBTUQsSUFBTjtBQUVBLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtHLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFBQTs7QUFDOUIsVUFBSUMsTUFBSjtBQUVBLFVBQU1DLFVBQVUsR0FBR0gsT0FBTyxDQUFDSSxhQUFSLEVBQW5CO0FBRUEsVUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBQUEsVUFDTUMsV0FBVyxHQUFHLEtBQUtWLEtBQUwsQ0FBV1csTUFEL0I7O0FBR0EsVUFBSU4sUUFBSixFQUFj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QW1CeEIsbUJBQW5CLEVBQXdDLEtBQUtDLEtBQTdDO0FBQXNEOzs7OEJBRS9DRyxLLEVBQU87QUFDdEIsVUFBTXFCLHVCQUF1QixHQUFHLCtCQUFtQnJCLEtBQW5CLENBQWhDO0FBRUFBLE1BQUFBLEtBQUssR0FBR3FCLHVCQUFSLENBSHNCLENBR1k7O0FBRWxDLFVBQU1DLFNBQVMsR0FBRyxLQUFsQjtBQUFBLFVBQ016QixLQUFLLEdBQUdHLEtBQUssQ0FBQ3VCLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDMUIsWUFBTWIsSUFBSSxHQUFHYSxJQUFJLENBQUNDLFlBQUwsQ0FBa0JILFNBQWxCLENBQWI7QUFFQSxlQUFPWCxJQUFQO0FBQ0QsT0FKTyxDQURkO0FBQUEsVUFNTWUsbUJBQW1CLEdBQUcsSUFBSTlCLG1CQUFKLENBQXdCQyxLQUF4QixDQU41QjtBQVFBLGFBQU82QixtQkFBUDtBQUNEOzs7O0VBN0g4Q0MsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXSxcbiAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaW5kZXggPSAwLlxuXG4gICAgICBjb25zdCBwYXJzZVBhcnRzID0gKG5vZGVzKSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbaW5kZXgrK107XG5cbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgbm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VQYXJ0ID0gKHBhcnQsIG5vZGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnROb2RlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydE5vZGVzKSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICBjb25zdCBwYXJzZVBhcnRzID0gKG5vZGVzKSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgICAgICAgIHBhcnNlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpbmRleCsrXTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVBhcnQgPSAocGFydCwgbm9kZXMpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKG5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl19