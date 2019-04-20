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

  function RuleNamePart(ruleName, lookAhead, noWhitespace) {
    _classCallCheck(this, RuleNamePart);

    var _this = _possibleConstructorReturn(this, (RuleNamePart.__proto__ || Object.getPrototypeOf(RuleNamePart)).call(this, type));

    _this.ruleName = ruleName;
    _this.lookAhead = lookAhead;
    _this.noWhitespace = noWhitespace;
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
    value: function parseWithLookAhead(configuration, noWhitespace, callback) {
      var rule = this.findRule(configuration);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicnVsZVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJmaW5kUnVsZUJ5TmFtZSIsIk5PX1dISVRFU1BBQ0UiLCJleGNsYW1hdGlvbk1hcmsiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJub1doaXRlc3BhY2UiLCJydWxlTmFtZVBhcnQiLCJjb25maWd1cmF0aW9uIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwibm9kZSIsImZpbmRSdWxlIiwicGFyc2UiLCJjYWxsYmFjayIsInBhcnNlV2l0aExvb2tBaGVhZCIsImxvb2tBaGVhZFN0cmluZyIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLHlCQUFSLENBQXRCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLHdCQUFSLENBRHhCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLGNBRkYsR0FFcUJKLGFBRnJCLENBRUVJLGNBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR3FDRixjQUhyQyxDQUdFRSxhQUhGO0FBQUEsSUFHaUJDLGVBSGpCLEdBR3FDSCxjQUhyQyxDQUdpQkcsZUFIakI7OztBQUtOLElBQU1DLE9BQU8sVUFBYjs7SUFFTUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBc0JDLFNBQXRCLEVBQWlDQyxZQUFqQyxFQUErQztBQUFBOztBQUFBLDRIQUN2Q0osSUFEdUM7O0FBRzdDLFVBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUw2QztBQU05Qzs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0YsUUFBWjtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1FLGVBQWUsSUFBckI7O0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7NkJBRVFDLGEsRUFBZTtBQUN0QixVQUFNQyxPQUFPLEtBQUtMLFFBQWxCO0FBQUEsVUFBNEI7QUFDdEJNLGNBQVFGLGNBQWNHLFFBQWQsRUFEZDtBQUFBLFVBRU1DLE9BQU9iLGVBQWVVLElBQWYsRUFBcUJDLEtBQXJCLENBRmI7O0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7MEJBRUtKLGEsRUFBZUYsWSxFQUFjO0FBQ2pDLFVBQUlPLE9BQU8sSUFBWDs7QUFFQSxVQUFNRCxPQUFPLEtBQUtFLFFBQUwsQ0FBY04sYUFBZCxDQUFiOztBQUVBLFVBQUlJLFNBQVMsSUFBYixFQUFtQjtBQUNqQk4sdUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQURpQixDQUNpQzs7QUFFbERPLGVBQU9ELEtBQUtHLEtBQUwsQ0FBV1AsYUFBWCxFQUEwQkYsWUFBMUIsQ0FBUDtBQUNEOztBQUVELGFBQU9PLElBQVA7QUFDRDs7O3VDQUVrQkwsYSxFQUFlRixZLEVBQWNVLFEsRUFBVTtBQUN4RCxVQUFNSixPQUFPLEtBQUtFLFFBQUwsQ0FBY04sYUFBZCxDQUFiOztBQUVBLFVBQUlJLFNBQVMsSUFBYixFQUFtQjtBQUNqQk4sdUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQURpQixDQUNpQzs7QUFFbERNLGFBQUtLLGtCQUFMLENBQXdCVCxhQUF4QixFQUF1Q0YsWUFBdkMsRUFBcURVLFFBQXJEO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsVUFBTUUsa0JBQWtCLEtBQUtiLFNBQUwsR0FDRUosZUFERixHQUVJLEVBRjVCO0FBQUEsVUFHTWtCLHFCQUFxQixLQUFLYixZQUFMLEdBQ0VOLGFBREYsR0FFSSxFQUwvQjtBQUFBLFVBTU1vQixjQUFZRCxrQkFBWixHQUFpQyxLQUFLZixRQUF0QyxHQUFpRGMsZUFOdkQ7O0FBUUEsYUFBT0UsTUFBUDtBQUNEOzs7O0VBakV3QnhCLGU7O0FBb0UzQnlCLE9BQU9DLE1BQVAsQ0FBY25CLFlBQWQsRUFBNEI7QUFDMUJEO0FBRDBCLENBQTVCOztBQUlBcUIsT0FBT0MsT0FBUCxHQUFpQnJCLFlBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBmaW5kUnVsZUJ5TmFtZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSwgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY29uc3QgdHlwZSA9ICdSdWxlTmFtZSc7XG5cbmNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBsb29rQWhlYWQsIG5vV2hpdGVzcGFjZSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldExvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIGZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBjb25maWd1cmF0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlQnlOYW1lKG5hbWUsIHJ1bGVzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICAgIG5vZGUgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICAgIHJ1bGUucGFyc2VXaXRoTG9va0FoZWFkKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZFN0cmluZyA9IHRoaXMubG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9JHt0aGlzLnJ1bGVOYW1lfSR7bG9va0FoZWFkU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUnVsZU5hbWVQYXJ0LCB7XG4gIHR5cGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFydDtcbiJdfQ==