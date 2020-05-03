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

var lexers = require("occam-lexers");

var partTypes = require("../../partTypes"),
    SequenceOfPartsPart = require("./sequenceOfParts"),
    ZeroOrMorePartsPart = require("./zeroOrMoreParts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJwYXJ0VHlwZXMiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInNwZWNpYWxTeW1ib2xzIiwicGx1cyIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsIkFycmF5Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImZyb21PbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMiLCJjb25jYXQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUUsbUJBQW1CLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQURuQztBQUFBLElBRU1HLG1CQUFtQixHQUFHSCxPQUFPLENBQUMsbUJBQUQsQ0FGbkM7O0FBSU0sSUFBRUksY0FBRixHQUFxQkwsTUFBckIsQ0FBRUssY0FBRjtBQUFBLElBQ0VDLElBREYsR0FDV0QsY0FEWCxDQUNFQyxJQURGO0FBQUEsSUFFRUMsc0JBRkYsR0FFNkJMLFNBRjdCLENBRUVLLHNCQUZGOztJQUlBQyxrQjs7O0FBQ0osOEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHSCxzQkFBYixDQURnQixDQUNxQjs7QUFEckIsMkZBR1ZHLElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0UsYSxFQUFlO0FBQ25CLFVBQUlDLEtBQUssR0FBRyxJQUFaO0FBRUEsVUFBTUgsSUFBSSxHQUFHLEtBQUtJLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGVBQWUsR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVdKLGFBQVgsQ0FEeEI7QUFBQSxVQUVNSyxNQUFNLEdBQUlGLGVBQWUsS0FBSyxJQUZwQzs7QUFJQSxVQUFJRSxNQUFKLEVBQVk7QUFDVkosUUFBQUEsS0FBSyxHQUFJRSxlQUFlLFlBQVlHLEtBQTVCLEdBQ0VILGVBREYsR0FFSSxDQUFDQSxlQUFELENBRlo7QUFJQSxZQUFNSSxrQkFBa0IsR0FBRyxJQUEzQjtBQUFBLFlBQWtDO0FBQzVCQyxRQUFBQSxtQkFBbUIsR0FBR2YsbUJBQW1CLENBQUNnQixzQkFBcEIsQ0FBMkNGLGtCQUEzQyxDQUQ1QjtBQUFBLFlBRU1HLDhCQUE4QixHQUFHRixtQkFBbUIsQ0FBQ0osS0FBcEIsQ0FBMEJKLGFBQTFCLENBRnZDO0FBSUFDLFFBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDVSxNQUFOLENBQWFELDhCQUFiLENBQVI7QUFDRDs7QUFFRCxhQUFPVCxLQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLDJGQUFtQkosa0JBQW5CO0FBQXlDOzs7K0JBRXhDO0FBQ1QsVUFBTWUsY0FBYyxHQUFHakIsSUFBdkI7QUFBQSxVQUE4QjtBQUN4QmtCLE1BQUFBLE1BQU0sb0ZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OztFQXBDOEJyQixtQjs7QUF1Q2pDc0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsa0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IHBhcnRUeXBlcyA9IHJlcXVpcmUoXCIuLi8uLi9wYXJ0VHlwZXNcIiksXG4gICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZShcIi4vc2VxdWVuY2VPZlBhcnRzXCIpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoXCIuL3plcm9Pck1vcmVQYXJ0c1wiKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUsIHBhcnQpO1xuICB9XG4gIFxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gKHBhcnROb2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgcGFydE5vZGVPck5vZGVzIDpcbiAgICAgICAgICAgICAgICAgIFtwYXJ0Tm9kZU9yTm9kZXNdO1xuXG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tT25lT3JNb3JlUGFydHNQYXJ0KG9uZU9yTW9yZVBhcnRzUGFydCksXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT25lT3JNb3JlUGFydHNQYXJ0KTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcGx1cywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iXX0=