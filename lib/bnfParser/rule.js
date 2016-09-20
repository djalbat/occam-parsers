'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpecialPart = require('./part/special'),
    ProductionPart = require('./part/production'),
    RegularExpressionPart = require('./part/regularExpression'),
    ZeroOrMoreProductionsPart = require('./part/zeroOrMoreProductions');

var Parts = [SpecialPart, RegularExpressionPart, ZeroOrMoreProductionsPart, ProductionPart];

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = this.parts.every(function (part) {
        var parsed = part.parse(input, context, productions);

        return parsed;
      });

      return parsed;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, specialSymbolsRegExp) {
      var parts = symbolSequence.mapSymbols(function (symbol) {
        var part = partFromSymbol(symbol, specialSymbolsRegExp);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, specialSymbolsRegExp) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, specialSymbolsRegExp);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJTcGVjaWFsUGFydCIsInJlcXVpcmUiLCJQcm9kdWN0aW9uUGFydCIsIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsIlplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQiLCJQYXJ0cyIsIlJ1bGUiLCJwYXJ0cyIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFyc2UiLCJzeW1ib2xTZXF1ZW5jZSIsInNwZWNpYWxTeW1ib2xzUmVnRXhwIiwibWFwU3ltYm9scyIsInN5bWJvbCIsInBhcnRGcm9tU3ltYm9sIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxjQUFjQyxRQUFRLGdCQUFSLENBQWxCO0FBQUEsSUFDSUMsaUJBQWlCRCxRQUFRLG1CQUFSLENBRHJCO0FBQUEsSUFFSUUsd0JBQXdCRixRQUFRLDBCQUFSLENBRjVCO0FBQUEsSUFHSUcsNEJBQTRCSCxRQUFRLDhCQUFSLENBSGhDOztBQUtBLElBQUlJLFFBQVEsQ0FDVkwsV0FEVSxFQUVWRyxxQkFGVSxFQUdWQyx5QkFIVSxFQUlWRixjQUpVLENBQVo7O0lBT01JLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDM0MsWUFBSUYsU0FBU0UsS0FBS0MsS0FBTCxDQUFXTixLQUFYLEVBQWtCQyxPQUFsQixFQUEyQkMsV0FBM0IsQ0FBYjs7QUFFQSxlQUFPQyxNQUFQO0FBQ0QsT0FKWSxDQUFiOztBQU1BLGFBQU9BLE1BQVA7QUFDRDs7O3VDQUV5QkksYyxFQUFnQkMsb0IsRUFBc0I7QUFDOUQsVUFBSVQsUUFBUVEsZUFBZUUsVUFBZixDQUEwQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pELFlBQUlMLE9BQU9NLGVBQWVELE1BQWYsRUFBdUJGLG9CQUF2QixDQUFYOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQUpPLENBQVo7QUFBQSxVQUtJTyxPQUFPLElBQUlkLElBQUosQ0FBU0MsS0FBVCxDQUxYOztBQU9BLGFBQU9hLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQixJQUFqQjs7QUFFQSxTQUFTYSxjQUFULENBQXdCRCxNQUF4QixFQUFnQ0Ysb0JBQWhDLEVBQXNEO0FBQ3BELE1BQUlILE9BQU9VLFNBQVgsQ0FEb0QsQ0FDOUI7O0FBRXRCbEIsUUFBTW1CLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJaLFdBQU9ZLEtBQUtDLFVBQUwsQ0FBZ0JSLE1BQWhCLEVBQXdCRixvQkFBeEIsQ0FBUDs7QUFFQSxRQUFJTCxTQUFVRSxTQUFTLElBQXZCOztBQUVBLFdBQU9GLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9FLElBQVA7QUFDRCIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3BlY2lhbFBhcnQgPSByZXF1aXJlKCcuL3BhcnQvc3BlY2lhbCcpLFxuICAgIFByb2R1Y3Rpb25QYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb24nKSxcbiAgICBSZWd1bGFyRXhwcmVzc2lvblBhcnQgPSByZXF1aXJlKCcuL3BhcnQvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICBaZXJvT3JNb3JlUHJvZHVjdGlvbnNQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3plcm9Pck1vcmVQcm9kdWN0aW9ucycpO1xuXG52YXIgUGFydHMgPSBbXG4gIFNwZWNpYWxQYXJ0LFxuICBSZWd1bGFyRXhwcmVzc2lvblBhcnQsXG4gIFplcm9Pck1vcmVQcm9kdWN0aW9uc1BhcnQsXG4gIFByb2R1Y3Rpb25QYXJ0XG5dO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIHZhciBwYXJzZWQgPSBwYXJ0LnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgICBcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKSB7XG4gICAgdmFyIHBhcnRzID0gc3ltYm9sU2VxdWVuY2UubWFwU3ltYm9scyhmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICB2YXIgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc3BlY2lhbFN5bWJvbHNSZWdFeHApO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzcGVjaWFsU3ltYm9sc1JlZ0V4cCkge1xuICB2YXIgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNwZWNpYWxTeW1ib2xzUmVnRXhwKTtcblxuICAgIHZhciBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cbiJdfQ==