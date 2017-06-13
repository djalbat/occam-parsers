'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    OptionalPartPart = require('../part/optionalPart'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    ProductionNamePart = require('../../common/part/productionName');

var DefinitionDefinition = function (_Definition) {
  _inherits(DefinitionDefinition, _Definition);

  function DefinitionDefinition() {
    _classCallCheck(this, DefinitionDefinition);

    var noWhitespace = false,
        partProductionName = 'part',
        verticalSpaceProductionName = 'verticalSpace',
        partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
        verticalSpaceProductionNamePart = new ProductionNamePart(verticalSpaceProductionName, noWhitespace),
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(partProductionNamePart, noWhitespace),
        optionalVerticalSpaceProductionNamePartPart = new OptionalPartPart(verticalSpaceProductionNamePart, noWhitespace),
        parts = [oneOrMorePartProductionNamePartsPart, optionalVerticalSpaceProductionNamePartPart];

    return _possibleConstructorReturn(this, (DefinitionDefinition.__proto__ || Object.getPrototypeOf(DefinitionDefinition)).call(this, parts));
  }

  return DefinitionDefinition;
}(Definition);

module.exports = DefinitionDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvZGVmaW5pdGlvbi9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiT3B0aW9uYWxQYXJ0UGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIlByb2R1Y3Rpb25OYW1lUGFydCIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwibm9XaGl0ZXNwYWNlIiwicGFydFByb2R1Y3Rpb25OYW1lIiwidmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lIiwicGFydFByb2R1Y3Rpb25OYW1lUGFydCIsInZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnQiLCJvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQiLCJvcHRpb25hbFZlcnRpY2FsU3BhY2VQcm9kdWN0aW9uTmFtZVBhcnRQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxtQkFBbUJELFFBQVEsc0JBQVIsQ0FEekI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7QUFBQSxJQUdNRyxxQkFBcUJILFFBQVEsa0NBQVIsQ0FIM0I7O0lBS01JLG9COzs7QUFDSixrQ0FBYztBQUFBOztBQUNaLFFBQU1DLGVBQWUsS0FBckI7QUFBQSxRQUNNQyxxQkFBcUIsTUFEM0I7QUFBQSxRQUVNQyw4QkFBOEIsZUFGcEM7QUFBQSxRQUdNQyx5QkFBeUIsSUFBSUwsa0JBQUosQ0FBdUJHLGtCQUF2QixFQUEyQ0QsWUFBM0MsQ0FIL0I7QUFBQSxRQUlNSSxrQ0FBa0MsSUFBSU4sa0JBQUosQ0FBdUJJLDJCQUF2QixFQUFvREYsWUFBcEQsQ0FKeEM7QUFBQSxRQUtNSyx1Q0FBdUMsSUFBSVIsa0JBQUosQ0FBdUJNLHNCQUF2QixFQUErQ0gsWUFBL0MsQ0FMN0M7QUFBQSxRQU1NTSw4Q0FBOEMsSUFBSVYsZ0JBQUosQ0FBcUJRLCtCQUFyQixFQUFzREosWUFBdEQsQ0FOcEQ7QUFBQSxRQU9NTyxRQUFRLENBQ05GLG9DQURNLEVBRU5DLDJDQUZNLENBUGQ7O0FBRFksdUlBYU5DLEtBYk07QUFjYjs7O0VBZmdDYixVOztBQWtCbkNjLE9BQU9DLE9BQVAsR0FBaUJWLG9CQUFqQiIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBEZWZpbml0aW9uRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgdmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lID0gJ3ZlcnRpY2FsU3BhY2UnLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHBhcnRQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICB2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydCh2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgb25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIG9wdGlvbmFsVmVydGljYWxTcGFjZVByb2R1Y3Rpb25OYW1lUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydCh2ZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0LFxuICAgICAgICAgICAgb3B0aW9uYWxWZXJ0aWNhbFNwYWNlUHJvZHVjdGlvbk5hbWVQYXJ0UGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25EZWZpbml0aW9uO1xuIl19