'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var NonTerminalPart = require('../../part/nonTerminal'),
    parserUtilities = require('../../../utilities/parser');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE,
    findRuleByName = parserUtilities.findRuleByName;

var RuleNamePart = function (_NonTerminalPart) {
  _inherits(RuleNamePart, _NonTerminalPart);

  function RuleNamePart(ruleName) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RuleNamePart);

    var type = RuleNamePart.type;

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

RuleNamePart.type = 'RuleName';

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxQYXJ0IiwicGFyc2VyVXRpbGl0aWVzIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJmaW5kUnVsZUJ5TmFtZSIsIlJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlIiwidHlwZSIsImNvbmZpZ3VyYXRpb24iLCJub2RlT3JOb2RlcyIsIm5hbWUiLCJydWxlcyIsImdldFJ1bGVzIiwicnVsZSIsInBhcnNlIiwibm9XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxrQkFBa0JELFFBQVEsd0JBQVIsQ0FBeEI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FEeEI7O0FBR00sSUFBRUcsUUFBRixHQUFlSixNQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjtBQUFBLElBR0VDLGNBSEYsR0FHcUJKLGVBSHJCLENBR0VJLGNBSEY7O0lBS0FDLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQTRDO0FBQUEsUUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQUE7O0FBQzFDLFFBQU1DLE9BQU9ILGFBQWFHLElBQTFCOztBQUQwQyw0SEFHcENBLElBSG9DOztBQUsxQyxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxVQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQVAwQztBQVEzQzs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7MEJBRUtHLGEsRUFBZUYsWSxFQUFjO0FBQ2pDQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRGlDLENBQ2lCOztBQUVsRCxVQUFJRyxjQUFjLElBQWxCOztBQUVBLFVBQU1DLE9BQU8sS0FBS0wsUUFBbEI7QUFBQSxVQUE0QjtBQUN0Qk0sY0FBUUgsY0FBY0ksUUFBZCxFQURkO0FBQUEsVUFFTUMsT0FBT1YsZUFBZU8sSUFBZixFQUFxQkMsS0FBckIsQ0FGYjs7QUFJQSxVQUFJRSxTQUFTLElBQWIsRUFBbUI7QUFDakJKLHNCQUFjSSxLQUFLQyxLQUFMLENBQVdOLGFBQVgsRUFBMEJGLFlBQTFCLENBQWQ7QUFDRDs7QUFFRCxhQUFPRyxXQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1NLHFCQUFxQixLQUFLVCxZQUFMLEdBQ0VKLGFBREYsR0FFSSxFQUYvQjtBQUFBLFVBR01jLGNBQVlELGtCQUFaLEdBQWlDLEtBQUtWLFFBSDVDOztBQUtBLGFBQU9XLE1BQVA7QUFDRDs7OztFQXRDd0JsQixlOztBQXlDM0JNLGFBQWFHLElBQWIsR0FBb0IsVUFBcEI7O0FBRUFVLE9BQU9DLE9BQVAsR0FBaUJkLFlBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgTm9uVGVybWluYWxQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vcGFydC9ub25UZXJtaW5hbCcpLFxuICAgICAgcGFyc2VyVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IGZpbmRSdWxlQnlOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnQudHlwZTtcblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIFxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gY29uZmlndXJhdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlU3RyaW5nID0gdGhpcy5ub1doaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9fV0hJVEVTUEFDRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ30ke3RoaXMucnVsZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuUnVsZU5hbWVQYXJ0LnR5cGUgPSAnUnVsZU5hbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFydDtcbiJdfQ==