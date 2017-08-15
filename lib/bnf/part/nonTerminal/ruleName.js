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
    key: 'isLeftRecursive',
    value: function isLeftRecursive(ruleName) {
      var leftRecursive = this.ruleName === ruleName;

      return leftRecursive;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxQYXJ0IiwicGFyc2VyVXRpbGl0aWVzIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIk5PX1dISVRFU1BBQ0UiLCJSdWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsIm5vV2hpdGVzcGFjZSIsInR5cGUiLCJsZWZ0UmVjdXJzaXZlIiwiY29uZmlndXJhdGlvbiIsIm5vZGVPck5vZGVzIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwiZmluZFJ1bGVCeU5hbWUiLCJwYXJzZSIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsa0JBQWtCRCxRQUFRLHdCQUFSLENBQXhCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLDJCQUFSLENBRHhCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLGFBRkYsR0FFb0JELGNBRnBCLENBRUVDLGFBRkY7O0lBSUFDLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQTRDO0FBQUEsUUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQUE7O0FBQzFDLFFBQU1DLE9BQU9ILGFBQWFHLElBQTFCOztBQUQwQyw0SEFHcENBLElBSG9DOztBQUsxQyxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBTjBDO0FBTzNDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OztvQ0FFZUEsUSxFQUFVO0FBQ3hCLFVBQU1HLGdCQUFpQixLQUFLSCxRQUFMLEtBQWtCQSxRQUF6Qzs7QUFFQSxhQUFPRyxhQUFQO0FBQ0Q7OzswQkFFS0MsYSxFQUFlSCxZLEVBQWM7QUFDakNBLHFCQUFlQSxnQkFBZ0IsS0FBS0EsWUFBcEMsQ0FEaUMsQ0FDaUI7O0FBRWxELFVBQUlJLGNBQWMsSUFBbEI7O0FBRUEsVUFBTUMsT0FBTyxLQUFLTixRQUFsQjtBQUFBLFVBQTRCO0FBQ3RCTyxjQUFRSCxjQUFjSSxRQUFkLEVBRGQ7QUFBQSxVQUVNQyxPQUFPZCxnQkFBZ0JlLGNBQWhCLENBQStCSixJQUEvQixFQUFxQ0MsS0FBckMsQ0FGYjs7QUFJQSxVQUFJRSxTQUFTLElBQWIsRUFBbUI7QUFDakJKLHNCQUFjSSxLQUFLRSxLQUFMLENBQVdQLGFBQVgsRUFBMEJILFlBQTFCLENBQWQ7QUFDRDs7QUFFRCxhQUFPSSxXQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1PLHFCQUFxQixLQUFLWCxZQUFMLEdBQ0VILGFBREYsR0FFSSxFQUYvQjtBQUFBLFVBR01lLGNBQVlELGtCQUFaLEdBQWlDLEtBQUtaLFFBSDVDOztBQUtBLGFBQU9hLE1BQVA7QUFDRDs7OztFQTNDd0JuQixlOztBQThDM0JLLGFBQWFHLElBQWIsR0FBb0IsVUFBcEI7O0FBRUFZLE9BQU9DLE9BQVAsR0FBaUJoQixZQUFqQiIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IE5vblRlcm1pbmFsUGFydCA9IHJlcXVpcmUoJy4uLy4uL3BhcnQvbm9uVGVybWluYWwnKSxcbiAgICAgIHBhcnNlclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBSdWxlTmFtZVBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgbm9XaGl0ZXNwYWNlID0gZmFsc2UpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0LnR5cGU7XG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cbiAgXG4gIGlzTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSAodGhpcy5ydWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBwYXJzZShjb25maWd1cmF0aW9uLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBuYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBjb25maWd1cmF0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHBhcnNlclV0aWxpdGllcy5maW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlU3RyaW5nID0gdGhpcy5ub1doaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9fV0hJVEVTUEFDRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ30ke3RoaXMucnVsZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuUnVsZU5hbWVQYXJ0LnR5cGUgPSAnUnVsZU5hbWUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFydDtcbiJdfQ==