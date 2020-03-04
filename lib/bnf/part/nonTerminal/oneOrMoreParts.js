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

var lexers = require('occam-lexers');

var partTypes = require('../../partTypes'),
    SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var specialSymbols = lexers.specialSymbols,
    plus = specialSymbols.plus,
    OneOrMorePartsPartType = partTypes.OneOrMorePartsPartType;

var OneOrMorePartsPart = /*#__PURE__*/function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    var type = OneOrMorePartsPartType; ///

    return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMorePartsPart).call(this, type, part));
  }

  _createClass(OneOrMorePartsPart, [{
    key: "parse",
    value: function parse(configuration) {
      var nodes = null;
      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
        nodes = partNodeOrNodes instanceof Array ? partNodeOrNodes : [partNodeOrNodes];
        var oneOrMorePartsPart = this,
            ///
        zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(configuration);
        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
      }

      return nodes;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "clone", this).call(this, OneOrMorePartsPart);
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = plus,
          ///
      string = _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "asString", this).call(this, operatorString);

      return string;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJwYXJ0VHlwZXMiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInNwZWNpYWxTeW1ib2xzIiwicGx1cyIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsIkFycmF5Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImZyb21PbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMiLCJjb25jYXQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUUsbUJBQW1CLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQURuQztBQUFBLElBRU1HLG1CQUFtQixHQUFHSCxPQUFPLENBQUMsbUJBQUQsQ0FGbkM7O0FBSU0sSUFBRUksY0FBRixHQUFxQkwsTUFBckIsQ0FBRUssY0FBRjtBQUFBLElBQ0VDLElBREYsR0FDV0QsY0FEWCxDQUNFQyxJQURGO0FBQUEsSUFFRUMsc0JBRkYsR0FFNkJMLFNBRjdCLENBRUVLLHNCQUZGOztJQUlBQyxrQjs7O0FBQ0osOEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHSCxzQkFBYixDQURnQixDQUNxQjs7QUFEckIsMkZBR1ZHLElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0UsYSxFQUFlO0FBQ25CLFVBQUlDLEtBQUssR0FBRyxJQUFaO0FBRUEsVUFBTUgsSUFBSSxHQUFHLEtBQUtJLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGVBQWUsR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVdKLGFBQVgsQ0FEeEI7QUFBQSxVQUVNSyxNQUFNLEdBQUlGLGVBQWUsS0FBSyxJQUZwQzs7QUFJQSxVQUFJRSxNQUFKLEVBQVk7QUFDVkosUUFBQUEsS0FBSyxHQUFJRSxlQUFlLFlBQVlHLEtBQTVCLEdBQ0VILGVBREYsR0FFSSxDQUFDQSxlQUFELENBRlo7QUFJQSxZQUFNSSxrQkFBa0IsR0FBRyxJQUEzQjtBQUFBLFlBQWtDO0FBQzVCQyxRQUFBQSxtQkFBbUIsR0FBR2YsbUJBQW1CLENBQUNnQixzQkFBcEIsQ0FBMkNGLGtCQUEzQyxDQUQ1QjtBQUFBLFlBRU1HLDhCQUE4QixHQUFHRixtQkFBbUIsQ0FBQ0osS0FBcEIsQ0FBMEJKLGFBQTFCLENBRnZDO0FBSUFDLFFBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDVSxNQUFOLENBQWFELDhCQUFiLENBQVI7QUFDRDs7QUFFRCxhQUFPVCxLQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLDJGQUFtQkosa0JBQW5CO0FBQXlDOzs7K0JBRXhDO0FBQ1QsVUFBTWUsY0FBYyxHQUFHakIsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QmtCLE1BQUFBLE1BQU0sb0ZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OztFQXBDOEJyQixtQjs7QUF1Q2pDc0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsa0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcGFydFR5cGVzID0gcmVxdWlyZSgnLi4vLi4vcGFydFR5cGVzJyksXG4gICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMgPSAocGFydE5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgW3BhcnROb2RlT3JOb2Rlc107XG5cbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSxcbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2RlcyA9IHplcm9Pck1vcmVQYXJ0c1BhcnQucGFyc2UoY29uZmlndXJhdGlvbik7XG5cbiAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBwbHVzLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzUGFydDtcbiJdfQ==