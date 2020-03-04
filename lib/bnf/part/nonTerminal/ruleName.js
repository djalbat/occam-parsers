'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require('occam-lexers');

var partTypes = require('../../partTypes'),
    ruleUtilities = require('../../../utilities/rule'),
    NonTerminalPart = require('../../part/nonTerminal');

var specialSymbols = lexers.specialSymbols,
    findRuleByName = ruleUtilities.findRuleByName,
    exclamationMark = specialSymbols.exclamationMark,
    RuleNamePartType = partTypes.RuleNamePartType;

var RuleNamePart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(RuleNamePart, _NonTerminalPart);

  function RuleNamePart(ruleName) {
    var _this;

    var lookAhead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RuleNamePart);

    var type = RuleNamePartType; ///

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RuleNamePart).call(this, type));
    _this.ruleName = ruleName;
    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RuleNamePart, [{
    key: "getRuleName",
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: "isLookAhead",
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }, {
    key: "isRuleNamePart",
    value: function isRuleNamePart() {
      var ruleNamePart = true;
      return ruleNamePart;
    }
  }, {
    key: "setLookAhead",
    value: function setLookAhead(lookAhead) {
      this.lookAhead = lookAhead;
    }
  }, {
    key: "findRule",
    value: function findRule(configuration) {
      var name = this.ruleName,
          ///
      rules = configuration.getRules(),
          rule = findRuleByName(name, rules);
      return rule;
    }
  }, {
    key: "parse",
    value: function parse(configuration) {
      var node = null;
      var rule = this.findRule(configuration);

      if (rule !== null) {
        node = rule.parse(configuration);
      }

      return node;
    }
  }, {
    key: "parseRuleWithLookAhead",
    value: function parseRuleWithLookAhead(rule, configuration, callback) {
      if (rule !== null) {
        rule.parseWithLookAhead(configuration, callback);
      }
    }
  }, {
    key: "asString",
    value: function asString() {
      var lookAheadString = this.lookAhead ? exclamationMark : '',
          string = "".concat(this.ruleName).concat(lookAheadString);
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(RuleNamePart.prototype), "clone", this).call(this, RuleNamePart, this.ruleName, this.lookAhead);
    }
  }]);

  return RuleNamePart;
}(NonTerminalPart);

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJwYXJ0VHlwZXMiLCJydWxlVXRpbGl0aWVzIiwiTm9uVGVybWluYWxQYXJ0Iiwic3BlY2lhbFN5bWJvbHMiLCJmaW5kUnVsZUJ5TmFtZSIsImV4Y2xhbWF0aW9uTWFyayIsIlJ1bGVOYW1lUGFydFR5cGUiLCJSdWxlTmFtZVBhcnQiLCJydWxlTmFtZSIsImxvb2tBaGVhZCIsInR5cGUiLCJydWxlTmFtZVBhcnQiLCJjb25maWd1cmF0aW9uIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwibm9kZSIsImZpbmRSdWxlIiwicGFyc2UiLCJjYWxsYmFjayIsInBhcnNlV2l0aExvb2tBaGVhZCIsImxvb2tBaGVhZFN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGlCQUFELENBQXpCO0FBQUEsSUFDTUUsYUFBYSxHQUFHRixPQUFPLENBQUMseUJBQUQsQ0FEN0I7QUFBQSxJQUVNRyxlQUFlLEdBQUdILE9BQU8sQ0FBQyx3QkFBRCxDQUYvQjs7QUFJTSxJQUFFSSxjQUFGLEdBQXFCTCxNQUFyQixDQUFFSyxjQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkgsYUFEckIsQ0FDRUcsY0FERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JGLGNBRnRCLENBRUVFLGVBRkY7QUFBQSxJQUdFQyxnQkFIRixHQUd1Qk4sU0FIdkIsQ0FHRU0sZ0JBSEY7O0lBS0FDLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQXlDO0FBQUE7O0FBQUEsUUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3ZDLFFBQU1DLElBQUksR0FBR0osZ0JBQWIsQ0FEdUMsQ0FDUjs7QUFFL0Isc0ZBQU1JLElBQU47QUFFQSxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBUHVDO0FBUXhDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUUsWUFBWSxHQUFHLElBQXJCO0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7aUNBRVlGLFMsRUFBVztBQUN0QixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7NkJBRVFHLGEsRUFBZTtBQUN0QixVQUFNQyxJQUFJLEdBQUcsS0FBS0wsUUFBbEI7QUFBQSxVQUE0QjtBQUN0Qk0sTUFBQUEsS0FBSyxHQUFHRixhQUFhLENBQUNHLFFBQWQsRUFEZDtBQUFBLFVBRU1DLElBQUksR0FBR1osY0FBYyxDQUFDUyxJQUFELEVBQU9DLEtBQVAsQ0FGM0I7QUFJQSxhQUFPRSxJQUFQO0FBQ0Q7OzswQkFFS0osYSxFQUFlO0FBQ25CLFVBQUlLLElBQUksR0FBRyxJQUFYO0FBRUEsVUFBTUQsSUFBSSxHQUFHLEtBQUtFLFFBQUwsQ0FBY04sYUFBZCxDQUFiOztBQUVBLFVBQUlJLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCQyxRQUFBQSxJQUFJLEdBQUdELElBQUksQ0FBQ0csS0FBTCxDQUFXUCxhQUFYLENBQVA7QUFDRDs7QUFFRCxhQUFPSyxJQUFQO0FBQ0Q7OzsyQ0FFc0JELEksRUFBTUosYSxFQUFlUSxRLEVBQVU7QUFDcEQsVUFBSUosSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJBLFFBQUFBLElBQUksQ0FBQ0ssa0JBQUwsQ0FBd0JULGFBQXhCLEVBQXVDUSxRQUF2QztBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1FLGVBQWUsR0FBRyxLQUFLYixTQUFMLEdBQ0VKLGVBREYsR0FFSSxFQUY1QjtBQUFBLFVBR01rQixNQUFNLGFBQU0sS0FBS2YsUUFBWCxTQUFzQmMsZUFBdEIsQ0FIWjtBQUtBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUscUZBQW1CaEIsWUFBbkIsRUFBaUMsS0FBS0MsUUFBdEMsRUFBZ0QsS0FBS0MsU0FBckQ7QUFBa0U7Ozs7RUFoRW5EUCxlOztBQW1FM0JzQixNQUFNLENBQUNDLE9BQVAsR0FBaUJsQixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHBhcnRUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3BhcnRUeXBlcycpLFxuICAgICAgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgZmluZFJ1bGVCeU5hbWUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGxvb2tBaGVhZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdHlwZSA9IFJ1bGVOYW1lUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHNldExvb2tBaGVhZChsb29rQWhlYWQpIHtcbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBjb25maWd1cmF0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlQnlOYW1lKG5hbWUsIHJ1bGVzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgcnVsZS5wYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZFN0cmluZyA9IHRoaXMubG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJ1bGVOYW1lUGFydCwgdGhpcy5ydWxlTmFtZSwgdGhpcy5sb29rQWhlYWQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVQYXJ0O1xuIl19