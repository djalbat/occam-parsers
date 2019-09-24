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

  function RuleNamePart(ruleName) {
    var lookAhead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RuleNamePart);

    var type = RuleNamePartType; ///

    var _this = _possibleConstructorReturn(this, (RuleNamePart.__proto__ || Object.getPrototypeOf(RuleNamePart)).call(this, type));

    _this.ruleName = ruleName;

    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RuleNamePart, [{
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
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
    value: function parse(configuration) {
      var node = null;

      var rule = this.findRule(configuration);

      if (rule !== null) {
        node = rule.parse(configuration);
      }

      return node;
    }
  }, {
    key: 'parseRuleWithLookAhead',
    value: function parseRuleWithLookAhead(rule, configuration, callback) {
      if (rule !== null) {
        rule.parseWithLookAhead(configuration, callback);
      }
    }
  }, {
    key: 'asString',
    value: function asString() {
      var lookAheadString = this.lookAhead ? exclamationMark : '',
          string = '' + this.ruleName + lookAheadString;

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(RuleNamePart.prototype.__proto__ || Object.getPrototypeOf(RuleNamePart.prototype), 'clone', this).call(this, RuleNamePart, this.ruleName, this.lookAhead);
    }
  }]);

  return RuleNamePart;
}(NonTerminalPart);

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFydFR5cGVzIiwicnVsZVV0aWxpdGllcyIsIk5vblRlcm1pbmFsUGFydCIsInNwZWNpYWxTeW1ib2xzIiwiZmluZFJ1bGVCeU5hbWUiLCJSdWxlTmFtZVBhcnRUeXBlIiwiTk9fV0hJVEVTUEFDRSIsImV4Y2xhbWF0aW9uTWFyayIsIlJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwibG9va0FoZWFkIiwidHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJub2RlIiwiZmluZFJ1bGUiLCJwYXJzZSIsImNhbGxiYWNrIiwicGFyc2VXaXRoTG9va0FoZWFkIiwibG9va0FoZWFkU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLFlBQVlELFFBQVEsaUJBQVIsQ0FBbEI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEseUJBQVIsQ0FEdEI7QUFBQSxJQUVNRyxrQkFBa0JILFFBQVEsd0JBQVIsQ0FGeEI7O0FBSU0sSUFBRUksY0FBRixHQUFxQkwsTUFBckIsQ0FBRUssY0FBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJILGFBRHJCLENBQ0VHLGNBREY7QUFBQSxJQUVFQyxnQkFGRixHQUV1QkwsU0FGdkIsQ0FFRUssZ0JBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR3FDSCxjQUhyQyxDQUdFRyxhQUhGO0FBQUEsSUFHaUJDLGVBSGpCLEdBR3FDSixjQUhyQyxDQUdpQkksZUFIakI7O0lBS0FDLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQXlDO0FBQUEsUUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3ZDLFFBQU1DLE9BQU9OLGdCQUFiLENBRHVDLENBQ1I7O0FBRFEsNEhBR2pDTSxJQUhpQzs7QUFLdkMsVUFBS0YsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFQdUM7QUFReEM7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNRSxlQUFlLElBQXJCOztBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O2lDQUVZRixTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzZCQUVRRyxhLEVBQWU7QUFDdEIsVUFBTUMsT0FBTyxLQUFLTCxRQUFsQjtBQUFBLFVBQTRCO0FBQ3RCTSxjQUFRRixjQUFjRyxRQUFkLEVBRGQ7QUFBQSxVQUVNQyxPQUFPYixlQUFlVSxJQUFmLEVBQXFCQyxLQUFyQixDQUZiOztBQUlBLGFBQU9FLElBQVA7QUFDRDs7OzBCQUVLSixhLEVBQWU7QUFDbkIsVUFBSUssT0FBTyxJQUFYOztBQUVBLFVBQU1ELE9BQU8sS0FBS0UsUUFBTCxDQUFjTixhQUFkLENBQWI7O0FBRUEsVUFBSUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCQyxlQUFPRCxLQUFLRyxLQUFMLENBQVdQLGFBQVgsQ0FBUDtBQUNEOztBQUVELGFBQU9LLElBQVA7QUFDRDs7OzJDQUVzQkQsSSxFQUFNSixhLEVBQWVRLFEsRUFBVTtBQUNwRCxVQUFJSixTQUFTLElBQWIsRUFBbUI7QUFDakJBLGFBQUtLLGtCQUFMLENBQXdCVCxhQUF4QixFQUF1Q1EsUUFBdkM7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxVQUFNRSxrQkFBa0IsS0FBS2IsU0FBTCxHQUNFSCxlQURGLEdBRUksRUFGNUI7QUFBQSxVQUdNaUIsY0FBWSxLQUFLZixRQUFqQixHQUE0QmMsZUFIbEM7O0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSwrSEFBbUJoQixZQUFuQixFQUFpQyxLQUFLQyxRQUF0QyxFQUFnRCxLQUFLQyxTQUFyRDtBQUFrRTs7OztFQWhFbkRSLGU7O0FBbUUzQnVCLE9BQU9DLE9BQVAsR0FBaUJsQixZQUFqQiIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHBhcnRUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3BhcnRUeXBlcycpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUgfSA9IHBhcnRUeXBlcyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSwgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGxvb2tBaGVhZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdHlwZSA9IFJ1bGVOYW1lUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHNldExvb2tBaGVhZChsb29rQWhlYWQpIHtcbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBjb25maWd1cmF0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlQnlOYW1lKG5hbWUsIHJ1bGVzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgcnVsZS5wYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZFN0cmluZyA9IHRoaXMubG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJ1bGVOYW1lUGFydCwgdGhpcy5ydWxlTmFtZSwgdGhpcy5sb29rQWhlYWQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVQYXJ0O1xuIl19