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
    key: 'fromDefinitionAndProductionName',
    value: function fromDefinitionAndProductionName(definition, productionName) {
      var leftRecursiveDefinition = null;

      var definitionFirstPartProductionNamePart = definition.isFirstPartProductionNamePart();

      if (definitionFirstPartProductionNamePart) {
        var definitionFirstPart = definition.getFirstPart(),
            definitionFirstProductionNamePart = definitionFirstPart,
            ///
        definitionFirstProductionNamePartProductionName = definitionFirstProductionNamePart.getProductionName();

        if (definitionFirstProductionNamePartProductionName === productionName) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInByb2R1Y3Rpb25OYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiaXNGaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJkZWZpbml0aW9uRmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsOEJBQVIsQ0FBbkI7O0lBRU1DLHVCOzs7Ozs7Ozs7OztvREFDbUNDLFUsRUFBWUMsYyxFQUFnQjtBQUNqRSxVQUFJQywwQkFBMEIsSUFBOUI7O0FBRUEsVUFBTUMsd0NBQXdDSCxXQUFXSSw2QkFBWCxFQUE5Qzs7QUFFQSxVQUFJRCxxQ0FBSixFQUEyQztBQUN6QyxZQUFNRSxzQkFBc0JMLFdBQVdNLFlBQVgsRUFBNUI7QUFBQSxZQUNNQyxvQ0FBb0NGLG1CQUQxQztBQUFBLFlBQ2dFO0FBQzFERywwREFBa0RELGtDQUFrQ0UsaUJBQWxDLEVBRnhEOztBQUlBLFlBQUlELG9EQUFvRFAsY0FBeEQsRUFBd0U7QUFDdEUsY0FBTVMsUUFBUVYsV0FBV1csUUFBWCxFQUFkOztBQUVBVCxvQ0FBMEIsSUFBSUgsdUJBQUosQ0FBNEJXLEtBQTVCLENBQTFCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPUix1QkFBUDtBQUNEOzs7O0VBbkJtQ0wsVTs7QUFzQnRDZSxPQUFPQyxPQUFQLEdBQWlCZCx1QkFBakIiLCJmaWxlIjoibGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2V4dGVuZGVkQk5GL2RlZmluaXRpb24nKTtcblxuY2xhc3MgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUHJvZHVjdGlvbk5hbWUoZGVmaW5pdGlvbiwgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGRlZmluaXRpb25GaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQgPSBkZWZpbml0aW9uLmlzRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7XG4gICAgXG4gICAgaWYgKGRlZmluaXRpb25GaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25GaXJzdFBhcnQgPSBkZWZpbml0aW9uLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gZGVmaW5pdGlvbkZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICAgIFxuICAgICAgaWYgKGRlZmluaXRpb25GaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID09PSBwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=