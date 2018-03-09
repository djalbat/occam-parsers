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

  function RuleNamePart(ruleName) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxQYXJ0IiwicnVsZVV0aWxpdGllcyIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiZmluZFJ1bGVCeU5hbWUiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJjb25maWd1cmF0aW9uIiwibm9kZU9yTm9kZXMiLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJwYXJzZSIsIm5vV2hpdGVzcGFjZVN0cmluZyIsInN0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsa0JBQWtCRCxRQUFRLHdCQUFSLENBQXhCO0FBQUEsSUFDTUUsZ0JBQWdCRixRQUFRLHlCQUFSLENBRHRCOztBQUdNLElBQUVHLFFBQUYsR0FBZUosTUFBZixDQUFFSSxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLGFBRkYsR0FFb0JELGNBRnBCLENBRUVDLGFBRkY7QUFBQSxJQUdFQyxjQUhGLEdBR3FCSixhQUhyQixDQUdFSSxjQUhGOzs7QUFLTixJQUFNQyxPQUFPLFVBQWI7O0lBRU1DLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQTRDO0FBQUEsUUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQUE7O0FBQUEsNEhBQ3BDSCxJQURvQzs7QUFHMUMsVUFBS0UsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFMMEM7QUFNM0M7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7OzBCQUVLRSxhLEVBQWVELFksRUFBYztBQUNqQ0EscUJBQWVBLGdCQUFnQixLQUFLQSxZQUFwQyxDQURpQyxDQUNpQjs7QUFFbEQsVUFBSUUsY0FBYyxJQUFsQjs7QUFFQSxVQUFNQyxPQUFPLEtBQUtKLFFBQWxCO0FBQUEsVUFBNEI7QUFDdEJLLGNBQVFILGNBQWNJLFFBQWQsRUFEZDtBQUFBLFVBRU1DLE9BQU9WLGVBQWVPLElBQWYsRUFBcUJDLEtBQXJCLENBRmI7O0FBSUEsVUFBSUUsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCSixzQkFBY0ksS0FBS0MsS0FBTCxDQUFXTixhQUFYLEVBQTBCRCxZQUExQixDQUFkO0FBQ0Q7O0FBRUQsYUFBT0UsV0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTSxxQkFBcUIsS0FBS1IsWUFBTCxHQUNFTCxhQURGLEdBRUksRUFGL0I7QUFBQSxVQUdNYyxjQUFZRCxrQkFBWixHQUFpQyxLQUFLVCxRQUg1Qzs7QUFLQSxhQUFPVSxNQUFQO0FBQ0Q7Ozs7RUFwQ3dCbEIsZTs7QUF1QzNCbUIsT0FBT0MsTUFBUCxDQUFjYixZQUFkLEVBQTRCO0FBQzFCRCxRQUFNQTtBQURvQixDQUE1Qjs7QUFJQWUsT0FBT0MsT0FBUCxHQUFpQmYsWUFBakIiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGUnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBmaW5kUnVsZUJ5TmFtZSB9ID0gcnVsZVV0aWxpdGllcztcblxuY29uc3QgdHlwZSA9ICdSdWxlTmFtZSc7XG5cbmNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIFxuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuICBcbiAgcGFyc2UoY29uZmlndXJhdGlvbiwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHRoaXMucnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gY29uZmlndXJhdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24sIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlU3RyaW5nID0gdGhpcy5ub1doaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9fV0hJVEVTUEFDRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ30ke3RoaXMucnVsZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSdWxlTmFtZVBhcnQsIHtcbiAgdHlwZTogdHlwZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVQYXJ0O1xuIl19