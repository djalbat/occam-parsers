"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var partTypes = require("../../partTypes"),
    arrayUtilities = require("../../../utilities/array"),
    NonTerminalPart = require("../../part/nonTerminal");

var allButFirstAndLast = arrayUtilities.allButFirstAndLast,
    GroupOfPartsPartType = partTypes.GroupOfPartsPartType;

var GroupOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(GroupOfPartsPart, _NonTerminalPart);

  function GroupOfPartsPart(parts) {
    var _this;

    _classCallCheck(this, GroupOfPartsPart);

    var type = GroupOfPartsPartType; ///

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupOfPartsPart).call(this, type));
    _this.parts = parts;
    return _this;
  }

  _createClass(GroupOfPartsPart, [{
    key: "getParts",
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: "parse",
    value: function parse(configuration) {
      var nodes = [];
      var savedIndex = configuration.getSavedIndex(),
          parsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(configuration);

        if (partNodeOrNodes !== null) {
          nodes = nodes.concat(partNodeOrNodes);
          return true;
        }
      });

      if (!parsed) {
        configuration.backtrack(savedIndex);
        nodes = null;
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
      return _get(_getPrototypeOf(GroupOfPartsPart.prototype), "clone", this).call(this, GroupOfPartsPart, this.parts);
    }
  }], [{
    key: "fromNodes",
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = allButFirstAndLast(nodes);
      nodes = allButFirstAndLastNodes; ///

      var lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(lookAhead);
        return part;
      }),
          groupOfPartsPart = new GroupOfPartsPart(parts);
      return groupOfPartsPart;
    }
  }]);

  return GroupOfPartsPart;
}(NonTerminalPart);

module.exports = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJwYXJ0VHlwZXMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbFBhcnQiLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJHcm91cE9mUGFydHNQYXJ0VHlwZSIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwiY29uY2F0IiwiYmFja3RyYWNrIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJncm91cE9mUGFydHNQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsMEJBQUQsQ0FEOUI7QUFBQSxJQUVNRSxlQUFlLEdBQUdGLE9BQU8sQ0FBQyx3QkFBRCxDQUYvQjs7QUFJTSxJQUFFRyxrQkFBRixHQUF5QkYsY0FBekIsQ0FBRUUsa0JBQUY7QUFBQSxJQUNFQyxvQkFERixHQUMyQkwsU0FEM0IsQ0FDRUssb0JBREY7O0lBR0FDLGdCOzs7QUFDSiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixRQUFNQyxJQUFJLEdBQUdILG9CQUFiLENBRGlCLENBQ2tCOztBQUVuQywwRkFBTUcsSUFBTjtBQUVBLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZTtBQUNuQixVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsYUFBYSxDQUFDRyxhQUFkLEVBQW5CO0FBQUEsVUFDTUMsTUFBTSxHQUFHLEtBQUtOLEtBQUwsQ0FBV08sS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDdkMsWUFBTUMsZUFBZSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV1IsYUFBWCxDQUF4Qjs7QUFFQSxZQUFJTyxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJOLFVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDUSxNQUFOLENBQWFGLGVBQWIsQ0FBUjtBQUVBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUlEsQ0FEZjs7QUFXQSxVQUFJLENBQUNILE1BQUwsRUFBYTtBQUNYSixRQUFBQSxhQUFhLENBQUNVLFNBQWQsQ0FBd0JSLFVBQXhCO0FBRUFELFFBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVSxXQUFXLEdBQUcsS0FBS2IsS0FBTCxDQUFXYyxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JMLElBQXRCLEVBQTRCO0FBQzFELFlBQU1PLFVBQVUsR0FBR1AsSUFBSSxDQUFDUSxRQUFMLEVBQW5COztBQUVBLFlBQUlILFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QkEsVUFBQUEsV0FBVyxHQUFHRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLFVBQUFBLFdBQVcsYUFBTUEsV0FBTixjQUFxQkUsVUFBckIsQ0FBWDtBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLE1BQU0sZUFBUUosV0FBUixPQVhaO0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx5RkFBbUJsQixnQkFBbkIsRUFBcUMsS0FBS0MsS0FBMUM7QUFBbUQ7Ozs4QkFFNUNHLEssRUFBTztBQUN0QixVQUFNZSx1QkFBdUIsR0FBR3JCLGtCQUFrQixDQUFDTSxLQUFELENBQWxEO0FBRUFBLE1BQUFBLEtBQUssR0FBR2UsdUJBQVIsQ0FIc0IsQ0FHWTs7QUFFbEMsVUFBTUMsU0FBUyxHQUFHLEtBQWxCO0FBQUEsVUFDTW5CLEtBQUssR0FBR0csS0FBSyxDQUFDaUIsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixZQUFNYixJQUFJLEdBQUdhLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBYjtBQUVBLGVBQU9YLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NZSxnQkFBZ0IsR0FBRyxJQUFJeEIsZ0JBQUosQ0FBcUJDLEtBQXJCLENBTnpCO0FBUUEsYUFBT3VCLGdCQUFQO0FBQ0Q7Ozs7RUFyRTRCM0IsZTs7QUF3RS9CNEIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUIsZ0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHBhcnRUeXBlcyA9IHJlcXVpcmUoXCIuLi8uLi9wYXJ0VHlwZXNcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiKTtcblxuY29uc3QgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBHcm91cE9mUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jbGFzcyBHcm91cE9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gR3JvdXBPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb25maWd1cmF0aW9uLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVPck5vZGVzKTtcblxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25maWd1cmF0aW9uLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoR3JvdXBPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgR3JvdXBPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gZ3JvdXBPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwT2ZQYXJ0c1BhcnQ7XG4iXX0=