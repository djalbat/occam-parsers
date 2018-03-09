'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    plus = specialSymbols.plus;


var type = 'OneOrMoreParts';

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart(part) {
    _classCallCheck(this, OneOrMorePartsPart);

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).call(this, type, part));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      var part = this.getPart(),
          partNodeOrNodes = part.parse(configuration, noWhitespace),
          partParsed = partNodeOrNodes !== null;

      if (partParsed) {
        nodes = partNodeOrNodes instanceof Array ? partNodeOrNodes : [partNodeOrNodes];

        var oneOrMorePartsPart = this,
            ///
        zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(oneOrMorePartsPart),
            zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(configuration, noWhitespace);

        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
      }

      return nodes;
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

Object.assign(OneOrMorePartsPart, {
  type: type
});

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwicGx1cyIsInR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwiY29uZmlndXJhdGlvbiIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwiZ2V0UGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsIkFycmF5Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImZyb21PbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMiLCJjb25jYXQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FBNUI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEsbUJBQVIsQ0FENUI7O0FBR00sSUFBRUcsUUFBRixHQUFlSixNQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsSUFGRixHQUVXRCxjQUZYLENBRUVDLElBRkY7OztBQUlOLElBQU1DLE9BQU8sZ0JBQWI7O0lBRU1DLGtCOzs7QUFDSiw4QkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUFBLG1JQUNWRixJQURVLEVBQ0pFLElBREk7QUFFakI7Ozs7MEJBRUtDLGEsRUFBZUMsWSxFQUFjO0FBQ2pDQSxxQkFBZSxLQUFmLENBRGlDLENBQ1g7O0FBRXRCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxVQUFNSCxPQUFPLEtBQUtJLE9BQUwsRUFBYjtBQUFBLFVBQ01DLGtCQUFrQkwsS0FBS00sS0FBTCxDQUFXTCxhQUFYLEVBQTBCQyxZQUExQixDQUR4QjtBQUFBLFVBRU1LLGFBQWNGLG9CQUFvQixJQUZ4Qzs7QUFJQSxVQUFJRSxVQUFKLEVBQWdCO0FBQ2RKLGdCQUFTRSwyQkFBMkJHLEtBQTVCLEdBQ0VILGVBREYsR0FFSSxDQUFDQSxlQUFELENBRlo7O0FBSUEsWUFBTUkscUJBQXFCLElBQTNCO0FBQUEsWUFBa0M7QUFDNUJDLDhCQUFzQmhCLG9CQUFvQmlCLHNCQUFwQixDQUEyQ0Ysa0JBQTNDLENBRDVCO0FBQUEsWUFFTUcsaUNBQWlDRixvQkFBb0JKLEtBQXBCLENBQTBCTCxhQUExQixFQUF5Q0MsWUFBekMsQ0FGdkM7O0FBSUFDLGdCQUFRQSxNQUFNVSxNQUFOLENBQWFELDhCQUFiLENBQVI7QUFDRDs7QUFFRCxhQUFPVCxLQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1XLGlCQUFpQmpCLElBQXZCO0FBQUEsVUFBOEI7QUFDeEJrQixnSkFBd0JELGNBQXhCLENBRE47O0FBR0EsYUFBT0MsTUFBUDtBQUNEOzs7O0VBbEM4QnRCLG1COztBQXFDakN1QixPQUFPQyxNQUFQLENBQWNsQixrQkFBZCxFQUFrQztBQUNoQ0QsUUFBTUE7QUFEMEIsQ0FBbEM7O0FBSUFvQixPQUFPQyxPQUFQLEdBQWlCcEIsa0JBQWpCIiwiZmlsZSI6Im9uZU9yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi96ZXJvT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jb25zdCB0eXBlID0gJ09uZU9yTW9yZVBhcnRzJztcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuICBcbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuXG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICBub2RlcyA9IChwYXJ0Tm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA6XG4gICAgICAgICAgICAgICAgICBbcGFydE5vZGVPck5vZGVzXTtcblxuICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IFplcm9Pck1vcmVQYXJ0c1BhcnQuZnJvbU9uZU9yTW9yZVBhcnRzUGFydChvbmVPck1vcmVQYXJ0c1BhcnQpLFxuICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzID0gemVyb09yTW9yZVBhcnRzUGFydC5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcGx1cywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihPbmVPck1vcmVQYXJ0c1BhcnQsIHtcbiAgdHlwZTogdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNQYXJ0O1xuIl19