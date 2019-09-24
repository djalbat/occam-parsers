'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var partTypes = require('../../partTypes'),
    SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var specialSymbols = lexers.specialSymbols,
    plus = specialSymbols.plus,
    OneOrMorePartsPartType = partTypes.OneOrMorePartsPartType;

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    var type = OneOrMorePartsPartType; ///

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).call(this, type, part));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
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
    key: 'clone',
    value: function clone() {
      return _get(OneOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart.prototype), 'clone', this).call(this, OneOrMorePartsPart);
    }
  }, {
    key: 'asString',
    value: function asString() {
      var operatorString = plus,
          ///
      string = _get(OneOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart.prototype), 'asString', this).call(this, operatorString);

      return string;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFydFR5cGVzIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJzcGVjaWFsU3ltYm9scyIsInBsdXMiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFydCIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZXMiLCJnZXRQYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJzZWQiLCJBcnJheSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJmcm9tT25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzIiwiY29uY2F0Iiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01FLHNCQUFzQkYsUUFBUSxtQkFBUixDQUQ1QjtBQUFBLElBRU1HLHNCQUFzQkgsUUFBUSxtQkFBUixDQUY1Qjs7QUFJTSxJQUFFSSxjQUFGLEdBQXFCTCxNQUFyQixDQUFFSyxjQUFGO0FBQUEsSUFDRUMsSUFERixHQUNXRCxjQURYLENBQ0VDLElBREY7QUFBQSxJQUVFQyxzQkFGRixHQUU2QkwsU0FGN0IsQ0FFRUssc0JBRkY7O0lBSUFDLGtCOzs7QUFDSiw4QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNQyxPQUFPSCxzQkFBYixDQURnQixDQUNxQjs7QUFEckIsbUlBR1ZHLElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0UsYSxFQUFlO0FBQ25CLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxVQUFNSCxPQUFPLEtBQUtJLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGtCQUFrQkwsS0FBS00sS0FBTCxDQUFXSixhQUFYLENBRHhCO0FBQUEsVUFFTUssU0FBVUYsb0JBQW9CLElBRnBDOztBQUlBLFVBQUlFLE1BQUosRUFBWTtBQUNWSixnQkFBU0UsMkJBQTJCRyxLQUE1QixHQUNFSCxlQURGLEdBRUksQ0FBQ0EsZUFBRCxDQUZaOztBQUlBLFlBQU1JLHFCQUFxQixJQUEzQjtBQUFBLFlBQWtDO0FBQzVCQyw4QkFBc0JmLG9CQUFvQmdCLHNCQUFwQixDQUEyQ0Ysa0JBQTNDLENBRDVCO0FBQUEsWUFFTUcsaUNBQWlDRixvQkFBb0JKLEtBQXBCLENBQTBCSixhQUExQixDQUZ2Qzs7QUFJQUMsZ0JBQVFBLE1BQU1VLE1BQU4sQ0FBYUQsOEJBQWIsQ0FBUjtBQUNEOztBQUVELGFBQU9ULEtBQVA7QUFDRDs7OzRCQUVPO0FBQUUsMklBQW1CSixrQkFBbkI7QUFBeUM7OzsrQkFFeEM7QUFDVCxVQUFNZSxpQkFBaUJqQixJQUF2QjtBQUFBLFVBQThCO0FBQ3hCa0IsZ0pBQXdCRCxjQUF4QixDQUROOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OztFQXBDOEJyQixtQjs7QUF1Q2pDc0IsT0FBT0MsT0FBUCxHQUFpQmxCLGtCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHBhcnRUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3BhcnRUeXBlcycpLFxuICAgICAgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi96ZXJvT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5jbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUsIHBhcnQpO1xuICB9XG4gIFxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICBwYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gKHBhcnROb2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgcGFydE5vZGVPck5vZGVzIDpcbiAgICAgICAgICAgICAgICAgIFtwYXJ0Tm9kZU9yTm9kZXNdO1xuXG4gICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tT25lT3JNb3JlUGFydHNQYXJ0KG9uZU9yTW9yZVBhcnRzUGFydCksXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT25lT3JNb3JlUGFydHNQYXJ0KTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcGx1cywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iXX0=