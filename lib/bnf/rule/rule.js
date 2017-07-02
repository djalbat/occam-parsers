'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RuleNode = require('../node/rule'),
    RuleDefinition = require('../definition/rule');

var RuleRule = function (_Rule) {
  _inherits(RuleRule, _Rule);

  function RuleRule() {
    _classCallCheck(this, RuleRule);

    var ruleDefinition = new RuleDefinition(),
        name = 'rule',
        definitions = [ruleDefinition],
        Node = RuleNode;

    return _possibleConstructorReturn(this, (RuleRule.__proto__ || Object.getPrototypeOf(RuleRule)).call(this, name, definitions, Node));
  }

  return RuleRule;
}(Rule);

module.exports = RuleRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9ydWxlLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJyZXF1aXJlIiwiUnVsZU5vZGUiLCJSdWxlRGVmaW5pdGlvbiIsIlJ1bGVSdWxlIiwicnVsZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxXQUFXRCxRQUFRLGNBQVIsQ0FEakI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSU1HLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQ1osUUFBTUMsaUJBQWlCLElBQUlGLGNBQUosRUFBdkI7QUFBQSxRQUNNRyxPQUFPLE1BRGI7QUFBQSxRQUVNQyxjQUFjLENBQ1pGLGNBRFksQ0FGcEI7QUFBQSxRQUtNRyxPQUFPTixRQUxiOztBQURZLCtHQVFOSSxJQVJNLEVBUUFDLFdBUkEsRUFRYUMsSUFSYjtBQVNiOzs7RUFWb0JSLEk7O0FBYXZCUyxPQUFPQyxPQUFQLEdBQWlCTixRQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUnVsZU5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3J1bGUnKSxcbiAgICAgIFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlJyk7XG5cbmNsYXNzIFJ1bGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVEZWZpbml0aW9uID0gbmV3IFJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdydWxlJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUnVsZU5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVJ1bGU7XG4iXX0=