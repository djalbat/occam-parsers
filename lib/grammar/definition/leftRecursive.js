'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../../common/definition'),
    ProductionNamePart = require('../../common/part/productionName');

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

      var definitionFirstPart = definition.getFirstPart();

      if (definitionFirstPart instanceof ProductionNamePart) {
        var definitionFirstProductionNamePart = definitionFirstPart,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInByb2R1Y3Rpb25OYW1lIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uRmlyc3RQYXJ0IiwiZ2V0Rmlyc3RQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0IiwiZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUiLCJnZXRQcm9kdWN0aW9uTmFtZSIsInBhcnRzIiwiZ2V0UGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEseUJBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsa0NBQVIsQ0FEM0I7O0lBR01FLHVCOzs7Ozs7Ozs7OztvREFDbUNDLFUsRUFBWUMsYyxFQUFnQjtBQUNqRSxVQUFJQywwQkFBMEIsSUFBOUI7O0FBRUEsVUFBTUMsc0JBQXNCSCxXQUFXSSxZQUFYLEVBQTVCOztBQUVBLFVBQUlELCtCQUErQkwsa0JBQW5DLEVBQXVEO0FBQ3JELFlBQU1PLG9DQUFvQ0YsbUJBQTFDO0FBQUEsWUFBZ0U7QUFDMURHLDBEQUFrREQsa0NBQWtDRSxpQkFBbEMsRUFEeEQ7O0FBR0EsWUFBSUQsb0RBQW9ETCxjQUF4RCxFQUF3RTtBQUN0RSxjQUFNTyxRQUFRUixXQUFXUyxRQUFYLEVBQWQ7O0FBRUFQLG9DQUEwQixJQUFJSCx1QkFBSixDQUE0QlMsS0FBNUIsQ0FBMUI7QUFDRDtBQUNGOztBQUVELGFBQU9OLHVCQUFQO0FBQ0Q7Ozs7RUFsQm1DTixVOztBQXFCdENjLE9BQU9DLE9BQVAsR0FBaUJaLHVCQUFqQiIsImZpbGUiOiJsZWZ0UmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2RlZmluaXRpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbkFuZFByb2R1Y3Rpb25OYW1lKGRlZmluaXRpb24sIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBkZWZpbml0aW9uRmlyc3RQYXJ0ID0gZGVmaW5pdGlvbi5nZXRGaXJzdFBhcnQoKTtcbiAgICBcbiAgICBpZiAoZGVmaW5pdGlvbkZpcnN0UGFydCBpbnN0YW5jZW9mIFByb2R1Y3Rpb25OYW1lUGFydCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gZGVmaW5pdGlvbkZpcnN0UGFydCwgIC8vL1xuICAgICAgICAgICAgZGVmaW5pdGlvbkZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0UHJvZHVjdGlvbk5hbWUgPSBkZWZpbml0aW9uRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICAgIFxuICAgICAgaWYgKGRlZmluaXRpb25GaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID09PSBwcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=