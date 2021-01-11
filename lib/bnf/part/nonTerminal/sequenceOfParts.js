"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

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
      var savedIndex = context.getSavedIndex(),
          partsNodes = [];

      if (callback) {
        var index = 0,
            partsLength = this.parts.length;

        var parseParts = function parseParts(nodes, index) {
          var parsed;

          if (index === partsLength) {
            parsed = callback();
          } else {
            var part = _this2.parts[index++];
            parsed = parsePart(part, nodes, index);
          }

          return parsed;
        };

        var parsePart = function parsePart(part, nodes, index) {
          var parsed;
          var partsNodes = [];
          parsed = part.parse(nodes, context, function () {
            return parseParts(partsNodes, index);
          });

          if (parsed) {
            (0, _array.push)(nodes, partsNodes);
          }

          return parsed;
        };

        parsed = parseParts(partsNodes, index);
      } else {
        this.parts.every(function (part) {
          parsed = part.parse(partsNodes, context);

          if (parsed) {
            return true;
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImluZGV4IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJzZVBhcnRzIiwicGFydCIsInBhcnNlUGFydCIsInBhcnNlIiwiZXZlcnkiLCJiYWNrdHJhY2siLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7O0FBQ25CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLFFBQU1DLElBQUksR0FBR0Msa0NBQWIsQ0FEaUIsQ0FDcUI7O0FBRXRDLDhCQUFNRCxJQUFOO0FBRUEsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBTGlCO0FBTWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUFBOztBQUM5QixVQUFJQyxNQUFKO0FBRUEsVUFBTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFBbkI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsRUFEbkI7O0FBR0EsVUFBSUosUUFBSixFQUFjO0FBQ1osWUFBTUssS0FBSyxHQUFHLENBQWQ7QUFBQSxZQUNNQyxXQUFXLEdBQUcs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QUosQ0FBd0JDLEtBQXhCLENBTjVCO0FBUUEsYUFBTzZCLG1CQUFQO0FBQ0Q7Ozs7RUExRzhDQyx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgICAgY29uc3QgcGFyc2VQYXJ0cyA9IChub2RlcywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpbmRleCsrXTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2RlcywgaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VQYXJ0ID0gKHBhcnQsIG5vZGVzLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzTm9kZXMsIGluZGV4KSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0c05vZGVzLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShwYXJ0c05vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2VxdWVuY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiJdfQ==