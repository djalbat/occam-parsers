'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var NonTerminalPart = require('../../part/nonTerminal'),
    ruleUtilities = require('../../../utilities/rule');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    findRuleByName = ruleUtilities.findRuleByName;


var type = 'RuleName';

var RuleNamePart = function (_NonTerminalPart) {
  _inherits(RuleNamePart, _NonTerminalPart);

  function RuleNamePart(ruleName, noWhitespace) {
    _classCallCheck(this, RuleNamePart);

    var _this = _possibleConstructorReturn(this, (RuleNamePart.__proto__ || Object.getPrototypeOf(RuleNamePart)).call(this, type));

    _this.ruleName = ruleName;

    _this.noWhitespace = noWhitespace;
    return _this;
  }

  _createClass(RuleNamePart, [{
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var name = this.ruleName,
          ///
      rules = configuration.getRules(),
          rule = findRuleByName(name, rules);

      if (rule !== null) {
        nodeOrNodes = rule.parse(configuration, noWhitespace);
      }

      return nodeOrNodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + this.ruleName;

      return string;
    }
  }]);

  return RuleNamePart;
}(NonTerminalPart);

Object.assign(RuleNamePart, {
  type: type
});

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxQYXJ0IiwicnVsZVV0aWxpdGllcyIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiZmluZFJ1bGVCeU5hbWUiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJjb25maWd1cmF0aW9uIiwibm9kZU9yTm9kZXMiLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJwYXJzZSIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsa0JBQWtCRCxRQUFRLHdCQUFSLENBQXhCO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLHlCQUFSLENBRHRCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLGFBRkYsR0FFb0JELGNBRnBCLENBRUVDLGFBRkY7QUFBQSxJQUdFQyxjQUhGLEdBR3FCSixhQUhyQixDQUdFSSxjQUhGOzs7QUFLTixJQUFNQyxPQUFPLFVBQWI7O0lBRU1DLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUFvQztBQUFBOztBQUFBLDRIQUM1QkgsSUFENEI7O0FBR2xDLFVBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBTGtDO0FBTW5DOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OzswQkFFS0UsYSxFQUFlRCxZLEVBQWM7QUFDakNBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEaUMsQ0FDaUI7O0FBRWxELFVBQUlFLGNBQWMsSUFBbEI7O0FBRUEsVUFBTUMsT0FBTyxLQUFLSixRQUFsQjtBQUFBLFVBQTRCO0FBQ3RCSyxjQUFRSCxjQUFjSSxRQUFkLEVBRGQ7QUFBQSxVQUVNQyxPQUFPVixlQUFlTyxJQUFmLEVBQXFCQyxLQUFyQixDQUZiOztBQUlBLFVBQUlFLFNBQVMsSUFBYixFQUFtQjtBQUNqQkosc0JBQWNJLEtBQUtDLEtBQUwsQ0FBV04sYUFBWCxFQUEwQkQsWUFBMUIsQ0FBZDtBQUNEOztBQUVELGFBQU9FLFdBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU0scUJBQXFCLEtBQUtSLFlBQUwsR0FDRUwsYUFERixHQUVJLEVBRi9CO0FBQUEsVUFHTWMsY0FBWUQsa0JBQVosR0FBaUMsS0FBS1QsUUFINUM7O0FBS0EsYUFBT1UsTUFBUDtBQUNEOzs7O0VBcEN3QmxCLGU7O0FBdUMzQm1CLE9BQU9DLE1BQVAsQ0FBY2IsWUFBZCxFQUE0QjtBQUMxQkQsUUFBTUE7QUFEb0IsQ0FBNUI7O0FBSUFlLE9BQU9DLE9BQVAsR0FBaUJmLFlBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9ydWxlJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGUgPSAnUnVsZU5hbWUnO1xuXG5jbGFzcyBSdWxlTmFtZVBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgXG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG4gIFxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBuYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBjb25maWd1cmF0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlQnlOYW1lKG5hbWUsIHJ1bGVzKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfSR7dGhpcy5ydWxlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJ1bGVOYW1lUGFydCwge1xuICB0eXBlOiB0eXBlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVBhcnQ7XG4iXX0=