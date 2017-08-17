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
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

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
          rule = parserUtilities.findRuleByName(name, rules);

      if (rule !== null) {
        nodeOrNodes = rule.parse(configuration, noWhitespace);
      }

      return nodeOrNodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + this.ruleName;

      return string;
    }
  }]);

  return RuleNamePart;
}(NonTerminalPart);

RuleNamePart.type = 'RuleName';

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxQYXJ0IiwicGFyc2VyVXRpbGl0aWVzIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJSdWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsIm5vV2hpdGVzcGFjZSIsInR5cGUiLCJjb25maWd1cmF0aW9uIiwibm9kZU9yTm9kZXMiLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJmaW5kUnVsZUJ5TmFtZSIsInBhcnNlIiwibm9XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxrQkFBa0JELFFBQVEsd0JBQVIsQ0FBeEI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FEeEI7O0FBR00sSUFBRUcsUUFBRixHQUFlSixNQUFmLENBQUVJLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjs7SUFJQUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBNEM7QUFBQSxRQUF0QkMsWUFBc0IsdUVBQVAsS0FBTzs7QUFBQTs7QUFDMUMsUUFBTUMsT0FBT0gsYUFBYUcsSUFBMUI7O0FBRDBDLDRIQUdwQ0EsSUFIb0M7O0FBSzFDLFVBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFOMEM7QUFPM0M7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7OzBCQUVLRyxhLEVBQWVGLFksRUFBYztBQUNqQ0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQURpQyxDQUNpQjs7QUFFbEQsVUFBSUcsY0FBYyxJQUFsQjs7QUFFQSxVQUFNQyxPQUFPLEtBQUtMLFFBQWxCO0FBQUEsVUFBNEI7QUFDdEJNLGNBQVFILGNBQWNJLFFBQWQsRUFEZDtBQUFBLFVBRU1DLE9BQU9iLGdCQUFnQmMsY0FBaEIsQ0FBK0JKLElBQS9CLEVBQXFDQyxLQUFyQyxDQUZiOztBQUlBLFVBQUlFLFNBQVMsSUFBYixFQUFtQjtBQUNqQkosc0JBQWNJLEtBQUtFLEtBQUwsQ0FBV1AsYUFBWCxFQUEwQkYsWUFBMUIsQ0FBZDtBQUNEOztBQUVELGFBQU9HLFdBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTU8scUJBQXFCLEtBQUtWLFlBQUwsR0FDRUgsYUFERixHQUVJLEVBRi9CO0FBQUEsVUFHTWMsY0FBWUQsa0JBQVosR0FBaUMsS0FBS1gsUUFINUM7O0FBS0EsYUFBT1ksTUFBUDtBQUNEOzs7O0VBckN3QmxCLGU7O0FBd0MzQkssYUFBYUcsSUFBYixHQUFvQixVQUFwQjs7QUFFQVcsT0FBT0MsT0FBUCxHQUFpQmYsWUFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyksXG4gICAgICBwYXJzZXJVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsaXRpZXMvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIG5vV2hpdGVzcGFjZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgdHlwZSA9IFJ1bGVOYW1lUGFydC50eXBlO1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG4gIFxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBuYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBjb25maWd1cmF0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHBhcnNlclV0aWxpdGllcy5maW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlU3RyaW5nID0gdGhpcy5ub1doaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9fV0hJVEVTUEFDRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ30ke3RoaXMucnVsZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuUnVsZU5hbWVQYXJ0LnR5cGUgPSAnUnVsZU5hbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFydDtcbiJdfQ==