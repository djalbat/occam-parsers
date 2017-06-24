'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    OneOrMorePartsNode = require('../node/oneOrMoreParts'),
    OneOrMorePartsDefinition = require('../definition/oneOrMoreParts');

var OneOrMorePartsRule = function (_Rule) {
  _inherits(OneOrMorePartsRule, _Rule);

  function OneOrMorePartsRule() {
    _classCallCheck(this, OneOrMorePartsRule);

    var oneOrMorePartsDefinition = new OneOrMorePartsDefinition(),
        name = 'oneOrMoreParts',
        oneOrMoreParts = [oneOrMorePartsDefinition],
        Node = OneOrMorePartsNode;

    return _possibleConstructorReturn(this, (OneOrMorePartsRule.__proto__ || Object.getPrototypeOf(OneOrMorePartsRule)).call(this, name, oneOrMoreParts, Node));
  }

  return OneOrMorePartsRule;
}(Rule);

module.exports = OneOrMorePartsRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ydWxlL29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiT25lT3JNb3JlUGFydHNOb2RlIiwiT25lT3JNb3JlUGFydHNEZWZpbml0aW9uIiwiT25lT3JNb3JlUGFydHNSdWxlIiwib25lT3JNb3JlUGFydHNEZWZpbml0aW9uIiwibmFtZSIsIm9uZU9yTW9yZVBhcnRzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUUsMkJBQTJCRixRQUFRLDhCQUFSLENBRmpDOztJQUlNRyxrQjs7O0FBQ0osZ0NBQWM7QUFBQTs7QUFDWixRQUFNQywyQkFBMkIsSUFBSUYsd0JBQUosRUFBakM7QUFBQSxRQUNNRyxPQUFPLGdCQURiO0FBQUEsUUFFTUMsaUJBQWlCLENBQ2ZGLHdCQURlLENBRnZCO0FBQUEsUUFLTUcsT0FBT04sa0JBTGI7O0FBRFksbUlBUU5JLElBUk0sRUFRQUMsY0FSQSxFQVFnQkMsSUFSaEI7QUFTYjs7O0VBVjhCUixJOztBQWFqQ1MsT0FBT0MsT0FBUCxHQUFpQk4sa0JBQWpCIiwiZmlsZSI6Im9uZU9yTW9yZVBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgT25lT3JNb3JlUGFydHNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9vbmVPck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBPbmVPck1vcmVQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgb25lT3JNb3JlUGFydHNEZWZpbml0aW9uID0gbmV3IE9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAnb25lT3JNb3JlUGFydHMnLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gT25lT3JNb3JlUGFydHNOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgb25lT3JNb3JlUGFydHMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1J1bGU7XG4iXX0=