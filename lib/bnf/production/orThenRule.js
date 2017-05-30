'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    OrThenRuleRule = require('../rule/orThenRule'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var OrThenRuleProduction = function (_Production) {
  _inherits(OrThenRuleProduction, _Production);

  function OrThenRuleProduction() {
    _classCallCheck(this, OrThenRuleProduction);

    var orThenRuleRule = new OrThenRuleRule(),
        name = 'rules',
        rules = [orThenRuleRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (OrThenRuleProduction.__proto__ || Object.getPrototypeOf(OrThenRuleProduction)).call(this, name, rules, Node));
  }

  return OrThenRuleProduction;
}(Production);

module.exports = OrThenRuleProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9vclRoZW5SdWxlLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiT3JUaGVuUnVsZVJ1bGUiLCJOb25UZXJtaW5hbE5vZGUiLCJPclRoZW5SdWxlUHJvZHVjdGlvbiIsIm9yVGhlblJ1bGVSdWxlIiwibmFtZSIsInJ1bGVzIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsb0I7OztBQUNKLGtDQUFjO0FBQUE7O0FBQ1osUUFBTUMsaUJBQWlCLElBQUlILGNBQUosRUFBdkI7QUFBQSxRQUNNSSxPQUFPLE9BRGI7QUFBQSxRQUVNQyxRQUFRLENBQ05GLGNBRE0sQ0FGZDtBQUFBLFFBS01HLE9BQU9MLGVBTGI7O0FBRFksdUlBUU5HLElBUk0sRUFRQUMsS0FSQSxFQVFPQyxJQVJQO0FBU2I7OztFQVZnQ1IsVTs7QUFhbkNTLE9BQU9DLE9BQVAsR0FBaUJOLG9CQUFqQiIsImZpbGUiOiJvclRoZW5SdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgT3JUaGVuUnVsZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL29yVGhlblJ1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIE9yVGhlblJ1bGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG9yVGhlblJ1bGVSdWxlID0gbmV3IE9yVGhlblJ1bGVSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdydWxlcycsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBvclRoZW5SdWxlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9yVGhlblJ1bGVQcm9kdWN0aW9uO1xuIl19