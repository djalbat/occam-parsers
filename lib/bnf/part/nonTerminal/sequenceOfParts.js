"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _array = require("../../../utilities/array");

var _partTypes = require("../../partTypes");

var _part = require("../../../utilities/part");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      var savedIndex = context.getSavedIndex();

      if (callback) {
        var parseParts = function parseParts(nodes) {
          if (index === partsLength) {
            var parsed = callback();

            if (!parsed) {
              nodes = null;
            }
          } else {
            var part = parts[index++];
            nodes = parsePart(part, nodes);
          }

          return nodes;
        };

        var parsePart = function parsePart(part, nodes) {
          var partNodes = null;
          nodes = part.parse(nodes, context, function () {
            partNodes = [];
            partNodes = parseParts(partNodes);
            var parsed = partNodes !== null;
            return parsed;
          });
          nodes = partNodes !== null ? [].concat(_toConsumableArray(nodes), _toConsumableArray(partNodes)) : null;
          return nodes;
        };

        var index = 0.;
        var parts = this.parts,
            partsLength = parts.length;
        nodes = parseParts(nodes);
      } else {
        var partNodes = nodes; ///

        this.parts.every(function (part) {
          partNodes = part.parse(partNodes, context, callback);

          if (partNodes !== null) {
            return true;
          }
        });
        nodes = partNodes !== null ? partNodes : ///
        null;
      }

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0cyIsImluZGV4IiwicGFydHNMZW5ndGgiLCJwYXJzZWQiLCJwYXJ0IiwicGFyc2VQYXJ0IiwicGFydE5vZGVzIiwicGFyc2UiLCJsZW5ndGgiLCJldmVyeSIsImJhY2t0cmFjayIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7QUFDbkIsK0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsUUFBTUMsSUFBSSxHQUFHQyxrQ0FBYixDQURpQixDQUNxQjs7QUFFdEMsOEJBQU1ELElBQU47QUFFQSxVQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFMaUI7QUFNbEI7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzBCQUVLRyxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQU1DLFVBQVUsR0FBR0YsT0FBTyxDQUFDRyxhQUFSLEVBQW5COztBQUVBLFVBQUlGLFFBQUosRUFBYztBQUFBLFlBUUhHLFVBUkcsR0FRWixTQUFTQSxVQUFULENBQW9CTCxLQUFwQixFQUEyQjtBQUN6QixjQUFJTSxLQUFLLEtBQUtDLFdBQWQs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LEtBQUssR0FBR0csS0FBSyxDQUFDdUIsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUMxQixZQUFNZixJQUFJLEdBQUdlLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBYjtBQUVBLGVBQU9iLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NaUIsbUJBQW1CLEdBQUcsSUFBSTlCLG1CQUFKLENBQXdCQyxLQUF4QixDQU41QjtBQVFBLGFBQU82QixtQkFBUDtBQUNEOzs7O0VBbkg4Q0MsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcbmltcG9ydCB7aXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaW5kZXggPSAwLlxuXG4gICAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydHMsXG4gICAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgbm9kZXMgPSBwYXJzZVBhcnRzKG5vZGVzKTtcblxuICAgICAgZnVuY3Rpb24gcGFyc2VQYXJ0cyhub2Rlcykge1xuICAgICAgICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICBub2RlcyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleCsrXTtcblxuICAgICAgICAgIG5vZGVzID0gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlcztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzKSB7XG4gICAgICAgIGxldCBwYXJ0Tm9kZXMgPSBudWxsO1xuXG4gICAgICAgIG5vZGVzID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIHBhcnROb2RlcyA9IFtdO1xuXG4gICAgICAgICAgcGFydE5vZGVzID0gcGFyc2VQYXJ0cyhwYXJ0Tm9kZXMpO1xuXG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gKHBhcnROb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcblxuICAgICAgICBub2RlcyA9IChwYXJ0Tm9kZXMgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIFsgLi4ubm9kZXMsIC4uLnBhcnROb2RlcyBdIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXJ0Tm9kZXMgPSBub2RlczsgIC8vL1xuXG4gICAgICB0aGlzLnBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgIHBhcnROb2RlcyA9IHBhcnQucGFyc2UocGFydE5vZGVzLCBjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbm9kZXMgPSAocGFydE5vZGVzICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcGFydE5vZGVzIDogLy8vXG4gICAgICAgICAgICAgICAgICBudWxsO1xuICAgIH1cblxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2VxdWVuY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiJdfQ==