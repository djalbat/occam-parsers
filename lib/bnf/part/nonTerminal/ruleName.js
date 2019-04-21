'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var partTypes = require('../../partTypes'),
    ruleUtilities = require('../../../utilities/rule'),
    NonTerminalPart = require('../../part/nonTerminal');

var specialSymbols = lexers.specialSymbols,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFydFR5cGVzIiwicnVsZVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsInNwZWNpYWxTeW1ib2xzIiwiZmluZFJ1bGVCeU5hbWUiLCJSdWxlTmFtZVBhcnRUeXBlIiwiTk9fV0hJVEVTUEFDRSIsImV4Y2xhbWF0aW9uTWFyayIsIlJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwidHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJub2RlIiwiZmluZFJ1bGUiLCJwYXJzZSIsImNhbGxiYWNrIiwicGFyc2VXaXRoTG9va0FoZWFkIiwibG9va0FoZWFkU3RyaW5nIiwibm9XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLHlCQUFSLENBRHRCO0FBQUEsSUFFTUcsa0JBQWtCSCxRQUFRLHdCQUFSLENBRnhCOztBQUlNLElBQUVJLGNBQUYsR0FBcUJMLE1BQXJCLENBQUVLLGNBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCSCxhQURyQixDQUNFRyxjQURGO0FBQUEsSUFFRUMsZ0JBRkYsR0FFdUJMLFNBRnZCLENBRUVLLGdCQUZGO0FBQUEsSUFHRUMsYUFIRixHQUdxQ0gsY0FIckMsQ0FHRUcsYUFIRjtBQUFBLElBR2lCQyxlQUhqQixHQUdxQ0osY0FIckMsQ0FHaUJJLGVBSGpCOztJQUtBQyxZOzs7QUFDSix3QkFBWUMsUUFBWixFQUFzQkMsWUFBdEIsRUFBdUQ7QUFBQSxRQUFuQkMsU0FBbUIsdUVBQVAsS0FBTzs7QUFBQTs7QUFDckQsUUFBTUMsT0FBT1AsZ0JBQWIsQ0FEcUQsQ0FDdEI7O0FBRHNCLDRIQUcvQ08sSUFIK0M7O0FBS3JELFVBQUtILFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBVHFEO0FBVXREOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRixRQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0UsU0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUUsZUFBZSxJQUFyQjs7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OztpQ0FFWUYsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs2QkFFUUcsYSxFQUFlO0FBQ3RCLFVBQU1DLE9BQU8sS0FBS04sUUFBbEI7QUFBQSxVQUE0QjtBQUN0Qk8sY0FBUUYsY0FBY0csUUFBZCxFQURkO0FBQUEsVUFFTUMsT0FBT2QsZUFBZVcsSUFBZixFQUFxQkMsS0FBckIsQ0FGYjs7QUFJQSxhQUFPRSxJQUFQO0FBQ0Q7OzswQkFFS0osYSxFQUFlSixZLEVBQWM7QUFDakMsVUFBSVMsT0FBTyxJQUFYOztBQUVBLFVBQU1ELE9BQU8sS0FBS0UsUUFBTCxDQUFjTixhQUFkLENBQWI7O0FBRUEsVUFBSUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCUix1QkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlCLENBQ2lDOztBQUVsRFMsZUFBT0QsS0FBS0csS0FBTCxDQUFXUCxhQUFYLEVBQTBCSixZQUExQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT1MsSUFBUDtBQUNEOzs7MkNBRXNCRCxJLEVBQU1KLGEsRUFBZUosWSxFQUFjWSxRLEVBQVU7QUFDbEUsVUFBSUosU0FBUyxJQUFiLEVBQW1CO0FBQ2pCUix1QkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlCLENBQ2lDOztBQUVsRFEsYUFBS0ssa0JBQUwsQ0FBd0JULGFBQXhCLEVBQXVDSixZQUF2QyxFQUFxRFksUUFBckQ7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxVQUFNRSxrQkFBa0IsS0FBS2IsU0FBTCxHQUNFSixlQURGLEdBRUksRUFGNUI7QUFBQSxVQUdNa0IscUJBQXFCLEtBQUtmLFlBQUwsR0FDRUosYUFERixHQUVJLEVBTC9CO0FBQUEsVUFNTW9CLGNBQVlELGtCQUFaLEdBQWlDLEtBQUtoQixRQUF0QyxHQUFpRGUsZUFOdkQ7O0FBUUEsYUFBT0UsTUFBUDtBQUNEOzs7O0VBdkV3QnhCLGU7O0FBMEUzQnlCLE9BQU9DLE9BQVAsR0FBaUJwQixZQUFqQiIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHBhcnRUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3BhcnRUeXBlcycpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUgfSA9IHBhcnRUeXBlcyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSwgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkID0gZmFsc2UpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0TG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIGlzUnVsZU5hbWVQYXJ0KCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgc2V0TG9va0FoZWFkKGxvb2tBaGVhZCkge1xuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgZmluZFJ1bGUoY29uZmlndXJhdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBydWxlcyA9IGNvbmZpZ3VyYXRpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoY29uZmlndXJhdGlvbik7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgICAgbm9kZSA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlLCBjYWxsYmFjaykge1xuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgICBydWxlLnBhcnNlV2l0aExvb2tBaGVhZChjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWRTdHJpbmcgPSB0aGlzLmxvb2tBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfSR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFydDtcbiJdfQ==