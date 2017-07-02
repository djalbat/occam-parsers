'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../bnf/definition'),
    RuleNamePart = require('../../bnf/part/ruleName');

var UnitDefinition = function (_Definition) {
  _inherits(UnitDefinition, _Definition);

  function UnitDefinition() {
    _classCallCheck(this, UnitDefinition);

    return _possibleConstructorReturn(this, (UnitDefinition.__proto__ || Object.getPrototypeOf(UnitDefinition)).apply(this, arguments));
  }

  _createClass(UnitDefinition, [{
    key: 'getRuleName',
    value: function getRuleName() {
      var firstPart = this.getFirstPart(),
          ruleNamePart = firstPart,
          ///
      ruleName = ruleNamePart.getRuleName();

      return ruleName;
    }
  }, {
    key: 'isIncludedInRuleNames',
    value: function isIncludedInRuleNames(ruleNames) {
      var ruleName = this.getRuleName(),
          includedInRuleNames = ruleNames.includes(ruleName);

      return includedInRuleNames;
    }
  }], [{
    key: 'fromRuleName',
    value: function fromRuleName(ruleName) {
      var noWhitespace = false,
          ///
      ruleNamePart = new RuleNamePart(ruleName, noWhitespace),
          parts = [ruleNamePart],
          unitDefinition = new UnitDefinition(parts);

      return unitDefinition;
    }
  }, {
    key: 'fromDefinition',
    value: function fromDefinition(definition) {
      var unitDefinition = null;

      var partsLength = definition.getPartsLength();

      if (partsLength === 1) {
        var firstPartRuleNamePart = definition.isFirstPartRuleNamePart();

        if (firstPartRuleNamePart) {
          var parts = definition.getParts();

          unitDefinition = new UnitDefinition(parts);
        }
      }

      return unitDefinition;
    }
  }]);

  return UnitDefinition;
}(Definition);

module.exports = UnitDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vdW5pdC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFydCIsIlVuaXREZWZpbml0aW9uIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lcyIsImluY2x1ZGVkSW5SdWxlTmFtZXMiLCJpbmNsdWRlcyIsIm5vV2hpdGVzcGFjZSIsInBhcnRzIiwidW5pdERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicGFydHNMZW5ndGgiLCJnZXRQYXJ0c0xlbmd0aCIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsc0JBQVIsQ0FBbkI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLHlCQUFSLENBRHJCOztJQUdNRSxjOzs7Ozs7Ozs7OztrQ0FDVTtBQUNaLFVBQU1DLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLGVBQWVGLFNBRHJCO0FBQUEsVUFDZ0M7QUFDMUJHLGlCQUFXRCxhQUFhRSxXQUFiLEVBRmpCOztBQUlBLGFBQU9ELFFBQVA7QUFDRDs7OzBDQUVxQkUsUyxFQUFXO0FBQy9CLFVBQU1GLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01FLHNCQUFzQkQsVUFBVUUsUUFBVixDQUFtQkosUUFBbkIsQ0FENUI7O0FBR0EsYUFBT0csbUJBQVA7QUFDRDs7O2lDQUVtQkgsUSxFQUFVO0FBQzVCLFVBQU1LLGVBQWUsS0FBckI7QUFBQSxVQUE0QjtBQUN0Qk4scUJBQWUsSUFBSUosWUFBSixDQUFpQkssUUFBakIsRUFBMkJLLFlBQTNCLENBRHJCO0FBQUEsVUFFTUMsUUFBUSxDQUNOUCxZQURNLENBRmQ7QUFBQSxVQUtNUSxpQkFBaUIsSUFBSVgsY0FBSixDQUFtQlUsS0FBbkIsQ0FMdkI7O0FBT0EsYUFBT0MsY0FBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBSUQsaUJBQWlCLElBQXJCOztBQUVBLFVBQU1FLGNBQWNELFdBQVdFLGNBQVgsRUFBcEI7O0FBRUEsVUFBSUQsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLFlBQU1FLHdCQUF3QkgsV0FBV0ksdUJBQVgsRUFBOUI7O0FBRUEsWUFBSUQscUJBQUosRUFBMkI7QUFDekIsY0FBTUwsUUFBUUUsV0FBV0ssUUFBWCxFQUFkOztBQUVBTiwyQkFBaUIsSUFBSVgsY0FBSixDQUFtQlUsS0FBbkIsQ0FBakI7QUFDRDtBQUNGOztBQUVELGFBQU9DLGNBQVA7QUFDRDs7OztFQTNDMEJkLFU7O0FBOEM3QnFCLE9BQU9DLE9BQVAsR0FBaUJuQixjQUFqQiIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vYm5mL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJ0L3J1bGVOYW1lJyk7XG5cbmNsYXNzIFVuaXREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJblJ1bGVOYW1lcyhydWxlTmFtZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlZEluUnVsZU5hbWVzID0gcnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBpbmNsdWRlZEluUnVsZU5hbWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICB1bml0RGVmaW5pdGlvbiA9IG5ldyBVbml0RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gdW5pdERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGxldCB1bml0RGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IGRlZmluaXRpb24uZ2V0UGFydHNMZW5ndGgoKTtcblxuICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gZGVmaW5pdGlvbi5pc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHVuaXREZWZpbml0aW9uID0gbmV3IFVuaXREZWZpbml0aW9uKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdERlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0RGVmaW5pdGlvbjtcbiJdfQ==