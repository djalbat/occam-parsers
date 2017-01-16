'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    specialSymbols = lexers.specialSymbols;

var Parts = require('./parts');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      var nodes = null,
          tooDeep = context.isTooDeep();

      if (!tooDeep) {
        nodes = [];

        var savedIndex = context.savedIndex(),
            parsed = this.parts.every(function (part) {
          var partNodes = part.parse(context, productions, noWhitespace),
              partParsed = partNodes !== null;

          if (partParsed) {
            nodes = nodes.concat(partNodes);

            noWhitespace = false;
          }

          return partParsed;
        });

        if (!parsed) {
          tooDeep = context.isTooDeep();

          if (!tooDeep) {
            context.backtrack(savedIndex);
          }

          nodes = null;
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, terminalSymbolsRegExp, significantTokenTypes) {
      var noWhitespace = false,
          parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

          parts.push(part);

          noWhitespace = false;
        }

        return parts;
      }, []),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIlJ1bGUiLCJwYXJ0cyIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsIm5vV2hpdGVzcGFjZSIsIm5vZGVzIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsInNhdmVkSW5kZXgiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZXMiLCJwYXJzZSIsInBhcnRQYXJzZWQiLCJjb25jYXQiLCJiYWNrdHJhY2siLCJzeW1ib2xTZXF1ZW5jZSIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwicnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGlCQUFpQkYsT0FBT0UsY0FENUI7O0FBR0EsSUFBSUMsUUFBUUYsUUFBUSxTQUFSLENBQVo7O0lBRU1HLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsTyxFQUFTQyxXLEVBQWFDLFksRUFBYztBQUN4QyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxVQUFVSixRQUFRSyxTQUFSLEVBRGQ7O0FBR0EsVUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWkQsZ0JBQVEsRUFBUjs7QUFFQSxZQUFJRyxhQUFhTixRQUFRTSxVQUFSLEVBQWpCO0FBQUEsWUFDSUMsU0FBUyxLQUFLUixLQUFMLENBQVdTLEtBQVgsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZDLGNBQUlDLFlBQVlELEtBQUtFLEtBQUwsQ0FBV1gsT0FBWCxFQUFvQkMsV0FBcEIsRUFBaUNDLFlBQWpDLENBQWhCO0FBQUEsY0FDSVUsYUFBY0YsY0FBYyxJQURoQzs7QUFHQSxjQUFJRSxVQUFKLEVBQWdCO0FBQ2RULG9CQUFRQSxNQUFNVSxNQUFOLENBQWFILFNBQWIsQ0FBUjs7QUFFQVIsMkJBQWUsS0FBZjtBQUNEOztBQUVELGlCQUFPVSxVQUFQO0FBQ0QsU0FYUSxDQURiOztBQWNBLFlBQUksQ0FBQ0wsTUFBTCxFQUFhO0FBQ1hILG9CQUFVSixRQUFRSyxTQUFSLEVBQVY7O0FBRUEsY0FBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWkosb0JBQVFjLFNBQVIsQ0FBa0JSLFVBQWxCO0FBQ0Q7O0FBRURILGtCQUFRLElBQVI7QUFDRDtBQUNGOztBQUVELGFBQU9BLEtBQVA7QUFDRDs7O3VDQUV5QlksYyxFQUFnQkMscUIsRUFBdUJDLHFCLEVBQXVCO0FBQ3RGLFVBQUlmLGVBQWUsS0FBbkI7QUFBQSxVQUNJSCxRQUFRZ0IsZUFBZUcsYUFBZixDQUE2QixVQUFTbkIsS0FBVCxFQUFnQm9CLE1BQWhCLEVBQXdCO0FBQzNELFlBQUlBLFdBQVd2QixlQUFld0IsYUFBOUIsRUFBNkM7QUFDM0NsQix5QkFBZSxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSU8sT0FBT1ksZUFBZUYsTUFBZixFQUF1QkgscUJBQXZCLEVBQThDQyxxQkFBOUMsRUFBcUVmLFlBQXJFLENBQVg7O0FBRUFILGdCQUFNdUIsSUFBTixDQUFXYixJQUFYOztBQUVBUCx5QkFBZSxLQUFmO0FBQ0Q7O0FBRUQsZUFBT0gsS0FBUDtBQUNELE9BWk8sRUFZTCxFQVpLLENBRFo7QUFBQSxVQWNJd0IsT0FBTyxJQUFJekIsSUFBSixDQUFTQyxLQUFULENBZFg7O0FBZ0JBLGFBQU93QixJQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0IsSUFBakI7O0FBRUEsU0FBU3VCLGNBQVQsQ0FBd0JGLE1BQXhCLEVBQWdDSCxxQkFBaEMsRUFBdURDLHFCQUF2RCxFQUE4RWYsWUFBOUUsRUFBNEY7QUFDMUYsTUFBSU8sT0FBT2lCLFNBQVgsQ0FEMEYsQ0FDcEU7O0FBRXRCN0IsUUFBTThCLElBQU4sQ0FBVyxVQUFTQyxJQUFULEVBQWU7QUFDeEJuQixXQUFPbUIsS0FBS0MsVUFBTCxDQUFnQlYsTUFBaEIsRUFBd0JILHFCQUF4QixFQUErQ0MscUJBQS9DLEVBQXNFZixZQUF0RSxDQUFQOztBQUVBLFFBQUlLLFNBQVVFLFNBQVMsSUFBdkI7O0FBRUEsV0FBT0YsTUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0UsSUFBUDtBQUNEIiwiZmlsZSI6InJ1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICBzcGVjaWFsU3ltYm9scyA9IGxleGVycy5zcGVjaWFsU3ltYm9scztcblxudmFyIFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICB2YXIgbm9kZXMgPSBudWxsLFxuICAgICAgICB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICghdG9vRGVlcCkge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgdmFyIHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVzKTtcblxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgICAgIGlmICghdG9vRGVlcCkge1xuICAgICAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZXMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKSB7XG4gICAgdmFyIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHAsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcblxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICB2YXIgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgdmFyIHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19