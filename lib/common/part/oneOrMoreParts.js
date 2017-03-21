'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart() {
    _classCallCheck(this, OneOrMorePartsPart);

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = null;

      var productions = context.getProductions(),
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodeOrNodes !== null;

        if (terminalPartOrProductionParsed) {
          nodes = terminalPartOrProductionNodeOrNodes instanceof Array ? terminalPartOrProductionNodeOrNodes : [terminalPartOrProductionNodeOrNodes];

          var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this),
              ///
          zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

          nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\+$/,
          Class = OneOrMorePartsPart,
          oneOrMorePartsPart = _get(OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart), 'fromSymbol', this).call(this, symbol, significantTokenTypes, noWhitespace, regExp, Class);

      return oneOrMorePartsPart;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwicmVxdWlyZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwiZ2V0Tm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJwcm9kdWN0aW9ucyIsImdldFByb2R1Y3Rpb25zIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uIiwidGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMiLCJwYXJzZSIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCIsIkFycmF5IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImZyb21PbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMiLCJjb25jYXQiLCJzeW1ib2wiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsIm9uZU9yTW9yZVBhcnRzUGFydCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0JDLFFBQVEsbUJBQVIsQ0FBNUI7QUFBQSxJQUNNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FENUI7O0lBR01FLGtCOzs7Ozs7Ozs7OzswQkFDRUMsTyxFQUFTQyxZLEVBQWM7QUFDM0JBLHFCQUFlLEtBQUtDLGVBQUwsRUFBZixDQUQyQixDQUNhOztBQUV4QyxVQUFJQyxRQUFRLElBQVo7O0FBRUEsVUFBTUMsY0FBY0osUUFBUUssY0FBUixFQUFwQjtBQUFBLFVBQ01DLDJCQUEyQixLQUFLQSx3QkFBTCxDQUE4QkYsV0FBOUIsQ0FEakM7O0FBR0EsVUFBSUUsNkJBQTZCLElBQWpDLEVBQXVDO0FBQ3JDLFlBQU1DLHNDQUFzQ0QseUJBQXlCRSxLQUF6QixDQUErQlIsT0FBL0IsRUFBd0NDLFlBQXhDLENBQTVDO0FBQUEsWUFDSVEsaUNBQWtDRix3Q0FBd0MsSUFEOUU7O0FBR0EsWUFBSUUsOEJBQUosRUFBb0M7QUFDbENOLGtCQUFTSSwrQ0FBK0NHLEtBQWhELEdBQ0VILG1DQURGLEdBRUksQ0FBQ0EsbUNBQUQsQ0FGWjs7QUFJQSxjQUFNSSxzQkFBc0JiLG9CQUFvQmMsc0JBQXBCLENBQTJDLElBQTNDLENBQTVCO0FBQUEsY0FBOEU7QUFDMUVDLDJDQUFpQ0Ysb0JBQW9CSCxLQUFwQixDQUEwQlIsT0FBMUIsRUFBbUNDLFlBQW5DLENBRHJDOztBQUdBRSxrQkFBUUEsTUFBTVcsTUFBTixDQUFhRCw4QkFBYixDQUFSO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPVixLQUFQO0FBQ0Q7OzsrQkFFaUJZLE0sRUFBUUMscUIsRUFBdUJmLFksRUFBYztBQUM3RCxVQUFNZ0IsU0FBUyxZQUFmO0FBQUEsVUFDTUMsUUFBUW5CLGtCQURkO0FBQUEsVUFFTW9CLG9JQUFzQ0osTUFBdEMsRUFBOENDLHFCQUE5QyxFQUFxRWYsWUFBckUsRUFBbUZnQixNQUFuRixFQUEyRkMsS0FBM0YsQ0FGTjs7QUFJQSxhQUFPQyxrQkFBUDtBQUNEOzs7O0VBbEM4QnZCLG1COztBQXFDakN3QixPQUFPQyxPQUFQLEdBQWlCdEIsa0JBQWpCIiwiZmlsZSI6Im9uZU9yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3plcm9Pck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgbGV0IG5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgICBbdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXNdO1xuXG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQodGhpcyksIC8vL1xuICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzID0gemVyb09yTW9yZVBhcnRzUGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2Rlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC8oW14qXSspXFwrJC8sXG4gICAgICAgICAgQ2xhc3MgPSBPbmVPck1vcmVQYXJ0c1BhcnQsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gc3VwZXIuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iXX0=