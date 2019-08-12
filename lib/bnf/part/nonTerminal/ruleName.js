'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
    key: 'hasNoWhitespace',
    value: function hasNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'isLookAhead',
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }, {
    key: 'isRuleNamePart',
    value: function isRuleNamePart() {
      var ruleNamePart = true;

      return ruleNamePart;
    }
  }, {
    key: 'setNoWhitespace',
    value: function setNoWhitespace(noWhitespace) {
      this.noWhitespace = noWhitespace;
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
  }, {
    key: 'clone',
    value: function clone() {
      return _get(RuleNamePart.prototype.__proto__ || Object.getPrototypeOf(RuleNamePart.prototype), 'clone', this).call(this, RuleNamePart, this.ruleName, this.noWhitespace, this.lookAhead);
    }
  }]);

  return RuleNamePart;
}(NonTerminalPart);

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFydFR5cGVzIiwicnVsZVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsInNwZWNpYWxTeW1ib2xzIiwiZmluZFJ1bGVCeU5hbWUiLCJSdWxlTmFtZVBhcnRUeXBlIiwiTk9fV0hJVEVTUEFDRSIsImV4Y2xhbWF0aW9uTWFyayIsIlJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwidHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJub2RlIiwiZmluZFJ1bGUiLCJwYXJzZSIsImNhbGxiYWNrIiwicGFyc2VXaXRoTG9va0FoZWFkIiwibG9va0FoZWFkU3RyaW5nIiwibm9XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEseUJBQVIsQ0FEdEI7QUFBQSxJQUVNRyxrQkFBa0JILFFBQVEsd0JBQVIsQ0FGeEI7O0FBSU0sSUFBRUksY0FBRixHQUFxQkwsTUFBckIsQ0FBRUssY0FBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJILGFBRHJCLENBQ0VHLGNBREY7QUFBQSxJQUVFQyxnQkFGRixHQUV1QkwsU0FGdkIsQ0FFRUssZ0JBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR3FDSCxjQUhyQyxDQUdFRyxhQUhGO0FBQUEsSUFHaUJDLGVBSGpCLEdBR3FDSixjQUhyQyxDQUdpQkksZUFIakI7O0lBS0FDLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQXNCQyxZQUF0QixFQUF1RDtBQUFBLFFBQW5CQyxTQUFtQix1RUFBUCxLQUFPOztBQUFBOztBQUNyRCxRQUFNQyxPQUFPUCxnQkFBYixDQURxRCxDQUN0Qjs7QUFEc0IsNEhBRy9DTyxJQUgrQzs7QUFLckQsVUFBS0gsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFUcUQ7QUFVdEQ7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtGLFFBQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNRSxlQUFlLElBQXJCOztBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O29DQUVlSCxZLEVBQWM7QUFDNUIsV0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7O2lDQUVZQyxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzZCQUVRRyxhLEVBQWU7QUFDdEIsVUFBTUMsT0FBTyxLQUFLTixRQUFsQjtBQUFBLFVBQTRCO0FBQ3RCTyxjQUFRRixjQUFjRyxRQUFkLEVBRGQ7QUFBQSxVQUVNQyxPQUFPZCxlQUFlVyxJQUFmLEVBQXFCQyxLQUFyQixDQUZiOztBQUlBLGFBQU9FLElBQVA7QUFDRDs7OzBCQUVLSixhLEVBQWVKLFksRUFBYztBQUNqQyxVQUFJUyxPQUFPLElBQVg7O0FBRUEsVUFBTUQsT0FBTyxLQUFLRSxRQUFMLENBQWNOLGFBQWQsQ0FBYjs7QUFFQSxVQUFJSSxTQUFTLElBQWIsRUFBbUI7QUFDakJSLHVCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEaUIsQ0FDaUM7O0FBRWxEUyxlQUFPRCxLQUFLRyxLQUFMLENBQVdQLGFBQVgsRUFBMEJKLFlBQTFCLENBQVA7QUFDRDs7QUFFRCxhQUFPUyxJQUFQO0FBQ0Q7OzsyQ0FFc0JELEksRUFBTUosYSxFQUFlSixZLEVBQWNZLFEsRUFBVTtBQUNsRSxVQUFJSixTQUFTLElBQWIsRUFBbUI7QUFDakJSLHVCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEaUIsQ0FDaUM7O0FBRWxEUSxhQUFLSyxrQkFBTCxDQUF3QlQsYUFBeEIsRUFBdUNKLFlBQXZDLEVBQXFEWSxRQUFyRDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1FLGtCQUFrQixLQUFLYixTQUFMLEdBQ0VKLGVBREYsR0FFSSxFQUY1QjtBQUFBLFVBR01rQixxQkFBcUIsS0FBS2YsWUFBTCxHQUNFSixhQURGLEdBRUksRUFML0I7QUFBQSxVQU1Nb0IsY0FBWUQsa0JBQVosR0FBaUMsS0FBS2hCLFFBQXRDLEdBQWlEZSxlQU52RDs7QUFRQSxhQUFPRSxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLCtIQUFtQmxCLFlBQW5CLEVBQWlDLEtBQUtDLFFBQXRDLEVBQWdELEtBQUtDLFlBQXJELEVBQW1FLEtBQUtDLFNBQXhFO0FBQXFGOzs7O0VBakZ0RVQsZTs7QUFvRjNCeUIsT0FBT0MsT0FBUCxHQUFpQnBCLFlBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcGFydFR5cGVzID0gcmVxdWlyZSgnLi4vLi4vcGFydFR5cGVzJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBmaW5kUnVsZUJ5TmFtZSB9ID0gcnVsZVV0aWxpdGllcyxcbiAgICAgIHsgUnVsZU5hbWVQYXJ0VHlwZSB9ID0gcGFydFR5cGVzLFxuICAgICAgeyBOT19XSElURVNQQUNFLCBleGNsYW1hdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBSdWxlTmFtZVBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBoYXNOb1doaXRlc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzZXROb1doaXRlc3BhY2Uobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBzZXRMb29rQWhlYWQobG9va0FoZWFkKSB7XG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBmaW5kUnVsZShjb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gY29uZmlndXJhdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgICBub2RlID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2VSdWxlV2l0aExvb2tBaGVhZChydWxlLCBjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICAgIHJ1bGUucGFyc2VXaXRoTG9va0FoZWFkKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZFN0cmluZyA9IHRoaXMubG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9JHt0aGlzLnJ1bGVOYW1lfSR7bG9va0FoZWFkU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShSdWxlTmFtZVBhcnQsIHRoaXMucnVsZU5hbWUsIHRoaXMubm9XaGl0ZXNwYWNlLCB0aGlzLmxvb2tBaGVhZCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVBhcnQ7XG4iXX0=