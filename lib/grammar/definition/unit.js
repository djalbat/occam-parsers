'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../extendedBNF/definition'),
    RuleNamePart = require('../../extendedBNF/part/ruleName');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vdW5pdC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFydCIsIlVuaXREZWZpbml0aW9uIiwiZmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lcyIsImluY2x1ZGVkSW5SdWxlTmFtZXMiLCJpbmNsdWRlcyIsIm5vV2hpdGVzcGFjZSIsInBhcnRzIiwidW5pdERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicGFydHNMZW5ndGgiLCJnZXRQYXJ0c0xlbmd0aCIsImZpcnN0UGFydFJ1bGVOYW1lUGFydCIsImlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsOEJBQVIsQ0FBbkI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLGlDQUFSLENBRHJCOztJQUdNRSxjOzs7Ozs7Ozs7OztrQ0FDVTtBQUNaLFVBQU1DLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLFVBQ01DLGVBQWVGLFNBRHJCO0FBQUEsVUFDZ0M7QUFDMUJHLGlCQUFXRCxhQUFhRSxXQUFiLEVBRmpCOztBQUlBLGFBQU9ELFFBQVA7QUFDRDs7OzBDQUVxQkUsUyxFQUFXO0FBQy9CLFVBQU1GLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01FLHNCQUFzQkQsVUFBVUUsUUFBVixDQUFtQkosUUFBbkIsQ0FENUI7O0FBR0EsYUFBT0csbUJBQVA7QUFDRDs7O2lDQUVtQkgsUSxFQUFVO0FBQzVCLFVBQU1LLGVBQWUsS0FBckI7QUFBQSxVQUE0QjtBQUN0Qk4scUJBQWUsSUFBSUosWUFBSixDQUFpQkssUUFBakIsRUFBMkJLLFlBQTNCLENBRHJCO0FBQUEsVUFFTUMsUUFBUSxDQUNOUCxZQURNLENBRmQ7QUFBQSxVQUtNUSxpQkFBaUIsSUFBSVgsY0FBSixDQUFtQlUsS0FBbkIsQ0FMdkI7O0FBT0EsYUFBT0MsY0FBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBSUQsaUJBQWlCLElBQXJCOztBQUVBLFVBQU1FLGNBQWNELFdBQVdFLGNBQVgsRUFBcEI7O0FBRUEsVUFBSUQsZ0JBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLFlBQU1FLHdCQUF3QkgsV0FBV0ksdUJBQVgsRUFBOUI7O0FBRUEsWUFBSUQscUJBQUosRUFBMkI7QUFDekIsY0FBTUwsUUFBUUUsV0FBV0ssUUFBWCxFQUFkOztBQUVBTiwyQkFBaUIsSUFBSVgsY0FBSixDQUFtQlUsS0FBbkIsQ0FBakI7QUFDRDtBQUNGOztBQUVELGFBQU9DLGNBQVA7QUFDRDs7OztFQTNDMEJkLFU7O0FBOEM3QnFCLE9BQU9DLE9BQVAsR0FBaUJuQixjQUFqQiIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vZXh0ZW5kZWRCTkYvcGFydC9ydWxlTmFtZScpO1xuXG5jbGFzcyBVbml0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZVBhcnQuZ2V0UnVsZU5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBpc0luY2x1ZGVkSW5SdWxlTmFtZXMocnVsZU5hbWVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5jbHVkZWRJblJ1bGVOYW1lcyA9IHJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJblJ1bGVOYW1lcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdW5pdERlZmluaXRpb24gPSBuZXcgVW5pdERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBsZXQgdW5pdERlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBkZWZpbml0aW9uLmdldFBhcnRzTGVuZ3RoKCk7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydFJ1bGVOYW1lUGFydCA9IGRlZmluaXRpb24uaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQoKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0UGFydFJ1bGVOYW1lUGFydCkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICB1bml0RGVmaW5pdGlvbiA9IG5ldyBVbml0RGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXREZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pdERlZmluaXRpb247XG4iXX0=