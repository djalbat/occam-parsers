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

var ChoiceOfPartsPartType = partTypes.ChoiceOfPartsPartType,
    even = arrayUtilities.even,
    allButFirstAndLast = arrayUtilities.allButFirstAndLast;

var ChoiceOfPartsPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(ChoiceOfPartsPart, _NonTerminalPart);

  function ChoiceOfPartsPart(parts) {
    var _this;

    _classCallCheck(this, ChoiceOfPartsPart);

    var type = ChoiceOfPartsPartType; ///

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsPart).call(this, type));
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
      var allButFirstAndLastNodes = allButFirstAndLast(nodes);
      nodes = allButFirstAndLastNodes; ///

      var evenNodes = even(nodes);
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
}(NonTerminalPart);

module.exports = ChoiceOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsicGFydFR5cGVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiTm9uVGVybWluYWxQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiZXZlbiIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsIkNob2ljZU9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiY29uZmlndXJhdGlvbiIsIm5vZGVzIiwic29tZSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJldmVuTm9kZXMiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsaUJBQUQsQ0FBekI7QUFBQSxJQUNNQyxjQUFjLEdBQUdELE9BQU8sQ0FBQywwQkFBRCxDQUQ5QjtBQUFBLElBRU1FLGVBQWUsR0FBR0YsT0FBTyxDQUFDLHdCQUFELENBRi9COztBQUlNLElBQUVHLHFCQUFGLEdBQTRCSixTQUE1QixDQUFFSSxxQkFBRjtBQUFBLElBQ0VDLElBREYsR0FDK0JILGNBRC9CLENBQ0VHLElBREY7QUFBQSxJQUNRQyxrQkFEUixHQUMrQkosY0FEL0IsQ0FDUUksa0JBRFI7O0lBR0FDLGlCOzs7QUFDSiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixRQUFNQyxJQUFJLEdBQUdMLHFCQUFiLENBRGlCLENBQ21COztBQUVwQywyRkFBTUssSUFBTjtBQUVBLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZTtBQUNuQixVQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUVBLFdBQUtILEtBQUwsQ0FBV0ksSUFBWCxDQUFnQixVQUFTQyxJQUFULEVBQWU7QUFDN0IsWUFBTUMsZUFBZSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0wsYUFBWCxDQUF4Qjs7QUFFQSxZQUFJSSxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJILFVBQUFBLEtBQUssR0FBR0csZUFBUixDQUQ0QixDQUNGOztBQUUxQixpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVJEO0FBVUEsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSyxXQUFXLEdBQUcsS0FBS1IsS0FBTCxDQUFXUyxNQUFYLENBQWtCLFVBQVNELFdBQVQsRUFBc0JILElBQXRCLEVBQTRCO0FBQzFELFlBQU1LLFVBQVUsR0FBR0wsSUFBSSxDQUFDTSxRQUFMLEVBQW5COztBQUVBLFlBQUlILFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QkEsVUFBQUEsV0FBVyxHQUFHRSxVQUFkO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLFVBQUFBLFdBQVcsYUFBTUEsV0FBTixnQkFBdUJFLFVBQXZCLENBQVg7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxNQUFNLGVBQVFKLFdBQVIsT0FYWjtBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsMEZBQW1CYixpQkFBbkIsRUFBc0MsS0FBS0MsS0FBM0M7QUFBb0Q7Ozs4QkFFN0NHLEssRUFBTztBQUN0QixVQUFNVSx1QkFBdUIsR0FBR2Ysa0JBQWtCLENBQUNLLEtBQUQsQ0FBbEQ7QUFFQUEsTUFBQUEsS0FBSyxHQUFHVSx1QkFBUixDQUhzQixDQUdZOztBQUVsQyxVQUFNQyxTQUFTLEdBQUdqQixJQUFJLENBQUNNLEtBQUQsQ0FBdEI7QUFFQUEsTUFBQUEsS0FBSyxHQUFHVyxTQUFSLENBUHNCLENBT0Y7O0FBRXBCLFVBQU1DLFNBQVMsR0FBRyxLQUFsQjtBQUFBLFVBQ01mLEtBQUssR0FBR0csS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQy9CLFlBQU1aLElBQUksR0FBR1ksSUFBSSxDQUFDQyxZQUFMLENBQWtCSCxTQUFsQixDQUFiO0FBRUEsZUFBT1YsSUFBUDtBQUNELE9BSk8sQ0FEZDtBQUFBLFVBTU1jLGlCQUFpQixHQUFHLElBQUlwQixpQkFBSixDQUFzQkMsS0FBdEIsQ0FOMUI7QUFRQSxhQUFPbUIsaUJBQVA7QUFDRDs7OztFQWxFNkJ4QixlOztBQXFFaEN5QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ0QixpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnRUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3BhcnRUeXBlcycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBDaG9pY2VPZlBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcyxcbiAgICAgIHsgZXZlbiwgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBDaG9pY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG4gICAgXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG4gIFxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIHRoaXMucGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGVzID0gcGFydE5vZGVPck5vZGVzOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSB8ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKENob2ljZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG4gICAgXG4gICAgY29uc3QgZXZlbk5vZGVzID0gZXZlbihub2Rlcyk7XG5cbiAgICBub2RlcyA9IGV2ZW5Ob2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNQYXJ0O1xuIl19