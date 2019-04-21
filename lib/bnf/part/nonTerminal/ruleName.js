'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var partTypes = require('../../partTypes'),
    ruleUtilities = require('../../../utilities/rule'),
    NonTerminalPart = require('../../part/nonTerminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    findRuleByName = ruleUtilities.findRuleByName,
    RuleNamePartType = partTypes.RuleNamePartType,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    exclamationMark = specialSymbols.exclamationMark;

var RuleNamePart = function (_NonTerminalPart) {
  _inherits(RuleNamePart, _NonTerminalPart);

  function RuleNamePart(ruleName, noWhitespace) {
    var lookAhead = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, RuleNamePart);

    var type = RuleNamePartType; ///

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
    key: 'parseRuleWithLookAhead',
    value: function parseRuleWithLookAhead(rule, configuration, noWhitespace, callback) {
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

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFydFR5cGVzIiwicnVsZVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJmaW5kUnVsZUJ5TmFtZSIsIlJ1bGVOYW1lUGFydFR5cGUiLCJOT19XSElURVNQQUNFIiwiZXhjbGFtYXRpb25NYXJrIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJ0eXBlIiwicnVsZU5hbWVQYXJ0IiwiY29uZmlndXJhdGlvbiIsIm5hbWUiLCJydWxlcyIsImdldFJ1bGVzIiwicnVsZSIsIm5vZGUiLCJmaW5kUnVsZSIsInBhcnNlIiwiY2FsbGJhY2siLCJwYXJzZVdpdGhMb29rQWhlYWQiLCJsb29rQWhlYWRTdHJpbmciLCJub1doaXRlc3BhY2VTdHJpbmciLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEseUJBQVIsQ0FEdEI7QUFBQSxJQUVNRyxrQkFBa0JILFFBQVEsd0JBQVIsQ0FGeEI7O0FBSU0sSUFBRUksUUFBRixHQUFlTCxNQUFmLENBQUVLLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsY0FGRixHQUVxQkosYUFGckIsQ0FFRUksY0FGRjtBQUFBLElBR0VDLGdCQUhGLEdBR3VCTixTQUh2QixDQUdFTSxnQkFIRjtBQUFBLElBSUVDLGFBSkYsR0FJcUNILGNBSnJDLENBSUVHLGFBSkY7QUFBQSxJQUlpQkMsZUFKakIsR0FJcUNKLGNBSnJDLENBSWlCSSxlQUpqQjs7SUFNQUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBc0JDLFlBQXRCLEVBQXVEO0FBQUEsUUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3JELFFBQU1DLE9BQU9QLGdCQUFiLENBRHFELENBQ3RCOztBQURzQiw0SEFHL0NPLElBSCtDOztBQUtyRCxVQUFLSCxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjs7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQVRxRDtBQVV0RDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0YsUUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtFLFNBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1FLGVBQWUsSUFBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7aUNBRVlGLFMsRUFBVztBQUN0QixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7NkJBRVFHLGEsRUFBZTtBQUN0QixVQUFNQyxPQUFPLEtBQUtOLFFBQWxCO0FBQUEsVUFBNEI7QUFDdEJPLGNBQVFGLGNBQWNHLFFBQWQsRUFEZDtBQUFBLFVBRU1DLE9BQU9kLGVBQWVXLElBQWYsRUFBcUJDLEtBQXJCLENBRmI7O0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7MEJBRUtKLGEsRUFBZUosWSxFQUFjO0FBQ2pDLFVBQUlTLE9BQU8sSUFBWDs7QUFFQSxVQUFNRCxPQUFPLEtBQUtFLFFBQUwsQ0FBY04sYUFBZCxDQUFiOztBQUVBLFVBQUlJLFNBQVMsSUFBYixFQUFtQjtBQUNqQlIsdUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQURpQixDQUNpQzs7QUFFbERTLGVBQU9ELEtBQUtHLEtBQUwsQ0FBV1AsYUFBWCxFQUEwQkosWUFBMUIsQ0FBUDtBQUNEOztBQUVELGFBQU9TLElBQVA7QUFDRDs7OzJDQUVzQkQsSSxFQUFNSixhLEVBQWVKLFksRUFBY1ksUSxFQUFVO0FBQ2xFLFVBQUlKLFNBQVMsSUFBYixFQUFtQjtBQUNqQlIsdUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQURpQixDQUNpQzs7QUFFbERRLGFBQUtLLGtCQUFMLENBQXdCVCxhQUF4QixFQUF1Q0osWUFBdkMsRUFBcURZLFFBQXJEO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsVUFBTUUsa0JBQWtCLEtBQUtiLFNBQUwsR0FDRUosZUFERixHQUVJLEVBRjVCO0FBQUEsVUFHTWtCLHFCQUFxQixLQUFLZixZQUFMLEdBQ0VKLGFBREYsR0FFSSxFQUwvQjtBQUFBLFVBTU1vQixjQUFZRCxrQkFBWixHQUFpQyxLQUFLaEIsUUFBdEMsR0FBaURlLGVBTnZEOztBQVFBLGFBQU9FLE1BQVA7QUFDRDs7OztFQXZFd0J6QixlOztBQTBFM0IwQixPQUFPQyxPQUFQLEdBQWlCcEIsWUFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvcnVsZScpLFxuICAgICAgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUgfSA9IHBhcnRUeXBlcyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSwgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkID0gZmFsc2UpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0TG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIGlzUnVsZU5hbWVQYXJ0KCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgc2V0TG9va0FoZWFkKGxvb2tBaGVhZCkge1xuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgZmluZFJ1bGUoY29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBydWxlcyA9IGNvbmZpZ3VyYXRpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoY29uZmlndXJhdGlvbik7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgICAgbm9kZSA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBjYWxsYmFjaykge1xuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgICBydWxlLnBhcnNlV2l0aExvb2tBaGVhZChjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWRTdHJpbmcgPSB0aGlzLmxvb2tBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfSR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFydDtcbiJdfQ==