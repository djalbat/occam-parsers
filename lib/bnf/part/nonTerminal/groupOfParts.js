'use strict';

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

var partTypes = require('../../partTypes'),
    arrayUtilities = require('../../../utilities/array'),
    NonTerminalPart = require('../../part/nonTerminal');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwT2ZQYXJ0cy5qcyJdLCJuYW1lcyI6WyJwYXJ0VHlwZXMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbFBhcnQiLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJHcm91cE9mUGFydHNQYXJ0VHlwZSIsIkdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlZCIsImV2ZXJ5IiwicGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwiY29uY2F0IiwiYmFja3RyYWNrIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJncm91cE9mUGFydHNQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsMEJBQUQsQ0FEOUI7QUFBQSxJQUVNRSxlQUFlLEdBQUdGLE9BQU8sQ0FBQyx3QkFBRCxDQUYvQjs7QUFJTSxJQUFFRyxrQkFBRixHQUF5QkYsY0FBekIsQ0FBRUUsa0JBQUY7QUFBQSxJQUNFQyxvQkFERixHQUMyQkwsU0FEM0IsQ0FDRUssb0JBREY7O0lBR0FDLGdCOzs7QUFDSiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixRQUFNQyxJQUFJLEdBQUdILG9CQUFiLENBRGlCLENBQ2tCOztBQUVuQywwRkFBTUcsSUFBTjtBQUVBLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZTtBQUNuQixVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFVBQU1DLFVBQVUsR0FBR0YsYUFBYSxDQUFDRyxhQUFkLEVBQW5CO0FBQUEsVUFDTUMsTUFBTSxHQUFHLEtBQUtOLEtBQUwsQ0FBV08sS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDdkMsWUFBTUMsZUFBZSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV1IsYUFBWCxDQUF4Qjs7QUFFQSxZQUFJTyxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJOLFVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDUSxNQUFOLENBQWFGLGVBQWIsQ0FBUjtBQUVBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUlEsQ0FEZjs7QUFXQSxVQUFJLENBQUNILE1BQUwsRUFBYTtBQUNYSixRQUFBQSxhQUFhLENBQUNVLFNBQWQsQ0FBd0JSLFVBQXhCO0FBRUFELFFBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVSxXQUFXLEdBQUcsS0FBS2IsS0FBTCxDQUFXYyxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JMLElBQXRCLEVBQTRCO0FBQzFELFlBQU1PLFVBQVUsR0FBR1AsSUFBSSxDQUFDUSxRQUFMLEVBQW5COztBQUVBLFlBQUlILFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QkEsVUFBQUEsV0FBVyxHQUFHRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLFVBQUFBLFdBQVcsYUFBTUEsV0FBTixjQUFxQkUsVUFBckIsQ0FBWDtBQUNEOztBQUVELGVBQU9GLFdBQVA7QUFDRCxPQVZhLEVBVVgsSUFWVyxDQUFwQjtBQUFBLFVBV01JLE1BQU0sZUFBUUosV0FBUixPQVhaO0FBYUEsYUFBT0ksTUFBUDtBQUNEOzs7NEJBRU87QUFBRSx5RkFBbUJsQixnQkFBbkIsRUFBcUMsS0FBS0MsS0FBMUM7QUFBbUQ7Ozs4QkFFNUNHLEssRUFBTztBQUN0QixVQUFNZSx1QkFBdUIsR0FBR3JCLGtCQUFrQixDQUFDTSxLQUFELENBQWxEO0FBRUFBLE1BQUFBLEtBQUssR0FBR2UsdUJBQVIsQ0FIc0IsQ0FHWTs7QUFFbEMsVUFBTUMsU0FBUyxHQUFHLEtBQWxCO0FBQUEsVUFDTW5CLEtBQUssR0FBR0csS0FBSyxDQUFDaUIsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixZQUFNYixJQUFJLEdBQUdhLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkgsU0FBbEIsQ0FBYjtBQUVBLGVBQU9YLElBQVA7QUFDRCxPQUpPLENBRGQ7QUFBQSxVQU1NZSxnQkFBZ0IsR0FBRyxJQUFJeEIsZ0JBQUosQ0FBcUJDLEtBQXJCLENBTnpCO0FBUUEsYUFBT3VCLGdCQUFQO0FBQ0Q7Ozs7RUFyRTRCM0IsZTs7QUF3RS9CNEIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUIsZ0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgR3JvdXBPZlBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuY2xhc3MgR3JvdXBPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IEdyb3VwT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKEdyb3VwT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gbmV3IEdyb3VwT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIGdyb3VwT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNQYXJ0O1xuIl19