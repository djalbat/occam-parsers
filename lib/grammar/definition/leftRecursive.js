'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../extendedBNF/definition');

var LeftRecursiveDefinition = function (_Definition) {
  _inherits(LeftRecursiveDefinition, _Definition);

  function LeftRecursiveDefinition() {
    _classCallCheck(this, LeftRecursiveDefinition);

    return _possibleConstructorReturn(this, (LeftRecursiveDefinition.__proto__ || Object.getPrototypeOf(LeftRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(LeftRecursiveDefinition, null, [{
    key: 'fromDefinitionAndRuleName',
    value: function fromDefinitionAndRuleName(definition, ruleName) {
      var leftRecursiveDefinition = null;

      var definitionFirstPartRuleNamePart = definition.isFirstPartRuleNamePart();

      if (definitionFirstPartRuleNamePart) {
        var definitionFirstPart = definition.getFirstPart(),
            definitionFirstRuleNamePart = definitionFirstPart,
            ///
        definitionFirstRuleNamePartRuleName = definitionFirstRuleNamePart.getRuleName();

        if (definitionFirstRuleNamePartRuleName === ruleName) {
          var parts = definition.getParts();

          leftRecursiveDefinition = new LeftRecursiveDefinition(parts);
        }
      }

      return leftRecursiveDefinition;
    }
  }]);

  return LeftRecursiveDefinition;
}(Definition);

module.exports = LeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0IiwiaXNGaXJzdFBhcnRSdWxlTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0UnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsOEJBQVIsQ0FBbkI7O0lBRU1DLHVCOzs7Ozs7Ozs7Ozs4Q0FDNkJDLFUsRUFBWUMsUSxFQUFVO0FBQ3JELFVBQUlDLDBCQUEwQixJQUE5Qjs7QUFFQSxVQUFNQyxrQ0FBa0NILFdBQVdJLHVCQUFYLEVBQXhDOztBQUVBLFVBQUlELCtCQUFKLEVBQXFDO0FBQ25DLFlBQU1FLHNCQUFzQkwsV0FBV00sWUFBWCxFQUE1QjtBQUFBLFlBQ01DLDhCQUE4QkYsbUJBRHBDO0FBQUEsWUFDMEQ7QUFDcERHLDhDQUFzQ0QsNEJBQTRCRSxXQUE1QixFQUY1Qzs7QUFJQSxZQUFJRCx3Q0FBd0NQLFFBQTVDLEVBQXNEO0FBQ3BELGNBQU1TLFFBQVFWLFdBQVdXLFFBQVgsRUFBZDs7QUFFQVQsb0NBQTBCLElBQUlILHVCQUFKLENBQTRCVyxLQUE1QixDQUExQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT1IsdUJBQVA7QUFDRDs7OztFQW5CbUNMLFU7O0FBc0J0Q2UsT0FBT0MsT0FBUCxHQUFpQmQsdUJBQWpCIiwiZmlsZSI6ImxlZnRSZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi8uLi9leHRlbmRlZEJORi9kZWZpbml0aW9uJyk7XG5cbmNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFJ1bGVOYW1lKGRlZmluaXRpb24sIHJ1bGVOYW1lKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gZGVmaW5pdGlvbi5pc0ZpcnN0UGFydFJ1bGVOYW1lUGFydCgpO1xuICAgIFxuICAgIGlmIChkZWZpbml0aW9uRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0ID0gZGVmaW5pdGlvbi5nZXRGaXJzdFBhcnQoKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydCA9IGRlZmluaXRpb25GaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgIGRlZmluaXRpb25GaXJzdFJ1bGVOYW1lUGFydFJ1bGVOYW1lID0gZGVmaW5pdGlvbkZpcnN0UnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCk7XG4gICAgICBcbiAgICAgIGlmIChkZWZpbml0aW9uRmlyc3RSdWxlTmFtZVBhcnRSdWxlTmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocGFydHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuIl19