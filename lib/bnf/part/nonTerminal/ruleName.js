'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var ruleUtilities = require('../../../utilities/rule'),
    NonTerminalPart = require('../../part/nonTerminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    findRuleByName = ruleUtilities.findRuleByName,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    exclamationMark = specialSymbols.exclamationMark;


var type = 'RuleName';

var RuleNamePart = function (_NonTerminalPart) {
  _inherits(RuleNamePart, _NonTerminalPart);

  function RuleNamePart(ruleName, noWhitespace) {
    var lookAhead = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, RuleNamePart);

    var _this = _possibleConstructorReturn(this, (RuleNamePart.__proto__ || Object.getPrototypeOf(RuleNamePart)).call(this, type));

    _this.ruleName = ruleName;

    _this.noWhitespace = noWhitespace;

    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RuleNamePart, [{
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getLookAhead',
    value: function getLookAhead() {
      return this.lookAhead;
    }
  }, {
    key: 'isRuleNamePart',
    value: function isRuleNamePart() {
      var ruleNamePart = true;

      return ruleNamePart;
    }
  }, {
    key: 'setLookAhead',
    value: function setLookAhead(lookAhead) {
      this.lookAhead = lookAhead;
    }
  }, {
    key: 'findRule',
    value: function findRule(configuration) {
      var name = this.ruleName,
          ///
      rules = configuration.getRules(),
          rule = findRuleByName(name, rules);

      return rule;
    }
  }, {
    key: 'parse',
    value: function parse(configuration, noWhitespace) {
      var node = null;

      var rule = this.findRule(configuration);

      if (rule !== null) {
        noWhitespace = noWhitespace || this.noWhitespace; ///

        node = rule.parse(configuration, noWhitespace);
      }

      return node;
    }
  }, {
    key: 'parseWithLookAhead',
    value: function parseWithLookAhead(rule, configuration, noWhitespace, callback) {
      if (rule !== null) {
        noWhitespace = noWhitespace || this.noWhitespace; ///

        rule.parseWithLookAhead(configuration, noWhitespace, callback);
      }
    }
  }, {
    key: 'asString',
    value: function asString() {
      var lookAheadString = this.lookAhead ? exclamationMark : '',
          noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + this.ruleName + lookAheadString;

      return string;
    }
  }]);

  return RuleNamePart;
}(NonTerminalPart);

Object.assign(RuleNamePart, {
  type: type
});

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJmaW5kUnVsZUJ5TmFtZSIsIk5PX1dISVRFU1BBQ0UiLCJleGNsYW1hdGlvbk1hcmsiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJydWxlTmFtZVBhcnQiLCJjb25maWd1cmF0aW9uIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwibm9kZSIsImZpbmRSdWxlIiwicGFyc2UiLCJjYWxsYmFjayIsInBhcnNlV2l0aExvb2tBaGVhZCIsImxvb2tBaGVhZFN0cmluZyIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLHlCQUFSLENBQXRCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLHdCQUFSLENBRHhCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLGNBRkYsR0FFcUJKLGFBRnJCLENBRUVJLGNBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR3FDRixjQUhyQyxDQUdFRSxhQUhGO0FBQUEsSUFHaUJDLGVBSGpCLEdBR3FDSCxjQUhyQyxDQUdpQkcsZUFIakI7OztBQUtOLElBQU1DLE9BQU8sVUFBYjs7SUFFTUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQXVEO0FBQUEsUUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEsNEhBQy9DSixJQUQrQzs7QUFHckQsVUFBS0UsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFQcUQ7QUFRdEQ7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtGLFFBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLRSxTQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNQyxlQUFlLElBQXJCOztBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O2lDQUVZRCxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzZCQUVRRSxhLEVBQWU7QUFDdEIsVUFBTUMsT0FBTyxLQUFLTCxRQUFsQjtBQUFBLFVBQTRCO0FBQ3RCTSxjQUFRRixjQUFjRyxRQUFkLEVBRGQ7QUFBQSxVQUVNQyxPQUFPYixlQUFlVSxJQUFmLEVBQXFCQyxLQUFyQixDQUZiOztBQUlBLGFBQU9FLElBQVA7QUFDRDs7OzBCQUVLSixhLEVBQWVILFksRUFBYztBQUNqQyxVQUFJUSxPQUFPLElBQVg7O0FBRUEsVUFBTUQsT0FBTyxLQUFLRSxRQUFMLENBQWNOLGFBQWQsQ0FBYjs7QUFFQSxVQUFJSSxTQUFTLElBQWIsRUFBbUI7QUFDakJQLHVCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEaUIsQ0FDaUM7O0FBRWxEUSxlQUFPRCxLQUFLRyxLQUFMLENBQVdQLGFBQVgsRUFBMEJILFlBQTFCLENBQVA7QUFDRDs7QUFFRCxhQUFPUSxJQUFQO0FBQ0Q7Ozt1Q0FFa0JELEksRUFBTUosYSxFQUFlSCxZLEVBQWNXLFEsRUFBVTtBQUM5RCxVQUFJSixTQUFTLElBQWIsRUFBbUI7QUFDakJQLHVCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEaUIsQ0FDaUM7O0FBRWxETyxhQUFLSyxrQkFBTCxDQUF3QlQsYUFBeEIsRUFBdUNILFlBQXZDLEVBQXFEVyxRQUFyRDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1FLGtCQUFrQixLQUFLWixTQUFMLEdBQ0VMLGVBREYsR0FFSSxFQUY1QjtBQUFBLFVBR01rQixxQkFBcUIsS0FBS2QsWUFBTCxHQUNFTCxhQURGLEdBRUksRUFML0I7QUFBQSxVQU1Nb0IsY0FBWUQsa0JBQVosR0FBaUMsS0FBS2YsUUFBdEMsR0FBaURjLGVBTnZEOztBQVFBLGFBQU9FLE1BQVA7QUFDRDs7OztFQXJFd0J4QixlOztBQXdFM0J5QixPQUFPQyxNQUFQLENBQWNuQixZQUFkLEVBQTRCO0FBQzFCRDtBQUQwQixDQUE1Qjs7QUFJQXFCLE9BQU9DLE9BQVAsR0FBaUJyQixZQUFqQiIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UsIGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNvbnN0IHR5cGUgPSAnUnVsZU5hbWUnO1xuXG5jbGFzcyBSdWxlTmFtZVBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQgPSBmYWxzZSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzZXRMb29rQWhlYWQobG9va0FoZWFkKSB7XG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBmaW5kUnVsZShjb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gY29uZmlndXJhdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgICBub2RlID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2VXaXRoTG9va0FoZWFkKHJ1bGUsIGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgICAgcnVsZS5wYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbG9va0FoZWFkU3RyaW5nID0gdGhpcy5sb29rQWhlYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlU3RyaW5nID0gdGhpcy5ub1doaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9fV0hJVEVTUEFDRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ30ke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSdWxlTmFtZVBhcnQsIHtcbiAgdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVQYXJ0O1xuIl19