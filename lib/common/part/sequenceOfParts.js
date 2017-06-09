'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndOfLinePart = require('./endOfLine'),
    parserUtil = require('../../util/parser'),
    TerminalSymbolPart = require('./terminalSymbol'),
    SignificantTokenTypePart = require('./significantTokenType');

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(terminalPart, productionName, noWhitespace) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.terminalPart = terminalPart;
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getTerminalPart',
    value: function getTerminalPart() {
      return this.terminalPart;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'getTerminalPartOrProduction',
    value: function getTerminalPartOrProduction(productions) {
      var production = parserUtil.findProduction(this.productionName, productions),
          terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : production;

      return terminalPartOrProduction;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var string = void 0;

      var productionName = this.getProductionName();

      if (productionName !== null) {
        string = '' + productionName + operatorString;
      } else {
        var terminalPart = this.getTerminalPart(),
            terminalPartString = terminalPart.toString();

        string = '' + terminalPartString + operatorString;
      }

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class) {
      var part = null;

      var matches = symbol.match(regExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        var terminalPart = SignificantTokenTypePart.fromSymbol(symbol, significantTokenTypes, noWhitespace) || TerminalSymbolPart.fromSymbol(symbol, significantTokenTypes, noWhitespace) || EndOfLinePart.fromSymbol(symbol, significantTokenTypes, noWhitespace),
            productionName = symbol;

        part = new Class(terminalPart, productionName, noWhitespace);
      }

      return part;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsInJlcXVpcmUiLCJwYXJzZXJVdGlsIiwiVGVybWluYWxTeW1ib2xQYXJ0IiwiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsInRlcm1pbmFsUGFydCIsInByb2R1Y3Rpb25OYW1lIiwibm9XaGl0ZXNwYWNlIiwicHJvZHVjdGlvbnMiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24iLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsImdldFByb2R1Y3Rpb25OYW1lIiwiZ2V0VGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzeW1ib2wiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJyZWdFeHAiLCJDbGFzcyIsInBhcnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsImZyb21TeW1ib2wiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsYUFBUixDQUF0QjtBQUFBLElBQ01DLGFBQWFELFFBQVEsbUJBQVIsQ0FEbkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsa0JBQVIsQ0FGM0I7QUFBQSxJQUdNRywyQkFBMkJILFFBQVEsd0JBQVIsQ0FIakM7O0lBS01JLG1CO0FBQ0osK0JBQVlDLFlBQVosRUFBMEJDLGNBQTFCLEVBQTBDQyxZQUExQyxFQUF3RDtBQUFBOztBQUN0RCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRixZQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7OztnREFFMkJDLFcsRUFBYTtBQUN2QyxVQUFNQyxhQUFhUixXQUFXUyxjQUFYLENBQTBCLEtBQUtKLGNBQS9CLEVBQStDRSxXQUEvQyxDQUFuQjtBQUFBLFVBQ01HLDJCQUE0QixLQUFLTixZQUFMLEtBQXNCLElBQXZCLEdBQ0csS0FBS0EsWUFEUixHQUVLSSxVQUh0Qzs7QUFLQSxhQUFPRSx3QkFBUDtBQUNEOzs7NkJBRVFDLGMsRUFBZ0I7QUFDdkIsVUFBSUMsZUFBSjs7QUFFQSxVQUFNUCxpQkFBaUIsS0FBS1EsaUJBQUwsRUFBdkI7O0FBRUEsVUFBSVIsbUJBQW1CLElBQXZCLEVBQTZCO0FBQzNCTyxzQkFBWVAsY0FBWixHQUE2Qk0sY0FBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNUCxlQUFlLEtBQUtVLGVBQUwsRUFBckI7QUFBQSxZQUNJQyxxQkFBcUJYLGFBQWFZLFFBQWIsRUFEekI7O0FBR0FKLHNCQUFZRyxrQkFBWixHQUFpQ0osY0FBakM7QUFDRDs7QUFFRCxhQUFPQyxNQUFQO0FBQ0Q7OzsrQkFFaUJLLE0sRUFBUUMscUIsRUFBdUJaLFksRUFBY2EsTSxFQUFRQyxLLEVBQU87QUFDNUUsVUFBSUMsT0FBTyxJQUFYOztBQUVBLFVBQU1DLFVBQVVMLE9BQU9NLEtBQVAsQ0FBYUosTUFBYixDQUFoQjs7QUFFQSxVQUFJRyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFlBQU1FLGNBQWNDLE9BQU9ILE9BQVAsQ0FBcEI7O0FBRUFMLGlCQUFTTyxXQUFULENBSG9CLENBR0U7O0FBRXRCLFlBQU1wQixlQUFlRix5QkFBeUJ3QixVQUF6QixDQUFvQ1QsTUFBcEMsRUFBNENDLHFCQUE1QyxFQUFtRVosWUFBbkUsS0FDRUwsbUJBQW1CeUIsVUFBbkIsQ0FBOEJULE1BQTlCLEVBQXNDQyxxQkFBdEMsRUFBNkRaLFlBQTdELENBREYsSUFFSVIsY0FBYzRCLFVBQWQsQ0FBeUJULE1BQXpCLEVBQWlDQyxxQkFBakMsRUFBd0RaLFlBQXhELENBRnpCO0FBQUEsWUFHTUQsaUJBQWlCWSxNQUh2Qjs7QUFLQUksZUFBTyxJQUFJRCxLQUFKLENBQVVoQixZQUFWLEVBQXdCQyxjQUF4QixFQUF3Q0MsWUFBeEMsQ0FBUDtBQUNEOztBQUVELGFBQU9lLElBQVA7QUFDRDs7Ozs7O0FBR0hNLE9BQU9DLE9BQVAsR0FBaUJ6QixtQkFBakI7O0FBRUEsU0FBU3NCLE1BQVQsQ0FBZ0JJLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2VxdWVuY2VPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi9lbmRPZkxpbmUnKSxcbiAgICAgIHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL3BhcnNlcicpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy50ZXJtaW5hbFBhcnQgPSB0ZXJtaW5hbFBhcnQ7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgZ2V0VGVybWluYWxQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1pbmFsUGFydDtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXROb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgZ2V0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9ICh0aGlzLnRlcm1pbmFsUGFydCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVybWluYWxQYXJ0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uO1xuICB9XG5cbiAgdG9TdHJpbmcob3BlcmF0b3JTdHJpbmcpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLmdldFByb2R1Y3Rpb25OYW1lKCk7XG5cbiAgICBpZiAocHJvZHVjdGlvbk5hbWUgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGAke3Byb2R1Y3Rpb25OYW1lfSR7b3BlcmF0b3JTdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybWluYWxQYXJ0ID0gdGhpcy5nZXRUZXJtaW5hbFBhcnQoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRTdHJpbmcgPSB0ZXJtaW5hbFBhcnQudG9TdHJpbmcoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGVybWluYWxQYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcykge1xuICAgIGxldCBwYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHN5bWJvbCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgY29uc3QgdGVybWluYWxQYXJ0ID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluYWxTeW1ib2xQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZkxpbmVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHN5bWJvbDtcblxuICAgICAgcGFydCA9IG5ldyBDbGFzcyh0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlBhcnRzUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19