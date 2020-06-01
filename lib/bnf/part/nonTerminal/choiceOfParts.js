"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _partTypes = require("../../partTypes");

var _array = require("../../../utilities/array");

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

var ChoiceOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  var _super = _createSuper(ChoiceOfPartsPart);

  function ChoiceOfPartsPart(parts) {
    var _this;

    _classCallCheck(this, ChoiceOfPartsPart);

    var type = _partTypes.ChoiceOfPartsPartType; ///

    _this = _super.call(this, type);
    _this.parts = parts;
    return _this;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: "getParts",
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: "parse",
    value: function parse(configuration) {
      var nodes = null;
      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(configuration);

        if (partNodeOrNodes !== null) {
          nodes = partNodeOrNodes; ///

          return true;
        }
      });
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
          partsString = "".concat(partsString, " | ").concat(partString);
        }

        return partsString;
      }, null),
          string = "( ".concat(partsString, " )");
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(ChoiceOfPartsPart.prototype), "clone", this).call(this, ChoiceOfPartsPart, this.parts);
    }
  }], [{
    key: "fromNodes",
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = (0, _array.allButFirstAndLast)(nodes);
      nodes = allButFirstAndLastNodes; ///

      var evenNodes = (0, _array.even)(nodes);
      nodes = evenNodes; ///

      var lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(lookAhead);
        return part;
      }),
          choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}(_nonTerminal["default"]);

exports["default"] = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJzb21lIiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImV2ZW5Ob2RlcyIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJjaG9pY2VPZlBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7QUFDbkIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsUUFBTUMsSUFBSSxHQUFHQyxnQ0FBYixDQURpQixDQUNtQjs7QUFFcEMsOEJBQU1ELElBQU47QUFFQSxVQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFMaUI7QUFNbEI7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzBCQUVLRyxhLEVBQWU7QUFDbkIsVUFBSUMsS0FBSyxHQUFHLElBQVo7QUFFQSxXQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hCLFlBQU1DLGVBQWUsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVdMLGFBQVgsQ0FBeEI7O0FBRUEsWUFBSUksZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCSCxVQUFBQSxLQUFLLEdBQUdHLGVBQVIsQ0FENEIsQ0FDRjs7QUFFMUIsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0FSRDtBQVVBLGFBQU9ILEtBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUssV0FBVyxHQUFHLEtBQUtULEtBQUwsQ0FBV1UsTUFBWCxDQUFrQixVQUFDRCxXQUFELEVBQWNILElBQWQsRUFBdUI7QUFDckQsWUFBTUssVUFBVSxHQUFHTCxJQUFJLENBQUNNLFFBQUwsRUFBbkI7O0FBRUEsWUFBSUgsV0FBVyxLQUFLLElBQXBCLEVBQTBCO0FBQ3hCQSxVQUFBQSxXQUFXLEdBQUdFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsVUFBQUEsV0FBVyxhQUFNQSxXQUFOLGdCQUF1QkUsVUFBdkIsQ0FBWDtBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLE1BQU0sZUFBUUosV0FBUixPQVhaO0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSwwRkFBbUJkLGlCQUFuQixFQUFzQyxLQUFLQyxLQUEzQztBQUFvRDs7OzhCQUU3Q0ksSyxFQUFPO0FBQ3RCLFVBQU1VLHVCQUF1QixHQUFHLCtCQUFtQlYsS0FBbkIsQ0FBaEM7QUFFQUEsTUFBQUEsS0FBSyxHQUFHVSx1QkFBUixDQUhzQixDQUdZOztBQUVsQyxVQUFNQyxTQUFTLEdBQUcsaUJBQUtYLEtBQUwsQ0FBbEI7QUFFQUEsTUFBQUEsS0FBSyxHQUFHVyxTQUFSLENBUHNCLENBT0Y7O0FBRXBCLFVBQU1DLFNBQVMsR0FBRyxLQUFsQjtBQUFBLFVBQ01oQixLQUFLLEdBQUdJLEtBQUssQ0FBQ2EsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUMxQixZQUFNWixJQUFJLEdBQUdZLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBYjtBQUVBLGVBQU9WLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NYyxpQkFBaUIsR0FBRyxJQUFJckIsaUJBQUosQ0FBc0JDLEtBQXRCLENBTjFCO0FBUUEsYUFBT29CLGlCQUFQO0FBQ0Q7Ozs7RUFsRTRDQyx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IENob2ljZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcbmltcG9ydCB7IGV2ZW4sIGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBDaG9pY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG4gICAgXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKTtcblxuICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlT3JOb2RlczsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2hvaWNlT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cbiAgICBcbiAgICBjb25zdCBldmVuTm9kZXMgPSBldmVuKG5vZGVzKTtcblxuICAgIG5vZGVzID0gZXZlbk5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl19