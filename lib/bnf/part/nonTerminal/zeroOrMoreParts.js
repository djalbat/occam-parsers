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
    SequenceOfPartsPart = require('./sequenceOfParts');

var specialSymbols = lexers.specialSymbols,
    asterisk = specialSymbols.asterisk,
    ZeroOrMorePartsPartType = partTypes.ZeroOrMorePartsPartType;

var ZeroOrMorePartsPart = /*#__PURE__*/function (_SequenceOfPartsPart) {
  _inherits(ZeroOrMorePartsPart, _SequenceOfPartsPart);

  function ZeroOrMorePartsPart(part) {
    _classCallCheck(this, ZeroOrMorePartsPart);

    var type = ZeroOrMorePartsPartType; ///

    return _possibleConstructorReturn(this, _getPrototypeOf(ZeroOrMorePartsPart).call(this, type, part));
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: "parse",
    value: function parse(configuration) {
      var nodes = [];
      var part = this.getPart();

      for (;;) {
        var partNodeOrNodes = part.parse(configuration),
            parsed = partNodeOrNodes !== null;

        if (parsed) {
          nodes = nodes.concat(partNodeOrNodes);
        } else {
          break;
        }
      }

      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = asterisk,
          ///
      string = _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "asString", this).call(this, operatorString);

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "clone", this).call(this, ZeroOrMorePartsPart);
    }
  }], [{
    key: "fromOneOrMorePartsPart",
    value: function fromOneOrMorePartsPart(oneOrMorePartsPart) {
      var part = oneOrMorePartsPart.getPart(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);
      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFydFR5cGVzIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInNwZWNpYWxTeW1ib2xzIiwiYXN0ZXJpc2siLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlcyIsImdldFBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsInBhcnNlZCIsImNvbmNhdCIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUUsbUJBQW1CLEdBQUdGLE9BQU8sQ0FBQyxtQkFBRCxDQURuQzs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixNQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsUUFERixHQUNlRCxjQURmLENBQ0VDLFFBREY7QUFBQSxJQUVFQyx1QkFGRixHQUU4QkosU0FGOUIsQ0FFRUksdUJBRkY7O0lBSUFDLG1COzs7QUFDSiwrQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxJQUFJLEdBQUdILHVCQUFiLENBRGdCLENBQ3NCOztBQUR0Qiw0RkFHVkcsSUFIVSxFQUdKRCxJQUhJO0FBSWpCOzs7OzBCQUVLRSxhLEVBQWU7QUFDbkIsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFQSxVQUFNSCxJQUFJLEdBQUcsS0FBS0ksT0FBTCxFQUFiOztBQUVBLGVBQVE7QUFDTixZQUFNQyxlQUFlLEdBQUdMLElBQUksQ0FBQ00sS0FBTCxDQUFXSixhQUFYLENBQXhCO0FBQUEsWUFDTUssTUFBTSxHQUFJRixlQUFlLEtBQUssSUFEcEM7O0FBR0EsWUFBSUUsTUFBSixFQUFZO0FBQ1ZKLFVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDSyxNQUFOLENBQWFILGVBQWIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRixLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLGNBQWMsR0FBR1osUUFBdkI7QUFBQSxVQUFrQztBQUM1QmEsTUFBQUEsTUFBTSxxRkFBa0JELGNBQWxCLENBRFo7O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSw0RkFBbUJYLG1CQUFuQjtBQUEwQzs7OzJDQUV0Qlksa0IsRUFBb0I7QUFDaEQsVUFBTVgsSUFBSSxHQUFHVyxrQkFBa0IsQ0FBQ1AsT0FBbkIsRUFBYjtBQUFBLFVBQ01RLG1CQUFtQixHQUFHLElBQUliLG1CQUFKLENBQXdCQyxJQUF4QixDQUQ1QjtBQUdBLGFBQU9ZLG1CQUFQO0FBQ0Q7Ozs7RUF4QytCakIsbUI7O0FBMkNsQ2tCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcGFydFR5cGVzID0gcmVxdWlyZSgnLi4vLi4vcGFydFR5cGVzJyksXG4gICAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gPSBwYXJ0VHlwZXM7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBhc3RlcmlzaywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFplcm9Pck1vcmVQYXJ0c1BhcnQpOyB9XG5cbiAgc3RhdGljIGZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSB7XG4gICAgY29uc3QgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCksXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNQYXJ0O1xuIl19