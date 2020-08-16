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
      var partsNodes = [];

      if (callback) {
        var index = 0;
        var partsLength = this.parts.length;

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
          var partsNodes = [];
          var parsed = part.parse(nodes, context, function () {
            var parsed = parseParts(partsNodes, index);
            return parsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImluZGV4IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJzZVBhcnRzIiwicGFydCIsInBhcnNlUGFydCIsInBhcnNlIiwiZXZlcnkiLCJiYWNrdHJhY2siLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7O0FBQ25CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLFFBQU1DLElBQUksR0FBR0Msa0NBQWIsQ0FEaUIsQ0FDcUI7O0FBRXRDLDhCQUFNRCxJQUFOO0FBRUEsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBTGlCO0FBTWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUFBOztBQUM5QixVQUFJQyxNQUFKO0FBRUEsVUFBTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFBbkI7QUFFQSxVQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsVUFBSUosUUFBSixFQUFjO0FBQ1osWUFBTUssS0FBSyxHQUFHLENBQWQ7QUFFQSxZQUFNQyxXQUFXLEdBQUcs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QixHQUFHLElBQUk5QixtQkFBSixDQUF3QkMsS0FBeEIsQ0FONUI7QUFRQSxhQUFPNkIsbUJBQVA7QUFDRDs7OztFQTlHOENDLHVCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gMDtcblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgICAgY29uc3QgcGFyc2VQYXJ0cyA9IChub2RlcywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpbmRleCsrXTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2RlcywgaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VQYXJ0ID0gKHBhcnQsIG5vZGVzLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHNOb2RlcywgaW5kZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0c05vZGVzLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShwYXJ0c05vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2VxdWVuY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiJdfQ==