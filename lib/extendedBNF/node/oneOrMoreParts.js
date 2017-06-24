'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var OneOrMorePartsNode = function (_NonTerminalNode) {
  _inherits(OneOrMorePartsNode, _NonTerminalNode);

  function OneOrMorePartsNode() {
    _classCallCheck(this, OneOrMorePartsNode);

    return _possibleConstructorReturn(this, (OneOrMorePartsNode.__proto__ || Object.getPrototypeOf(OneOrMorePartsNode)).apply(this, arguments));
  }

  _createClass(OneOrMorePartsNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, OneOrMorePartsNode);
    }
  }]);

  return OneOrMorePartsNode;
}(NonTerminalNode);

module.exports = OneOrMorePartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJPbmVPck1vcmVQYXJ0c05vZGUiLCJub2RlcyIsInJ1bGVOYW1lIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4Qjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFBRSxhQUFPSixnQkFBZ0JLLG9CQUFoQixDQUFxQ0YsS0FBckMsRUFBNENDLFFBQTVDLEVBQXNERixrQkFBdEQsQ0FBUDtBQUFtRjs7OztFQURuR0YsZTs7QUFJakNNLE9BQU9DLE9BQVAsR0FBaUJMLGtCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSwgT25lT3JNb3JlUGFydHNOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzTm9kZTtcbiJdfQ==