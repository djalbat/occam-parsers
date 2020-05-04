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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GroupOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(GroupOfPartsPart, _NonTerminalPart);

  function GroupOfPartsPart(parts) {
    var _this;

    _classCallCheck(this, GroupOfPartsPart);

    var type = _partTypes.GroupOfPartsPartType; ///

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
      var allButFirstAndLastNodes = (0, _array.allButFirstAndLast)(nodes);
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
}(_nonTerminal["default"]);

exports["default"] = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJHcm91cE9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiR3JvdXBPZlBhcnRzUGFydFR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwiY29uY2F0IiwiYmFja3RyYWNrIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJncm91cE9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZ0I7OztBQUNuQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixRQUFNQyxJQUFJLEdBQUdDLCtCQUFiLENBRGlCLENBQ2tCOztBQUVuQywwRkFBTUQsSUFBTjtBQUVBLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtHLGEsRUFBZTtBQUNuQixVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsYUFBYSxDQUFDRyxhQUFkLEVBQW5CO0FBQUEsVUFDTUMsTUFBTSxHQUFHLEtBQUtQLEtBQUwsQ0FBV1EsS0FBWCxDQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDbEMsWUFBTUMsZUFBZSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV1IsYUFBWCxDQUF4Qjs7QUFFQSxZQUFJTyxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJOLFVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDUSxNQUFOLENBQWFGLGVBQWIsQ0FBUjtBQUVBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUlEsQ0FEZjs7QUFXQSxVQUFJLENBQUNILE1BQUwsRUFBYTtBQUNYSixRQUFBQSxhQUFhLENBQUNVLFNBQWQsQ0FBd0JSLFVBQXhCO0FBRUFELFFBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVSxXQUFXLEdBQUcsS0FBS2QsS0FBTCxDQUFXZSxNQUFYLENBQWtCLFVBQUNELFdBQUQsRUFBY0wsSUFBZCxFQUF1QjtBQUNyRCxZQUFNTyxVQUFVLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxFQUFuQjs7QUFFQSxZQUFJSCxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEJBLFVBQUFBLFdBQVcsR0FBR0UsVUFBZDtBQUNELFNBRkQsTUFFTztBQUNMRixVQUFBQSxXQUFXLGFBQU1BLFdBQU4sY0FBcUJFLFVBQXJCLENBQVg7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxNQUFNLGVBQVFKLFdBQVIsT0FYWjtBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUseUZBQW1CbkIsZ0JBQW5CLEVBQXFDLEtBQUtDLEtBQTFDO0FBQW1EOzs7OEJBRTVDSSxLLEVBQU87QUFDdEIsVUFBTWUsdUJBQXVCLEdBQUcsK0JBQW1CZixLQUFuQixDQUFoQztBQUVBQSxNQUFBQSxLQUFLLEdBQUdlLHVCQUFSLENBSHNCLENBR1k7O0FBRWxDLFVBQU1DLFNBQVMsR0FBRyxLQUFsQjtBQUFBLFVBQ01wQixLQUFLLEdBQUdJLEtBQUssQ0FBQ2lCLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDMUIsWUFBTWIsSUFBSSxHQUFHYSxJQUFJLENBQUNDLFlBQUwsQ0FBa0JILFNBQWxCLENBQWI7QUFFQSxlQUFPWCxJQUFQO0FBQ0QsT0FKTyxDQURkO0FBQUEsVUFNTWUsZ0JBQWdCLEdBQUcsSUFBSXpCLGdCQUFKLENBQXFCQyxLQUFyQixDQU56QjtBQVFBLGFBQU93QixnQkFBUDtBQUNEOzs7O0VBckUyQ0MsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBHcm91cE9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IEdyb3VwT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbmZpZ3VyYXRpb24uYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoR3JvdXBPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gbmV3IEdyb3VwT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIGdyb3VwT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiJdfQ==