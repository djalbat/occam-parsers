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
      var parsed;
      var savedIndex = context.getSavedIndex();
      var partsNodes = [];

      if (callback) {
        var parseParts = function parseParts() {
          var parsed;

          if (index === partsLength) {
            parsed = callback();
          } else {
            var part = parts[index++];
            parsed = parsePart(part);
          }

          return parsed;
        };

        var parsePart = function parsePart(part) {
          var parsed = part.parse(partsNodes, context, function () {
            return parseParts();
          });
          return parsed;
        };

        var index = 0.;
        var parts = this.parts,
            partsLength = parts.length;
        parsed = parseParts();
      } else {
        this.parts.every(function (part) {
          parsed = part.parse(partsNodes, context, callback);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsInBhcnNlUGFydHMiLCJpbmRleCIsInBhcnRzTGVuZ3RoIiwicGFydCIsInBhcnNlUGFydCIsInBhcnNlIiwibGVuZ3RoIiwiZXZlcnkiLCJiYWNrdHJhY2siLCJwYXJ0c1N0cmluZyIsInJlZHVjZSIsInBhcnRTdHJpbmciLCJhc1N0cmluZyIsInN0cmluZyIsImFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7O0FBQ25CLCtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLFFBQU1DLElBQUksR0FBR0Msa0NBQWIsQ0FEaUIsQ0FDcUI7O0FBRXRDLDhCQUFNRCxJQUFOO0FBRUEsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBTGlCO0FBTWxCOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUM5QixVQUFJQyxNQUFKO0FBRUEsVUFBTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFBbkI7QUFFQSxVQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsVUFBSUosUUFBSixFQUFjO0FBQUEsWUFRSEssVUFSRyxHQVFaLFNBQVNBLFVBQVQsR0FBc0I7QUFDcEIsY0FBSUosTUFBSjs7QUFFQSxjQUFJSyxLQUFLLEtBQUtDLFdBQWQsRUFBMkI7QUFDekJOLFlBQUFBLE1BQU0sR0FBR0QsUUFBUSxFQUFqQjtBQUNELFdBRkQsTUFFTztBQUNMLGdCQUFNUSxJQUFJLEdBQUdiLEtBQUssQ0FBQ1csS0FBSyxFQUFOLENBQWxCO0FBRUFMLFlBQUFBLE1BQU0sR0FBR1EsU0FBUyxDQUFDRCxJQUFELENBQWxCO0FBQ0Q7O0FBRUQsaUJBQU9QLE1BQVA7QUFDRCxTQXBCVzs7QUFBQSxZQXNCSFEsU0F0QkcsR0FzQlosU0FBU0EsU0FBVCxDQUFtQkQsSUFBbkIsRUFBeUI7QUFDdkIsY0FBTVAsTUFBTSxHQUFHTyxJQUFJLENBQUNFLEtBQUwsQ0FBV04sVUFBWCxFQUF1QkwsT0FBdkIsRUFBZ0M7QUFBQSxtQkFBTU0sVUFBVSxFQUFoQjtBQUFBLFdBQWhDLENBQWY7QUFFQSxpQkFBT0osTUFBUDtBQUNELFNBMUJXOztBQUNaLFlBQUlLLEtBQUssR0FBRyxFQUFaO0FBRUEsWUFBTVgsS0FBSyxHQUFHLEtBQUtBLEtBQW5CO0FBQUEsWUFDTVksV0FBVyxHQUFHWixLQUFLLENBQUNnQixNQUQxQjtBQUdBVixRQUFBQSxNQUFNLEdBQUdJLFVBQVUsRUFBbkI7QUFxQkQsT0EzQkQsTUEyQk87QUFDTCxhQUFLVixLQUFMLENBQVdpQixLQUFYLENBQWlCLFVBQUNKLElBQUQsRUFBVTtBQUN6QlAsVUFBQUEsTUFBTSxHQUFHTyxJQUFJLENBQUNFLEtBQUwsQ0FBV04sVUFBWCxFQUF1QkwsT0FBdkIsRUFBZ0NDLFFBQWhDLENBQVQ7O0FBRUEsY0FBSUMsTUFBSixFQUFZO0FBQ1YsbUJBQU8sSUFBUDtBQUNEO0FBQ0YsU0FORDtBQVFEOztBQUVELFVBQUlBLE1BQUosRUFBWTtBQUNWLHlCQUFLSCxLQUFMLEVBQVlNLFVBQVo7QUFDRDs7QUFFRCxVQUFJLENBQUNILE1BQUwsRUFBYTtBQUNYRixRQUFBQSxPQUFPLENBQUNjLFNBQVIsQ0FBa0JYLFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0QsTUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNYSxXQUFXLEdBQUcsS0FBS25CLEtBQUwsQ0FBV29CLE1BQVgsQ0FBa0IsVUFBQ0QsV0FBRCxFQUFjTixJQUFkLEVBQXVCO0FBQ3JELFlBQU1RLFVBQVUsR0FBR1IsSUFBSSxDQUFDUyxRQUFMLEVBQW5COztBQUVBLFlBQUlILFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QkEsVUFBQUEsV0FBVyxHQUFHRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLFVBQUFBLFdBQVcsYUFBTUEsV0FBTixjQUFxQkUsVUFBckIsQ0FBWDtBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLE1BQU0sZUFBUUosV0FBUixPQVhaO0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSw0RkFBbUJ4QixtQkFBbkIsRUFBd0MsS0FBS0MsS0FBN0M7QUFBc0Q7Ozs4QkFFL0NHLEssRUFBTztBQUN0QixVQUFNcUIsdUJBQXVCLEdBQUcsK0JBQW1CckIsS0FBbkIsQ0FBaEM7QUFFQUEsTUFBQUEsS0FBSyxHQUFHcUIsdUJBQVIsQ0FIc0IsQ0FHWTs7QUFFbEMsVUFBTUMsU0FBUyxHQUFHLEtBQWxCO0FBQUEsVUFDTXpCLEtBQUssR0FBR0csS0FBSyxDQUFDdUIsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUMxQixZQUFNZCxJQUFJLEdBQUdjLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBYjtBQUVBLGVBQU9aLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NZ0IsbUJBQW1CLEdBQUcsSUFBSTlCLG1CQUFKLENBQXdCQyxLQUF4QixDQU41QjtBQVFBLGFBQU82QixtQkFBUDtBQUNEOzs7O0VBdEc4Q0MsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgbGV0IGluZGV4ID0gMC5cblxuICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMoKTtcblxuICAgICAgZnVuY3Rpb24gcGFyc2VQYXJ0cygpIHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXgrK107XG5cbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwYXJzZVBhcnQocGFydCkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMoKSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl19